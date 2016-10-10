class ProductsCategory < ActiveRecord::Base
  validates :product, :category, presence: true
  validates :product_id, uniqueness: { scope: :category_id,
    message: "category already contains this product" }

  belongs_to :product, inverse_of: :products_categories
  belongs_to :category, inverse_of: :products_categories
end
