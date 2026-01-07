import { Button, Grid, Typography } from "@mui/material";

function ItemLink({ product }) {
  function handleClickProduct(link) {
    // Your code here to open link in new tab
    window.open(link, "_blank");
  }
  return (
    <Grid
      size={{ xs: 12, sm: 6 }}
      sx={{ p: 1 }}
      onClick={() => handleClickProduct(product?.link)}
    >
      <Grid
        container
        spacing={1}
        sx={{
          maxWidth: 800,
          minWidth: 200,
          backgroundColor: "#000",
          borderRadius: 3,
        }}
      >
        {/* Grid item chính */}
        <Grid size={{ xs: 12, sm: 6 }} sx={{ p: 1 }}>
          <img
            src={product?.img}
            alt="image"
            style={{
              width: "100%", // Chiếm toàn bộ chiều rộng của Grid
              maxWidth: 250, // Giữ giới hạn khi màn hình lớn
              height: "auto", // Tự động giữ tỷ lệ ảnh
            }}
          />
        </Grid>

        {/* Grid item chứa một Grid container khác */}
        <Grid size={{ xs: 12, sm: 6 }} sx={{ pt: 2 }}>
          <Typography variant="h5" sx={{ color: "white" }}>
            {product?.name}
          </Typography>
          <Grid
            container
            spacing={3}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ pt: 2 }}
          >
            <Grid>
              <Typography variant="h6" sx={{ color: "white" }}>
                {product?.properties1}
              </Typography>
              <Typography variant="h6" sx={{ color: "white" }}>
                {product?.properties3}
              </Typography>
              <Typography variant="h6" sx={{ color: "white" }}>
                {product?.properties5}
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="h6" sx={{ color: "white" }}>
                {product?.properties2}
              </Typography>
              <Typography variant="h6" sx={{ color: "white" }}>
                {product?.properties4}
              </Typography>
              <Typography variant="h6" sx={{ color: "white" }}>
                {product?.properties6}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        sx={{
          width: "100%",
          color: "black",
          fontSize: 20,
          fontWeight: "bold",
          backgroundColor: "rgb(211, 215, 195)",
          minHeight: 50,
          borderRadius: 3,
        }}
      >
        <span>
          {product?.price || "price"}
          {product?.sale && "(bán chạy)"}
        </span>
      </Button>
    </Grid>
  );
}

export default ItemLink;
