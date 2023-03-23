import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import Avatar from "@mui/material/Avatar";
import { IconButton, InputAdornment, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import { ArrowBack } from "@mui/icons-material";

const User = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  display: "flex",
  alignItems: "center",
  color: theme.palette.text.secondary,
}));

const Header = ({
  name = "",
  photo,
  search = false,
  setSearchText,
  backOption = false,
  setChatIdSelected,
  setOpenProfile,
  openProfile,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isSearch, setIsSearch] = React.useState(search);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSearch = () => {
    handleClose();
    setIsSearch(!isSearch);

    console.log(isSearch);
  };

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {backOption && (
          <IconButton
            size="large"
            color="inherit"
            sx={{ display: { xs: "block", sm: "block", md: "none" } }}
            onClick={() => {
              setChatIdSelected(null);
            }}
          >
            <ArrowBack />
          </IconButton>
        )}
        <User
          onClick={() => {
            setOpenProfile(!openProfile);
          }}
        >
          <Avatar sx={{ marginRight: 2, marginLeft: 1 }} src={photo}>
            <PersonIcon />
          </Avatar>

          <Typography fontSize={17} color={"white"} sx={{ flexGrow: 1 }}>
            {name}
          </Typography>
        </User>

        <Box
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
          }}
        >
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
            <MenuItem onClick={handleSearch}>Search</MenuItem>
            <MenuItem
              onClick={() => {
                setOpenProfile(!openProfile);
              }}
            >
              Profile
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
      {search && (
        <Box
          p={2}
          sx={{
            display: {
              xs: isSearch ? "block" : "none",
              sm: isSearch ? "block" : "none",
              md: "block",
            },
          }}
        >
          <TextField
            id="outlined-multiline-flexible"
            label="Search"
            color="primary"
            multiline
            maxRows={4}
            fullWidth
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      )}
    </AppBar>
  );
};

export default Header;
