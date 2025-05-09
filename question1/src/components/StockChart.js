import React, { useEffect, useState } from "react";
import { axiosInstance } from "./api";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

function StockSelector({ onChange }) {
  const [stocks, setStocks] = useState({});
  const [selected, setSelected] = useState("");

  useEffect(() => {
    axiosInstance.get("/stocks")
      .then(res => setStocks(res.data.stocks))
      .catch(err => console.error(err));
  }, []);

  const handleChange = (e) => {
    const ticker = e.target.value;
    setSelected(ticker);
    onChange(ticker);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Stock</InputLabel>
      <Select value={selected} onChange={handleChange}>
        {Object.entries(stocks).map(([name, ticker]) => (
          <MenuItem key={ticker} value={ticker}>
            {name} ({ticker})
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}