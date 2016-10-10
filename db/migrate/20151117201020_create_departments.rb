class CreateDepartments < ActiveRecord::Migration
  def change
    create_table :departments do |t|
      t.string  :title,          null: false
      t.integer :parent_dept_id

      t.timestamps null: false
    end
    add_index :departments, :parent_dept_id
  end
end
