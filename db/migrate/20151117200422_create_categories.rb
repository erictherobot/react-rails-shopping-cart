class CreateCategories < ActiveRecord::Migration
  def change
    create_table :categories do |t|
      t.string  :section,       null: false
      t.integer :department_id, null: false

      t.timestamps null: false
    end
    add_index :categories, :department_id
  end
end
