class Department < ActiveRecord::Base
  validates :title, presence: true
  validates :title, uniqueness: true

  belongs_to :parent_department, inverse_of: :sub_departments, class_name: "Department", foreign_key: :parent_dept_id
  has_many :sub_departments, inverse_of: :parent_department, class_name: "Department", foreign_key: :parent_dept_id

  has_many :categories, inverse_of: :sub_department, class_name: "Category", foreign_key: :department_id
  has_many :products, through: :categories, source: :products


  def self.featured_products ## finds the 2 subdepartments with the most products
    Department
      .joins(categories: { products_categories: { product: :images }})
      .group("departments.id")
      .order("COUNT(products.id) DESC")
      .limit(2)
      .includes(products: :images)
  end

end
