import { Input } from "../Input";
import { Day } from "../Day/Day";
import { useEffect, useState } from "react";
import { Country /* , City */ } from "country-state-city";
import { Container, Box, Typography } from "@mui/material";

const text = {
  textAlign: "center",
  color: "#002764",
  fontFamily: "'Montserrat', sans-serif",
  fontSize: "1.5em",
  mb: "0.5em",
};

const borderColors = [
  "#3A86FF",
  "#FF006E",
  "#FFBE0B",
  "#FB5607",
  "#3A86FF",
  "#FF006E",
  "#FFBE0B",
  "#FB5607",
];

export function Location() {
  const [country, setCountry] = useState("");
  // const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);
  const [error, setError] = useState("");

  const apiKey = "b63c9b150d1c5296a1977467ff024ef9";

  const getWeather = async (lat, lon) => {
    const controller = new AbortController();
    const options = {
      signal: controller.signal,
      method: "GET",
    };
    setTimeout(() => controller.abort(), 10000);

    try {
      const info = await (
        await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts,current&appid=${apiKey}&units=metric`,
          options
        )
      ).json();
      console.log(info);
      setWeather(info.daily);
      setError("");
    } catch {
      console.log("no salió");
      setError("algo salió mal, vuelve a intentar más tarde");
    }
  };

  useEffect(() => {
    if (country) getWeather(country.latitude, country.longitude);
  }, [country]);

  const countries = Country.getAllCountries().map((info) => {
    info.label = info["name"];
    return info;
  });

  return (
    <Box>
      <Input
        setInfo={setCountry}
        location={country}
        options={countries}
        aria-label="Countries input"
      >
        Countries
      </Input>
      <Container
        sx={{
          border: "5px solid #8338EC",
          minHeight: "50vh",
          borderRadius: "3em",
          width: "40vw",
          mt: "1em",
          p: "1em",
        }}
      >
        {!country ? (
          <Typography sx={{ ...text }}>Please select a country</Typography>
        ) : weather.length === 0 ? (
          <Typography sx={{ ...text }}>Loading...</Typography>
        ) : !error ? (
          <Box>
            <Typography
              sx={{ ...text }}
            >{`Weather in ${country.name}`}</Typography>
            {weather.map((info, i) => (
              <Box
                sx={{
                  border: `3px solid ${borderColors[i]}`,
                  borderRadius: "1em",
                  mb: "0.5em",
                  p: "0.5em",
                }}
              ><Day info={info} key={info.dt}/></Box>
            ))}
          </Box>
        ) : (
          <Typography>{error}</Typography>
        )}
      </Container>
    </Box>
  );
}

/* let cities = [];

  useEffect(() => {
    if (country !== "" && country !== undefined) {
      cities = City.getCitiesOfCountry(country.isoCode).map((info) => {
        info.label = info["name"];
        return info;
      });

      console.log(country);
      console.log(cities.length);
    }
  }, [country]); */

/* {!country ? (
        <Input
          setInfo={setCity}
          location={city}
          options={[{ name: "Please select a country" }]}
          aria-label="Cities input"
        >
          Cities
        </Input>
      ) : (
        <Input
          setInfo={setCity}
          location={city}
          options={cities.length > 0 ? cities : [{ name: "No cities to show" }]}
          aria-label="Cities input"
        >
          Cities
        </Input>
      )} */
