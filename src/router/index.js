import { createRouter, createWebHashHistory } from "vue-router";
import { auth } from "@/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

import LoginPage from "@/components/pages/LoginPage.vue";
import RegisterPage from "@/components/pages/RegisterPage.vue";
import DashboardPage from "@/components/pages/DashboardPage.vue";
import UnregistredPage from "@/components/pages/UnregistredPage.vue";
import MyWorkoutsPage from "@/components/pages/MyWorkoutsPage.vue";
import ProfilePage from "@/components/pages/ProfilePage.vue";
import FormRoutine from "@/components/FormRoutine.vue";
import RegisterWorkoutPage from "@/components/pages/RegisterWorkoutPage.vue";
import DoneWorkoutsPage from "@/components/pages/DoneWorkoutsPage.vue";
import DetailWorkoutPage from "@/components/pages/DetailWorkoutPage.vue";
import SelectRoutinePage from "@/components/pages/SelectRoutinePage.vue";
import RoutineDetailPage from "@/components/pages/RoutineDetailPage.vue";

const routes = [
    { path: '/register', name: 'Register', component: RegisterPage },
    { path: '/login', name: 'Login', component: LoginPage },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardPage,
        children: [
            { path: '', name: 'DashboardRedirect', redirect: { name: 'MyWorkouts' } },
            { path: 'my-workouts', name: 'MyWorkouts', component: MyWorkoutsPage },
            { path: 'my-workouts/detail', name: 'DetailRoutine', component: RoutineDetailPage },
            { path: 'register-workout', name: 'RegisterWorkout', component: RegisterWorkoutPage },
            { path: 'done-workouts', name: 'DoneWorkouts', component: DoneWorkoutsPage },
            { path: 'done-workouts/detail', name: 'DetailWorkout', component: DetailWorkoutPage },
            { path: 'my-profile', name: 'MyProfile', component: ProfilePage },
            { path: 'form-routine', name: 'FormRoutine', component: FormRoutine },
            { path: 'select-routine', name: 'SelectRoutine', component: SelectRoutinePage },
        ],
        meta: { requiresAuth: true },
    },

    { path: '/unregistred', name: 'Unregistred', component: UnregistredPage },
    { path: '/:pathMatch(.*)*', redirect: { name: 'Unregistred' } }
];

const router = createRouter({
    history: createWebHashHistory('/my-workout-app/'),
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
    console.log("Middleware routes, to:", to.fullPath)
    if (to.path === "/login" && user) {
        return next("/dashboard"); // Evita que un usuario autenticado entre al login
    }

    if (to.matched.some((record) => record.meta.requiresAuth) && !user) {
        return next("/login"); // Si la ruta requiere autenticación y no hay usuario, redirige al login
    }

    next();
});

export default router;
