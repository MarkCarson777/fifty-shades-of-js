export function Card({ image, title, desc }) {
  return (
    <div className="card" style={{ backgroundImage: `url(${image})` }}>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
}
