class Changeimagescolumn < ActiveRecord::Migration
  def change
    change_column_default :images, :main_image, false
  end
end
