import { Box, Typography } from "@mui/material";

export function Day({ info }) {
  const text = { fontFamily: "'Montserrat', sans-serif" };

  return (
    <>
      <Typography
        sx={{
          textAlign: "center",
          color: "#002764",
          ...text,
          mb: 1,
          fontSize: "1.2em",
        }}
      >
        {new Date(info.dt * 1000).toString().substring(0, 15)}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Box>
            <Typography
              sx={text}
            >{`${info.weather[0].main}: ${info.weather[0].description}`}</Typography>
            <Typography
              sx={text}
            >{`Temperature: ${info.temp.day}°C`}</Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography sx={text}>{`Min: ${info.temp.min}°C`}</Typography>
            <Typography sx={text}>{`Max: ${info.temp.max}°C`}</Typography>
            <Typography sx={text}>{`UVI: ${info.uvi}`}</Typography>
          </Box>
        </Box>
        <Box>
          {info.rain ? (
            <Typography sx={text}>{`Precipitation: ${info.rain}mm`}</Typography>
          ) : null}
          {info.snow ? (
            <Typography sx={text}>{`Snow: ${info.snow}mm`}</Typography>
          ) : null}
          <Typography sx={text}>{`Humidity: ${info.humidity}%`}</Typography>
          <Typography sx={text}>{`Clouds: ${info.clouds}`}</Typography>
        </Box>
      </Box>
    </>
  );
}
