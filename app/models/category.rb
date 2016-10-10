class Category < ActiveRecord::Base
  validates :section, :department_id, presence: true
  validates :section, uniqueness: true

  validate :must_belong_to_a_subdepartment

  belongs_to :sub_department, inverse_of: :categories, class_name: "Department", foreign_key: :department_id
  has_many :products_categories, inverse_of: :category
  has_many :products, through: :products_categories, source: :product


  def create_product(*params)
    product = products.create(
      product_name: params[0],
      price: params[1],
      description: params[2],
      specs: params[3],
      quantity: params[4]
    )

    product.errors.empty? ? product : product.already_exists(self)
  end

  private

    def must_belong_to_a_subdepartment
      if !Department.find(self.department_id).parent_department
        errors.add(:department_id, "can't be a parent department")
      end
    end

end
