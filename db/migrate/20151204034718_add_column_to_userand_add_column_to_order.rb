class AddColumnToUserandAddColumnToOrder < ActiveRecord::Migration
  def change
    add_column :users, :stripe_customer_id, :string, index: true
    add_column :orders, :stripe_charge_id, :string, index: true
  end
end
