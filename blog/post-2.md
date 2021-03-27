---
title: >
  Aprendiendo JAMstack
description: >
  ### Qué es Scully? → JAMstack
  Son una serie de librerías que nos permite generar estáticos a nuestra aplicación de Angular, por lo tanto es un static side generator.

authors:
  - Alberto Rivera
date: 2021-03-25
lastmod: 2021-03-25
topics:
  - tutorials
tags:
  - JAMstack
  - scully
  - Angular
tweet: ""
format: blog
canonical_url: https://www.netlify.com/
relatedposts:
  - Deployar un proyecto JAMstack
seo:
  metatitle: >
    How to: Scully is a library to...
  metadescription: >
    Son una serie de librerías que nos permite generar estáticos a nuestra aplicación de Angular, por lo tanto es un static side generator
publish: true
---

# Angular & Scully Blog

### Qué es Scully? → JAMstack

Son una serie de librerías que nos permite generar estáticos a nuestra aplicación de Angular, por lo tanto es un static side generator.

### Primeros pasos

Creamos un proyecto Angular:

```bash
ng new jamstack-blog-app
```

Ahora el CLI de Angular nos hará una serie de preguntas, la primera el uso del modo **strict**, después si queremos **routing** y por último qué **stylesheet** queremos seleccionar:

![Angular%20&%20Scully%20Blog%200f63a5a3c98a4fceb55f867f6954346f/Captura_de_pantalla_2021-03-25_a_las_4.54.45.png](Angular%20&%20Scully%20Blog%200f63a5a3c98a4fceb55f867f6954346f/Captura_de_pantalla_2021-03-25_a_las_4.54.45.png)

Con esto ya tenemos nuestro proyecto Angular creado:

![Angular%20&%20Scully%20Blog%200f63a5a3c98a4fceb55f867f6954346f/Captura_de_pantalla_2021-03-25_a_las_4.57.25.png](Angular%20&%20Scully%20Blog%200f63a5a3c98a4fceb55f867f6954346f/Captura_de_pantalla_2021-03-25_a_las_4.57.25.png)

Ahora para continuar añadiremos Scully a nuestro proyecto, antes os dejo la docu por si queréis echar un vistazo:

