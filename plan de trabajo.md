# Plan de Trabajo

## General
1. Leer requerimientos minuciosamente.  
2. Plantear la problemática y pensar en la solución.  
3. Listar entidades, identificar sus atributos y diagramar la base de datos (en este caso solo es una entidad).  

## Frontend
1. Hacer un boceto de cómo me gustaría que se viera la interfaz.  
2. Decidir las librerías pertinentes para el proyecto.  
3. Inicializar proyecto Next.js.  
4. Instalar dependencias adicionales necesarias.  
5. Maquetar los componentes.  
6. Agregar funcionalidades (estados de los componentes, acciones a los botones, ocultar y mostrar componentes según interacciones, etc.).  
7. Preparar solicitudes HTTP.  

## Backend
1. Inicializar proyecto NestJS.  
2. Instalar y configurar el ORM (Prisma).  
3. Codificar el esquema de la base de datos.  
4. Generar la estructura básica (module, service, controller, DTOs, etc.).  
5. Programar la lógica de los endpoints y preparar los datos a persistir y simular los que se consultarán.  
6. Crear las dos interacciones con la base de datos:  
   - Crear registro  
   - Consultar un registro por ShortCode 

## Integración
1. Revisar configuraciones necesarias para la interacción (por ejemplo, CORS, que en este caso dejaremos de libre acceso al ser un proyecto que, por lo menos en este momento, no saldrá a Internet).  
2. Referenciar los endpoints del backend en los eventos requeridos en el frontend (generar un link acortado, consultar un link acortado).  
3. Verificar si la interacción es correcta.


> Nota: Este plan puede que no se ejecute en la secuencia especificada y los puntos puedan cambiar o mutar en el proceso como cualquier proyecto de software.
