DevOps Final Practice - Electiva 2
Este proyecto es parte de la práctica final de la asignatura Electiva 2. El propósito es integrar los conocimientos adquiridos sobre CI/CD (Integración Continua/Despliegue Continuo) utilizando GitHub Actions y herramientas como Docker y GitHub Pages.

Descripción del Proyecto
El proyecto consiste en crear una página web básica con HTML, CSS y JavaScript, y aplicar un flujo de trabajo DevOps que incluya:

Pruebas Unitarias Automáticas: Verificar que la página web cumple con los requisitos establecidos.

Servidor Web: Uso de Docker para crear un servidor Nginx o Apache que sirva la página localmente.

GitHub Actions: Configuración de un flujo CI/CD para ejecutar las pruebas unitarias automáticamente al realizar actualizaciones en el repositorio.

Publicación: Despliegue de la página en GitHub Pages para que sea accesible públicamente.

Características
Página web básica que muestra un mensaje de bienvenida.

Pruebas unitarias simples para garantizar la funcionalidad y contenido de la página.

Contenedor Docker configurado para un servidor web liviano.

Workflow automatizado para pruebas y despliegue continuo en GitHub.

Tecnologías Utilizadas
HTML/CSS/JavaScript: Para la creación de la página web.

Node.js y Jest: Para las pruebas unitarias.

Docker: Para el servidor web.

GitHub Actions: Para la automatización del flujo de trabajo.

GitHub Pages: Para la publicación de la página.

Estructura del Proyecto
plaintext
DevOps_Final_Practice/
├── .github/
│   └── workflows/         # Configuración de GitHub Actions
├── docker/
│   └── Dockerfile         # Archivo para configurar Docker
├── src/
│   └── index.html         # Página web
├── tests/
│   └── unit.test.js       # Archivo de prueba unitaria
├── package.json           # Dependencias del proyecto
├── README.md              # Descripción del proyecto
Cómo Ejecutar el Proyecto
Clona este repositorio:

bash
git clone <enlace-del-repositorio>
Instala las dependencias del proyecto:

bash
npm install
Ejecuta las pruebas unitarias:

bash
npm test
Construye y ejecuta el servidor Docker:

bash
docker build -t webserver .
docker run -d -p 8080:80 webserver