[scullyio/scully](https://github.com/scullyio/scully)

En nuestra termina dentro de nuestro proyecto ejecutamos en consola:

```bash
ng add @scullyio/init
```

De tal modo como nos genera una serie de ficheros:

![Angular%20&%20Scully%20Blog%200f63a5a3c98a4fceb55f867f6954346f/Captura_de_pantalla_2021-03-25_a_las_5.03.53.png](Angular%20&%20Scully%20Blog%200f63a5a3c98a4fceb55f867f6954346f/Captura_de_pantalla_2021-03-25_a_las_5.03.53.png)

Lo primero que realmente hace scully es comprobar si nuestra versión de Angular es compatible, recuerdo que solamente funciona con versiones +8, después nos instala la librería (Install ng-lib), me agrega las dependencias (Added dependency) en mi package.json, en el app.module.ts tendremos ya la funcionalidad para poder realizar el prerender y por último nos crea un fichero de configuración (scully.jamstack-blog-app.config.ts) y actualiza el package.json.

Quiero hacer una mención especial a la modificación de los polyfills.ts:

![Angular%20&%20Scully%20Blog%200f63a5a3c98a4fceb55f867f6954346f/Captura_de_pantalla_2021-03-25_a_las_5.03.53%201.png](Angular%20&%20Scully%20Blog%200f63a5a3c98a4fceb55f867f6954346f/Captura_de_pantalla_2021-03-25_a_las_5.03.53%201.png)

Si abrimos los **polyfills** dentro de nuestro proyecto:

![Angular%20&%20Scully%20Blog%200f63a5a3c98a4fceb55f867f6954346f/Captura_de_pantalla_2021-03-25_a_las_5.15.15.png](Angular%20&%20Scully%20Blog%200f63a5a3c98a4fceb55f867f6954346f/Captura_de_pantalla_2021-03-25_a_las_5.15.15.png)

Y ahora vamos a explicar un poco en qué consiste esto, lo que añadimos con scully es el task-traking que dentro de zone.js.

> Zone.js: es lo que utiliza Angular para detectar cualquier cambio en el DOM. Angular no trabaja directamente sobre el DOM sino que lo hace sobre un VIRTUAL-DOM y los cambios que provoca en el DOM lo hace a través de zone.js

En resumen gracias a zone.js sabremos cuándo se ha renderizado la página y así copiar el contenido de la misma.

Además del polyfills.ts vamos a ver el fichero del package.json para ver que nos ha añadido:

![Angular%20&%20Scully%20Blog%200f63a5a3c98a4fceb55f867f6954346f/Captura_de_pantalla_2021-03-25_a_las_5.28.15.png](Angular%20&%20Scully%20Blog%200f63a5a3c98a4fceb55f867f6954346f/Captura_de_pantalla_2021-03-25_a_las_5.28.15.png)

El **script** **scully** es el que va a correr el static side render es el **CLI** y el **scully** **server** lo que hará será servir **dos servidores** uno con la versión **dist de Angular** y otro con la versión **dist de Angular con Scully**, es decir con el static side para poder ver que el comportamiento de nuestra aplicación es el adecuado.

En la parte de las **dependencies** hacen referencia a la librería instalada, **scully**.

Por último dentro de nuestro proyecto angular en el **app.module.ts** nos agrega el **ScullyLibModule**:

![Angular%20&%20Scully%20Blog%200f63a5a3c98a4fceb55f867f6954346f/Captura_de_pantalla_2021-03-25_a_las_5.36.27.png](Angular%20&%20Scully%20Blog%200f63a5a3c98a4fceb55f867f6954346f/Captura_de_pantalla_2021-03-25_a_las_5.36.27.png)

### Creando el Blog

Realmente para scully la creación del blog (ficheros que quieras generar) es realmente una ruta en la que recoger cualquier información, vamos con ello:

```bash
ng g @scullyio/init:blog
```

De tal modo que nos generará una serie de ficheros:

![Angular%20&%20Scully%20Blog%200f63a5a3c98a4fceb55f867f6954346f/Captura_de_pantalla_2021-03-25_a_las_5.45.20.png](Angular%20&%20Scully%20Blog%200f63a5a3c98a4fceb55f867f6954346f/Captura_de_pantalla_2021-03-25_a_las_5.45.20.png)

Realmente lo que estamos haciendo es actualizar el scully.config, y lo que estamos generando es un proyecto dentro de nuestro proyecto Angular y como veis lo que nos hizo este comando es generar un componente con su modulo y routing-module entero y un fichero de markdown:

![Angular%20&%20Scully%20Blog%200f63a5a3c98a4fceb55f867f6954346f/Captura_de_pantalla_2021-03-25_a_las_5.50.09.png](Angular%20&%20Scully%20Blog%200f63a5a3c98a4fceb55f867f6954346f/Captura_de_pantalla_2021-03-25_a_las_5.50.09.png)

Y además de esto si vamos a nuestro fichero app-routing.module.ts veremos que nos ha generado una ruta nueva cargada por lazy-load:

```tsx
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "blog",
    loadChildren: () => import("./blog/blog.module").then((m) => m.BlogModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

Hasta aquí no hay nada nuevo que no conozcamos de antes, pero si vamos al componente veremos algunas particularidades.

En el fichero blog-routing.module.ts veremos que tenemos una ruta con un slug (esto significa que cuando estemos en /loquequieras) irá al componente BlogComponent:

![Angular%20&%20Scully%20Blog%200f63a5a3c98a4fceb55f867f6954346f/Captura_de_pantalla_2021-03-25_a_las_5.59.47.png](Angular%20&%20Scully%20Blog%200f63a5a3c98a4fceb55f867f6954346f/Captura_de_pantalla_2021-03-25_a_las_5.59.47.png)

En el fichero blog.component.html es el lugar donde ocurre la magia:

```html
<h3>ScullyIo content</h3>
<hr />

<!-- This is where Scully will inject the static HTML -->
<scully-content></scully-content>
<hr />
<h4>End of content</h4>
```

la etiqueta <scully-content> (como un componente) será la que nos inyecte el contenido dentro de las mismas y lo hace a través del **contentFolder** del fichero scully.jamstack-blog-app.config :

```tsx
import { ScullyConfig } from "@scullyio/scully";
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "jamstack-blog-app",
  outDir: "./dist/static",
  routes: {
    "/blog/:slug": {
      type: "contentFolder",
      slug: {
        folder: "./blog",
      },
    },
  },
};
```

Lo que realmente hace es renderizar el contenido de los ficheros guardados en ./blog que se encuentren bajo el path /blog/:slug → es decir que todos los archivos que se encuentren en ./blog será el slug.

Si nos vamos a la carpeta blog generada con anterioridad:

![Angular%20&%20Scully%20Blog%200f63a5a3c98a4fceb55f867f6954346f/Captura_de_pantalla_2021-03-25_a_las_6.09.34.png](Angular%20&%20Scully%20Blog%200f63a5a3c98a4fceb55f867f6954346f/Captura_de_pantalla_2021-03-25_a_las_6.09.34.png)

y si abrimos el fichero [2021-03-25-blog.md](http://2021-03-25-blog.md) vemos que lo primero es metadata y luego tenemos el contenido:

```markdown
---
title: 2021-03-25-blog
description: blog description
published: false
---

