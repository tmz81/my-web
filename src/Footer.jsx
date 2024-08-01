import { Box, Typography, Link } from "@mui/material";
import img from "./assets/signaturemaker.net.png";

function Footer() {
  return (
    <Box sx={{ p: 1, textAlign: "center", color: "#f1f9f8" }}>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <Link href="https://github.com/tmz81" color="inherit" underline="none" sx={{ mx: 2 }}>
          GitHub
        </Link>
        <Link href="https://www.linkedin.com/in/tmz81/" color="inherit" underline="none" sx={{ mx: 2 }}>
          LinkedIn
        </Link>
      </Box>
      <Typography variant="body2" color="inherit" sx={{color: "#606060"}}>
        Designed & built by
      </Typography>
      <Typography color="inherit">
        <img src={img} alt="Logo" />
      </Typography>
    </Box>
  );
}

export default Footer;
