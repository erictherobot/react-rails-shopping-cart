class Addindextoorder < ActiveRecord::Migration
  def change
    add_index :user_orders, :stripe_charge_id
    add_index :orders, :user_orders_id
  end
end
