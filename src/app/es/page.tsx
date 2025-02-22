
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTranslations } from "next-intl";
import branchImg from "../../../public/branch.png"
import sales_dashboard from "../../../public/sales dashboard.png"
import worldBank from "../../../public/world bank PBI.png"
import southAsiaKaggle from "../../../public/kaggle south asia growth.png"
import medilog from "../../../public/medilog.png"
import nekkoChat from "../../../public/nekkochat.png"
import alpaca from "../../../public/alpaca.png"
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import Typography from "@mui/material/Typography";
import { IconButton, Link, Paper, useTheme, } from "@mui/material";
import React from "react";
import ExperiencesStepper, { ISteps } from "@/components/ExperiencesStepper";
import SkillsBox from "@/components/SkillsBox";
import ContactMeBox from "@/components/ContactMeBox";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CloudIcon from '@mui/icons-material/Cloud';
import LayersIcon from '@mui/icons-material/Layers';
import StorageIcon from '@mui/icons-material/Storage';
import MemoryIcon from '@mui/icons-material/Memory';
import CodeIcon from '@mui/icons-material/Code';
import BarChartIcon from '@mui/icons-material/BarChart';
import { PortfolioBox } from "@/components/portfolioBox";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import Footer from "@/components/Footer";


export default function Home() {

  const mlSteps: ISteps[] = [
    {
      label: "Explicabilidad de Machine Learning",
      date: "2024",
      subtitle: "Certificación de Kaggle",
      description: "Comprender cómo los modelos de machine learning hacen predicciones y garantizar la transparencia en los sistemas de IA."
    },
    {
      label: "Análisis de Series Temporales",
      date: "2024",
      subtitle: "Certificación de Kaggle",
      description: "Explorar datos de series temporales, técnicas de pronóstico y análisis de tendencias."
    },
    {
      label: "Introducción a la Ética en IA",
      date: "2024",
      subtitle: "Certificación de Kaggle",
      description: "Comprender consideraciones éticas en el desarrollo y despliegue de IA."
    },
    {
      label: "Visión por Computadora",
      date: "2024",
      subtitle: "Certificación de Kaggle",
      description: "Aplicar técnicas de deep learning para procesamiento de imágenes y tareas de reconocimiento."
    },
    {
      label: "Ingeniería de Características",
      date: "2024",
      subtitle: "Certificación de Kaggle",
      description: "Mejorar los modelos de machine learning seleccionando y transformando características relevantes."
    },
    {
      label: "Machine Learning Intermedio",
      date: "2024",
      subtitle: "Certificación de Kaggle",
      description: "Avanzar en el conocimiento de ML con técnicas como XGBoost y validación de modelos."
    }
  ];

  const programmingSteps: ISteps[] = [
    {
      label: "Python",
      date: "2024",
      subtitle: "Certificación de Kaggle",
      description: "Construir una base sólida en Python para ciencia de datos y análisis."
    },
    {
      label: "SQL Avanzado",
      date: "2024",
      subtitle: "Certificación de Kaggle",
      description: "Escribir consultas complejas, optimizar el rendimiento y manejar grandes conjuntos de datos."
    }
  ];

  const dataScienceSteps: ISteps[] = [
    {
      label: "Limpieza de Datos",
      date: "2024",
      subtitle: "Certificación de Kaggle",
      description: "Preprocesar los datos manejando valores faltantes, valores atípicos e inconsistencias."
    },
    {
      label: "Visualización de Datos",
      date: "2024",
      subtitle: "Certificación de Kaggle",
      description: "Crear visualizaciones significativas para analizar y presentar datos de manera efectiva."
    },
    {
      label: "Pandas",
      date: "2024",
      subtitle: "Certificación de Kaggle",
      description: "Dominar la manipulación y análisis de datos usando la biblioteca Pandas."
    }
  ];

  const skillBoxSteps: { header: string, text: string, icon: React.ReactNode }[] = [
    {
      header: "Desarrollo de Software",
      text: "Construir aplicaciones escalables y eficientes utilizando tecnologías modernas.",
      icon: <CodeIcon color="primary" sx={{ fontSize: "2.5rem", }} />,
    },
    {
      header: "Análisis de Datos",
      text: "Transformar datos crudos en información valiosa a través de visualización y narración de historias.",
      icon: <BarChartIcon color="primary" sx={{ fontSize: "2.5rem", }} />,
    },
    {
      header: "Machine Learning",
      text: "Desarrollar modelos predictivos y aprovechar la IA para resolver problemas del mundo real.",
      icon: <MemoryIcon sx={{ fontSize: "2.5rem", }} color="primary" />,
    },
    {
      header: "Desarrollo en la Nube y Simulación",
      text: "Trabajar con LocalStack para emular servicios de AWS en desarrollo y pruebas, familiarizándome con arquitecturas en la nube.",
      icon: <CloudIcon color="primary" sx={{ fontSize: "2.5rem", }} />,
    },
    {
      header: "Procesamiento de Big Data",
      text: "Utilizar Apache Spark para procesar y analizar grandes conjuntos de datos de manera eficiente.",
      icon: <StorageIcon color="primary" sx={{ fontSize: "2.5rem", }} />,
    },
    {
      header: "Desarrollo Frontend y Backend",
      text: "Crear aplicaciones full-stack con React, TypeScript, Python y C#.",
      icon: <LayersIcon color="primary" sx={{ fontSize: "2.5rem", }} />,
    },
  ];

  const portfolioAnalystBoxSteps: { img: string, header: string, content: string, link: string }[] = [
    {
      img: sales_dashboard.src,
      header: "OdooVerse-Analytics",
      content: "Este proyecto integra Odoo, Power BI y un modelo de lenguaje (LLM) para optimizar la gestión y análisis de datos empresariales. Con esta solución, los datos almacenados en Odoo se pueden visualizar en Power BI, consultar de manera intuitiva a través del LLM y analizar utilizando técnicas de Machine Learning en Python.",
      link: "https://github.com/LennyMGarcia/OdooVerse-Analytics",
    },
    {
      img: worldBank.src,
      header: "Dashboard del Banco Mundial",
      content: "Este proyecto presenta un dashboard interactivo en Power BI utilizando datos del Banco Mundial para analizar tendencias económicas y sociales globales. El dashboard proporciona información sobre indicadores clave como el PIB, tasa de desempleo, inflación y acceso a servicios básicos.",
      link: "https://github.com/LennyMGarcia/Word-Bank-Data---PBI",
    },
    {
      img: southAsiaKaggle.src,
      header: "Análisis del Sur de Asia",
      content: "Este proyecto analiza el desarrollo socioeconómico del sur de Asia de 2000 a 2023, centrándose en indicadores clave como el PIB, empleo, acceso a servicios básicos, etc.",
      link: "https://www.kaggle.com/code/lennygarca/south-asia-growth-analysis",
    },
  ];

  const portfolioWebBoxSteps: { img: string, header: string, content: string, link: string }[] = [
    {
      img: medilog.src,
      header: "Medilog",
      content: "Se creará una aplicación basada en un problema que afecta a todas las personas que no tienen control sobre su historial clínico.",
      link: "https://github.com/Jayus1/MediLog",
    },
    {
      img: nekkoChat.src,
      header: "NekkoChat",
      content: "Es una aplicación web tipo chat y videollamadas.",
      link: "https://github.com/bentonico98/NekkoChat/tree/videocall",
    },
    {
      img: alpaca.src,
      header: "Generador de Imágenes Alpaca",
      content: "Generador de imágenes Alpaca para personalizar perfiles de usuario.",
      link: "https://github.com/LennyMGarcia/ReactCodeMentorProjects/tree/main/ReactsCodeMentor/AlpacaProject",
    },
  ];


  return (
    <>
      <Box component={"section"} id={"home"} sx={{ width: "100vw", maxWidth: "100vw", minHeight: "100vh", overflowX: "hidden", }}>

<Paper sx={{ height: "auto", padding: "6rem", paddingBottom: "0", overflow: "hidden" }}>
  <Grid container>
    <Grid item xs={12} md={6} sx={{ marginTop: "-2rem" }}>
      <Typography variant="h4" color="primary">Lenny Garcia</Typography>
      <Typography variant="h6" sx={{ paddingRight: "5rem" }}>Fullstack Dev. y Analista de datos</Typography>
      <Typography variant="body1" sx={{ marginTop: "1rem" }}>
      Como desarrollador Full Stack y analista de datos versátil, ofrezco soluciones impactantes que impulsan el éxito empresarial.
      </Typography>
    
      <Grid container spacing={1} sx={{ marginTop: "1rem" }}>
        <Grid item>
          <IconButton href="https://www.linkedin.com/in/lenny-manuel-garc%C3%ADa-ram%C3%ADrez-848346312/" target="_blank" color="primary">
            <LinkedInIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton href="https://github.com/LennyMGarcia" target="_blank" color="primary">
            <GitHubIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton sx={{marginTop:"-0.4rem"}} href="https://www.kaggle.com/lennygarca" target="_blank" color="primary">
            k
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
    
    <Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "block" } }}>
      <img alt="branch" src={branchImg.src} style={{ filter: "grayscale(100%)", marginTop: "-5rem", width: "42.438rem", height: "22.938rem" }} />
    </Grid>
  </Grid>
