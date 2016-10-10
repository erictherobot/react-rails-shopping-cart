# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151204203643) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string   "section",       null: false
    t.integer  "department_id", null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "categories", ["department_id"], name: "index_categories_on_department_id", using: :btree

  create_table "departments", force: :cascade do |t|
    t.string   "title",          null: false
    t.integer  "parent_dept_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "departments", ["parent_dept_id"], name: "index_departments_on_parent_dept_id", using: :btree

  create_table "images", force: :cascade do |t|
    t.string   "alt",                                null: false
    t.boolean  "main_image",         default: false, null: false
    t.integer  "product_id",                         null: false
    t.datetime "created_at",                         null: false
    t.datetime "updated_at",                         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.text     "image_meta"
  end

  add_index "images", ["product_id"], name: "index_images_on_product_id", using: :btree

  create_table "orders", force: :cascade do |t|
    t.integer  "product_id",                    null: false
    t.integer  "price",                         null: false
    t.integer  "quantity",                      null: false
    t.datetime "created_at",                    null: false
    t.datetime "updated_at",                    null: false
    t.boolean  "refunded",      default: false
    t.integer  "user_order_id",                 null: false
  end

  add_index "orders", ["product_id"], name: "index_orders_on_product_id", using: :btree
  add_index "orders", ["user_order_id"], name: "index_orders_on_user_order_id", using: :btree

  create_table "products", force: :cascade do |t|
    t.string   "product_name", null: false
    t.integer  "price",        null: false
    t.text     "description",  null: false
    t.text     "specs",        null: false
    t.integer  "quantity",     null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "products_categories", force: :cascade do |t|
    t.integer  "product_id",  null: false
    t.integer  "category_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "products_categories", ["category_id"], name: "index_products_categories_on_category_id", using: :btree
  add_index "products_categories", ["product_id"], name: "index_products_categories_on_product_id", using: :btree

  create_table "shipping_addresses", force: :cascade do |t|
    t.integer  "user_id",      null: false
    t.string   "full_name",    null: false
    t.string   "address_one",  null: false
    t.string   "address_two"
    t.string   "city",         null: false
    t.string   "region",       null: false
    t.integer  "zip",          null: false
    t.integer  "phone_number"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "shipping_addresses", ["user_id"], name: "index_shipping_addresses_on_user_id", using: :btree

  create_table "shopping_cart_items", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "product_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "quantity",   null: false
  end

  add_index "shopping_cart_items", ["product_id"], name: "index_shopping_cart_items_on_product_id", using: :btree
  add_index "shopping_cart_items", ["user_id"], name: "index_shopping_cart_items_on_user_id", using: :btree

  create_table "user_orders", force: :cascade do |t|
    t.integer  "user_id",          null: false
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.integer  "purchase_total",   null: false
    t.string   "stripe_charge_id", null: false
  end

  add_index "user_orders", ["stripe_charge_id"], name: "index_user_orders_on_stripe_charge_id", using: :btree
  add_index "user_orders", ["user_id"], name: "index_user_orders_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",              null: false
    t.string   "password_digest",    null: false
    t.string   "session_token",      null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "full_name",          null: false
    t.string   "stripe_customer_id"
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree
  add_index "users", ["stripe_customer_id"], name: "index_users_on_stripe_customer_id", using: :btree

end
