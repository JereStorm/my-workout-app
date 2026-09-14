# CaliStorm

> **Una app para atletas de calistenia, hecha por atletas de calistenia.**

CaliStorm es una aplicación web orientada principalmente al entrenamiento de **calistenia**, diseñada para crear, ejecutar, registrar y analizar rutinas de entrenamiento desde cualquier dispositivo.

El proyecto nace de una necesidad simple: dejar atrás las rutinas en papel o notas dispersas y disponer de un sistema accesible que permita **llevar el entrenamiento al parque, registrar lo realizado y consultar el historial posteriormente**.

Más que almacenar rutinas, CaliStorm busca convertirse progresivamente en una herramienta para **entender el propio entrenamiento y acompañar la evolución del atleta**.

---

## Demo

La aplicación se encuentra desplegada y disponible para probar online.

**CaliStorm — Live Demo**

`jerestorm.github.io/my-workout-app/`

---

## El problema

Durante el entrenamiento es habitual utilizar notas, capturas de pantalla o rutinas escritas en papel.

Esto genera problemas simples pero importantes:

* La rutina puede no estar disponible cuando se necesita.
* El registro del entrenamiento queda disperso.
* Resulta difícil recordar qué se hizo en una sesión anterior.
* Comparar dos entrenamientos requiere hacerlo manualmente.
* Ajustar volumen, intensidad y frecuencia se vuelve más difícil sin información histórica.

CaliStorm busca centralizar este proceso en una única aplicación.

---

## ¿Qué permite hacer?

Actualmente, CaliStorm permite:

* Crear una cuenta e iniciar sesión.
* Gestionar el perfil del usuario.
* Crear rutinas personalizadas.
* Editar, eliminar y clonar rutinas.
* Marcar rutinas como favoritas.
* Organizar rutinas mediante bloques y series.
* Configurar descansos entre series y bloques.
* Definir objetivos mediante repeticiones y/o tiempo.
* Agregar notas a ejercicios y bloques.
* Ejecutar una rutina y registrar el resultado de cada serie.
* Registrar repeticiones realizadas.
* Registrar tiempos realizados.
* Consultar entrenamientos finalizados.
* Visualizar el detalle de cada entrenamiento.
* Comparar objetivos planificados con resultados obtenidos.
* Consultar estadísticas básicas de entrenamiento.
* Calcular volumen acumulado, nivel y rachas de entrenamiento.

---

## Diseñada pensando en la calistenia

Aunque el modelo de datos permite representar distintos tipos de entrenamiento, CaliStorm está diseñada teniendo en cuenta las particularidades de la **calistenia**.

### Rutinas por bloques

Una rutina puede organizarse en diferentes bloques, cada uno con su propia cantidad de series y ejercicios.

```text
Rutina
│
├── Bloque 1
│   ├── Ejercicio
│   ├── Ejercicio
│   └── 3 series
│
├── Bloque 2
│   ├── Ejercicio
│   └── 2 series
│
└── Bloque 3
    ├── Ejercicio
    └── 4 series
```

Esta estructura permite representar de forma natural diferentes partes de una sesión, como calentamiento, fuerza, técnica, skills o accesorios.

### Diferentes estímulos

Los ejercicios se definen mediante atributos simples:

* Nombre
* Repeticiones
* Tiempo
* RIR
* Notas

Esto permite representar diferentes formas de trabajo, incluyendo:

* Repeticiones convencionales.
* Repeticiones con deadstop.
* Holds o ejercicios isométricos.
* Ejercicios lastrados.
* Ejercicios técnicos.
* Otros tipos de entrenamiento que puedan expresarse mediante repeticiones y/o tiempo.

El nombre del ejercicio es definido por el usuario, por lo que la aplicación no limita al atleta a una lista cerrada de movimientos.

---

## Del plan al entrenamiento

Uno de los conceptos centrales de CaliStorm es diferenciar entre **la rutina planificada y el entrenamiento realizado**.

Una rutina representa el plan:

```text
Front Lever
3 × 8 segundos
```

El entrenamiento representa lo que realmente ocurrió:

```text
Serie 1 → 8s
Serie 2 → 7s
Serie 3 → 6s
```

Esto permite conservar el contexto de cada entrenamiento y consultar posteriormente cómo fue realizada una sesión, incluso si la rutina original es modificada.

El flujo principal de la aplicación es:

```text
Crear rutina
     ↓
Seleccionar rutina
     ↓
Comenzar entrenamiento
     ↓
Registrar cada serie
     ↓
Finalizar entrenamiento
     ↓
Evaluar resultado
     ↓
Consultar historial
```

---

## Evaluación del entrenamiento

CaliStorm incorpora una capa de evaluación que permite comparar el **objetivo planificado** con el **resultado obtenido**.

