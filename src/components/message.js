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

const Message = ({ data }) => {
  const Msg = styled(Paper)(({ theme }) => ({
    //backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    display: "flex",
    alignItems: "center",
    color: theme.palette.text.primary,
    color: "white",
    borderEndEndRadius: 15,
    borderTopRightRadius: data.owner ? 0 : 15,
    borderTopLeftRadius: data.owner ? 15 : 0,
    borderEndStartRadius: 15,
    padding: 20,
    backgroundColor: data.owner
      ? theme.palette.primary.dark
      : theme.palette.grey[600],
    width: "50vh",
    textAlign: "left",
  }));
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: data.owner ? "end" : "start",
        marginBottom: 5,
      }}
    >
      <Msg>
        <Box>
          <Typography fontSize={14}>{data.message}</Typography>
          <Typography fontSize={14} textAlign="right">
            {data.date.substring(11, 16)}
          </Typography>
        </Box>
      </Msg>
    </Box>
  );
};

export default Message;
