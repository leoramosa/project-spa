//generamos los enlaces
const getHash = () =>
  location.hash.slide(1).toLocateLowerCase().split("/")[1] || "/"; //#/1/ //ayuda a eliminar el primer elemneto
//split elimina los slash // ['','1',/'']
export default getHash;
