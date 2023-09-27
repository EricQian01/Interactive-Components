export default function Portfolio(props) {
  return (
    <div>
      <h2>Portfolio</h2>
      <div className="portfolio">{props.children}</div>
    </div>
  );
}
