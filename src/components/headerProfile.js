import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { Button, IconButton, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { ArrowBack, ManageAccounts } from "@mui/icons-material";

const User = styled(Box)(({ theme }) => ({
  //backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  display: "flex",
  alignItems: "center",
  color: theme.palette.text.secondary,
}));

const HeaderProfile = ({
  name = "",
  search = false,
  saveChanges,
  setOpenProfile,
  openProfile,
  config,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isChanging, setIsChanging] = React.useState(false);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setIsChanging(true);
  }, [config]);

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex" }}>
          <IconButton
            size="large"
            color="inherit"
            onClick={() => {
              setOpenProfile(!openProfile);
            }}
          >
            <ArrowBack />
          </IconButton>

          <User>
            <Avatar sx={{ marginRight: 2, marginLeft: 1 }}>
              <ManageAccounts />
            </Avatar>

            <Typography fontSize={17} color={"white"} sx={{ flexGrow: 1 }}>
              {name}
            </Typography>
          </User>
        </Box>
        <Box>
          {isChanging && (
            <Button
              variant="text"
              color="inherit"
              onClick={() => {
                saveChanges(true);
              }}
            >
              Save
            </Button>
          )}
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              onClick={() => {
                setOpenProfile(!openProfile);
              }}
            >
              Chat
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderProfile;
