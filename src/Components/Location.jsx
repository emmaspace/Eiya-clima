import { Container, Box, Typography } from "@mui/material";
import { useState } from "react";

import Input from "./Input";

export default function Location() {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState();
  return (
    <>
      <Box component="section" sx={{ width: "45%", mt: "2em" }}>
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Input type={"Country"} setCountry={setCountry} country={country} aria-label="Select a country please" />
          <Input type={"City"} setCity={setCity} city={city} aria-label="Select a city please" />
        </Box>
        <Box
          sx={{
            border: "5px solid #8338EC",
            borderRadius: "2em",
            minHeight: "55vh",
            mt: "2em",
            p: "1em",
          }}
        >
          {city && country ? (
            <>
              <Typography>Weather in{country}</Typography>
              {weather ? (
                weather.map((info) => <Box>info.weather</Box>)
              ) : (
                <Typography>Loading...</Typography>
              )}
            </>
          ) : (
            <Typography sx={{ textAlign: "center", color: "#002764" }}>
              Select a country and a city to start!
            </Typography>
          )}
        </Box>
      </Box>
    </>
  );
}
