import ProductCard from '../components/ProductCard'
import { getProducts } from '../services/api'

function ShopPage() {
  const products = getProducts()

  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.22em] text-champagne">Shop Collection</p>
        <h1 className="font-serif text-4xl text-pearl md:text-5xl">Curated Fine Art Prints</h1>
        <p className="max-w-2xl text-pearl/70">
          Discover gallery-grade editions designed with a restrained, luxury minimal mood.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default ShopPage
