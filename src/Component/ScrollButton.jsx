import { Button } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

function ScrollButton() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Lấy chiều cao của viewport
      const windowHeight = window.innerHeight;
      // Kiểm tra nếu đã cuộn hơn 2 lần chiều cao viewport
      setShowButton(window.scrollY > 2 * windowHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () => {
    document.getElementById("header")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    showButton && (
      <Button
        variant="contained"
        color="secondary"
        onClick={scrollToTop}
        sx={{
          padding: 3,
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
        }}
      >
        ^
      </Button>
    )
  );
}

export default ScrollButton;
