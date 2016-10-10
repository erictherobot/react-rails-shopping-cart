class CreateUserOrders < ActiveRecord::Migration
  def change
    create_table :user_orders do |t|
      t.integer :user_id, null: false, index: true
      t.integer :order_id, null: false, index: true
      t.timestamps null: false
    end

    remove_column :orders, :purchase_date, :datetime
    change_column_null :orders, :stripe_charge_id, false
  end
end
