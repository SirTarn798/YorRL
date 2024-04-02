function FullLink(props) {
  console.log(props.link);
  return (
    <div className="link">
      <a href={props.link}>{props.link}</a>
    </div>
  );
}

export default FullLink;
