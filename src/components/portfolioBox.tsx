import { Link } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const PortfolioBox = ({
  img,
  header,
  content,
  link,
}: {
  img: string;
  header: string;
  content: string;
  link: string;
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        margin: "2rem auto", 
        width: "100%", 
        maxWidth: "45rem", 
        height: "auto", 
        cursor: "pointer",
        overflow: "hidden",
        "& img": {
          width: "100%",
          height: "auto", 
          objectFit: "cover", 
        },
        "&:hover .hover-content": {
          opacity: 1,
          transform: "translateY(0)",
        },
      }}
    >
      <img alt="Dashboard" src={img} />

      <Box
        className="hover-content"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.6)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "1rem", 
          opacity: 0,
          transform: "translateY(100%)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          gap: "1rem",
        }}
      >
        <Typography color="primary" variant="h4" fontWeight="bold">
          {header}
        </Typography>
        <Typography variant="body1">{content}</Typography>
        <Link
          href={link}
          underline="none"
          sx={{
            color: "white",
            fontSize: "1.2rem",
            fontWeight: "bold",
            padding: "0.5rem 1rem",
            background: "rgba(255, 255, 255, 0.2)",
            borderRadius: "0.5rem",
            marginTop: "1rem",
            transition: "background 0.3s",
            "&:hover": {
              background: "rgba(255, 255, 255, 0.4)",
            },
          }}
        >
          Ver más
        </Link>
      </Box>
    </Box>
  );
};

