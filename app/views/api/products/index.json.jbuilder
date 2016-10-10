json.array! @feature_products do |feature|

  json.partial! "department", feature: feature


end
