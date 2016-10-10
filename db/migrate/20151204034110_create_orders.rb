class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.integer :product_id, null: false
      t.datetime :purchase_date, null: false
      t.integer :price, null: false
      t.integer :quantity, null: false

      t.timestamps null: false
    end
    add_index :orders, :product_id
  end
end
