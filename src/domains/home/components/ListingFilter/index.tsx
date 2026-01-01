import { Box, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface ListingFiltersProps {
  queryKey: "card" | "product";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  data?: any[];
}

const ListingFilters = ({
  queryKey,
  placeholder,
  data,
  value,
  onChange,
}: ListingFiltersProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCard = searchParams.get("card");
  const filteredData = data?.filter((item) =>
    item.name.toLowerCase().includes(value?.toLowerCase() || "")
  );

  const handleSelect = (value: string | number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(queryKey, value.toString());

    router.push(`?${params.toString()}`);
  };
  return (
    <Box>
      <TextField
        sx={{
          marginBottom: 2,
          "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
          },

          /* Placeholder */
          "& .MuiOutlinedInput-input::placeholder": {
            fontSize: "12px",
          },
        }}
        size="small"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          maxHeight: "110px",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {filteredData && filteredData?.length > 0 ? (
          filteredData?.map((item, index) => {
            const isSelected = selectedCard === item.id.toString();
            return (
              <Box
                onClick={() => handleSelect(item.id)}
                key={item.id ?? index}
                sx={{
                  display: "flex",
                  gap: 2,
                  cursor: "pointer",
                  maxHeight: "110px",
                  backgroundColor: isSelected ? "lightgrey" : "transparent",
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={20}
                    height={20}
                  />
                </Box>
                <Typography>{item.name}</Typography>
              </Box>
            );
          })
        ) : (
          <Typography fontSize={12} color="text.secondary">
            No results found
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ListingFilters;
