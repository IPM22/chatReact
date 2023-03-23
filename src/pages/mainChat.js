import React, { useState, useEffect } from "react";
import ListaChat from "./listaChat";
import Chat from "./chat";
import Grid from "@mui/material/Grid";
import { GetChats, GetConfig } from "../data/chat";
import Profile from "./profile";

function MainChat(mode, setMode) {
  const [chatSelected, setChatSelected] = useState([]);
  const [chatIdSelected, setChatIdSelected] = useState(null);
  const [chats, setChats] = useState([]);
  const [config, setConfig] = useState(null);
  const [openProfile, setOpenProfile] = useState(false);

  useEffect(() => {
    GetListaChat();
    GetConfigUser();
  }, []);

  useEffect(() => {
    FindChat();
  }, [chatIdSelected]);

  const GetListaChat = () => {
    GetChats()
      .then((response) => setChats(response.data))
      .catch((err) => console.log(err));
  };

  const GetConfigUser = () => {
    GetConfig()
      .then((response) => setConfig(response.data))
      .catch((err) => console.log(err));
  };

  const FindChat = () => {
    setChatSelected(chats.find(({ chatId }) => chatId === chatIdSelected));
  };

  return (
    <Grid container>
      {openProfile ? (
        <>
          <Grid
            item
            md={6}
            xs={12}
            sx={{
              display: {
                xs: chatIdSelected == null ? "block" : "none",
                sm: chatIdSelected == null ? "block" : "none",
                md: "block",
              },
            }}
          >
            <ListaChat
              setChatIdSelected={setChatIdSelected}
              chats={chats}
              config={config}
              setOpenProfile={setOpenProfile}
            />
          </Grid>

          <Grid item md={6} xs={12}>
            <Chat
              chatSelected={chatSelected}
              setChatIdSelected={setChatIdSelected}
              chats={chats}
              config={config}
            />
          </Grid>
        </>
      ) : (
        <Grid item md={12} xs={12}>
          <Profile
            chatSelected={chatSelected}
            setChatIdSelected={setChatIdSelected}
            chats={chats}
            config={config}
            setOpenProfile={setOpenProfile}
            openProfile={openProfile}
            mode={mode}
            setMode={setMode}
          />
        </Grid>
      )}
    </Grid>
  );
}

export default MainChat;
