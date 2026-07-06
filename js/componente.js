/*COMPONENTE 1: Modal (ventana emergente)*/
function mostrarModal(opciones) {
    const titulo = opciones.titulo || "Aviso";
    const contenido = opciones.contenido || "";
    const textoBoton = opciones.textoBoton || "Cerrar";
    const alCerrar = typeof opciones.alCerrar === "function" ? opciones.alCerrar : null;


    const fondo = document.createElement("div");
    fondo.className = "cjs-modal-fondo";

    
    const caja = document.createElement("div");
    caja.className = "cjs-modal-caja";

    const elTitulo = document.createElement("h2");
    elTitulo.className = "cjs-modal-titulo";
    elTitulo.textContent = titulo;


    const elContenido = document.createElement("div");
    elContenido.className = "cjs-modal-contenido";
    elContenido.innerHTML = contenido;

    const btnCerrar = document.createElement("button");
    btnCerrar.className = "cjs-modal-boton";
    btnCerrar.textContent = textoBoton;

    caja.appendChild(elTitulo);
    caja.appendChild(elContenido);
    caja.appendChild(btnCerrar);
    fondo.appendChild(caja);
    document.body.appendChild(fondo);

    function cerrarModal() {
        fondo.remove();
        if (alCerrar) alCerrar();
    }

    btnCerrar.addEventListener("click", cerrarModal);

    fondo.addEventListener("click", function (evento) {
        if (evento.target === fondo) cerrarModal();
    });

    document.addEventListener("keydown", function escuchaEscape(evento) {
        if (evento.key === "Escape") {
            cerrarModal();
            document.removeEventListener("keydown", escuchaEscape);
        }
    });
}


/*COMPONENTE 2: Toast (notificación flotante)*/
function mostrarToast(mensaje, tipo, duracion) {
    tipo = tipo || "info";
    duracion = duracion || 3000;

    const toast = document.createElement("div");
    toast.className = "cjs-toast cjs-toast-" + tipo;
    toast.textContent = mensaje;

    document.body.appendChild(toast);

    setTimeout(function () {
        toast.classList.add("cjs-toast-visible");
    }, 10);

    setTimeout(function () {
        toast.classList.remove("cjs-toast-visible");
        setTimeout(function () {
            toast.remove();
        }, 300);
    }, duracion);
}
