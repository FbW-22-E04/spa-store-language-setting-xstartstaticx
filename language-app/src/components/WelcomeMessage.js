import React, { useContext } from "react";
import { LanguageContext } from "../context/Context";

const WelcomeMessage = () => {
  const messages = {
    EN: "Hello World",
    SP: "Hola Mundo",
    AR: "مرحبا بالعالم",
    UR: "ہیلو ورلڈ",
    DE: "Hallo Welt",
    FR: "Bonjour Le Mond",
  };

  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div>
      <p className="text-5xl mt-5">{messages[language]}</p>
    </div>
  );
};

export default WelcomeMessage;
