import router from "./routes";
//windos nos permite ver si esta en la aplicacion
//nuestra aplicacion cargar una vez todos los archivos
//si estan listo ejecuta el codigo recibido
window.addEventListener("load", router);
//se encarga de escuahr la aplicacion  addEventListener
window.addEventListener("hashchange", router);
