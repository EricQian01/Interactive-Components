import "./Company.css";

export default function Company(props) {
  function closeButton(event) {
    if (event.target.tagName === "SPAN" && event.target.textContent === "x") {
      event.currentTarget.remove();
    }
  }
  return (
    <div>
      <div className="tile" onClick={closeButton}>
        <li>
          <span>x</span>
          <div className="flex">
            <img src={props.image} alt="" />
            <h2 className="work-title">
              <span className="company">{props.name}</span>
              <span className="until">{props.author}</span>
            </h2>
          </div>
          <p>{props.description}</p>
        </li>
      </div>
    </div>
  );
}
