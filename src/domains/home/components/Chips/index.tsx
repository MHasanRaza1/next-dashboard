import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Close } from "@mui/icons-material";

interface ChipsProps {
  text: string;
  onRemove: () => void;
}

const Chips = ({ text, onRemove }: ChipsProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        border: "1px solid yellow",
        alignItems: "center",
        justifyContent: "space-between",
        width: "80px",
      }}
    >
      <Typography>{text}</Typography>
      <IconButton size="small" onClick={onRemove}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default Chips;
