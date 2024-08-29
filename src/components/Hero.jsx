import { Box } from "@mui/material";
import SpacemanCanvas from "../components/Spaceman";

const Hero = ({ scrollContainer }) => {
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden" }}>
      <Box
        component="img"
        src="./parallax/1Stars.svg"
        alt=""
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "auto",
          zIndex: 1,
        }}
      />
      <Box
        component="img"
        src="./parallax/2Planets.svg"
        alt=""
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%", // Alterado de 10% para 100%
          height: "auto",
          zIndex: 1, // Alterado de 2 para 1
        }}
      />
      <Box
        component="img"
        src="./parallax/3Mountain.svg"
        alt=""
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "10%",
          height: "auto",
          zIndex: 3,
        }}
      />
      <Box
        component="img"
        src="./parallax/4Mountain.svg"
        alt=""
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "10%",
          height: "auto",
          zIndex: 4,
        }}
      />
      <Box
        component="img"
        src="./parallax/5Crater.svg"
        alt=""
        sx={{
          bottom: 0,
          left: 0,
          width: "30%", // Alterado de 10% para 3%
          height: "auto",
          zIndex: 5,
        }}
      />
      <Box
        component="img"
        src="./parallax/6Sun.svg"
        alt=""
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "100%", // Alterado de 90% para 100%
          height: "auto",
          zIndex: 6,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 7,
        }}
      >
        <SpacemanCanvas scrollContainer={scrollContainer} />
      </Box>
    </Box>
  );
};

export default Hero;
