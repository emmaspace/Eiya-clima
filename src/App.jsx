import "./App.css";
import { Location, Header } from "./Components";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Header />
      <Box sx={{
        display: "flex", flexDiection:"row", justifyContent:"space-around",}}>
        <Location />
        <Location />
      </Box>
    </div>
  );
}

export default App;
