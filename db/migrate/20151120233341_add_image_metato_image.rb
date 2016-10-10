class AddImageMetatoImage < ActiveRecord::Migration
  def change
    add_column :images, :image_meta, :text
  end
end
