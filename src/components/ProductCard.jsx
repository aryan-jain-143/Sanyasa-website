import theme from '../styles/theme'

function ProductCard({ product }) {
  return (
    <article
      className="group overflow-hidden border transition-transform duration-300 hover:-translate-y-0.5"
      style={{
        borderRadius: theme.radius.xl,
        boxShadow: theme.shadows.luxe,
        borderColor: `${theme.colors.offWhite}1a`,
        backgroundColor: `${theme.colors.offWhite}08`
      }}
    >
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-72 w-full object-cover transition duration-500 ease-out group-hover:scale-105 sm:h-80"
          loading="lazy"
        />
      </div>
      <div className="space-y-2 px-5 py-4">
        <h3 className="font-serif text-lg" style={{ color: theme.colors.offWhite }}>
          {product.name}
        </h3>
        <p className="text-sm uppercase tracking-[0.12em]" style={{ color: theme.colors.beige }}>
          {product.price}
        </p>
      </div>
    </article>
  )
}

export default ProductCard
