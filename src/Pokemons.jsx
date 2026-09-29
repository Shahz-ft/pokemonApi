import { useState, useEffect } from "react";
import "./App.css";

const Pokemons = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    getPokemonData();
  }, []);

  const getPokemonData = async () => {
    try {
      let apiResponse = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=30",
      );

      apiResponse = await apiResponse.json();

      setPokemonData(apiResponse.results);
    } catch (error) {
      console.log(error);
      alert("API failed");
    }
  };

  console.log(pokemonData);

  return (
    <div className="app-container">
      <header className="navbar">
        <h2>✦ PokéAtlas</h2>
        <span>Explore the Pokémon World</span>
      </header>

      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">YOUR ADVENTURE STARTS HERE</span>

          <h1>
            Discover Your
            <br />
            <span>Favorite Pokémon.</span>
          </h1>

          <p>
            Explore the wonderful world of Pokémon. Find your favorites and
            discover new ones!
          </p>

          <a href="#pokemon-list" className="explore-btn">
            Explore Pokémon ↓
          </a>
        </div>

        <div className="hero-image">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
            alt="Pikachu"
          />
        </div>
      </section>

      <section className="pokemon-section" id="pokemon-list">
        <div className="section-heading">
          <div>
            <span className="section-tag">THE COLLECTION</span>
            <h2>Explore Pokémon</h2>
          </div>

          <p>Discover your next favorite!</p>
        </div>

        <div className="pokemon-list">
          {pokemonData.map((eachPokemon, index) => (
            <div className="pokemon-card">
              <div className="pokemon-image">
                <span className="pokemon-number">0{String(index + 1)}</span>

                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`}
                  alt={eachPokemon.name}
                />
              </div>

              <div className="pokemon-info">
                <span className="pokemon-label">POKÉMON</span>

                <h3>{eachPokemon.name}</h3>

                <p>Discover this Pokémon and add it to your collection.</p>

                <div className="pokemon-bottom">
                  <span>#{index + 1}</span>
                  <span className="view-btn">Explore ↗</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <h3>✦ PokéAtlas</h3>
        <p>Made with 💜 for Pokémon lovers.</p>
      </footer>
    </div>
  );
};

export default Pokemons;
