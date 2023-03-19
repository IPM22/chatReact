import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import { IconButton, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import Header from "../components/header";

const MineMessage = styled(Paper)(({ theme }) => ({
  //backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  display: "flex",
  alignItems: "center",
  color: theme.palette.text.primary,
  color: "white",
  borderEndEndRadius: 0,
  borderTopRightRadius: 15,
  borderTopLeftRadius: 15,
  borderEndStartRadius: 15,
  padding: 20,
  backgroundColor: theme.palette.success.light,
  width: "50vh",
  textAlign: "left",
}));

function Chat() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Header />

      <Box sx={{ flexGrow: 1, padding: 1 }}>
        <Grid
          container
          spacing={2}
          sx={{ overflowY: "scroll", height: "1250px" }}
        >
          <Grid item md={12} xs={12} p={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
              }}
            >
              <MineMessage>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
              </MineMessage>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Chat;
