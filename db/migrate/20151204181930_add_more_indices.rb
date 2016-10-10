class AddMoreIndices < ActiveRecord::Migration
  def change
    add_index :images, :product_id
    add_index :users, :stripe_customer_id
  end
end
