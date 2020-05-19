const LaunchSuccess = ({ props }) => {
  let launchSuccess;
  props.launch_success ? (launchSuccess = "Yes") : (launchSuccess = "No");
  return (
    <div>
      <h2>Launch Success</h2>
      <h3>{launchSuccess}</h3>
    </div>
  );
};

export default LaunchSuccess;
