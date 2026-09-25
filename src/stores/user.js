import { defineStore } from "pinia";
import { auth } from "../firebaseConfig";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { useProfileStore } from "./profile";
import { useExerciseStore } from "./exerciseStore";
import { useRoutineStore } from "./routineStore";
import { useWorkoutStore } from "./workoutStore"; // Si ya lo tienes o cuando lo modularices

export const useUserStore = defineStore("user", {
    state: () => ({
        user: null,
    }),
    actions: {
        /**
           * Inicializa un listener para el estado de autenticación del usuario de Firebase.
           * Cuando el estado cambia (inicio o cierre de sesión), actualiza el store de usuario
           * y coordina la carga de datos de los distintos módulos (perfil, ejercicios, rutinas y entrenamientos).
           */
      initAuthListener() {
            onAuthStateChanged(auth, async (fbUser) => {
                const profileStore = useProfileStore();
                const exerciseStore = useExerciseStore();
                const routineStore = useRoutineStore();
                const workoutStore = useWorkoutStore();

                if (fbUser) {
                    console.log("🔥 [Auth] Usuario detectado en Firebase:", {
                        uid: fbUser.uid,
                        email: fbUser.email
                    });

                    // 1. Guardar información básica del usuario en el store de usuario.
                    this.user = { email: fbUser.email, id: fbUser.uid };

                    // 2. Cargar en paralelo los datos independientes (perfil, ejercicios y entrenamientos)
                    await Promise.all([
                        profileStore.loadProfile(fbUser.uid, fbUser.email),
                        exerciseStore.fetchExercises(fbUser.uid),
                        workoutStore.fetchWorkouts(fbUser.uid)
                    ]);

                    console.log("📦 [Stores Independientes Cargados]:", {
                        perfil: profileStore.profile,
                        ejercicios: exerciseStore.exercises,
                        entrenamientos: workoutStore.workouts
                    });

                    // 3. Cargar e hidratar las rutinas utilizando el catálogo de ejercicios ya obtenido
                    await routineStore.fetchRoutines(fbUser.uid, exerciseStore.exercises);

                    console.log("📋 [Rutinas Hidratadas Cargadas]:", {
                        totalRutinas: routineStore.routines?.length || 0,
                        rutinas: routineStore.routines
                    });

                    console.log("✅ Sesión iniciada. Perfil, ejercicios, rutinas y entrenamientos cargados modularmente.");
                } else {
                    console.log("🚪 [Auth] Sesión cerrada. Reseteando stores...");
                    // Al cerrar sesión, limpiar el estado del usuario y resetear todos los stores
                    this.user = null;
                    profileStore.$reset();
                    exerciseStore.$reset();
                    routineStore.$reset();
                    workoutStore.$reset();
                }
            });
        },

        /**
         * Registra un nuevo usuario utilizando su email y contraseña en Firebase Auth.
         * @param {string} email - El email del nuevo usuario.
         * @param {string} password - La contraseña del nuevo usuario.
         * @returns {Promise<{ok: boolean, message: string}>} - Un objeto indicando si el registro fue exitoso y un mensaje.
         */
        async register(email, password) {
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                return { ok: true, message: "Registration successful!" };
            } catch (error) {
                console.error("Error en registro:", error.message);

                let message = this.translateFirebaseError(error.code);

                return { ok: false, message }; // ✅ Retorna error con mensaje
            }
        },

        /**
         * Inicia sesión de un usuario existente utilizando su email y contraseña en Firebase Auth.
         * @param {string} email - El email del usuario.
         * @param {string} password - La contraseña del usuario.
         * @returns {Promise<{ok: boolean, message: string}>} - Un objeto indicando si el inicio de sesión fue exitoso y un mensaje.
         */
        async login(email, password) {
            try {
                await signInWithEmailAndPassword(auth, email, password);
                return { ok: true, message: "Login successful!" };
            } catch (error) {
                console.error("Error en login:", error.message);

                // Manejo de errores personalizados
                let message = this.translateFirebaseError(error.code)

                return { ok: false, message }; //Retorna error con mensaje
            }
        },
        translateFirebaseError(code) {
            if (!code) return "Error desconocido.";
            console.log(code)
            const map = {
                "auth/email-already-in-use": "El email ya esta en uso.",
                "auth/invalid-credential": "Credenciales inválidas.",
                "auth/user-not-found": "No existe una cuenta con ese correo.",
                "auth/wrong-password": "Contraseña incorrecta.",
                "auth/too-many-requests": "Demasiados intentos fallidos.",
                "auth/network-request-failed": "Problema de conexión.",
                "auth/invalid-email": "El formato del email no es válido.",
            };

            return map[code] || "Error de autenticación. Intentá nuevamente.";
        },

        /**
         * Cierra la sesión del usuario actual en Firebase Auth y redirige a la página principal.
         */
        async logout() {
            try {
                await signOut(auth);
                this.user = null;
            } catch (error) {
                console.error("Error en logout:", error.message);
            }
        },

        /**
         * Genera un nombre de usuario por defecto a partir del email del usuario.
         * Trunca la parte izquierda del email antes del símbolo "@".
         * @param {string} email - El email del usuario.
         * @returns {string} - El nombre de usuario por defecto generado.
         */
        generateDefaultUsername(email) {
            if (!email || typeof email !== 'string') {
                return ''; // O algún otro valor por defecto o manejo de error
            }
            const atIndex = email.indexOf('@');
            if (atIndex !== -1) {
                return email.substring(0, atIndex);
            }
            return email; // Si no hay "@", devuelve el email completo (poco probable pero posible)
        },
    },
});