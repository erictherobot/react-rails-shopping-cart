class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string  :product_name, null: false
      t.integer :price,        null: false
      t.text    :description,  null: false
      t.text    :specs,        null: false
      t.integer :quantity,     null: false

      t.timestamps null: false
    end
  end
end
