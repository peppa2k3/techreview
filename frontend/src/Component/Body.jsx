import { useEffect, useState } from "react";
import CsvReader from "../Controller/ReadData";
import ProductCard from "./ProductCard";
import ScrollButton from "./ScrollButton";
// Body Component
function Body({ typeProduct }) {
  const [data, setData] = useState([]);
  const [listProduct, setListProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setListProduct(data.filter((item) => item?.type === typeProduct));
    console.log(data);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [typeProduct, data]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
      {/* Animated background */}
      <ScrollButton />
      <CsvReader data={data} setData={setData} filePath="./linkAf.csv" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
              <div className="absolute inset-2 border-4 border-blue-400/20 border-t-blue-400 rounded-full animate-spin-slow"></div>
            </div>
            <p className="text-blue-400 text-xl font-semibold animate-pulse">
              Đang tải sản phẩm...
            </p>
          </div>
        ) : listProduct.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-400 text-xl">Không có sản phẩm nào</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {listProduct.map((product, index) => (
              <ProductCard key={index} product={product} index={index} />
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin-slow {
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-spin-slow {
          animation: spin-slow 2s linear infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </main>
  );
}

export default Body;
