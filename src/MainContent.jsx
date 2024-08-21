import { useEffect, useState } from "react";
import { Box, Typography, Link } from "@mui/material";
import axios from "axios";
import img from "./assets/tmz-comic.jpeg";

export default function MainContent() {
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
      <Box>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ color: "#F1F9FA", fontSize: { xs: "1.5rem", md: "2rem" } }}
          fontFamily="revert-layer"
          fontWeight={500}
        >
          Featured Projects and Content
        </Typography>
        <Box
          component="div"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {Array.isArray(projects) && projects.length > 0 ? (
            projects
              .filter((project) => project.name !== "tmz81")
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
              No project found.
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}
