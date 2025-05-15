import { defineStore } from "pinia";
import { auth } from "../firebaseConfig";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { useProfileStore } from "./profile";

export const useUserStore = defineStore("user", {
    state: () => ({
        user: null,
    }),
    actions: {
        initAuthListener() {
            onAuthStateChanged(auth, async (fbUser) => {
                const profileStore = useProfileStore();
                if (fbUser) {
                    // 1. guardamos en userStore
                    this.user = { email: fbUser.email, id: fbUser.uid };

                    // 2. cargamos (o creamos) perfil en Firestore
                    await profileStore.loadProfile(fbUser.uid, fbUser.email);

                    // 3. traemos las rutinas del usuario
                    await profileStore.getRutinas();

                    console.log("Sesión iniciada. Perfil y rutinas cargados.");
                } else {
                    // al desloguear
                    this.user = null;
                    // opcional: reiniciar el store de perfil a estado inicial
                    profileStore.$reset();
                }
            });
        },

        async register(email, password) {
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                return { ok: true, message: "Registration successful!" };
            } catch (error) {
                console.error("Error en registro:", error.message);

                let message = "Unknown error. Please try again.";
                switch (error.code) {
                    case "auth/email-already-in-use":
                        message = "This email is already in use.";
                        break;
                    case "auth/invalid-email":
                        message = "Invalid email format.";
                        break;
                    case "auth/weak-password":
                        message = "Password too weak. Use at least 6 characters.";
                        break;
                    default:
                        message = "Failed to register. Please try again.";
                        break;
                }

                return { ok: false, message }; // ✅ Retorna error con mensaje
            }
        },
        async login(email, password) {
            try {
                await signInWithEmailAndPassword(auth, email, password);
                return { ok: true, message: "Login successful!" };
            } catch (error) {
                console.error("Error en login:", error.message);

                // Manejo de errores personalizados
                let message = "Unknown error. Please try again.";
                switch (error.code) {
                    case "auth/user-not-found":
                        message = "User not found. Please check your email.";
                        break;
                    case "auth/wrong-password":
                        message = "Incorrect password. Please try again.";
                        break;
                    case "auth/invalid-credential":
                        message = "Invalid credentials. Please check your input.";
                        break;
                    default:
                        message = "Authentication failed. Please try again.";
                        break;
                }

                return { ok: false, message }; //Retorna error con mensaje
            }
        },
        async logout() {
            try {
                await signOut(auth);
                this.user = null;
                this.$router.push("/")

            } catch (error) {
                console.error("Error en logout:", error.message);
            }
        },
    }
});
