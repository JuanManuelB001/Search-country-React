import "../styles/loading.css";

export function Loading() {
  return (
    <div className="loading-container">
      <div className="world"></div>
      <p>
        <span className="loading">cargando...</span>
      </p>
    </div>
  );
}
