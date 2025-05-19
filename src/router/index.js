import { createRouter, createWebHistory } from "vue-router";
import { auth } from "@/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

import LoginPage from "@/components/LoginPage.vue";
import RegisterPage from "@/components/RegisterPage.vue";
import DashboardPage from "@/components/DashboardPage.vue";
import UnregistredPage from "@/components/UnregistredPage.vue";
import MyWorkoutsPage from "@/components/MyWorkoutsPage.vue";
import ProfilePage from "@/components/ProfilePage.vue";
import FormRoutine from "@/components/FormRoutine.vue";

const routes = [
    { path: "/my-workout-app/register", component: RegisterPage },
    { path: "/my-workout-app/login", component: LoginPage },
    {
        path: "/my-workout-app/dashboard",
        component: DashboardPage,
        children: [
            {
                path: "",
                redirect: "my-workout-app/dashboard/my-workouts", // Redirige /dashboard a /dashboard/my-workouts
            },
            {
                path: "/my-workout-app/dashboard/my-workouts",
                component: MyWorkoutsPage
            },
            {
                path: "/my-workout-app/dashboard/my-profile",
                component: ProfilePage
            },
            {
                path: "/my-workout-app/dashboard/form-routine",
                component: FormRoutine
            },

        ],
        meta: { requiresAuth: true },
    },

    { path: "/my-workout-app/unregistred", component: UnregistredPage },
    { path: "/:pathMatch(.*)*", redirect: "my-workout-app/unregistred" }, // Captura rutas no definidas
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Variable para almacenar el usuario autenticado globalmente
let currentUser = null;

// Función para esperar a que Firebase cargue el usuario
function getAuthUser() {
    return new Promise((resolve) => {
        if (currentUser !== null) {
            resolve(currentUser);
        } else {
            onAuthStateChanged(auth, (user) => {
                currentUser = user;
                resolve(user);
            });
        }
    });
}

// Middleware para proteger rutas
router.beforeEach(async (to, from, next) => {
    const user = await getAuthUser(); // Espera a Firebase antes de continuar
    console.log("Middleware routes, to:", to.path)
    if (to.path === "/my-workout-app/login" && user) {
        return next("/my-workout-app/dashboard"); // Evita que un usuario autenticado entre al login
    }

    if (to.matched.some((record) => record.meta.requiresAuth) && !user) {
        return next("/my-workout-app/login"); // Si la ruta requiere autenticación y no hay usuario, redirige al login
    }

    next();
});

export default router;