Por ejemplo:

```text
Objetivo: 8 reps
Realizado: 7 reps
Cumplimiento: 87%
```

Esto permite comenzar a transformar el historial de entrenamiento en información útil para el atleta.

La evolución prevista de esta funcionalidad incluye análisis como:

* Cumplimiento de objetivos.
* Evolución de un ejercicio a lo largo del tiempo.
* Comparación entre diferentes sesiones.
* Evolución del rendimiento.
* Consistencia de entrenamiento.
* Evolución del volumen.
* Récords personales.
* Detección de tendencias de rendimiento.

---

## Historial de entrenamiento

Cada entrenamiento finalizado conserva la información correspondiente a la sesión realizada.

Esto permite consultar posteriormente:

* Qué rutina se realizó.
* Qué ejercicios formaban parte de ella.
* Cuántas series estaban planificadas.
* Cuántas repeticiones se realizaron.
* Cuánto tiempo se mantuvieron determinados ejercicios.
* Notas asociadas.
* Resultado de cada serie.

El objetivo es que el historial no sea solamente un registro, sino la base para analizar la evolución del atleta.

---

## Visión futura

CaliStorm se encuentra en desarrollo activo y actualmente funciona como una base sobre la cual construir funcionalidades de seguimiento y análisis más avanzadas.

### Biblioteca personal de ejercicios

Una futura biblioteca de ejercicios permitirá reconocer ejercicios utilizados anteriormente y sugerirlos mediante **autocomplete** al crear una rutina.

Esto permitirá mantener una identidad consistente para cada ejercicio y habilitar posteriormente análisis específicos.

```text
Front Lever
     │
     ├── Rutina A
     ├── Rutina B
     ├── Entrenamiento #12
     ├── Entrenamiento #24
     └── Entrenamiento #41
             ↓
        Evolución histórica
```

### Seguimiento de progreso

El objetivo es poder responder preguntas como:

> ¿Cuánto mejoré en Front Lever?

> ¿Cómo evolucionó mi rendimiento durante los últimos meses?

> ¿Estoy aumentando el volumen de entrenamiento?

> ¿Estoy cumpliendo la frecuencia que me propuse?

### Planificación

También se plantea incorporar:

* Objetivos de entrenamiento.
* Planificación semanal.
* Rutinas asignadas a determinados días.
* Recordatorios.
* Notificaciones.
* Integración con calendarios.

### Rutinas públicas

Una futura funcionalidad permitirá compartir rutinas mediante enlaces públicos.

La idea es que un atleta pueda crear una rutina y compartirla directamente con otras personas, por ejemplo desde redes sociales, sin necesidad de que el receptor tenga una cuenta.

### Comunidad

A largo plazo, CaliStorm podría incorporar una sección de comunidad orientada a atletas de calistenia, donde sea posible:

* Compartir rutinas.
* Realizar preguntas.
* Compartir experiencias.
* Comentar publicaciones.
* Reaccionar a contenido.
* Intercambiar conocimientos entre atletas.

---

## Roadmap

### Core

* [x] Registro e inicio de sesión
* [x] Perfil de usuario
* [x] Creación de rutinas
* [x] Edición de rutinas
* [x] Eliminación de rutinas
* [x] Clonado de rutinas
* [x] Rutinas favoritas
* [x] Rutinas organizadas por bloques
* [x] Configuración de descansos
* [x] Registro de entrenamientos
* [x] Registro de repeticiones
* [x] Registro de tiempos
* [x] Historial de entrenamientos
* [x] Detalle de entrenamientos
* [x] Comparación objetivo vs. resultado
* [x] Estadísticas básicas

### En evolución

* [ ] Sistema de ejercicios reutilizables
* [ ] Autocomplete de ejercicios
* [ ] Seguimiento individual de ejercicios
* [ ] Análisis avanzado de progreso
* [ ] Métricas de consistencia
* [ ] Análisis de volumen
* [ ] Sistema de RIR
* [ ] Récords personales
* [ ] Análisis de rendimiento entre sesiones

### Futuro

* [ ] Objetivos de entrenamiento
* [ ] Planificación semanal
* [ ] Rutinas programadas
* [ ] Notificaciones
* [ ] Integración con calendario
* [ ] Rutinas públicas
* [ ] Enlaces compartibles
* [ ] Comunidad
* [ ] Comentarios y reacciones

---

# Arquitectura

La aplicación está desarrollada siguiendo una arquitectura frontend modular, separando responsabilidades entre componentes, vistas, dominio, estado global y configuración.

```text
src/
├── assets/
├── components/
├── domain/
├── router/
├── views/
├── services/
├── stores/
├── utils/
│
├── App.vue
├── firebaseConfig.js
├── main.js
└── style.css
```

