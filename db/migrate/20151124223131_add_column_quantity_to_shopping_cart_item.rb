class AddColumnQuantityToShoppingCartItem < ActiveRecord::Migration
  def change
    add_column :shopping_cart_items, :quantity, :integer, null: false
  end
end
