import { Container, Typography, Box, IconButton } from "@mui/material";
import { YouTube, Facebook, Twitter } from "@mui/icons-material";

function Footer({ owr }) {
  return (
    <Box
      sx={{
        mt: 10,
        backgroundColor: "#999fff",
        padding: "20px",
        textAlign: "center",
      }}
    >
      {/* Tên */}
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        {owr?.nameWebsite || "Tên trang web"}
      </Typography>

      {/* Mạng xã hội */}
      <Box sx={{ marginY: 1 }}>
        <IconButton
          component="a"
          href={owr?.youtube}
          target="_blank"
          rel="noopener noreferrer"
          color="error"
        >
          <YouTube />
        </IconButton>

        <IconButton
          component="a"
          href={owr?.face}
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
        >
          <Facebook />
        </IconButton>

        <IconButton
          component="a"
          href={owr?.twitter}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#1DA1F2" }}
        >
          <Twitter />
        </IconButton>
      </Box>

      {/* Copyright */}
      <Typography variant="body2" color="textSecondary">
        Copyright © {new Date().getFullYear()} by {owr?.name}
      </Typography>
    </Box>
  );
}

export default Footer;
