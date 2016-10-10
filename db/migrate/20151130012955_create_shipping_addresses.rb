class CreateShippingAddresses < ActiveRecord::Migration
  def change
    create_table :shipping_addresses do |t|
      t.integer :user_id, null: false
      t.string :full_name, null: false
      t.string :address_one, null: false
      t.string :address_two
      t.string :city, null: false
      t.string :region, null: false
      t.integer :zip, null: false
      t.integer :phone_number

      t.timestamps null: false
    end
    add_index :shipping_addresses, :user_id
  end
end