</Paper>


        <Box component={"section"} id={"sobre%20mi"} sx={{ padding: "5rem 6vw" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Sobre mi
          </Typography>
          <Box sx={{ display: "flex", }}>
            <HorizontalRuleIcon sx={{ fontSize: "2rem", transform: "scale(1.7, 1)", marginTop: "-0.5rem" }} color="primary" />
            <Typography variant="subtitle1" sx={{ paddingLeft: "1rem" }}>
            Soy analista de datos y desarrollador Full Stack con experiencia en Python, TypeScript, JavaScript y C#. Me especializo en la creación de aplicaciones web intuitivas y responsivas, además de desarrollar soluciones basadas en datos. Con experiencia práctica en herramientas como Pandas, NumPy, Scikit-learn y Power BI, he trabajado en modelos de aprendizaje automático, sistemas de recomendación (SVD, KNN) y análisis de datos exploratorios para respaldar la toma de decisiones basada en datos.  <br/><br/>

Además, implementé Knowledge Graphs (GraphDB, Qdrant) y desarrollé Large Language Models (LLM) básicos para la recuperación de información semántica. Mi experiencia en desarrollo web incluye trabajar en proyectos como sistemas de gestión de casos médicos y plataformas de chat en tiempo real, donde me centré en la validación de datos, pruebas unitarias y optimización del rendimiento.<br/><br/>

También tengo experiencia en bases de datos SQL y NoSQL, optimizando el almacenamiento y la gestión de datos. Mi objetivo es contribuir a equipos dinámicos donde pueda fusionar mi experiencia en aprendizaje automático, análisis de datos y desarrollo completo para impulsar la innovación y agilizar los procesos.
            </Typography>
          </Box>
        </Box>

        <Box component={"section"} id={"habilidades"} sx={{ width: "100vw", }}>
          <Typography variant="subtitle1" color="primary" sx={{ textAlign: "center", fontWeight: "bold" }}>
            Mis habilidades
          </Typography>
          <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold" }}>
            A que me dedico
          </Typography>
          <Box sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}>
            {skillBoxSteps.map((steps, index) => {
              return <SkillsBox key={steps.header + index} header={steps.header} text={steps.text} icon={steps.icon} />
            })}

          </Box>
        </Box>

        <Box component={"section"} id={"portafolio"}>
          <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold" }}>
            Portafolio
          </Typography>
          <Typography color="primary" variant="h6" sx={{ textAlign: "center", fontWeight: "bold" }}>
            Analista de Datos
          </Typography>
          <Box sx={{
            margin: "1rem",
            display: "grid",
            justifyContent: "center",
            alignItems: "center"
          }}>

            {
              portfolioAnalystBoxSteps.map((steps, index) => {
                return (
                  <PortfolioBox key={steps.header + index} img={steps.img} header={steps.header} content={steps.content} link={steps.link} />
                )
              })
            }

          </Box>
          <Typography color="primary" variant="h6" sx={{ textAlign: "center", fontWeight: "bold" }}>
            Desarrollador Fullstack
          </Typography>
          <Box sx={{
            margin: "1rem",
            display: "grid",
            justifyContent: "center",
            alignItems: "center"
          }}>

            {
              portfolioWebBoxSteps.map((steps, index) => {
                return (
                  <PortfolioBox key={steps.header + index} img={steps.img} header={steps.header} content={steps.content} link={steps.link} />
                )
              })
            }

          </Box>

        </Box>

        <Box component={"section"} id={"certificados"} sx={{ marginTop: "5rem", }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", margin: "-1.5rem 2rem", }}>
            Certificados
          </Typography>


          <Paper
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "5rem 12vw",
              paddingBottom: "10rem",
            }}
          >
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} md={4}>
                <Typography color="primary" variant="h6" sx={{ textAlign: "center", fontWeight: "bold" }}>
                  Machine Learning & AI
                </Typography>
                <ExperiencesStepper steps={[...mlSteps]} />
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography color="primary" variant="h6" sx={{ textAlign: "center", fontWeight: "bold" }}>
                  Ciencias de datos & Análisis
                </Typography>
                <ExperiencesStepper steps={[...dataScienceSteps]} />
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography color="primary" variant="h6" sx={{ textAlign: "center", fontWeight: "bold" }}>
                  Bases de datos & Programación
                </Typography>
                <ExperiencesStepper steps={[...programmingSteps]} />
              </Grid>
            </Grid>
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
        <Footer message={"Gracias por ver"}/>
      </Box>

    </>
  );
}