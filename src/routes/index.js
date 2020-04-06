import Header from "../templates/Header";
import Home from "../page/Home";
import Character from "../page/Character";
import Error404 from "../page/Error404";

const routes = {
  "/": Home,
  "/:id": Character,
  "/contact": "Contact",
};

//para usar rutas
//vamos a usar async
const router = async () => {
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");

  header.innerHTML = await Header();
};

export default router;
