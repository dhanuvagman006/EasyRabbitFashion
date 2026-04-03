export async function fetchProducts() {
  const response = await fetch('/datasets/products.json')

  if (!response.ok) {
    throw new Error('Failed to load products')
  }

  return response.json()
}
