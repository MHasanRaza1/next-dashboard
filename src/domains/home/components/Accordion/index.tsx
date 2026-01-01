import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";

interface FilterAccordionProps {
  title: string;
  children?: React.ReactNode;
}

const FilterAccordion = ({ children, title }: FilterAccordionProps) => {
  return (
    <Accordion elevation={0} sx={{ backgroundColor: "transparent" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 1,
            alignItems: "center",
          }}
        >
          <ExpandMoreIcon />
          <Typography>{title}</Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>{children ?? title}</AccordionDetails>
    </Accordion>
  );
};

export default FilterAccordion;
