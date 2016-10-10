class ShippingAddress < ActiveRecord::Base
  validates :user_id, :full_name, :address_one, :city, :region, :zip, presence: true

  belongs_to :user, inverse_of: :shipping_addresses
end
