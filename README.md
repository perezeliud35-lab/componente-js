# ACTIVIDAD 3 - componente.js

Perez Cruz Haniel Eliud 

Componente visual reutilizable hecho en JavaScript. Incluye una ventana modal y una notificación tipo toast, las dos generadas dinámicamente con JS, para no tener que escribir el HTML del modal o del toast a mano cada vez que se necesiten.

## Qué problema resuelve

Cuando quiero mostrarle algo al usuario (un aviso, una confirmación, un "se guardó correctamente"), normalmente tendría que escribir el HTML del modal o de la notificación cada vez, cambiar el texto a mano y volver a programar que se cierre. Con este componente solo llamo a una función, le paso el texto que quiero, y el componente se crea, se muestra y se puede cerrar solo.

## Instalación

Agrega el CSS y el JS en tu HTML:

```html
<link rel="stylesheet" href="css/componente.css">
<script src="js/componente.js"></script>
```

Con eso ya tienes disponibles `mostrarModal()` y `mostrarToast()` en cualquier parte de tu página.

## Uso

### mostrarModal(opciones)

Crea una ventana modal con el título, contenido y botón que tú le pases. Se puede llamar las veces que quieras, con distinto contenido cada vez.

```javascript
mostrarModal({
    titulo: "Acerca de componente.js",
    contenido: "Esta es una librería de componentes visuales hecha en JavaScript puro.",
    textoBoton: "Entendido"
});
```

También puede recibir HTML dentro de `contenido`, y una función `alCerrar` que se ejecuta cuando el usuario cierra el modal:

```javascript
mostrarModal({
    titulo: "¿Confirmar acción?",
    contenido: "<strong>Esta acción no se puede deshacer.</strong>",
    textoBoton: "Confirmar",
    alCerrar: function () {
        console.log("El modal se cerró.");
    }
});
```

El modal también se cierra si haces clic afuera de la caja o si presionas la tecla Escape.

### mostrarToast(mensaje, tipo, duracion)

Muestra una notificación flotante en la esquina de la pantalla que desaparece sola después de un tiempo.

```javascript
mostrarToast("Los cambios se guardaron con éxito.", "exito");
mostrarToast("Ocurrió un error, intenta de nuevo.", "error", 4000);
mostrarToast("Este es un mensaje informativo.");
```

- `mensaje` es el texto que se muestra.
- `tipo` puede ser `"exito"`, `"error"` o `"info"` (si no se manda, usa `"info"`).
- `duracion` es cuántos milisegundos dura en pantalla antes de desaparecer (por defecto 3000).

## Dónde está integrada

**index.html** tiene una demo con dos secciones:
- Tres botones que abren el mismo modal pero con contenido diferente cada uno (información, términos, confirmación), para mostrar que la función se reutiliza sin tener que copiar el HTML.
- Tres botones que muestran el toast con distinto mensaje, tipo y duración.

## Estructura

```
/componente-js
├── README.md
├── index.html
├── css/
│   └── componente.css
├── js/
│   └── componente.js
└── img/
```


## Capturas de pantalla
<img width="1105" height="688" alt="image" src="https://github.com/user-attachments/assets/fa4e6d90-316c-48a4-a0af-0275a327ca7f" />
<img width="1498" height="858" alt="image" src="https://github.com/user-attachments/assets/16a61c93-4d41-48f5-ab19-248aaf4d4479" />
<img width="1181" height="712" alt="image" src="https://github.com/user-attachments/assets/62557363-3218-4fbe-887a-650df3a81248" />



## Video
https://drive.google.com/file/d/1vnovKuMaHSghG0V-NvZgzSK2dM4Cyl5p/view?usp=sharing


## Autor

Perez Cruz Haniel Eliud 
