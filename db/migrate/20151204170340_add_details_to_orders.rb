class AddDetailsToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :refunded, :boolean, default: false, null: false
  end
end
