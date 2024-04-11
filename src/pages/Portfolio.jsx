import Introduction from "../components/Introduction";
// import Options from "../components/Options";
import Profile from "../components/Profile";
import Works from "../components/Works";

function Portfolio() {
  return (
    <>
      <Introduction />
      <Profile heading="Portfolio" />
      {/* <Options options={["Education", "Technical Skills", "Experience"]} /> */}
      {/* <Options options={["Education", "Technical Skills", "Experience"]} /> */}
      {/* <Options options={["Education", "Technical Skills", "Experience"]} /> */}
      <Works />
    </>
  );
}

export default Portfolio;
