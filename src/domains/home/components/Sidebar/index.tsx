import React from "react";
import Navbar from "./Navbar";
import images from "@/assets/images";
import { useMediaQuery, useTheme } from "@mui/material";

const cardList = [
  {
    id: 1,
    name: "Master Platinum",
    src: images.Logo,
  },
  {
    id: 2,
    name: "Master Gold",
    src: images.Logo,
  },
  {
    id: 3,
    name: "Visa Gold",
    src: images.Logo,
  },
  {
    id: 4,
    name: "Visa Platinum",
    src: images.Logo,
  },
];

const Sidebar = () => {
  const [cardSearch, setCardSearch] = React.useState("");
  const [productSearch, setProductSearch] = React.useState("");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {!isMobile && (
        <Navbar
          data={cardList}
          cardSearch={cardSearch}
          onCardChange={(e) => setCardSearch(e.target.value)}
          productSearch={productSearch}
          onProductChange={(e) => setProductSearch(e.target.value)}
        />
      )}
    </>
  );
};

export default Sidebar;