# 2021-03-25-blog
```

Vamos a crear un fichero .md nuevo dentro que se llame myfirstpost.md, con el siguiente contenido:

````markdown
---
title: My first post
author: Alberto Rivera
publish date: 2021-03-25
hour: 06:15
slug: template strings js
slugs:
  - "page-1"
  - "a slug"
description: This is my first post about Template Strings Js
---

# Templates strings

Fichero index.html:

```jsx
<!DOCTYPE html>
  <head>
		<meta charset="utf-8">
		<title>Es es mi blog</title>
		<link rel="stylesheet" type="text/css" href="fichero.css">
    <!-- En la proxima línea vamos a cargar un fichero con código -->
		<script type="text/javascript" src="app.js"></script>
	</head>
	<body>
	   <div id="app" class="estilo1"></div>
	</body>
</html>
```
````

Fichero app.js:

```jsx
let name = "Alberto";
let job = "Frontend Developer";

// old school
console.log("my name is " + name + "and my job is " + job);
// new wave
console.log("my name is ${name} and my job is ${job}");
// Add to HTML
const contentApp = document.querySelector("#app");
let html = `<ul>
	<li>name: ${name}</li>
	<li>job: ${job}</li>
</ul>`;
contentApp.innerHTML = html;
```

````

### Descubriendo Scully

Ha llegado el momento de hacer build de nuestro proyecto y correrlo con scully, para ello ejecutamos:

```bash
ng build
npm run scully
npm run scully:serve
````

