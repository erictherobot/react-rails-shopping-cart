json.extract!( @product, :id, :product_name, :price, :description, :stock )

json.specs do
  json.array! @product.specs.split(".")
end
json.images do
  json.array! @product.images do |image|
      json.partial! "image", image: image, res: [:medium, :thumb]

  end
end
