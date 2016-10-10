class Image < ActiveRecord::Base
  validates :alt, :product, presence: true
  validates :image_file_name, uniqueness: true
  has_attached_file :image,
    styles: {
      large: ["x900", :jpg],
      medium: ["600x600>", :jpg],
      thumb: ["80x80>#", :jpg],
      carousel: ["270x270>", :jpg],
    },
    default_url: "./assets/images/default/default.jpg"

  validates_attachment_content_type :image,
    content_type: /\Aimage\/.*\Z/

  belongs_to :product, inverse_of: :images


  def already_exists(product)
    Image.find_by(image_file_name: image_file_name)
  end

end
