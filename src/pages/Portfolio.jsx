import Introduction from "../components/Introduction";
import Options from "../components/Options";
import Profile from "../components/Profile";

function Portfolio() {
  return (
    <>
      <Introduction />
      <Profile heading="Portfolio" />
      <Options options={["Education", "Technical Skills", "Experience"]} />
      <Options options={["Education", "Technical Skills", "Experience"]} />
      <Options options={["Education", "Technical Skills", "Experience"]} />
    </>
  );
}

export default Portfolio;
