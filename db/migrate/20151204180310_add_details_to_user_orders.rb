class AddDetailsToUserOrders < ActiveRecord::Migration
  def change
    add_column :user_orders, :purchase_total, :integer, null: false
    add_column :user_orders, :stripe_charge_id, :string, null: false, index: true
    remove_column :user_orders, :order_id, :integer

    add_column :orders, :user_orders_id, :integer, null: false, index: true
    remove_column :orders, :stripe_charge_id, :string
  end
end
