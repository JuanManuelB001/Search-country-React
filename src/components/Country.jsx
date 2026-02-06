import { Link } from "react-router-dom";
import { ModalCountry } from "./ModalCountry";
import "../styles/country.css";
import { useState } from "react";

export function Country({ props }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="country">
      {props.map((country, index) => (
        <div key={index} className="country-index">
          <Link
            to={"country-details"}
            state={{ country }}
            className="link-country"
          >
            <div className="container-country">
              <button
                className="info-btn"
                onClick={e => {
                  e.preventDefault();  // Evita que el Link se active al hacer click en el botón
                  setOpen(open === index ? null : index);
                }}
              >
                !
              </button>
              <img src={country.flags.png} alt={country.name.common} />
              <p className="name-common">{country.name.common}</p>
            </div>
          </Link>

          {open === index && (
            <div className="popover">
              <ModalCountry country={country} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
