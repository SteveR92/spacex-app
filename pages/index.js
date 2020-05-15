import Button from "../components/launchButton";
export default function Home() {
  return (
    <div
      className="home-container"
      style={{
        backgroundImage:
          "url(" + `${require("../images/background-3.png")}` + ")",
        width: "100%",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h2>Welcome To The Launch Pad</h2>
      <Button />
    </div>
  );
}
