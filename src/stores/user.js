import { defineStore } from "pinia";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useProfileStore } from "./profile"; // Importa el profileStore

export const useUserStore = defineStore("user", {
    state: () => ({
        user: null,
        profileStore: null,
    }),
    actions: {
        initAuthListener() {
            onAuthStateChanged(auth, (user) => {
                const profileStore = useProfileStore(); // usa directamente el store aquí
                if (user) {
                    this.user = { email: user.email, id: user.uid };
                    // Asigna datos mínimos al profile (esto se puede ampliar después con Firestore si lo deseas)
                    profileStore.setProfile({
                        id: user.uid,
                        email: user.email,
                        nickName: user.email, // o podrías cargar desde BD si ya existe
                        routines: [],
                    });
                    console.log("Sesión iniciada. Usuario:", this.user);
                } else {
                    this.user = null;
                    profileStore.setProfile(null);
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
