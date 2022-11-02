import React from "react";
import LanguageChooser from "./LanguageChooser";

const Header = () => {
  return (
    <div>
      <p className="text-lg py-5">Please select your language</p>
      <LanguageChooser />
    </div>
  );
};

export default Header;
