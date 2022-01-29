import { useEffect, useState } from "react";
import { Input } from "../Input";
import { Country /* , City */ } from "country-state-city";
import { Container, Box, Typography } from "@mui/material";

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
      const info = await (await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts,current&appid=${apiKey}`,
        options
      )).json();
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
    <>
      <Input
        setInfo={setCountry}
        location={country}
        options={countries}
        aria-label="Countries input"
      >
        Countries
      </Input>
      <Container>
        {!country ? (
          <Typography>Please select a country</Typography>
        ) : !weather ? (
          <Typography>Loading...</Typography>
        ) : !error ? (
          <Box>
            <Typography>Yastá</Typography>
          </Box>
        ) : (
          <Typography>{error}</Typography>
        )}
      </Container>
    </>
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
