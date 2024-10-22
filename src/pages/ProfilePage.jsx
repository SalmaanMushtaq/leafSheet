import DownloadCV from "../components/DownloadCV";
import Education from "../components/Education";
import Interests from "../components/Interests";
import Introduction from "../components/Introduction";
import Languages from "../components/Languages";
import Options from "../components/Options";
import Profile from "../components/Profile";
import TechSkills from "../components/TechSkills";

function ProfilePage() {
  return (
    <>
      <Introduction />
      <Profile heading="Profile" />
      <Options
        options={[
          "Education",
          "Tech Skills",
          "Experience",
          "Languages",
          "Soft Skills",
          "Interests",
        ]}
      />
      {/* <Options options={["Languages", "Soft Skills", "Interests"]} /> */}
      <Education />
      <TechSkills />
      <Languages />
      <Interests />
      <DownloadCV />
    </>
  );
}

export default ProfilePage;
