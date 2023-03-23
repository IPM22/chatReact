import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import { Typography } from "@mui/material";
import Header from "../components/header";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { ConfigurationContext } from "../context/configurationContext";

const ListaChat = ({ setChatIdSelected, chats, setOpenProfile }) => {
  const [searchText, setSearchText] = useState("");
  const { config } = useContext(ConfigurationContext);
  return (
    <div>
      <Header
        name={config.username}
        photo={config.photo}
        search={true}
        setSearchText={setSearchText}
        setOpenProfile={setOpenProfile}
        openProfile
      />
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={1}
          sx={{
            overflowY: "scroll",
            maxHeight: "90vh",
            padding: 1,
          }}
        >
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {chats
              .filter((chat) => chat.destinaraty.includes(searchText))
              .map((c) => (
                <Box key={c.chatId}>
                  <ListItem alignItems="flex-start">
                    <ListItemButton
                      onClick={() => {
                        setChatIdSelected(c.chatId);
                      }}
                    >
                      <ListItemAvatar>
                        <Avatar sx={{ marginRight: 2 }}>
                          <PersonIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={c.destinaraty}
                        secondary="Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry."
                      />
                      <Box textAlign="end" width="40vh">
                        <Typography variant="body2">
                          {c.lastMessage.substring(0, 10)}
                        </Typography>
                        <Typography variant="body2">
                          {c.lastMessage.substring(11, 19)}
                        </Typography>
                      </Box>
                    </ListItemButton>
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </Box>
              ))}
          </List>
        </Grid>
      </Box>
    </div>
  );
};

export default ListaChat;
