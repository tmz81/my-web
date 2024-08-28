import { Box, Link, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";


export default function FeaturesAndProjects() {
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
  );
}
