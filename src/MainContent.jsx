import { Box, Typography, Link } from "@mui/material";
import img from "./assets/tmz-comic.png";
import axios from "axios";
import { useEffect, useState } from "react";

export default function MainContent() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const token = import.meta.env.VITE_VERCEL_TOKEN;
      console.log("Vercel Token:", token); // Verificação do token

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
        setProjects([]); // Set projects to empty array on error
      }
    };

    fetchProjects();
  }, []);

  return (
    <Box sx={{ margin: "0 auto", maxWidth: 1200, padding: 2 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Thomaz Victor
          </Typography>
          <Typography variant="h6" component="div" gutterBottom>
            An engineer and thought leader working on helping developers build a
            faster Web. Loves teaching about the Web Platform, Cloud
            technologies and JavaScript.
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center", mt: { xs: 2, md: 0 } }}>
          <img
            src={img}
            alt="Thomaz Victor"
            style={{ width: "75%", maxWidth: 300 }}
          />
        </Box>
      </Box>
      <Box>
        <Typography variant="h4" component="h2" gutterBottom>
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
            projects.map((project) => (
              <Link
                key={project.id}
                href={`https://vercel.com/${project.accountSlug}/${project.name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typography component="span">{project.name}</Typography>
              </Link>
            ))
          ) : (
            <Typography component="span">Nenhum projeto encontrado.</Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}
