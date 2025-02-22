"use client";
import { useTheme } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export default function SkillsBox({
    icon,
    header,
    text
  }: {
    icon: React.ReactNode,
    header: string,
    text: string,
  }
  ) {
    const theme = useTheme()
    return (
      <Paper sx={{
        borderRadius: "0.5rem",
        margin: "2rem",
        width: "20rem",
        height: "16rem",
        padding:"2rem",
      }}>
        {/* <img alt="" src={img}  width={112} height={112}/> */}

        {/* <StackedLineChartIcon sx={{color: theme.palette.primary.main}}/> */}
        {icon}
        <Typography sx={{ color:"primary" }} variant="h6">{header}</Typography>
        <Typography variant="subtitle2">{text}</Typography>
      </Paper>
    )
  }