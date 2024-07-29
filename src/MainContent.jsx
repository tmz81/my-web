import { Box, Typography, Link } from "@mui/material";
import img from "./assets/tmz-comic.png";

function MainContent() {
  return (
    <Box sx={{ marginRight: 50, marginLeft: 50 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Thomaz Victor
          </Typography>
          <Typography variant="h6" component="p" gutterBottom>
            Thomaz is an engineer and thought leader working on helping
            developers build a faster Web. Wassim loves teaching about the Web
            Platform, Cloud technologies and JavaScript.
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <img src={img} alt="Thomaz Victor" style={{ width: "60%" }} />
        </Box>
      </Box>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Featured Projects and Content
        </Typography>
        <Link href="#" color="secondary" underline="none">
          LL(k) Parser for TAP stream in Node.js
        </Link>
      </Box>
    </Box>
  );
}

export default MainContent;
