import { Link, useParams } from 'react-router-dom'
import { getProducts } from '../services/api'
import theme from '../styles/theme'

function ProductDetailPage() {
  const { id } = useParams()
  const products = getProducts()
  const product = products.find((item) => String(item.id) === id)

  if (!product) {
    return (
      <section className="space-y-4">
        <h1 className="font-serif text-3xl" style={{ color: theme.colors.offWhite }}>
          Product Not Found
        </h1>
        <p style={{ color: theme.colors.mutedGrey }}>
          The product you are looking for is unavailable.
        </p>
        <Link className="inline-block text-sm uppercase tracking-[0.12em]" style={{ color: theme.colors.beige }} to="/shop">
          Back to Shop
        </Link>
      </section>
    )
  }

  return (
    <section className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
      <div
        className="overflow-hidden"
        style={{
          borderRadius: theme.radius.xl,
          boxShadow: theme.shadows.elevated
        }}
      >
        <img src={product.image} alt={product.name} className="h-full min-h-[380px] w-full object-cover" />
      </div>

      <div className="flex flex-col justify-center space-y-6">
        <div className="space-y-3">
          <h1 className="font-serif text-4xl md:text-5xl" style={{ color: theme.colors.offWhite }}>
            {product.name}
          </h1>
          <p className="text-lg tracking-wide" style={{ color: theme.colors.beige }}>
            {product.price}
          </p>
          <p className="max-w-xl leading-7" style={{ color: theme.colors.mutedGrey }}>
            A gallery-grade premium print crafted for refined, contemporary interiors. Each piece is designed with a
            quiet luxury sensibility and produced on museum-quality paper.
          </p>
        </div>

        <button
          type="button"
          className="w-full px-6 py-4 text-sm uppercase tracking-[0.16em] md:w-fit"
          style={{
            borderRadius: theme.radius.md,
            boxShadow: theme.shadows.soft,
            backgroundColor: theme.colors.beige,
            color: theme.colors.black
          }}
        >
          Add to Cart
        </button>
      </div>
    </section>
  )
}

export default ProductDetailPage
