import Button from "../components/Button";
import Introduction from "../components/Introduction";
// import Options from "../components/Options";
import Profile from "../components/Profile";
import Works from "../components/Works";

function Portfolio() {
  return (
    <>
      <Introduction />
      <Profile heading="Portfolio" />
      <div className="mt-4 gap-5 grid grid-cols-1 w-[20%] mx-auto bg-background rounded-2xl p-4 lg:rounded-full">
        <Button text="Resturant" />
      </div>
      {/* <Options options={["Resturant Page"]} /> */}
      {/* <Options options={["Education", "Technical Skills", "Experience"]} /> */}
      {/* <Options options={["Education", "Technical Skills", "Experience"]} /> */}
      <Works />
    </>
  );
}

export default Portfolio;
