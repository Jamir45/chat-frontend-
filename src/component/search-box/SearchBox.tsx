import BazarButton from "../BazarButton";
import { Box, debounce, TextField } from "@mui/material";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { styled } from "@mui/system";

const SearchOutlinedIcon = styled(SearchOutlined)(({ theme }) => ({
  color: theme.palette.grey[600],
  marginRight: 6,
}));

const GrocerySearchBox: FC = () => {
  const [resultList, setResultList] = useState<string[]>([]);
  const parentRef = useRef();

  const search = debounce((e) => {
    const value = e.target?.value;

    if (!value) setResultList([]);
    else setResultList(dummySearchResult);
  }, 200);

  const hanldeSearch = useCallback((event) => {
    event.persist();
    search(event);
  }, []);

  return (
    <Box
      position="relative"
      flex="1 1 0"
      maxWidth="670px"
      mx="auto"
      {...{ ref: parentRef }}
    >
      <TextField
        variant="outlined"
        placeholder="Searching for..."
        fullWidth
        onChange={hanldeSearch}
        InputProps={{
          sx: {
            height: 44,
            borderRadius: 300,
            paddingRight: 0,
            color: "grey.700",
            overflow: "hidden",
          },
          endAdornment: (
            <BazarButton
              color="primary"
              variant="contained"
              disableElevation
              sx={{
                px: "3rem",
                height: "100%",
                borderRadius: "0 300px 300px 0",
              }}
            >
              Search
            </BazarButton>
          ),
          startAdornment: <SearchOutlinedIcon fontSize="small" />,
        }}
      />
    </Box>
  );
};

const dummySearchResult = [
  "Macbook Air 13",
  "Asus K555LA",
  "Acer Aspire X453",
  "iPad Mini 3",
];

export default GrocerySearchBox;
