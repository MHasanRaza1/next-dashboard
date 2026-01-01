"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

interface ProductCardProps {
  name: string;
  src: StaticImageData;
  alt: string;
  price: number;
}

const ProductCard = ({ src, alt, price, name }: ProductCardProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        boxShadow: 3,
        borderRadius: 2,
        padding: 1,
        width: 200,
        cursor: "pointer",
      }}
    >
      <Box sx={{ position: "relative", alignItems: "center" }}>
        <Image src={src} alt={alt} />
      </Box>
      <Box>
        <Typography>{name}</Typography>
        <Typography>From PKR {price}</Typography>
      </Box>
    </Box>
  );
};

export default ProductCard;
