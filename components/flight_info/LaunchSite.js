const LaunchSite = ({ props }) => {
  return (
    <div>
      <h2>Launch Site</h2>
      <h3>{props.launch_site.site_name}</h3>
      <h3>{props.launch_site.site_name_long}</h3>
    </div>
  );
};

export default LaunchSite;
