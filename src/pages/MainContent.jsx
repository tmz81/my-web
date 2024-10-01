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
            variant="h6"
            component="div"
            gutterBottom
            sx={{
              color: "#606060",
              fontSize: { xs: "1rem", md: "2rem" },
              fontFamily: "revert-layer",
              fontWeight: "bold",
            }}
          >
            If you don't know me yet... Nice to meet you. My name is
            <span style={{ color: "#f1f9fa" }}> ThomazVictor</span>, better
            known as <span style={{ color: "#f1f9fa" }}>Tmz81</span>
          </Typography>
          <br />
          <br />
          <Typography
            variant="h6"
            component="div"
            gutterBottom
            sx={{
              color: "#606060",
              fontSize: { xs: "1rem", md: "1.50rem" },
              fontFamily: "revert-layer",
            }}
          >
            A <span style={{ color: "#f1f9fa" }}>Web Developer</span> who
            creates Micro SaaS that transforms ideas into real products. I've
            been a{" "}
            <span style={{ color: "#f1f9fa" }}>Nodejs devotee since 2019</span>,
            where I started my journey with{" "}
            <span style={{ color: "#f1f9fa" }}>programming</span>, and since
            then I've been diving deeper and deeper into this world of codes.
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
