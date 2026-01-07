import { Card, Grid, Typography } from "@mui/material";
import ScrollButton from "./ScrollButton";

function Header({ setTypeProduct }) {
  function handleSetTypeProduct(type) {
    setTypeProduct(type);
    console.log(type);
  }
  return (
    <>
      <ScrollButton />
      <Typography
        variant="h1"
        id="header"
        // style="color: rgb(199, 203, 203);margin-bottom: 50px;margin-top: 30px;"
        style={{
          // backgroundColor: "#4f4f",
          color: "rgb(199, 203, 203)",
          textAlign: "center",
          paddingBottom: 5,
          fontWeight: "bold",
          fontStyle: "italic",
        }}
        onClick={() => {
          handleSetTypeProduct("key");
        }}
      >
        NGHIENPHIMCO
      </Typography>
      <Grid container justifyContent={"center"} spacing={2}>
        <Grid size={6}>
          <Card
            sx={{
              backgroundColor: "#C1C8F4",
              color: "#000",
              fontWeight: "bold",
              fontStyle: "italic",
              fontSize: "1.2rem",
              mb: "1rem",
              minHeight: "5rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 4,
            }}
            onClick={() => {
              handleSetTypeProduct("key");
            }}
          >
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.cAMcalzDUC8GuYuTTIfzSQHaHa&pid=Api&P=0&h=180"
              style={{ width: 40, height: 40, marginRight: 5 }}
            />
            Keyboard
          </Card>
          <Card
            sx={{
              backgroundColor: "#C1C8D5",
              color: "#000",
              fontWeight: "bold",
              fontStyle: "italic",
              fontSize: "1.2rem",
              mb: "1rem",
              minHeight: "5rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 4,
            }}
            onClick={() => {
              handleSetTypeProduct("switch");
            }}
          >
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.hA657DkJInavqzQOLuCWaQHaHa&pid=Api&P=0&h=180"
              style={{ width: 40, height: 40, marginRight: 5 }}
            />
            Switch
          </Card>{" "}
          <Card
            sx={{
              backgroundColor: "#C1E8F4",
              color: "#000",
              fontWeight: "bold",
              fontStyle: "italic",
              fontSize: "1.2rem",
              mb: "1rem",
              minHeight: "5rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 4,
            }}
            onClick={() => {
              handleSetTypeProduct("noithat");
            }}
          >
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.ONW-nlDOqWyiS4cxTrsWHAHaHa&pid=Api&P=0&h=180"
              style={{ width: 40, height: 40, marginRight: 5 }}
            />
            Decor
          </Card>
        </Grid>
        <Grid size={6}>
          <Card
            sx={{
              backgroundColor: "#C1F8F4",
              color: "#000",
              fontWeight: "bold",
              fontStyle: "italic",
              fontSize: "1.2rem",
              mb: "1rem",
              minHeight: "5rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 4,
            }}
            onClick={() => {
              handleSetTypeProduct("kit");
            }}
          >
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.kE99l5rZQLjXNiA6NXntAAHaHa&pid=Api&P=0&h=180"
              style={{ width: 40, height: 40, marginRight: 5 }}
            />
            Kit
          </Card>{" "}
          <Card
            sx={{
              backgroundColor: "#0bfff9",
              color: "#000",
              fontWeight: "bold",
              fontStyle: "italic",
              fontSize: "1.2rem",
              mb: "1rem",
              minHeight: "5rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 4,
            }}
            onClick={() => {
              handleSetTypeProduct("keycap");
            }}
          >
            <img
              src="https://down-vn.img.susercontent.com/file/cn-11134207-7ras8-m25ilbd82ef207.webp"
              style={{ width: 40, height: 40, marginRight: 5 }}
            />
            Keycap đẹp
          </Card>{" "}
          <Card
            sx={{
              backgroundColor: "#Caf8F4",
              color: "#000",
              fontWeight: "bold",
              fontStyle: "italic",
              fontSize: "1.2rem",
              mb: "1rem",
              minHeight: "5rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 4,
            }}
            onClick={() => {
              handleSetTypeProduct("nothing");
            }}
          >
            <img
              src="https://img.lovepik.com/element/45006/1576.png_860.png"
              style={{ width: 40, height: 40, marginRight: 5 }}
            />
            Phụ kiện
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
