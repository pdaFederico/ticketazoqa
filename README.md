<!-- Imagen Proyecto -->

<div align="center"><img align="center" width="400" height="400" alt="Logo Ticketazo" src="https://github.com/user-attachments/assets/229851dc-fe76-4255-bf18-ba2c5f2a7e90" /></div>


<!-- Descripción -->
## <img width="20" height="20" src="https://raw.githubusercontent.com/HijelHub/GitStrap_SVG_Icons/30c18ea7ca4c0ac2dae00a5dac593b4f49ffa7f6/icons/blue/info-circle.svg"> Descripción  

 Elaboración de pruebas E2E y automatización de funcionalidades principales/criticas del sitio web [Ticketazo](https://ticketazo.com.ar/), utilizando Cypress.  
 Practica realizada en equipo, dentro del programa **xAcademy QA** brindado por *Santex XAcademy* y la fundación *Technology With Purpose*  
 La plataforma está diseñada para brindar servicios de venta de entradas a eventos, se encuentra en etapa de desarrollo (pronto a salir a producción) y la misma fue desarollada por Facundo N Pasqua, uno de los mentores del curso.

<!-- Herramientas -->    
## <img width="20" height="20" src="https://raw.githubusercontent.com/HijelHub/GitStrap_SVG_Icons/30c18ea7ca4c0ac2dae00a5dac593b4f49ffa7f6/icons/blue/laptop.svg"> Tecnologías Utilizadas  

  * Cypress como framework para escritura y ejecución de pruebas
  * JavaScript como lenguaje base
  * Git y Github para trabajar en un repositorio clonado y controlar versiones

<!-- Instalaciones -->  
## <img width="20" height="20" src="https://raw.githubusercontent.com/HijelHub/GitStrap_SVG_Icons/30c18ea7ca4c0ac2dae00a5dac593b4f49ffa7f6/icons/blue/gear.svg"> Ambiente de Trabajo - Entorno y Configuración  

1. Prerequisitos

   * Git instalado
   * Editor de código (en este caso se utilizó VS CODE)
   * Acceso a la linea de comandos (Terminal en macOs/Linux o PowerShell en Windows)
   
2. Node.js

   * Descargar última versión desde el sitio de [Node.js](https://nodejs.org/es/download)
   * Seguir los pasos de instalación y asegurarse de tildar la opción npm (Node Package Manager)  
   * Ejecutar el comando ```node -v npm -v``` para verificar la instalación

3. Cypress

   * Desde PowerShell o la terminal integrada de VSCODE (dentro del proyecto) ejecutar el comando ```npm install cypress --save-dev```
   * Ejecutar el comando ```npx cypress -v``` para verificar la instalación

4. Mochawesome (para generar reportes)

   * Desde la terminal integrada de VS CODE (dentro del proyecto) ejecutar el comando ```npm install --save-dev mochawesome```

<!-- Reportes -->   
## <img width="20" height="20" src="https://raw.githubusercontent.com/HijelHub/GitStrap_SVG_Icons/30c18ea7ca4c0ac2dae00a5dac593b4f49ffa7f6/icons/blue/journal-text.svg"> Ejecución de pruebas y reportes  

  * Ejecutar Cypress desde la terminal con el comando ```npx cypress open```
 * Para correr las pruebas usar el comando ```npx cypress run --browser chrome``` o ```npx cypress run``` en modo headless
 * Generar reportes en HTML con el comando ```cypress run --reporter mochawesome```


<!-- Links -->
## <img width="20" height="20" src="https://raw.githubusercontent.com/HijelHub/GitStrap_SVG_Icons/30c18ea7ca4c0ac2dae00a5dac593b4f49ffa7f6/icons/blue/link.svg"> Enlaces útiles
    
 [Test Cases - Google Sheets](https://docs.google.com/spreadsheets/d/1lYWTQW9hsA1fr8guGyUuhbxoTiHl_O-22dOwadh9N1Q/edit?usp=drive_link)  
[Gestión de Test Cases en Trello](https://trello.com/b/ip4VfYdb/ticketazo-xacademy-g9)
