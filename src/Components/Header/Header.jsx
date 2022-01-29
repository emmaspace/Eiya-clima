import { Box, Typography } from "@mui/material";

import "./Header.css";

export function Header() {
  const text = { color: "#002764", textAlign: "center" };
  return (
    <Box
      componet="header"
      id="header"
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: "15vh",
        mb:"1.5em"
      }}
    >
      <img
        id="logo"
        src="Weather.png"
        alt="Sun, plane and cloud icons that form the  Weather, Compare and Travel logo."
      />
      <Box
        component="div"
        sx={{ borderBottom: "3px solid #12C7E0", pb: "0.5em", mr: "2em" }}
      >
        <Typography
          component="h1"
          sx={{ ...text, fontFamily: "'Pacifico', cursive", fontSize: "1.7em", my:"0.3em", }}
        >
          Welcome traveller! Compare the weather of your next destination!
        </Typography>
        <Typography
          component="p"
          sx={{ ...text, fontFamily: "'Montserrat', sans-serif", fontSize:"1.3em", }}
        >
          Please select the places you wish to compare
        </Typography>
      </Box>
    </Box>
  );
}
