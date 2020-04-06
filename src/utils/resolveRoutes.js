// se encarga de obtener la ruta y manda a distintos archivos, si no encuntra manda al error 404
const resolveRoutes = (route) => {
  //obtener cierto ip, no mayor a 3 caracteres,
  if (route.length <= 3) {
    let validRoute = route === "/" ? route : "/:id";
    return validRoute;
  } // si no entra retornamos
  return `/${route}`; // /about
};

export default resolveRoutes;
