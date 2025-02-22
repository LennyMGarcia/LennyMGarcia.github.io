
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


export default function Home() {

  const mlSteps: ISteps[] = [
    {
      label: "Machine Learning Explainability",
      date: "2024",
      subtitle: "Kaggle Certification",
      description: "Understanding how machine learning models make predictions and ensuring transparency in AI systems."
    },
    {
      label: "Time Series Analysis",
      date: "2024",
      subtitle: "Kaggle Certification",
      description: "Exploring time series data, forecasting techniques, and trend analysis."
    },
    {
      label: "Intro to AI Ethics",
      date: "2024",
      subtitle: "Kaggle Certification",
      description: "Understanding ethical considerations in AI development and deployment."
    },
    {
      label: "Computer Vision",
      date: "2024",
      subtitle: "Kaggle Certification",
      description: "Applying deep learning techniques to image processing and recognition tasks."
    },
    {
      label: "Feature Engineering",
      date: "2024",
      subtitle: "Kaggle Certification",
      description: "Enhancing machine learning models by selecting and transforming relevant features."
    },
    {
      label: "Intermediate Machine Learning",
      date: "2024",
      subtitle: "Kaggle Certification",
      description: "Advancing ML knowledge with techniques such as XGBoost and model validation."
    }
  ];

  const programmingSteps: ISteps[] = [
    {
      label: "Python",
      date: "2024",
      subtitle: "Kaggle Certification",
      description: "Building a strong foundation in Python for data science and analytics."
    },
    {
      label: "Advanced SQL",
      date: "2024",
      subtitle: "Kaggle Certification",
      description: "Writing complex queries, optimizing performance, and handling large datasets."
    }
  ];


  const dataScienceSteps: ISteps[] = [
    {
      label: "Data Cleaning",
      date: "2024",
      subtitle: "Kaggle Certification",
      description: "Preprocessing data by handling missing values, outliers, and inconsistencies."
    },
    {
      label: "Data Visualization",
      date: "2024",
      subtitle: "Kaggle Certification",
      description: "Creating meaningful visualizations to analyze and present data effectively."
    },
    {
      label: "Pandas",
      date: "2024",
      subtitle: "Kaggle Certification",
      description: "Mastering data manipulation and analysis using the Pandas library."
    }
  ];



  const skillBoxSteps: { header: string, text: string, icon: React.ReactNode }[] = [
    {
      header: "Software Development",
      text: "Building scalable and efficient applications using modern technologies.",
      icon: <CodeIcon color="primary" sx={{ fontSize: "2.5rem", }} />,
    },
    {
      header: "Data Analysis",
      text: "Transforming raw data into meaningful insights through visualization and storytelling.",
      icon: <BarChartIcon color="primary" sx={{ fontSize: "2.5rem", }} />,
    },
    {
      header: "Machine Learning",
      text: "Developing predictive models and leveraging AI to solve real-world problems.",
      icon: <MemoryIcon sx={{ fontSize: "2.5rem", }} color="primary" />,
    },
    {
      header: "Cloud Development & Simulation",
      text: "Working with LocalStack to emulate AWS services for development and testing, gaining familiarity with cloud architectures.",
      icon: <CloudIcon color="primary" sx={{ fontSize: "2.5rem", }} />,
    },
    {
      header: "Big Data Processing",
      text: "Utilizing Apache Spark to efficiently process and analyze large datasets.",
      icon: <StorageIcon color="primary" sx={{ fontSize: "2.5rem", }} />,
    },
    {
      header: "Frontend & Backend Development",
      text: "Creating full-stack applications with React, TypeScript, Python, and C#.",
      icon: <LayersIcon color="primary" sx={{ fontSize: "2.5rem", }} />,
    },
  ];

  const portfolioAnalystBoxSteps: { img: string, header: string, content: string, link: string }[] = [
    {
      img: sales_dashboard.src,
      header: "OdooVerse-Analytics",
      content: "This project integrates Odoo, Power BI, and a language model (LLM) to optimize enterprise data management and analysis. With this solution, data stored in Odoo can be visualized in Power BI, queried intuitively through the LLM, and analyzed using Machine Learning techniques in Python. ",
      link: "https://github.com/LennyMGarcia/OdooVerse-Analytics",
    },
    {
      img: worldBank.src,
      header: "World Bank Dashboard",
      content: "This project features an interactive Power BI dashboard using World Bank data to analyze global economic and social trends. The dashboard provides insights into key indicators such as GDP, unemployment rate, inflation, and access to basic services.",
      link: "https://github.com/LennyMGarcia/Word-Bank-Data---PBI",
    },
    {
      img: southAsiaKaggle.src,
      header: "South Asia Analysis",
      content: "This project analyzes the socioeconomic development of South Asia from 2000 to 2023, focusing on key indicators such as GDP,  employment, access to basic services, etc.",
      link: "https://www.kaggle.com/code/lennygarca/south-asia-growth-analysis",
    },
  ];

  const portfolioWebBoxSteps: { img: string, header: string, content: string, link: string }[] = [
    {
      img: medilog.src,
      header: "Medilog",
      content: "An application will be created based on a problem that affects all people who do not have control over their clinical case history.",
      link: "https://github.com/Jayus1/MediLog",
    },
    {
      img: nekkoChat.src,
      header: "NekkoChat",
      content: "It is a chat and video call type web application.",
      link: "https://github.com/bentonico98/NekkoChat/tree/videocall",
    },
    {
      img: alpaca.src,
      header: "Alpaca Image Generator",
      content: "Alpaca image generator for customizing user profiles",
      link: "https://github.com/LennyMGarcia/ReactCodeMentorProjects/tree/main/ReactsCodeMentor/AlpacaProject",
    },
  ];


  return (
    <>
      <Box component={"section"} id={"home"} sx={{ width: "100vw", maxWidth: "100vw", overflowX: "hidden", }}>

        <Paper sx={{ height: "auto", padding: "6rem", paddingBottom: "0", overflow: "hidden" }}>
          <Grid container>
            <Grid item xs={12} md={6} sx={{ marginTop: "-2rem" }}>
              <Typography variant="h4" color="primary">Lenny Garcia</Typography>
              <Typography variant="h6" sx={{ paddingRight: "5rem" }}>Fullstack Dev. and Data Analyst</Typography>
              <Typography variant="body1" sx={{ marginTop: "1rem" }}>
                As a versatile Full Stack Developer and Data Analyst, I deliver impactful solutions that drive business success.
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
                  <IconButton sx={{ marginTop: "-0.4rem" }} href="https://www.kaggle.com/lennygarca" target="_blank" color="primary">
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


        <Box component={"section"} id={"about"} sx={{ padding: "5rem 6vw" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            About me
          </Typography>
          <Box sx={{ display: "flex", }}>
            <HorizontalRuleIcon sx={{ fontSize: "2rem", transform: "scale(1.7, 1)", marginTop: "-0.5rem" }} color="primary" />
            <Typography variant="subtitle1" sx={{ paddingLeft: "1rem" }}>
              I am a Data Analyst and Full Stack Developer with expertise in Python, TypeScript, JavaScript, and C#. I specialize in building intuitive and responsive web applications, alongside developing data-driven solutions. With hands-on experience in tools like Pandas, NumPy, Scikit-learn, and Power BI, I have worked on machine learning models, recommendation systems (SVD, KNN), and exploratory data analysis to support data-driven decision-making.  <br /><br />

              Additionally, I have implemented Knowledge Graphs (GraphDB, Qdrant) and developed basic Large Language Models (LLM) for semantic information retrieval. My web development experience includes working on projects like medical case management systems and real-time chat platforms, where I focused on data validation, unit testing, and performance optimization.<br /><br />

              I am also skilled in SQL and NoSQL databases, optimizing storage and data management. I aim to contribute to dynamic teams where I can merge my expertise in machine learning, data analysis, and full stack development to drive innovation and streamline processes.
            </Typography>
          </Box>
        </Box>

        <Box component={"section"} id={"skills"} sx={{ width: "100vw", }}>
          <Typography variant="subtitle1" color="primary" sx={{ textAlign: "center", fontWeight: "bold" }}>
            My Skills
          </Typography>
          <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold" }}>
            What I Do
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

        <Box component={"section"} id={"portfolio"}>
          <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold" }}>
            Portfolio
          </Typography>
          <Typography color="primary" variant="h6" sx={{ textAlign: "center", fontWeight: "bold" }}>
            Data Analyst
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
            Fullstack Developer
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

        <Box component={"section"} id={"experiences"} sx={{ marginTop: "5rem", }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", margin: "-1.5rem 2rem", }}>
            Experiences
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
                  Data Science & Analytics
                </Typography>
                <ExperiencesStepper steps={[...dataScienceSteps]} />
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography color="primary" variant="h6" sx={{ textAlign: "center", fontWeight: "bold" }}>
                  Programming & Databases
                </Typography>
                <ExperiencesStepper steps={[...programmingSteps]} />
              </Grid>
            </Grid>
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