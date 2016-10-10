class Order < ActiveRecord::Base
  validates :product_id, :price, :quantity, :user_order_id, presence: true
  validates :refunded, inclusion: { in: [true, false] }
  validates :quantity, numericality: { greater_than: 0,
    message: "Quantity must be at least one" }

  belongs_to :user_order, inverse_of: :orders
end
