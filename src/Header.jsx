import { AppBar, Toolbar, Typography, Link, Box } from "@mui/material";
import img from "./assets/signaturemaker.net.png";

function Header() {
  return (
    <AppBar position="static" color="transparent">
      <Toolbar sx={{ marginRight: 50, marginLeft: 50 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="p" component="div">
            <img src={img} alt="Logo" />
          </Typography>
        </Box>
        <Box>
          <Link href="#" color="inherit" underline="none" sx={{ ml: 2 }}>
            Home
          </Link>
          <Link href="#" color="inherit" underline="none" sx={{ ml: 2 }}>
            About
          </Link>
          <Link href="#" color="inherit" underline="none" sx={{ ml: 2 }}>
            Gears
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
