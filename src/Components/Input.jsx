import { TextField, Box, Autocomplete, CircularProgress } from "@mui/material";
import {useState, useEffect, Fragment} from "react"

export default function Input() {
const [open, setOpen] = useState(false);
const [options, setOptions] = useState([]);
const loading = open && options.length === 0;

useEffect(() => {
  let active = true;

  if (!loading) {
    return undefined;
  }

  (async () => {
    // await sleep(1e3); 

    if (active) {
      // setOptions([...topFilms]);
    }
  })();

  return () => {
    active = false;
  };
}, [loading]);

useEffect(() => {
  if (!open) {
    setOptions([]);
  }
}, [open]);




    const countries = [
    { name: "Mexico" },
    { name: "Brasil" },
    { name: "Australia" },
  ].map((obj) => (obj.label = obj["name"]));
    const cities = [
      { name: "Mexico City" },
      { name: "Sao Paulo" },
      { name: "Melbourne" },
    ].map((obj) => (obj.label = obj["name"]));
    return (
      <Box sx={{width:"45%"}}>
        <Autocomplete
          id="asynchronous-demo"
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          isOptionEqualToValue={(option, value) => option.title === value.title}
          getOptionLabel={(option) => option.title}
          options={options}
          loading={loading}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Asynchronous"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <Fragment>
                    {loading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </Fragment>
                ),
              }}
            />
          )}
        />
      </Box>
    );
}