# 🏋️‍♂️ CaliStorm - Registro de Rutinas de Calistenia

**CaliStorm** es una aplicación web pensada para atletas de calistenia que desean planificar, registrar y gestionar sus rutinas de entrenamiento de forma simple, rápida y desde cualquier dispositivo. Fue diseñada con un enfoque minimalista, responsivo y centrado en la experiencia del usuario.

## 🚀 Demo (en desarrollo)
> Próximamente estará disponible una demo pública. Por ahora, puede ejecutarse localmente siguiendo los pasos más abajo.

---

## 🧰 Stack Tecnológico

- **Frontend:** [Vue.js 3](https://vuejs.org/) + [Pinia](https://pinia.vuejs.org/) + [Bootstrap CSS](https://getbootstrap.com/)
- **Backend as a Service:** [Firebase](https://firebase.google.com/)
  - Firebase Authentication (Email & Password)
  - Cloud Firestore (Base de datos en tiempo real)

---

## 🎯 Funcionalidades actuales

✅ **Autenticación de usuarios**  
- Registro, inicio y cierre de sesión con Firebase Auth.  
- Validaciones de errores personalizados.  

✅ **Gestión de rutinas**  
- Crear, editar, duplicar y eliminar rutinas de entrenamiento.  
- Cada rutina puede tener bloques con series, repeticiones (numéricas o por tiempo) y notas.  
- Las rutinas están vinculadas al usuario que las creó.

✅ **Favoritos**  
- Posibilidad de guardar rutinas como favoritas.

✅ **Gestión de entrenamientos**  
- Crear y eliminar entrenamientos relacionados a las rutinas.  
- Cada entrenamiento registra los bloques con susseries y repeticiones logradas.

✅ **Historial de entrenamientos** 
- Detalle completo del entrenamiento, bloques, series, reps, feedback final.
- Calculo de estadisticas del entrenamiento (Volumen total, Reps esperadas vs Reps logradas)

✅ **Estadísticas y progresos**  
- Registro de avances en Volumen de reps y sistemas de nivel internos para motivar.

✅ **Almacenamiento en la nube**  
- Las entidades se almacenan en Firestore, accesibles desde cualquier dispositivo tras iniciar sesión.

✅ **Organización inteligente**  
- Rutinas ordenadas por fecha de creación, de más recientes a más antiguas.

✅ **Sincronización en tiempo real**  
- Después de cada acción (crear, eliminar, actualizar), la app sincroniza automáticamente las rutinas del usuario.

✅ **Persistencia del perfil**  
- Guardado y recuperación del nickname del usuario en Firestore

---

## 🛠️ En desarrollo / Mejoras previstas

🌐 **Explorar rutinas públicas** 
- Agregar opción de marcar una rutina como pública y navegar rutinas creadas por otros usuarios.


🌙 **Tema oscuro / claro**  
- Selector de tema visual, con preferencia guardada en el dispositivo.

🔐 **Reglas de seguridad personalizadas**  (HECHO 14/05)
- Las reglas de Firestore aseguran que cada usuario solo vea o edite sus propias rutinas.

---

🧑‍💻 Autor
Jeremías Tomás González Storm
Desarrollador Fullstack y entrenador de calistenia
Fundador de CaliStorm
📍 Olavarría, Buenos Aires, Argentina

📄 Licencia
Este proyecto está bajo la Licencia MIT.
¡Sentite libre de utilizarlo, aprender o colaborar!
