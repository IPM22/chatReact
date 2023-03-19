import React, { useEffect, useState } from "react";
import { GetChats, GetConfig } from "../api/chat";
import ChatList from "../api/data.json";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import { Typography } from "@mui/material";
import Header from "../components/header";

const Conversation = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  color: theme.palette.text.secondary,
}));

const ListaChat = () => {
  const [chats, setChats] = useState([]);
  const [config, setConfig] = useState(null);

  useEffect(() => {
    GetListaChat();
    GetConfigUser();
  }, []);

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

  return (
    <div>
      <Header data={config} />
      <Box sx={{ flexGrow: 1, padding: 1 }}>
        <Grid
          container
          spacing={2}
          sx={{ overflowY: "scroll", maxHeight: "1250px" }}
        >
          {chats.map((c) => (
            <Grid key={c.chatId} item md={12} xs={12}>
              <Conversation>
                <Avatar sx={{ marginRight: 2 }}>
                  <PersonIcon />
                </Avatar>
                <Typography
                  variant="body"
                  textOverflow={"ellipsis"}
                  width={900}
                  whiteSpace={"nowrap"}
                  overflow={"hidden"}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
                <Box textAlign={"end"} width={"40vh"}>
                  <Typography variant="body2">
                    {c.lastMessage.substring(0, 10)}
                  </Typography>
                  <Typography variant="body2">
                    {c.lastMessage.substring(11, 19)}
                  </Typography>
                </Box>
              </Conversation>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default ListaChat;
