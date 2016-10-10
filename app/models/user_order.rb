class UserOrder < ActiveRecord::Base
  validates :user_id, :purchase_total, :stripe_charge_id, presence: true

  belongs_to :user, inverse_of: :user_orders
  has_many :orders, inverse_of: :user_order

  def save_order_manifest(shopping_cart_items)
    shopping_cart_items.each do |item|
      orders.create!(
        product_id: item.product.id,
        price: item.product.price,
        quantity: item.quantity,
        refunded: false
        )
    end
  end
end
