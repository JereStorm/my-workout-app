<template>
    <footer class="footer bg-dark text-light py-0 pt-2 w-100">
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex  text-center justify-content-center align-items-center">
                    <h5 class="fw-bold col-8 col-sm-6 p-0 my-0">Calistenia Api</h5>
                    <p class="text-light col-sm-6 col-4 mb-0">
                        © {{ new Date().getFullYear() }} Calisteniapi
                    </p>
                </div>
            </div>
            <hr class="w-80 mx-auto my-1">
            <div class="row">
                <div class="col-12 col-md-8 text-center">
                    <ul class="nav flex-column flex-md-row justify-content-center">
                        <li class="nav-item">
                            <RouterLink to="/dashboard/form-routine" class="nav-link p-1 text-light fs-sm">
                                Cargar Rutinas
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/comunidad-calistenica" class="nav-link p-1 text-light">
                                Comunidad Calistenica
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/about-us" class="nav-link p-1 text-light">
                                About Us
                            </RouterLink>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-md-4 text-center">
                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                            <a href="https://www.instagram.com/" class="nav-link text-light">
                                <i class="bi bi-instagram"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="https://www.youtube.com/" class="nav-link text-light">
                                <i class="bi bi-youtube"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="https://www.linkedin.com/" class="nav-link text-light">
                                <i class="bi bi-linkedin"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="https://github.com/" class="nav-link text-light">
                                <i class="bi bi-github"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
/* Estilos adicionales si es necesario */

.footer {
    max-height: min-content;
    z-index: 11;
}

.footer a {
    text-decoration: none;
}

.footer a:hover {
    opacity: 0.8;
}
</style>