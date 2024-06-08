
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
      label: "React.js Developer",
      date: "2024",
      subtitle: "Design and development of a system for registration, consultation, monitoring and subscription of medical cases (Medilog)",
      description: "A system was designed and developed using Typescript, React.js Node.js, Formik, Yup, Zod, Materia UI, Zustand among other technologies. An intuitive, responsive and easy-to-use medical interface was created"
    },
    {
      label: "JavaScript Developer",
      date: "2024",
      subtitle: "Building a series of vanilla JS projects",
      description: "A series of VanillaJs projects were created in which there was a restaurant menu page, a rock-paper-scissors game, a countdown clock, among others."
    },
    {
      label: "React Developer",
      date: "2024",
      subtitle: "Alpaca imgs Generator Website",
      description: "A project was created that allows you to create and download customizable alpaca imgs"
    }
  ];

  return (
    <>
      <Box component={"section"} id={"home"} sx={{ width: "100vw", maxWidth: "100vw", overflowX: "hidden", }}>
        <Paper sx={{ height: "50vh", padding: "6rem", overflow: "hidden" }}>
          <Grid container>
            <Grid item xs={12} md={6} sx={{ marginTop: "-2rem" }}>
              <Typography variant="h4" color="primary">Lenny Garcia</Typography>
              <Typography variant="h6" sx={{ paddingRight: " 5rem" }}>React.js, Typescript y Next.js Developer</Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "block" } }}>
              <img alt="branch" src={branchImg.src} width={679} height={367} style={{ filter: "grayscale(100%)", marginTop: "-10rem" }} />
            </Grid>
          </Grid>
        </Paper>

        <Box component={"section"} id={"about"} sx={{ padding: "5rem 6vw" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          About me
          </Typography>
          <Box sx={{ display: "flex", }}>
            <HorizontalRuleIcon sx={{ fontSize: "2rem", transform: "scale(1.7, 1)", marginTop: "-0.5rem" }} color="primary" />
            <Typography variant="subtitle1" sx={{ paddingLeft: "1rem" }}>
              I am a Junior Web application developer, specialized in Frontend development, with mastery in technologies such as React.js, Javascript, Typescript and Material UI. I have worked with several academic and personal projects, demonstrating skills for design and development of intuitive, functional and responsive interfaces. Motivated to learn and grow in a professional environment.
            </Typography>
          </Box>
        </Box>

        <Box component={"section"} id={"skills"} sx={{ width: "100vw", }}>
          <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold" }}>
            My Skills
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

        <Box component={"section"} id={"portfolio"}>
          <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold" }}>
            Portfolio
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

        <Box component={"section"} id={"experiences"} sx={{ marginTop: "5rem", }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", margin: "-1.5rem 2rem", }}>
            Experiences
          </Typography>
          <Paper sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "5rem 12vw", paddingBottom: "10rem" }}>
            <ExperiencesStepper steps={steps} />
          </Paper>
        </Box>

        <Box component={"section"} id={"contact"} sx={{ width: "100vw", }}>
          <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold", marginTop: "-1rem" }}>
            Contact me
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