import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Typewriter from "typewriter-effect";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Link,
  Container,
} from "@mui/material";

import signatureImg from "../public/firma.png";
import profileImg from "../public/tmz81.jpeg";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const token = import.meta.env.VITE_VERCEL_TOKEN;
      try {
        const response = await axios.get("https://api.vercel.com/v9/projects", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProjects(response.data.projects || []);
      } catch (error) {
        console.error(
          "Erro ao buscar projetos:",
          error.response ? error.response.data : error.message
        );
        setProjects([]);
      }
    };

    fetchProjects();
  }, []);

  return (
    <Container>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{ color: "#F1F9FA", fontSize: { xs: "1.5rem", md: "2rem" } }}
        fontFamily="revert-layer"
        fontWeight={500}
      >
        Featured Projects and Content:
      </Typography>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
        }}
      >
        {Array.isArray(projects) && projects.length > 0 ? (
          projects
            .filter(
              (project) =>
                project.name !== "tmz81" &&
                project.name !== "tmz81-react-calculator" &&
                project.name !== "tmz81-quiz-app" &&
                project.name !== "bot-message-whatsapp" &&
                project.name !== "tmz81-pokedex" &&
                project.name !== "maria-balls" &&
                project.name !== "tmz81-dtmoney-app" &&
                project.name !== "tmz81-ignite-lab" &&
                project.name !== "spa-ecoleta" &&
                project.name !== "tmz81-together-letmeask"
            )
            .map((project) => (
              <Link
                sx={{
                  color: "#606060",
                  textDecoration: "none",
                  "&:hover": {
                    color: "#f1f9fa",
                    textDecoration: "underline",
                  },
                  padding: "8px 0",
                }}
                key={project.id}
                href={`https://${project.name}.vercel.app`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typography component="span">{project.name}</Typography>
              </Link>
            ))
        ) : (
          <Typography
            sx={{ color: "#606060", fontSize: { xs: "1rem", md: "1.25rem" } }}
            component="span"
          >
            Loading...
          </Typography>
        )}
      </Box>
    </Container>
  );
}

function Header() {
  return (
    <AppBar position="static" color="transparent">
      <Toolbar sx={{ textAlign: "center" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="p" component="div">
            <img src={signatureImg} alt="Logo" />
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

function MainContent() {
  return (
    <Box sx={{ margin: "0 auto", maxWidth: 1200 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          mb: 0,
          mt: 8,
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
              minHeight: { md: 120 },
            }}
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(45)
                  .typeString(
                    'Olá! Sou <span style="color: #f1f9fa">Thomaz Victor (Tmz81)</span>, um <span style="color: #f1f9fa">Dev Full Stack</span> apaixonado por construir ideias.'
                  )
                  .pauseFor(500)
                  .typeString(" desde ")
                  .typeString('<span style="color: #f1f9fa">2019</span>')
                  .pauseFor(1000)
                  .deleteChars(4)
                  .typeString('<span style="color: #f1f9fa">2020</span>')
                  .pauseFor(1100)
                  .deleteChars(4)
                  .typeString('<span style="color: #f1f9fa">2021</span>')
                  .pauseFor(1200)
                  .deleteChars(4)
                  .typeString('<span style="color: #f1f9fa">2022</span>')
                  .pauseFor(1300)
                  .deleteChars(4)
                  .typeString('<span style="color: #f1f9fa">2023</span>')
                  .pauseFor(1400)
                  .deleteChars(4)
                  .typeString('<span style="color: #f1f9fa">2024</span>')
                  .pauseFor(1500)
                  .deleteChars(4)
                  .typeString('<span style="color: #f1f9fa">2025</span>')
                  .start();
              }}
            />
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center", m: { xs: 2, md: 0 } }}>
          <br />
          <img
            src={profileImg}
            alt="Thomaz Victor"
            style={{ width: "70%", maxWidth: 530, borderRadius: "16px" }}
          />
        </Box>
      </Box>
      <Projects />
    </Box>
  );
}

function Footer() {
  return (
    <Box sx={{ p: 1, textAlign: "center", color: "#f1f9f8" }}>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <Link
          href="https://www.tiktok.com/@tmz_81"
          color="inherit"
          underline="none"
          sx={{
            mx: 2,
            transition: "transform 0.3s",
            "&:hover": { transform: "scale(1.2)" },
          }}
        >
          TikTok
        </Link>
        <Link
          href="https://github.com/tmz81"
          color="inherit"
          underline="none"
          sx={{
            mx: 2,
            transition: "transform 0.3s",
            "&:hover": { transform: "scale(1.2)" },
          }}
        >
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/tmz81/"
          color="inherit"
          underline="none"
          sx={{
            mx: 2,
            transition: "transform 0.3s",
            "&:hover": { transform: "scale(1.2)" },
          }}
        >
          LinkedIn
        </Link>
      </Box>
      <Typography variant="body2" color="inherit" sx={{ color: "#606060" }}>
        Designed & built by
      </Typography>
      <Typography color="inherit">
        <img src={signatureImg} alt="Logo" />
      </Typography>
    </Box>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <MainContent />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
