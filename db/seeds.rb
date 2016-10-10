# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create!(
  full_name: "Eric David Smith",
  email: "erictherobot@gmail.com",
  email_confirmation: "erictherobot@gmail.com",
  password: "password",
  password_confirmation: "password"
  )

User.first.shipping_addresses.create!(
  full_name: User.first.full_name,
  address_one: "594 Broadway",
  address_two: "Suite 1212",
  city: "New York",
  region: "NY",
  zip: 10012
  )

# Demo User #

User.create!(
  full_name: "Eric David Smith",
  email: "erictherobot+1@gmail.com",
  email_confirmation: "erictherobot+1@gmail.com",
  password: "password",
  password_confirmation: "password"
)

###

5.times do
  email = Faker::Internet.email
  user = User.create!(
    full_name: Faker::Name.name,
    email:      email,
    email_confirmation: email,
    password:   "password",
    password_confirmation: "password"
  )
  puts "User: " + user.full_name

end

def construct_products_and_images(current_dir, category, *args)
  current_dir.path =~ /sub$/ ? main = false : main = true
  product = args[0]

  current_dir.each do |imagery|
    next if imagery =~ /^\./

    if imagery =~ /\.jpg$/ || imagery =~ /\.png$/
      if product.nil?
        name =
          category.sub_department.title + " " +
          imagery.slice(/([[:alnum:]]+)\s?_?\.jpg/, 1)

        prod = category.create_product(
          name,
          Faker::Commerce.price * 100,
          Faker::Lorem.paragraph,
          Faker::Lorem.paragraph,
          rand(0...100)
        )
      end
      image_file = File.new(current_dir.path + "/" + imagery)
      if prod
        puts "Product: " + prod.product_name + " in Category: " +
          category.section
        image = prod.create_image(main, image_file)
      else
        image = product.create_image(main, image_file)
      end
      puts "Image_file_name: " + image.image_file_name
    else

      last = Product.last if current_dir.path =~ /-main$/

      next_directory = Dir.new(current_dir.path + "/" + imagery)
      construct_products_and_images(next_directory, category, last)
    end
  end
end

path = Rails.root.to_s + "/app/assets/images/products"
parent_department = Department.create!(title: "Some Category")
puts "Parent Department: " + parent_department.title

parent_dir = Dir.new(path)
parent_dir.each do |dept_folder|
  next if dept_folder =~ /^\./ || dept_folder == "default"

  dept = parent_department.sub_departments.create!(title: dept_folder.capitalize)
  dept_dir = Dir.new(parent_dir.path + "/" + dept_folder)
  puts "Department: " + dept.title

  dept_dir.each do |cat_folder|
    next if cat_folder =~ /^\./ || cat_folder == "default"
    cat = dept.categories.create!(section: cat_folder.capitalize)
    cat_dir = Dir.new(dept_dir.path + "/" + cat_folder)
    puts "Category: " + cat.section

    construct_products_and_images(cat_dir, cat)
  end
end
