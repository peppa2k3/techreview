import { useEffect, useState } from "react";
import Header from "./Component/Header";
import Body from "./Component/Body";
import Footer from "./Component/Footer";

// Main App
function App() {
  const [typeProduct, setTypeProduct] = useState("key");
  const owr = {
    nameWebsite: "Techreview",
    name: "Techreview",
    youtube: "Techreview",
    face: "Techreview",
    twitter: "Techreview",
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Header setTypeProduct={setTypeProduct} />
      <Body typeProduct={typeProduct} />
      <Footer owr={owr} />
    </div>
  );
}

export default App;
