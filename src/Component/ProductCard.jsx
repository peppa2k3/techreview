// Product Card Component
function ProductCard({ product, index }) {
  function handleClickProduct(link) {
    window.open(link, "_blank");
  }

  return (
    <div
      onClick={() => handleClickProduct(product?.link)}
      style={{ animationDelay: `${index * 50}ms` }}
      className="group cursor-pointer animate-fadeInUp"
    >
      <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-2xl overflow-hidden border-2 border-slate-700/50 transition-all duration-300 hover:border-blue-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 backdrop-blur-sm">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-600/0 group-hover:from-blue-500/10 group-hover:to-blue-600/10 transition-all duration-500"></div>

        {/* Content */}
        <div className="relative p-5">
          {/* Image */}
          <div className="relative mb-4 rounded-xl overflow-hidden bg-slate-900/50 aspect-square">
            <img
              src={product?.img}
              alt={product?.name || "product"}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            {product?.sale && (
              <div className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                🔥 Hot
              </div>
            )}
          </div>

          {/* Product Name */}
          <h3 className="text-white font-bold text-lg mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors">
            {product?.name}
          </h3>

          {/* Properties */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {[1, 2, 3, 4, 5, 6].map((num) => {
              const prop = product?.[`properties${num}`];
              return prop ? (
                <div
                  key={num}
                  className="text-slate-400 text-sm bg-slate-800/50 px-3 py-1.5 rounded-lg border-l-2 border-blue-500/50 hover:border-blue-500 hover:bg-slate-700/50 transition-all"
                >
                  {prop}
                </div>
              ) : null;
            })}
          </div>
        </div>

        {/* Price Button */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-400/50 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          <button className="relative w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-4 text-lg hover:from-blue-600 hover:to-blue-700 transition-all">
            {product?.price || "Liên hệ"}
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