Nos dirá que esta corriendo en [http://localhost:1668](http://localhost:1668/blog/a_slug):

![Angular%20&%20Scully%20Blog%200f63a5a3c98a4fceb55f867f6954346f/Captura_de_pantalla_2021-03-25_a_las_6.29.04.png](Angular%20&%20Scully%20Blog%200f63a5a3c98a4fceb55f867f6954346f/Captura_de_pantalla_2021-03-25_a_las_6.29.04.png)

En nuestra home no tenemos definido nada pero si vamos a alguna de las routes generadas como:

- /blog/template_strings_js
- /blog/page-1
- /blog/a_slug

Veremos el siguiente contenido:

![Angular%20&%20Scully%20Blog%200f63a5a3c98a4fceb55f867f6954346f/Captura_de_pantalla_2021-03-25_a_las_6.33.04.png](Angular%20&%20Scully%20Blog%200f63a5a3c98a4fceb55f867f6954346f/Captura_de_pantalla_2021-03-25_a_las_6.33.04.png)

Ahora vamos a analizar lo que esta pasando, si vamos a chrome devtools veremos que:

![Angular%20&%20Scully%20Blog%200f63a5a3c98a4fceb55f867f6954346f/Captura_de_pantalla_2021-03-25_a_las_6.50.29.png](Angular%20&%20Scully%20Blog%200f63a5a3c98a4fceb55f867f6954346f/Captura_de_pantalla_2021-03-25_a_las_6.50.29.png)

y si pasamos el Js a enabled (command p) Disable Javascript:

![Angular%20&%20Scully%20Blog%200f63a5a3c98a4fceb55f867f6954346f/Captura_de_pantalla_2021-03-25_a_las_6.52.48.png](Angular%20&%20Scully%20Blog%200f63a5a3c98a4fceb55f867f6954346f/Captura_de_pantalla_2021-03-25_a_las_6.52.48.png)

Nuestra apliacación pasa a 4.7kb:

![Angular%20&%20Scully%20Blog%200f63a5a3c98a4fceb55f867f6954346f/Captura_de_pantalla_2021-03-25_a_las_6.54.10.png](Angular%20&%20Scully%20Blog%200f63a5a3c98a4fceb55f867f6954346f/Captura_de_pantalla_2021-03-25_a_las_6.54.10.png)

### Profundizando en scully

Ahora vamos a generar varios post y el about de nuestra aplicación para ver todo el potencial de scully

```bash
ng g @scullyio/init:post
```

y nos preguntará el nombre y la carpeta en la que queremos alojar el fichero:

![Angular%20&%20Scully%20Blog%200f63a5a3c98a4fceb55f867f6954346f/Captura_de_pantalla_2021-03-25_a_las_6.58.49.png](Angular%20&%20Scully%20Blog%200f63a5a3c98a4fceb55f867f6954346f/Captura_de_pantalla_2021-03-25_a_las_6.58.49.png)

de tal modo que me genera un fichero .md dentro de la carpeta /blog:

![Angular%20&%20Scully%20Blog%200f63a5a3c98a4fceb55f867f6954346f/Captura_de_pantalla_2021-03-25_a_las_6.59.13.png](Angular%20&%20Scully%20Blog%200f63a5a3c98a4fceb55f867f6954346f/Captura_de_pantalla_2021-03-25_a_las_6.59.13.png)

y modificamos el fichero con el siguiente contenido:

```markdown
---
title: secondpost
author: Alberto Rivera
publish date: 2021-03-25
hour: 06:15
slugs:
  - "page-2"
  - "secondpost"
description: This is my first post about Template Strings Js
---

# secondpost

Hola Mundo desde mi segundo post
```

volvemos a lanzar:

```bash
ng build
npm run scully
npm run scully:serve
```

y vamos a [http://localhost:1864/blog/secondpost](http://localhost:1864/blog/secondpost)

![Angular%20&%20Scully%20Blog%200f63a5a3c98a4fceb55f867f6954346f/Captura_de_pantalla_2021-03-25_a_las_7.07.23.png](Angular%20&%20Scully%20Blog%200f63a5a3c98a4fceb55f867f6954346f/Captura_de_pantalla_2021-03-25_a_las_7.07.23.png)

Una vez tenemos claro como generar contenido dentro de la carpeta blog y renderizarlo vamos a ir un pasito más allá y vamos a generar contenido para una page de nuestra aplicación por ejemplo el **about**

```bash
ng g @scullyio/init:markdown
```

y esto nos hará una serie de preguntas para configurar el modulo y la carpeta contenedora...

![Angular%20&%20Scully%20Blog%200f63a5a3c98a4fceb55f867f6954346f/Captura_de_pantalla_2021-03-25_a_las_7.16.54.png](Angular%20&%20Scully%20Blog%200f63a5a3c98a4fceb55f867f6954346f/Captura_de_pantalla_2021-03-25_a_las_7.16.54.png)

modificamos el .md generado en la carpeta about :

```markdown
---
title: 2021-03-25-about
author: Alberto Rivera
publish date: 2021-03-25
hour: 06:15
slugs:
  - "about-content"
description: This is my about
---

# 2021-03-25-about
```

Y relanzamos !
