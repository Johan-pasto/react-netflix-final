import '../componentes/styles/PeliculaCard.css';
const PeliculaCard = ({ peli }) => {
  return (
    <div
    >
      <img
        src={peli.imagen}
        alt={peli.titulo}
        className="card-img"
      />
      <h3 style={{ marginTop: "10px" }}>{peli.titulo}</h3>
    </div>
  );
};

export default PeliculaCard;
