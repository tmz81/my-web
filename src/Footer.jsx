import { Box, Typography, Link } from "@mui/material";
import img from "./assets/signaturemaker.net.png";

function Footer() {
  return (
    <Box sx={{ p: 1, textAlign: "center" }}>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <Link href="#" color="inherit" underline="none" sx={{ mx: 2 }}>
          GitHub
        </Link>
        <Link href="#" color="inherit" underline="none" sx={{ mx: 2 }}>
          LinkedIn
        </Link>
      </Box>
      <Typography variant="body2" color="inherit" sx={{ mb: 2 }}>
        Designed & built by tmz81
      </Typography>
      <Typography color="inherit">
        <img src={img} alt="Logo" />
      </Typography>
    </Box>
  );
}

export default Footer;
