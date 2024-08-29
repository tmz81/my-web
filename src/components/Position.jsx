import React from "react";
import { Box, Typography } from "@mui/material";

const produceSpans = (text, animation) => {
  return text.split("").map((letter, index) => (
    <Box
      component="span"
      key={index}
      sx={{
        display: "inline-block",
        transformStyle: "preserve-3d",
        transformOrigin: "bottom",
        animation: `${animation} 1s forwards`,
        animationDelay: `${index * 0.05}s`,
      }}
    >
      {letter === " " ? "\u00A0" : letter}
    </Box>
  ));
};

const Position = () => {
  return (
    <Box
      sx={{
        position: "relative",
        cursor: "default",
        fontWeight: "medium",
        color: "white",
        fontSize: {
          xs: "16px",
          sm: "20px",
          md: "30px",
          lg: "36px",
          xl: "66px",
        },
        lineHeight: { xs: "32px", xl: "40px" },
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          top: { xs: "-30px", sm: "-10px", lg: 0 },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: { xs: "1px", md: "2px", xl: "4px" },
            display: "flex",
          }}
          aria-label="Software Developer"
        >
          {produceSpans("Software Developer", "animate-textRotate1")}
        </Box>
        <Box
          sx={{
            position: "absolute",
            left: { xs: "1px", md: "2px", xl: "4px" },
            display: "flex",
          }}
          aria-label="Content Creator"
        >
          {produceSpans("Content Creator", "animate-textRotate2")}
        </Box>
      </Box>
    </Box>
  );
};

export default Position;
