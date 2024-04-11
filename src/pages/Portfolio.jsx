import Introduction from "../components/Introduction";
// import Options from "../components/Options";
import Profile from "../components/Profile";
import Works from "../components/Works";

function Portfolio() {
  return (
    <div className="container mx-auto">
      <Introduction />
      <Profile heading="Portfolio" />
      {/* <Options options={["Education", "Technical Skills", "Experience"]} /> */}
      {/* <Options options={["Education", "Technical Skills", "Experience"]} /> */}
      {/* <Options options={["Education", "Technical Skills", "Experience"]} /> */}
      <Works />
    </div>
  );
}

export default Portfolio;
