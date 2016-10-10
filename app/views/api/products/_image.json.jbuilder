

json.extract! image, :id, :alt, :main_image
json.url asset_path(image.image.url(res[0]))
json.thumb_url asset_path(image.image.url(res[1]))
json.width image.image.width(res[0])
json.height image.image.height(res[0])
