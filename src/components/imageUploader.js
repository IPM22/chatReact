import React, { useState } from "react";
import axios from "axios";
import { IconButton } from "@mui/material";
import { CameraAlt } from "@mui/icons-material";

export default function ImageUploader({ setConfig, config }) {
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);

    setConfig({
      ...config,
      photo: base64,
    });
    console.log(
      "🚀 ~ file: imageUploader.js:47 ~ handleFileUpload ~ base64:",
      config
    );
  };

  return (
    <IconButton component="label" sx={{ position: "absolute", bottom: -25 }}>
      <input
        type="file"
        label="Image"
        name="myFile"
        accept=".jpeg, .png, .jpg"
        hidden
        onChange={(e) => handleFileUpload(e)}
      />
      <CameraAlt sx={{ fontSize: 40 }} />
    </IconButton>
  );
}
