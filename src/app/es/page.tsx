
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTranslations } from "next-intl";
import ubuntu from "../../../public/ubuntu-logo.png"
import assemblyLogo from "../../../public/assembly-logo.png"
import cSharpLogo from "../../../public/c-sharp-logo.png"
import jsLogo from "../../../public/js-logo.png"
import tsLogo from "../../../public/ts-logo.png"
import dockerLogo from "../../../public/docker-logo.png"
import nodeLogo from "../../../public/node-logo.svg"
import reactLogo from "../../../public/react-logo.png"
import nextLogo from "../../../public/next-logo.svg"
import sqlLogo from "../../../public/sql-logo.png"
import branchImg from "../../../public/branch.png"
import edificio1 from "../../../public/edificio1.jpg"
import edificio2 from "../../../public/edificio2.webp"
import edificio3 from "../../../public/edificio3.jpg"
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import Typography from "@mui/material/Typography";
import { Paper, useTheme, } from "@mui/material";
import React from "react";
import ExperiencesStepper, { ISteps } from "@/components/ExperiencesStepper";
import SkillsBox from "@/components/SkillsBox";
import ContactMeBox from "@/components/ContactMeBox";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Home() {

  const steps: ISteps[] = [
   {
      label: "Desarrollador de React.js",
      date: "2024",
      subtitle: "Diseño y desarrollo de un sistema de registro, consulta, seguimiento y suscripción de casos médicos (Medilog)",
      description: "Se diseñó y desarrollo un sistema usando Typescript, React.js Node.js, Formik, Yup, Zod, Materia UI, Zustand  ente otras tecnologías. Se creo una interfaz medica intuitiva, responsiva y fácil de usar"
    },
    {
      label: "Desarrollador de JavaScript",
      date: "2024",
      subtitle: "Construción de usa series de proyectos Vanilla JS",
      description: "Se creó una serie de proyectos VanillaJs en los que se encontrabam una pagina de menú de restaurante un juego de piedra papel o tijeras, un reloj de cuenta regresiva entre otros."
    },
    {
      label: "Desarrollador de React",
      date: "2024",
      subtitle: "Alpaca imgs Generator Website",
      description: "Se creó un un proyectos que permite crear y descargar imgnes de alpacas personalizables"
    }
  ];

  return (
    <>
      <Box component={"section"} id={"home"} sx={{ width: "100vw", maxWidth: "100vw", overflowX: "hidden", }}>
        <Paper sx={{ height: "50vh", padding: "6rem", overflow: "hidden" }}>
          <Grid container>
            <Grid item xs={12} md={6} sx={{ marginTop: "-2rem" }}>
              <Typography variant="h4" color="primary">Lenny Garcia</Typography>
              <Typography variant="h6" sx={{ paddingRight: " 5rem" }}>Desarrollador de React.js, Typescript y Next.js</Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "block" } }}>
              <img alt="branch" src={branchImg.src} width={679} height={367} style={{ filter: "grayscale(100%)", marginTop: "-10rem" }} />
            </Grid>
          </Grid>
        </Paper>

        <Box component={"section"} id={"sobre mi"} sx={{ padding: "5rem 6vw" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Sobre mi
          </Typography>
          <Box sx={{ display: "flex", }}>
            <HorizontalRuleIcon sx={{ fontSize: "2rem", transform: "scale(1.7, 1)", marginTop: "-0.5rem" }} color="primary" />
            <Typography variant="subtitle1" sx={{ paddingLeft: "1rem" }}>
            Soy un desarrollador de aplicaciones Web Junior, especializado en el desarrollo Frontend, con dominio en tecnologías como React.js, Javascript, Typescript y Material UI. He trabajado con varios proyectos académicos y personales, demostrando habilidades para el diseño y desarrollo de interfaces intuitivas, funcionales y responsivas. Motivado por aprender y crecer en un entorno profesional.
            </Typography>
          </Box>
        </Box>

        <Box component={"section"} id={"habilidades"} sx={{ width: "100vw", }}>
          <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold" }}>
            Mis Habilidades
          </Typography>
          <Box sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <SkillsBox img={ubuntu.src} text="Ubuntu" />
            <SkillsBox img={cSharpLogo.src} text="C#" />
            <SkillsBox img={jsLogo.src} text="JavaScript" />
            <SkillsBox img={tsLogo.src} text="TypeScript" />
            <SkillsBox img={nodeLogo.src} text="Node.js" />
            <SkillsBox img={reactLogo.src} text="React.js" />
            <SkillsBox img={assemblyLogo.src} text="Assembly x86-64" />
            <SkillsBox img={dockerLogo.src} text="Docker" />
            <SkillsBox img={nextLogo.src} text="Next.js" />
            <SkillsBox img={sqlLogo.src} text="SQL" />
          </Box>
        </Box>

        <Box component={"section"} id={"portafolio"}>
          <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold" }}>
            Portafolio
          </Typography>

          <Box sx={{
            margin: "1rem",
            display: "flex",
            gap: "0",
            justifyContent: "center",
            alignItems: "center"
          }}>

            <Box sx={{ borderRadius: "0.5rem", margin: "2rem" }}>
              <img alt="" src={edificio1.src} width={320} height={320} />
            </Box>
            <Box sx={{ borderRadius: "0.5rem", margin: "2rem" }}>
              <img alt="" src={edificio2.src} width={320} height={320} />
            </Box>
            <Box sx={{ borderRadius: "0.5rem", margin: "2rem" }}>
              <img alt="" src={edificio3.src} width={320} height={320} />
            </Box>


          </Box>

        </Box>

        <Box component={"section"} id={"experiencias"} sx={{ marginTop: "5rem", }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", margin: "-1.5rem 2rem", }}>
            Experiencias
          </Typography>
          <Paper sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "5rem 12vw", paddingBottom: "10rem" }}>
            <ExperiencesStepper steps={steps} />
          </Paper>
        </Box>

        <Box component={"section"} id={"contactame"} sx={{ width: "100vw", }}>
          <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold", marginTop: "-1rem" }}>
            Contactame
          </Typography>

          <Box sx={{
            marginTop: "-1.8rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            position: 'relative',
            padding: '0 1rem',
            '&::before': {
              content: '""',
              position: 'absolute',
              left: '0',
              width: 'calc(50% - 10rem)',
              height: '0.3rem',
              backgroundColor: '#ffd54f',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              right: '0',
              width: 'calc(50% - 10rem)',
              height: '0.3rem',
              backgroundColor: '#ffd54f',
            },
          }} />

          <Box sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "2rem"
          }}>
            <ContactMeBox icon={<EmailIcon />} text="Lennymgr27@gmail.com" />
            <ContactMeBox icon={<LocalPhoneIcon />} text="+1 (829)-657-2014" />
            <ContactMeBox icon={<LocationOnIcon />} text="Santo Domingo Este, RD." />
          </Box>

          <Box sx={{
            marginTop: "1.8rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            position: 'relative',
            padding: '0 1rem',
            '&::before': {
              content: '""',
              position: 'absolute',
              left: '0',
              width: 'calc(50% - 10rem)',
              height: '0.3rem',
              backgroundColor: '#ffd54f',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              right: '0',
              width: 'calc(50% - 10rem)',
              height: '0.3rem',
              backgroundColor: '#ffd54f',
            },
          }} />
        </Box>

      </Box>

    </>
  );
}