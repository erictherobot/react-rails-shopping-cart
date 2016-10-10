class ShoppingCartItem < ActiveRecord::Base
  validates :user_id, :product_id, :quantity, presence: true
  validates :quantity, numericality: { greater_than: 0,
    message: "Quantity must be at least one" }

  belongs_to :user, inverse_of: :shopping_cart_items
  belongs_to :product, inverse_of: :shopping_cart_items

end
