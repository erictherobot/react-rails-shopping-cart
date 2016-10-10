
json.extract! feature, :id, :title
json.products do

  json.array! feature.products.uniq do |product|

    json.partial! "products", product: product
  end
end
