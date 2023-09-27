export default function Avatar(props) {
  return (
    <div className="profile-container">
      <div>
        <p className="profile">{props.name}</p>
      </div>
    </div>
  );
}
