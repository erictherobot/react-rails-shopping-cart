class Changefullname < ActiveRecord::Migration
  def change
    change_table :users do |t|
      t.rename :full_name, :first_name
    end
  end
end
