import React, { useContext } from "react";
import { LanguageContext } from "../context/Context";

const LanguageChooser = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="relative w-full lg:max-w-sm">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 "
      >
        <option value="SP">Spanish</option>
        <option value="EN">English</option>
        <option value="AR">Arabic</option>
        <option value="UR">Urdu</option>
        <option value="DE">German</option>
        <option value="FR">French</option>
      </select>
    </div>
  );
};

export default LanguageChooser;
