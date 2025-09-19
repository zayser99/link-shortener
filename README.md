# Acortador de Links

Este proyecto es una aplicación web que permite **acortar URLs largas en enlaces más simples y manejables**.  
Está compuesto por dos partes principales:  

- **Frontend (Next.js):** Proporciona la interfaz de usuario para ingresar URLs y generar su enlace corto.
- **Backend (NestJS):** Expone una API que se encarga de generar los enlaces cortos, almacenarlos en la base de datos y gestionar las redirecciones hacia la URL original.  

---

## 🎯 Objetivo

El objetivo principal de este proyecto es ofrecer una solución sencilla y práctica para gestionar enlaces.

---

## 🚀 Tecnologías utilizadas

- **Next.js** → Framework de React para el frontend.  
- **NestJS** → Framework para Node.js en el backend.  
- **Prisma** → ORM para la gestión de la base de datos.  
- **SQLite** → Base de datos ligera.

---

## 📌 Funcionalidades principales

- Generar un enlace corto a partir de una URL proporcionada.  
- Redirigir al enlace original al visitar el enlace corto.    

# Elección de un único repositorio

En esta ocasión opté por utilizar un **único repositorio** debido a que el proyecto está siendo desarrollado exclusivamente por mí y, además, es poco probable que escale en el corto plazo.  

Bajo estas condiciones, un repositorio único resulta más cómodo y eficiente, ya que me permite mantener una **trazabilidad centralizada del flujo de trabajo**: a través del historial de commits puedo revisar con facilidad cada cambio realizado y comprender la evolución completa del proyecto desde un solo lugar.  

---

## ¿Qué pasaría en un entorno real de trabajo colaborativo?

En un entorno donde participen varios desarrolladores y el sistema esté compuesto por múltiples módulos, mi elección sería distinta. En ese caso, lo más recomendable es **separar cada aplicación o servicio en repositorios independientes** (por ejemplo, backend, frontend o incluso microservicios).  

### Ventajas de separar repositorios
- **Facilita la delegación de tareas**: cada equipo o integrante puede enfocarse en una parte específica del sistema.  
- **Trazabilidad más clara por módulo**: es más sencillo revisar la evolución de un servicio o aplicación en particular.  

### Retos de separar repositorios
- **Mayor cuidado en el versionamiento**: es necesario mantener un control estricto de versiones y releases.  
- **Compatibilidad entre aplicaciones**: se debe garantizar que las distintas piezas del sistema funcionen correctamente juntas.  

---

## Conclusión

- Para proyectos personales o de pequeña escala, **un único repositorio** es más práctico y cómodo.  
- Para proyectos colaborativos y modulares, lo ideal es **separar en múltiples repositorios**, siempre y cuando se acompañe de una gestión disciplinada de versiones y releases.  
