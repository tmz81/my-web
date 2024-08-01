import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import img from "./assets/signaturemaker.net.png";

export default function Header() {
  return (
    <AppBar position="static" color="transparent">
      <Toolbar sx={{ textAlign: "center" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="p" component="div">
            <img src={img} alt="Logo" />
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
