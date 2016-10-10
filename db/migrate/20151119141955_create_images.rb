class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string  :alt,        null: false
      t.boolean :main_image, null: false
      t.integer :product_id, null: false
      t.timestamps           null: false
    end
  end
end
