const products = [
  {
    id: 1,
    name: 'Noir Balance I',
    price: '$180',
    image:
      'https://images.unsplash.com/photo-1622737133809-d95047b9e673?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 2,
    name: 'Champagne Horizon',
    price: '$220',
    image:
      'https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 3,
    name: 'Quiet Geometry',
    price: '$195',
    image:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 4,
    name: 'Ivory Contour',
    price: '$240',
    image:
      'https://images.unsplash.com/photo-1616594039964-3f5b6f5f7dcb?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 5,
    name: 'Monochrome Drift',
    price: '$210',
    image:
      'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 6,
    name: 'Sand Atelier',
    price: '$260',
    image:
      'https://images.unsplash.com/photo-1617104551722-3b2d5136642f?auto=format&fit=crop&w=1200&q=80'
  }
]

export function getProducts() {
  return products
}

// Maintains compatibility with the initial scaffold API shape to avoid merge collisions.
export function getFeaturedCollections() {
  return products.slice(0, 2).map(({ id, name }) => ({ id, title: name }))
}
