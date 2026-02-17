import "../styles/footer.css";
import juanImg from "../img/juan.jpg"; // 👈 mejor práctica

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-image">
          <img src={juanImg} alt="Juan" />
        </div>

        <div className="footer-info">
          <h2>Tu Nombre</h2>
          <p className="role">Frontend Developer</p>
          <p className="description">
            Apasionado por el desarrollo web, React y el diseño moderno.
          </p>

          <div className="socials">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Portfolio</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
