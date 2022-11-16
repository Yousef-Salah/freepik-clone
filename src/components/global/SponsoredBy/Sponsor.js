
const Sponsor = (props) => {
  return (
    <article className="col-3 overflow-hidden">
      <a href={props.href}>
        <img src={props.image} alt={props.alt} />
      </a>
  </article>
  );
};

export default Sponsor;