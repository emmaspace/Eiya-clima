/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, Fragment } from "react";
import { Country, City } from "country-state-city";
import { FormControl, Box, InputLabel, Select, MenuItem } from "@mui/material";

export default function Input({ type, setCountry, country, setCity, city }) {
  const [countryOp, setCountryOp] = useState([]);
  const [cityOp, setCityOp] = useState([]);

  useEffect(() => {
    //let countries = [];
    //let cities = [];

    const countries = Country.getAllCountries().map((info) => {
      info.label = info["name"];
      return info;
    });
    setCountryOp(countries);

    if (country !== "" && country !== undefined) {
      const cities = City.getCitiesOfCountry(country.isoCode).map((info) => {
        info.label = info["name"];
        return info;
      });
      console.log(cities);
      setCityOp(cities);
      console.log(cityOp);
    }
  }, [country]);

  return (
    <Box sx={{ width: "45%" }}>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        {type === "Country" ? (
          <>
            <InputLabel id={`${type}-label`}>{type}</InputLabel>
            <Select
              labelId={`${type}-label`}
              id={type}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              label={type}
            >
              {countryOp.map((country) => (
                <MenuItem value={country} key={country.isoCode}>
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          </>
        ) : null}

        {type === "City" ? (
          <>
            <InputLabel id={`${type}-label`}>{type}</InputLabel>
            <Select
              labelId={`${type}-label`}
              id={type}
              value={city}
              onChange={(e) => setCity(e.target.value)}
              label={type}
            >
              {cityOp.length>0 ? (
                cityOp.map((city) => (
                  <MenuItem value={city} key={city.name}>
                    {city.name}
                  </MenuItem>
                ))
              ) : (
                <MenuItem value="">Please select a Country</MenuItem>
              )}
            </Select>
          </>
        ) : null}
      </FormControl>
    </Box>
  );
}
