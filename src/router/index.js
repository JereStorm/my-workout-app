import { createRouter, createWebHashHistory } from "vue-router";
import { auth } from "@/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

import LoginPage from "@/components/pages/auth/LoginPage.vue";
import RegisterPage from "@/components/pages/auth/RegisterPage.vue";
import UnregistredPage from "@/components/pages/auth/UnregistredPage.vue";
import DashboardPage from "@/components/pages/dashboard/DashboardPage.vue";
import ProfilePage from "@/components/pages/profile/ProfilePage.vue";
import MyWorkoutsPage from "@/components/pages/workouts/MyWorkoutsPage.vue";
import FormRoutinePage from "@/components/pages/workouts/FormRoutinePage.vue";
import RegisterWorkoutPage from "@/components/pages/workouts/RegisterWorkoutPage.vue";
import DoneWorkoutsPage from "@/components/pages/workouts/DoneWorkoutsPage.vue";
import DetailWorkoutPage from "@/components/pages/workouts/DetailWorkoutPage.vue";
import SelectRoutinePage from "@/components/pages/workouts/SelectRoutinePage.vue";
import RoutineDetailPage from "@/components/pages/workouts/RoutineDetailPage.vue";
import RoutineLibrary from "@/components/workout/RoutineLibrary.vue";

const routes = [
    { path: '/register', name: 'Register', component: RegisterPage },
    { path: '/login', name: 'Login', component: LoginPage },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardPage,
        children: [
            { path: '', name: 'DashboardRedirect', redirect: { name: 'MyWorkouts' } },
            { path: 'my-workouts', name: 'MyWorkouts', component: RoutineLibrary },
            { path: 'my-workouts/detail', name: 'DetailRoutine', component: RoutineDetailPage },
            { path: 'register-workout', name: 'RegisterWorkout', component: RegisterWorkoutPage },
            { path: 'done-workouts', name: 'DoneWorkouts', component: DoneWorkoutsPage },
            { path: 'done-workouts/detail', name: 'DetailWorkout', component: DetailWorkoutPage },
            { path: 'my-profile', name: 'MyProfile', component: ProfilePage },
            { path: 'form-routine', name: 'FormRoutine', component: FormRoutinePage },
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
