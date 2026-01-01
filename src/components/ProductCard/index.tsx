"use client";

import { Card, CardContent, Stack } from "@mui/material";
import { ImageWrapper } from "../ImageWrapper";

export function ProductCard() {
  return (
    <Card sx={{ width: 350 }}>
      <CardContent>
        <ImageWrapper />
        <Stack></Stack>
      </CardContent>
    </Card>
  );
}