### Estado global

El estado global se gestiona mediante **Pinia** y se divide principalmente en tres stores.

#### User Store

Responsable de la autenticación y sesión del usuario:

* Registro.
* Login.
* Logout.
* Escucha de cambios de sesión.
* Gestión del usuario activo.
* Carga y limpieza del perfil.
* Traducción de errores de autenticación.

#### Profile Store

Centraliza la información del perfil y los datos principales del entrenamiento:

* Perfil.
* Rutinas.
* Entrenamientos.
* Creación, edición y eliminación.
* Actualización del nickname.
* Estadísticas.
* Volumen.
* Nivel.
* Rachas.

#### Notification Store

Gestiona las notificaciones internas de la aplicación:

* Mensajes informativos.
* Mensajes de éxito.
* Mensajes de error.
* Ocultamiento automático.
* Cierre manual.

---

# Stack tecnológico

### Frontend

* **Vue 3** — Framework principal.
* **Vite** — Herramienta de desarrollo y build.
* **JavaScript** — Lenguaje principal.
* **Vue Router** — Navegación.
* **Pinia** — Gestión del estado global.
* **Bootstrap** — Sistema de estilos y componentes.
* **Bootstrap Icons** — Iconografía.

### Backend / servicios

* **Firebase Authentication** — Autenticación de usuarios.
* **Cloud Firestore** — Persistencia de datos.

### Librerías

* **SweetAlert2** — Alertas e interacciones.
* **VueDraggable** — Organización y ordenamiento mediante drag & drop.
* **timer-hook** — Gestión de temporizadores.
* **lodash-es** — Utilidades para manipulación de datos.

---

# Modelo de datos

Actualmente, Firestore utiliza principalmente tres colecciones:

```text
profiles
routines
workouts
```

### Profiles

Almacena la información correspondiente al perfil del usuario.

### Routines

Representa las rutinas creadas por los usuarios.

Conceptualmente:

```text
Routine
│
├── nombre
├── dificultad
├── favorita
├── descansos
│
└── bloques
    │
    ├── series
    ├── notas
    │
    └── ejercicios
        ├── nombre
        ├── repeticiones
        ├── tiempo
        ├── RIR
        └── notas
```

### Workouts

Representa las ejecuciones históricas de las rutinas.

Cada entrenamiento conserva la información necesaria para conocer qué estaba planificado y qué fue realizado durante esa sesión.

---

# Rutas principales

```text
/login
/register
/landing-page
/my-workouts
/my-workouts/detail
/register-workout
/done-workouts
/my-profile
/form-routine
/select-routine
/unregistred
```

---

# Instalación

## Requisitos

* Node.js
* npm
* Una cuenta/proyecto de Firebase

## Clonar el repositorio

```bash
git clone <repository-url>
cd my-workout-app
```

## Instalar dependencias

```bash
npm install
```

## Variables de entorno

La aplicación utiliza variables de entorno para la configuración de Firebase.

Crear un archivo:

```text
.env
```

con las variables correspondientes:

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

> No incluir el archivo `.env` en el repositorio.

## Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación estará disponible en el servidor local indicado por Vite.

## Build de producción

```bash
npm run build
```

---

# Objetivo del proyecto

CaliStorm es también un proyecto de aprendizaje y desarrollo profesional.

El objetivo es aplicar conocimientos de desarrollo **frontend y fullstack** mediante la construcción de una aplicación real, mientras se desarrolla una herramienta que resulte útil dentro del propio entrenamiento de calistenia.

El proyecto permite trabajar sobre problemas reales relacionados con:

* Arquitectura de aplicaciones web.
* Gestión de estado.
* Autenticación.
* Persistencia de datos.
* Diseño de interfaces.
* Experiencia de usuario.
* Modelado de información.
* Desarrollo responsive.
* Análisis de datos de entrenamiento.
* Evolución progresiva de un producto.

---

# Estado del proyecto

**En desarrollo activo.**

La aplicación cuenta actualmente con un flujo funcional para:

```text
Autenticación
     ↓
Perfil
     ↓
Rutinas
     ↓
Entrenamiento
     ↓
Registro
     ↓
Historial
     ↓
Evaluación
```

El siguiente objetivo es evolucionar desde un simple sistema de gestión y registro hacia una herramienta capaz de **interpretar el historial del atleta y ayudarlo a comprender su progreso**.

---

# Autor

**Jeremías Storm**

Fullstack Developer · Calisthenics Athlete

Proyecto personal desarrollado como parte de mi formación y crecimiento profesional, combinando desarrollo de software con mi experiencia como atleta y entrenador de calistenia.

---

## Licencia

Este proyecto se encuentra actualmente en desarrollo.

La licencia y las condiciones de uso serán definidas posteriormente.
