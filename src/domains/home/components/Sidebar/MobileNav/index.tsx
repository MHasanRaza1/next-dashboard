import { Box, Drawer, Typography } from "@mui/material";
import React from "react";
import FilterAccordion from "../../Accordion";
import ListingFilters from "../../ListingFilter";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  data: any[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MobileNav = ({
  data,
  value,
  onChange,
  open,
  onClose,
}: MobileNavProps) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box
        sx={{
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
              value={value}
              onChange={onChange}
            />
          }
        />
      </Box>
    </Drawer>
  );
};

export default MobileNav;
