import { Alert } from "@mui/material";
import React, { createContext, useState, useEffect } from "react";
import { ChangeConfig, GetConfig } from "../data/chat";
export const ConfigurationContext = createContext({});

const ConfigurationContextProvider = ({ children }) => {
  const [config, setConfig] = useState({ username: "", photo: "" });
  const [changes, saveChanges] = useState(false);

  useEffect(() => {
    GetConfiguration();
  }, []);

  useEffect(() => {
    if (changes) {
      console.log(
        "🚀 ~ file: configurationContext.js:21 ~ useEffect ~ config:",
        config
      );
      ChangeConfig(config)
        .then((response) => {
          if (response.data == "ok") {
            GetConfiguration();
            alert("Saved succesfully");
          }
        })
        .catch((error) => alert(error.response.statusText));
      saveChanges(false);
    }
  }, [changes]);

  const GetConfiguration = () => {
    GetConfig()
      .then((response) => {
        console.log(
          "🚀 ~ file: configurationContext.js:15 ~ .then ~ response:",
          response
        );
        setConfig(response.data);
        console.log(config);
      })
      .catch((error) => console.log(error));
  };

  return (
    <ConfigurationContext.Provider
      value={{ config, setConfig, saveChanges, changes }}
    >
      {children}
    </ConfigurationContext.Provider>
  );
};

export default ConfigurationContextProvider;
