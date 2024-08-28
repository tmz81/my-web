import { Box, Typography } from "@mui/material";
import img from "../assets/tmz-comic.jpeg";
import FeaturesAndProjects from "../components/FeaturesAndProjects";

export default function MainContent() {
  return (
    <Box sx={{ margin: "0 auto", maxWidth: 1000, padding: 2 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ color: "#F1F9FA", fontSize: { xs: "2rem", md: "4rem" } }}
            fontFamily="revert-layer"
            fontWeight="bold"
          >
            ThomazVictor
          </Typography>
          <Typography
            variant="h6"
            component="div"
            gutterBottom
            sx={{ color: "#606060", fontSize: { xs: "1rem", md: "1.25rem" } }}
          >
            An engineer and thought leader working on helping developers build a
            faster Web. Loves teaching about the Web Platform, Cloud
            technologies and JavaScript.
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center", m: { xs: 2, md: 0 } }}>
          <img
            src={img}
            alt="Thomaz Victor"
            style={{ width: "75%", maxWidth: 300, borderRadius: "16px" }}
          />
        </Box>
      </Box>
      <FeaturesAndProjects />
    </Box>
  );
}
