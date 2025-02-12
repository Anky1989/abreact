import { useContext } from "react";
import UserContext from "../utils/UserContext";

const ContactUs = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="contactUs">
      <h1>Contact Us</h1>
      <h2>{loggedInUser}</h2>
      <p>Send us a message!</p>
    </div>
  );
};

export default ContactUs;
