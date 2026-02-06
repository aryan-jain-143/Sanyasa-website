function ProductCard({ product }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-luxe transition-transform duration-300 hover:-translate-y-0.5">
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-72 w-full object-cover transition duration-500 ease-out group-hover:scale-105 sm:h-80"
          loading="lazy"
        />
      </div>
      <div className="space-y-2 px-5 py-4">
        <h3 className="font-serif text-lg text-pearl">{product.name}</h3>
        <p className="text-sm uppercase tracking-[0.12em] text-champagne">{product.price}</p>
      </div>
    </article>
  )
}

export default ProductCard
