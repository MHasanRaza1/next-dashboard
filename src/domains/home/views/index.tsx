import React from "react";
import ProductCard from "../components/ProductCard";
import images from "@/assets/images";
import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";
import Sidebar from "../components/Sidebar";
import MenuIcon from "@mui/icons-material/Menu";
import MobileNav from "../components/Sidebar/MobileNav";
import { useRouter, useSearchParams } from "next/navigation";
import Chips from "../components/Chips";

const products = [
  {
    id: 1,
    name: "iPhone 14 Pro Max",
    src: images.Mobile,
    alt: "iPhone 14 Pro Max",
    price: 999,
  },
  {
    id: 2,
    name: "Samsung Galaxy S22",
    src: images.Mobile,
    alt: "Samsung Galaxy S22",
    price: 899,
  },
  {
    id: 3,
    name: "iPhone 13 Pro Max",
    src: images.Mobile,
    alt: "iPhone 13 Pro Max",
    price: 799,
  },
  {
    id: 4,
    name: "Samsung A23",
    src: images.Mobile,
    alt: "Samsung A23",
    price: 699,
  },
  {
    id: 5,
    name: "POCO C75",
    src: images.Mobile,
    alt: "POCO C75",
    price: 599,
  },
  {
    id: 6,
    name: "Techno Spark 9T",
    src: images.Mobile,
    alt: "Techno Spark 9T",
    price: 499,
  },
];

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

const HomeScreen = () => {
  const [card, setCard] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const searchParams = useSearchParams();
  const router = useRouter();

  const chips = Array.from(searchParams.entries());

  const handleRemoveChip = (key: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(key);

    router.push(`?${params.toString()}`);
  };
  return (
    <Box>
      <Box sx={{ height: 30, backgroundColor: "yellow" }}>
        {/* Mobile hamburger */}
        {isMobile && (
          <IconButton
            onClick={() => setOpen(true)}
            sx={{ position: "fixed", top: 16, left: 16, zIndex: 1300 }}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Box>
      {/* Mobile drawer */}
      <MobileNav
        open={open}
        onClose={() => setOpen(false)}
        data={cardList}
        value={card}
        onChange={(e) => setCard(e.target.value)}
      />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "250px 1fr",
          gap: 2,
        }}
      >
        <Sidebar />
        <Box>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {chips.map(([key, value]) => (
              <Chips
                key={key}
                text={value}
                onRemove={() => handleRemoveChip(key)}
              />
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                src={product.src}
                alt={product.alt}
                price={product.price}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeScreen;
