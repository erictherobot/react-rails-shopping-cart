class ChangeDetailsOnOrder < ActiveRecord::Migration
  def change
    rename_column :orders, :user_orders_id, :user_order_id
  end
end
