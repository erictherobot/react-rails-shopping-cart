class ChangeUserTable < ActiveRecord::Migration
  def change
    change_table :users do |t|
      t.remove :first_name, :last_name
      t.string :full_name, null: false
    end
  end
end
