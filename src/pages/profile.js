import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { IconButton, Switch, TextField, Typography } from "@mui/material";
import HeaderProfile from "../components/headerProfile";
import Divider from "@mui/material/Divider";
import EditIcon from "@mui/icons-material/Edit";
import { DarkMode, LightMode } from "@mui/icons-material";
import { ColorModeContext } from "../context/colorModeContext";
import { ConfigurationContext } from "../context/configurationContext";
import ImageUploader from "../components/imageUploader";

const Profile = ({ setOpenProfile }) => {
  const { mode, setMode } = useContext(ColorModeContext);
  const { config, setConfig, saveChanges, changes } =
    useContext(ConfigurationContext);
  const [disableUsername, setDisableUsername] = useState(true);

  useEffect(() => {
    setDisableUsername(true);
  }, [changes]);

  return (
    <div>
      <HeaderProfile
        name={"Profile"}
        search={true}
        setOpenProfile={setOpenProfile}
        saveChanges={saveChanges}
      />
      <Box padding={5}>
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            display: "flex",
            marginY: 5,
          }}
        >
          <Avatar sx={{ width: 200, height: 200 }} src={config.photo} />
          <ImageUploader setConfig={setConfig} config={config} />
        </Box>

        <Box sx={{ mb: 10, display: { xs: "none", sm: "none", md: "block" } }}>
          <TextField
            id="standard-basic"
            label="Username"
            variant="standard"
            disabled={disableUsername}
            value={config.username}
            onChange={(event) => {
              setConfig({
                ...config,
                username: event.target.value,
              });
            }}
          />
          <IconButton
            onClick={() => {
              setDisableUsername(!disableUsername);
            }}
          >
            <EditIcon />
          </IconButton>
        </Box>
        <Divider />
        <Box
          sx={{
            mb: 5,
            display: { xs: "flex", sm: "flex", md: "none" },
            flexDirection: "column",
            justifyContent: "start",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
            <Typography>Username</Typography>
            <IconButton>
              <EditIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            </IconButton>
          </Box>
          <TextField
            id="standard-basic"
            variant="standard"
            value={config.username}
            disabled
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginY: 5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <Typography sx={{ mr: 10 }}>Theme</Typography>
            <DarkMode color="primary" />
            <Switch
              checked={mode === "light" ? true : false}
              onChange={(event) => {
                setMode(event.target.checked ? "light" : "dark");
              }}
            />
            <LightMode color="warning" />
          </Box>
        </Box>
        <Divider />
      </Box>
    </div>
  );
};

export default Profile;
