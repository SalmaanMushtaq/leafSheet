import ContactMe from "../components/ContactMe";
import Introduction from "../components/Introduction";
import Profile from "../components/Profile";
import DownloadCV from "../components/DownloadCV";
import GetInTouch from "../components/GetInTouch";

function Contact() {
  return (
    <div className="container mx-auto">
      <Introduction />
      <Profile />
      <ContactMe />
      <GetInTouch />
      <DownloadCV />
    </div>
  );
}

export default Contact;
