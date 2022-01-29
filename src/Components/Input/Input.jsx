/* eslint-disable react-hooks/exhaustive-deps */
import { FormControl, Box, InputLabel, Select, MenuItem } from "@mui/material";

export function Input({ children, location, setInfo, options }) {
  return (
    <Box>
      <FormControl variant="standard">
        <InputLabel id={`${children}-label`}>{children}</InputLabel>
        <Select
          labelId={`${children}-label`}
          id={children}
          value={location ? location : ""}
          onChange={(e) => setInfo(e.target.value)}
          label={children}
        >
          {options.map((place) => (
            <MenuItem value={place} key={place.name}>
              {place.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
