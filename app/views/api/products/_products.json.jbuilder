
json.extract! product, :id, :product_name, :price
json.image do
  json.array! product.images do |image|
    if image.main_image
      json.partial! "image", image: image, res: [:carousel]
    end
  end
end
