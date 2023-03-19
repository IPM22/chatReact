import React from "react";
import ListaChat from "./listaChat";
import Chat from "./chat";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

function MainChat() {
  return (
    <Grid container>
      <Grid item md={6} xs={12}>
        <ListaChat />
        <Divider orientation="vertical" flexItem />
      </Grid>
      <Grid item md={6} xs={12}>
        <Chat />
      </Grid>
    </Grid>
  );
}

export default MainChat;
