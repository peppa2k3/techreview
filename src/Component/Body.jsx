import { Grid } from "@mui/material";
import ItemLink from "./ItemLink";
import { useEffect, useState } from "react";

import CsvReader from "../Controller/ReadData";
function Body({ typeProduct }) {
  const [data, setData] = useState([]);
  const [listProduct, setListProduct] = useState(data);

  function handleClickProduct(link) {
    // Your code here to open link in new tab
    window.open(link, "_blank");
  }
  useEffect(() => {
    setListProduct(data.filter((item) => item?.type === typeProduct));
  }, [typeProduct, data]);

  return (
    <>
      <CsvReader data={data} setData={setData} filePath="/linkAf.csv" />{" "}
      <Grid container justifyContent="center" spacing={2} sx={{ flexGrow: 1 }}>
        {listProduct.length === 0 ? (
          <div>Loading...</div>
        ) : (
          listProduct.map((product, index) => (
            <ItemLink key={index} product={product} />
          ))
        )}
      </Grid>
    </>
  );
}

export default Body;
