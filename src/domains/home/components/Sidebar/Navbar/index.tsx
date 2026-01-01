import { Box, Typography } from "@mui/material";
import React from "react";
import FilterAccordion from "../../Accordion";
import ListingFilters from "../../ListingFilter";

interface NavbarProps {
  data: any[];
  cardSearch: string;
  onCardChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  productSearch: string;
  onProductChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Navbar = ({
  data,
  cardSearch,
  onCardChange,
  productSearch,
  onProductChange,
}: NavbarProps) => {
  return (
    <Box
      sx={{
        borderRight: "1px solid grey",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Typography variant="h6" sx={{ p: 2 }}>
        Filters
      </Typography>
      <FilterAccordion
        title="On All MemberShips"
        children={
          <ListingFilters
            queryKey="card"
            data={data}
            placeholder="Search Cards"
            value={cardSearch}
            onChange={onCardChange}
          />
        }
      />
      <FilterAccordion
        title="On Product"
        children={
          <ListingFilters
            queryKey="product"
            data={data}
            placeholder="Search Product"
            value={productSearch}
            onChange={onProductChange}
          />
        }
      />
    </Box>
  );
};

export default Navbar;
