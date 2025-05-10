import { createRouter, createWebHistory } from "vue-router";
import { auth } from "@/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

import LoginPage from "@/components/LoginPage.vue";
import RegisterPage from "@/components/RegisterPage.vue";
import DashboardPage from "@/components/DashboardPage.vue";
import UnregistredPage from "@/components/UnregistredPage.vue";
import MyWorkoutsPage from "@/components/MyWorkoutsPage.vue";
import RoutineDetail from "@/components/RoutineDetail.vue";

const routes = [
    { path: "/register", component: RegisterPage },
    { path: "/login", component: LoginPage },
    {
        path: "/dashboard",
        component: DashboardPage,
        children: [
            {
                path: "",
                redirect: "/dashboard/my-workouts", // Redirige /dashboard a /dashboard/my-workouts
            },
            {
                path: 'my-workouts',
                component: MyWorkoutsPage
            },
            {
                path: 'routine-detail',
                component: RoutineDetail
            },

        ],
        meta: { requiresAuth: true },
    },
    { path: "/unregistred", component: UnregistredPage },
    { path: "/:pathMatch(.*)*", component: UnregistredPage }, // Captura rutas no definidas
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

    if (to.path === "/login" && user) {
        return next("/dashboard"); // Evita que un usuario autenticado entre al login
    }

    if (to.matched.some((record) => record.meta.requiresAuth) && !user) {
        return next("/login"); // Si la ruta requiere autenticación y no hay usuario, redirige al login
    }

    next();
});

export default router;
