import { useLocation } from "react-router-dom";
import { CountryCoatOfArms } from "../components/CountryCoatOfArms";
import "../styles/detailsCountry.css";
import { use, useState } from "react";

export function DetailsCountry({ props }) {
  const { state } = useLocation();
  const country = state?.country;
  const [border, setBorder] = useState([]);
  const handleBorder = ()=>{
    setBorder(country.borders ?? [])
}
  const countCoats = () => {
    return !!(country.coatOfArms?.png || country.coatOfArms?.svg);
  };
  console.log(country);

  return (
    <div className="container-detail">
      
      <div className="flags">
        {
          /* ESCUDO */
          countCoats() && (
            <CountryCoatOfArms
              png={country.coatOfArms?.png}
              svg={country.coatOfArms?.svg}
              alt={`coat of amrs of ${country.name?.common}`}
            />
          )
        }
        {
          /*BANDERA */
          <CountryCoatOfArms
            png={country.flags?.png}
            svg={country.flags?.svg}
            alt={country.flags.alt}
          />
        }
      </div>
      <div className="info">
        <p>capital: {country.capital?.[0] || "no capital"}</p>
        {country.currencies &&
          Object.values(country.currencies).map((current) => (
            <p key={current.name}>
              {current.symbol} {current.name}
            </p>
          ))}
        
        {
          /* MAPA GOOGLE MAPS */
          <a href={country.maps?.googleMaps} target="_blank">Ir a Google maps</a>
        }
      </div>
    </div>
  );
}
