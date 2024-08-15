# Proyecto 6: Aplicación Backend con Node.js y MongoDB

**Desarrollador:** Raúl Rosales R.  
**Bootcamp:** UDD Cohort 13  
**Fecha de entrega:** 14 de agosto

## Descripción del Proyecto

Este proyecto consiste en la creación de una aplicación backend con funciones de autenticación y autorización, utilizando tecnologías como JWT (JSON Web Tokens), Node.js, MongoDB y Mongoose. La aplicación está diseñada para permitir la gestión de usuarios y productos, implementando operaciones CRUD (Crear, Leer, Actualizar, Borrar) en los servicios desarrollados. Además, se ha documentado la API utilizando OpenAPI y Swagger.

El proyecto incluye dos modelos principales: uno para Usuarios y otro para Productos, los cuales están interrelacionados mediante MongoDB. El despliegue se ha realizado utilizando MongoDB Atlas para la base de datos y Render.com para la entrega del proyecto.

## Objetivos de Aprendizaje

Los objetivos principales de este proyecto son:

- Comprender y aplicar conceptos de autenticación y autorización en una aplicación backend.
- Practicar y afianzar el conocimiento en MongoDB y Mongoose.
- Aplicar las operaciones CRUD en la creación de servicios.
- Entender y utilizar OpenAPI y Swagger para documentar los servicios.
- Desarrollar una aplicación completa utilizando Node.js, complementada con herramientas como express.js, cors y dotenv.
- Utilizar MongoDB Atlas para el despliegue de la base de datos y Render.com para la entrega del proyecto.

## Requisitos del Proyecto

La aplicación incluye los siguientes aspectos:

- **Autenticación y Autorización:** Implementadas mediante JWT, permitiendo la creación de usuarios, inicio de sesión, verificación de tokens y actualización de perfiles.
- **Modelos:** Se han creado dos modelos principales, Usuario y Producto, interrelacionados en MongoDB utilizando Mongoose.
- **Operaciones CRUD:** Los servicios para el modelo de Producto permiten Crear, Leer, Actualizar y Borrar productos.
- **Estructura de Carpetas:** La aplicación está organizada en carpetas de controladores, modelos y rutas para un manejo claro y eficiente del código.
- **Despliegue:** La aplicación se ha desplegado en Render.com y la base de datos en MongoDB Atlas.
- **Documentación de la API:** Utilizando OpenAPI y Swagger para describir los endpoints y su funcionamiento.

## Endpoints de la API

### Endpoints para Usuario:

| **Descripción del Endpoint**          | **Método** | **Endpoint**                 | **Ejemplo de Uso**                                                                                       |
| ------------------------------------- | ---------- | ---------------------------- | --------------------------------------------------------------------------------------------------------- |
| Registrar un usuario                  | POST       | `/api/user/register`         | Como usuario, quiero registrarme en la plataforma proporcionando mi nombre, correo electrónico y una contraseña. |
| Iniciar sesión de usuario             | POST       | `/api/user/login`            | Como usuario, quiero iniciar sesión en la plataforma utilizando mi correo electrónico y contraseña para acceder a mis productos. |
| Verificar el token del usuario        | GET        | `/api/user/verifytoken`      | Como usuario, quiero que mi sesión se mantenga abierta y que la plataforma recuerde mi estado de inicio de sesión. |
| Actualizar información del usuario    | PUT        | `/api/user/update`           | Como usuario, quiero actualizar mi información de perfil, como mi nombre, correo electrónico y contraseña.  |

### Endpoints para Producto:

| **Descripción del Endpoint**          | **Método** | **Endpoint**                   | **Ejemplo de Uso**                                                                                       |
| ------------------------------------- | ---------- | ------------------------------ | --------------------------------------------------------------------------------------------------------- |
| Crear un producto                     | POST       | `/api/product/create`          | Como vendedor, quiero agregar un nuevo producto a mi catálogo proporcionando detalles como el nombre del producto, descripción y precio. |
| Leer todos los productos              | GET        | `/api/product/readall`         | Como comprador, quiero ver todos los productos disponibles en el catálogo para poder seleccionar uno para comprar. |
| Leer un producto específico           | GET        | `/api/product/readone/:id`     | Como comprador, quiero ver los detalles de un producto específico utilizando su ID para decidir si quiero comprarlo. |
| Actualizar un producto                | PUT        | `/api/product/update/:id`      | Como vendedor, quiero actualizar los detalles de un producto específico, como su nombre, descripción y precio. |
| Eliminar un producto                  | DELETE     | `/api/product/delete/:id`      | Como vendedor, quiero eliminar un producto específico de mi catálogo cuando ya no esté disponible para la venta. |


### Despliegue

La aplicación fue desplegada en [render.com](https://render.com/) y utiliza [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) para el almacenamiento de datos.

## Instrucciones para Ejecutar el Proyecto

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Artenlaclase/Proyecto-6-Aplicaci-nBakendMongoDBNodeJs.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd Proyecto-6-Aplicaci-nBakendMongoDBNodeJs
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Configura las variables de entorno en un archivo `.env`:
   ```
   PORT=3000
   MONGO_URI=tu_url_de_mongodb_atlas
   JWT_SECRET=tu_clave_secreta
   ```
5. Inicia la aplicación:
   ```bash
   npm  run start
   ```

## Contribuciones

Si deseas contribuir a este proyecto, por favor crea un fork del repositorio y envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.

---

**Raúl Rosales**  
Desarrollador Web Full Stack
