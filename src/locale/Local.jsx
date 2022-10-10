import React from "react";
import tr from "./tr.json";
import en from "./en.json";
import { IntlProvider } from "react-intl";

function Local({ children }) {
  const local = localStorage.getItem("lang");
  const message = {
    "tr-TR": tr,
    "en-US": en,
  };
  return (
    <IntlProvider locale={local} messages={message[local]}>
      {children}
    </IntlProvider>
  );
}

export default Local;
