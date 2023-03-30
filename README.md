# Burger Queen (API Client)

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Tecnologías](#2-tecnologías)
* [3. Historias de usuario](#3-historias-de-usuario)

***

## 1. Resumen del proyecto

[Deploy](https://crepas-eiffel.netlify.app) manual de la app en _netlify_ 

Web App creada para pequeño negocio de crepas que necesita un
sistema a través del cual puedan tomar pedidos usando una _tablet_, y enviarlos a la cocina para que se preparen ordenada y eficientemente.

Su uso principal es en iPad mini, y los roles de las personas que la utilizan son:

- Administradoras
- Cocineras
- Meseras

## 2. Tecnologías

Desarrollada con apoyo de las siguientes tecnologías:

- Figma
- Adobe Illustrator
- Visual Studio Code
- Vite
- JS
- React
- CSS
- html
- Git
- Github
- Github Proyects

## 2. Historias de usuario

### Definición del producto

El [_Product Owner_](https://www.youtube.com/watch?v=r2hU7MVIzxs&t=202s)
nos presenta este _backlog_ que es el resultado de su trabajo con el clientx
hasta hoy.

***

#### [Historia de usuario 1] Mesero/a debe poder ingresar al sistema, si el admin ya le ha asignado credenciales

Yo como meserx quiero poder ingresar al sistema de pedidos.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario.

* Acceder a una pantalla de login.
* Ingresar email y contraseña.
* Recibir mensajes de error comprensibles, dependiendo de cuál es el error
  con la información ingresada.
* Ingresar al sistema de pedidos si las crendenciales son correctas.

##### Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 2] Mesero/a debe poder tomar pedido de cliente/a

Yo como meserx quiero tomar el pedido de unx clientx para no depender de mi mala
memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y
que se puedan ir preparando en orden.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario

* Anotar nombre de clientx.
* Agregar productos al pedido.
* Eliminar productos.
* Ver resumen y el total de la compra.
* Enviar pedido a cocina (guardar en alguna base de datos).
* Se ve y funciona bien en una _tablet_

##### Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 3] Jefe de cocina debe ver los pedidos

Yo como jefx de cocina quiero ver los pedidos de lxs clientxs en orden y
marcar cuáles están listos para saber qué se debe cocinar y avisar a lxs meserxs
que un pedido está listo para servirlo a un clientx.

##### Criterios de aceptación

* Ver los pedidos ordenados según se van haciendo.
* Marcar los pedidos que se han preparado y están listos para servirse.
* Ver el tiempo que tomó prepara el pedido desde que llegó hasta que se
  marcó como completado.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 4] Meserx debe ver pedidos listos para servir

Yo como meserx quiero ver los pedidos que están preparados para entregarlos
rápidamente a lxs clientxs que las hicieron.

##### Criterios de aceptación

* Ver listado de pedido listos para servir.
* Marcar pedidos que han sido entregados.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).
* Los datos se deben mantener íntegros, incluso después de que un pedido ha
  terminado. Todo esto para poder tener estadísticas en el futuro.

***

#### [Historia de usuario 5] Administrador(a) de tienda debe administrar a sus trabajadorxs

Yo como administrador(a) de tienda quiero gestionar a los usuarios de
la plataforma para mantener actualizado la informacion de mis trabajadorxs.

##### Criterios de aceptación

* Ver listado de trabajadorxs.
* Agregar trabajadorxs.
* Eliminar trabajadoxs.
* Actualizar datos de trabajadorxs.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 6] Administrador(a) de tienda debe administrar a sus productos

Yo como administrador(a) de tienda quiero gestionar los productos
para mantener actualizado el menú.

##### Criterios de aceptación

* Ver listado de productos.
* Agregar productos.
* Eliminar productos.
* Actualizar datos de productos.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***
<!-- ## 3. Objetivos de aprendizaje

Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

### HTML

- [ ] **Uso de HTML semántico**

### CSS

- [ ] **Uso de selectores de CSS**
- [ ] **Modelo de caja (box model): borde, margen, padding**
- [ ] **Uso de flexbox en CSS**
- [ ] **Uso de CSS Grid Layout**
- [ ] **Uso de media queries**

### JavaScript

- [ ] **Pruebas unitarias (unit tests)**
- [ ] **Pruebas asíncronas**
- [ ] **Uso de mocks y espías**
- [ ] **Módulos de ECMAScript (ES Modules)**
- [ ] **Uso de linter (ESLINT)**
- [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

### Control de Versiones (Git y GitHub)

- [ ] **Git: Instalación y configuración**
- [ ] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**
- [ ] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**
- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**
- [ ] **GitHub: Despliegue con GitHub Pages**
- [ ] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**
- [ ] **GitHub: Organización en Github (projects | issues | labels | milestones | releases)**

### HTTP

- [ ] **Consulta o petición (request) y respuesta (response).**
- [ ] **Cabeceras (headers)**
- [ ] **Cuerpo (body)**
- [ ] **Verbos HTTP**
- [ ] **Códigos de status de HTTP**
- [ ] **Encodings y JSON**
- [ ] **CORS (Cross-Origin Resource Sharing)**

### React

- [ ] **JSX**
- [ ] **Componentes y propiedades (props)**
- [ ] **Manejo de eventos**
- [ ] **Listas y keys**
- [ ] **Renderizado condicional**
- [ ] **Elevación de estado**
- [ ] **Hooks**
- [ ] **CSS modules**
- [ ] **React Router**

### Centrado en el usuario

- [ ] **Diseñar y desarrollar un producto o servicio poniendo a las usuarias en el centro**

### Diseño de producto

- [ ] **Crear prototipos de alta fidelidad que incluyan interacciones**
- [ ] **Seguir los principios básicos de diseño visual**

### Investigación

- [ ] **Planear y ejecutar testeos de usabilidad de prototipos en distintos niveles de fidelidad** -->