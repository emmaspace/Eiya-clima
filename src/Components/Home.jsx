import { Box, Link, Container, Typography } from "@mui/material";

import Location from "./Location";
import "./Home.css";

export default function Home() {
  const color = { color: "#002764" };
  return (
    <Container component="div" sx={{ minHeight: "100vh", py: "1em" }}>
      <Box
        componet="header"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          id="logo"
          src="Weather.png"
          alt="Sun, plane and cloud icons that form the  Weather, Compare and Travel logo."
        />
        <Box
          component="div"
          sx={{ borderBottom: "3px solid #12C7E0", pb: "0.5em", mr: "1em" }}
        >
          <Typography component="h1" sx={{ ...color, textAlign: "center" }}>
            Welcome traveller! Compare the weather of your next destination!
          </Typography>
          <Typography component="p" sx={{ ...color, textAlign: "center" }}>
            Please select the places you wish to compare
          </Typography>
        </Box>
      </Box>
      <Container
        component="main"
        sx={{ display: "flex", flexDirection: "row", justifyContent:"space-between", }}
      >
        <Location />
        <Location />
      </Container>
      <Box component="footer" sx={{ position: "relative", bottom: "2%", right:"2%" }}>
        <Typography sx={{ ...color, textAlign: "right" }}>
          Made by <Link href="https://github.com/emmaspace">@emmaspace</Link>
        </Typography>
      </Box>
    </Container>
  );
}
