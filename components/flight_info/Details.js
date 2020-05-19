const Details = ({ props }) => {
  console.log(props);
  return (
    <div>
      <h2>Details</h2>
      <p>{props.details}</p>
    </div>
  );
};

export default Details;
