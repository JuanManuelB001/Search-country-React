import { Link } from "react-router-dom";
import "../styles/country.css"
export function Country({ props }) {
  return (
    <div className="country">
      {props.map((country, index) => (
        <Link key={index} to={"country-details"} state={{country}} >
          <div >
            <img src={country.flags.png} alt={country.name.common} />
            <p>{country.name.common}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
