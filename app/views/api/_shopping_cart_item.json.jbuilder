json.extract!(shopping_cart_item, :id, :quantity)
json.product do
  json.extract!(shopping_cart_item.product, :id, :product_name, :quantity, :price)

  json.image do
    json.partial! "api/products/image", image: shopping_cart_item.product.images[0], res: [:carousel]
  end
end
