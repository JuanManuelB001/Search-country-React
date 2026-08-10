import { useState } from "react";
import "../styles/search.css";
import { UrlData } from "../data/UrlData";
import { Loading } from "./Loading";
import { Country } from "./Country";
import { Footer } from "./Footer";
import { icons } from "../assets/icons/icons";
export function Search() {
  const [characterName, setCharacterName] = useState("");
  const [characterData, setCharacterData] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (event) => {
    //URL DATOS
    setLoading(true);
    event.preventDefault();

    const url = UrlData("/name/" + characterName)
      .then((result) => {
        setCharacterData(result);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChange = (event) => {
    setCharacterName(event.target.value);
  };

  const handleReset = (event) => {
    event.preventDefault();
    setCharacterName("");
    setCharacterData([]);
  };
  return (
    <div>
      <form className="formulario" onSubmit={handleSubmit}>
        <div className="hero-container">
          <p className="hero-subtitle">
            Explore the world Discover information about any country
          </p>
        </div>
        <label htmlFor="dato"></label>
        <div className="search-container">
          <icons.giWorld className="search-icon" />

          <div className="input-container">
            <input
              className="input-text"
              type="text"
              id="dato"
              name="dato"
              value={characterName}
              placeholder="Search Country"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="buttons">
          <button type="submit">Submit</button>
          <button type="reset" className="reset" onClick={handleReset}>
            Reset{" "}
          </button>
        </div>
      </form>
      {loading && <Loading />}
      {!loading && characterData.length > 0 && (
        <Country props={characterData} />
      )}
    </div>
  );
}
