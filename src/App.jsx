import { useState } from "react";
import "./App.css";
import Header from "./Component/header";
import Body from "./Component/Body";
import Footer from "./Component/Footer";
function App() {
  const [typeProduct, setTypeProduct] = useState("key");
  const owr = {
    nameWebsite: "nghienphimco",
    name: "nghienphimco",
    youtube: "ngienphimco",
    face: "ngienphimco",
    twitter: "ngienphimco",
  };
  return (
    <div>
      <Header setTypeProduct={setTypeProduct} />
      <Body typeProduct={typeProduct} />
      <Footer owr={owr} />
    </div>
  );
}

export default App;
