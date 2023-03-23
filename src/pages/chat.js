import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Header from "../components/header";
import data from "../data/data.json";
import Message from "../components/message";
import { Typography } from "@mui/material";

const InputMessage = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  display: "flex",
  color: theme.palette.text.secondary,
  padding: 20,
}));

const Background = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  backgroundImage:
    theme.palette.mode === "dark"
      ? `url(${"/fondoDark.jpg"})`
      : `url(${"/fondo.jpg"})`,
  backgroundSize: "cover",
}));

function Chat({ chatSelected, setChatIdSelected }) {
  return (
    <Box
      sx={{
        display: {
          xs: chatSelected ? "block" : "none",
          sm: chatSelected ? "block" : "none",
          md: "block",
        },
      }}
    >
      {chatSelected ? (
        <Box sx={{ position: "relative" }}>
          <Box>
            <Header
              name={chatSelected.destinaraty}
              backOption={true}
              setChatIdSelected={setChatIdSelected}
            />
          </Box>
          <Background>
            <Grid
              container
              spacing={2}
              sx={{ overflowY: "scroll", padding: 2, maxHeight: "95vh" }}
            >
              <Grid item md={12} xs={12} p={3}>
                {data.map((x) => (
                  <Message key={x.id} data={x} />
                ))}
              </Grid>
            </Grid>
          </Background>
          <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
            <InputMessage>
              <TextField
                id="outlined-multiline-flexible"
                label="Type a message"
                multiline
                maxRows={4}
                fullWidth
              />
            </InputMessage>
          </Box>
        </Box>
      ) : (
        <Background>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              flexGrow: 1,
            }}
          >
            <Typography> Seleccione un chat</Typography>
          </Box>
        </Background>
      )}
    </Box>
  );
}

export default Chat;
