import getData from "../utils/getData";
const Home = async () => {
  //llamar api se tiene que convertinr a un async
  const characters = await getData();
  const view = `
    <div class="Characters">
      ${characters.results
        .map(
          (character) => `
      <article class="Character-item">
        <a href="#/${character.id}/">
          <img src="${character.image}" alt="${character.name}">
          <h2>${character.name}</h2> 
        </a>
      </article>
      `
        )
        .join("")}
    </div>
  `;
  // agregamos join para que no nos separe, es una forma de no seprar arreglos
  return view;
};

export default Home;
