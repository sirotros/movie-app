import React, { useState } from "react";
import { RiMovie2Line } from "react-icons/ri";
import { FaLanguage } from "react-icons/fa";
import { Link } from "react-router-dom";
import Local from "../locale/Local";
import { FormattedMessage } from "react-intl";

function Header({ setLanguage }) {
  const changeLanguages = (lang) => {
    setOpenLanguage(!openLanguage);
    localStorage.setItem("lang", lang);
    setLanguage(lang);
  };
  const [openLanguage, setOpenLanguage] = useState(false);

  return (
    <header className="h-14 w-full bg-gray-600 flex items-center justify-around">
      <Link to={"/"} className="flex items-center text-lg font-semibold">
        <RiMovie2Line /> <span className="ml-3"> Movie </span>
      </Link>
      
      <div className="relative">
        <FaLanguage
          onClick={(e) => setOpenLanguage(!openLanguage)}
          className="text-2xl cursor-pointer text-white "
        />
        {openLanguage ? (
          <ul className="absolute w-36 h-[75px] border-gray-300 bg-gray-200 z-10 border-[1px] -left-14 top-8  ">
            <li
              className="py-2 px-3 cursor-pointer"
              onClick={() => changeLanguages("tr-TR")}
            >
              <Local>
                  <FormattedMessage id="Turkish"/>
              </Local>
            </li>
            <li
              className="px-3 cursor-pointer"
              onClick={() => changeLanguages("en-US")}
            >
              <Local>
                  <FormattedMessage id="English"/>
              </Local>
            </li>
          </ul>
        ) : null}
      </div>
    </header>
  );
}

export default Header;
