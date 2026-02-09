import { useState } from "react";
import "../styles/countryCoatOfArms.css";
import { FaLess } from "react-icons/fa6";

export function CountryCoatOfArms({ type, png, svg, alt }) {
  const [src, setSrv] = useState(png || svg || "/no-image.png");
  const [openFlag, setOpenFlag] = useState(false);

  const handleError = () => {
    if (src === png && svg) {
      setSrv(svg);
    } else {
      setSrv("/no-image.png");
    }
  };

  return (
    <div className={`country-${type}`}>
      
      <img src={src} alt={alt} onError={handleError} />
      <p className="country-type">Country {type}</p>
    </div>
  );
}
