# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_03_19_181944) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admins", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "meal_plans", force: :cascade do |t|
    t.string "name"
    t.integer "quantity"
    t.integer "total_price"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "visible"
    t.bigint "admin_id", null: false
    t.index ["admin_id"], name: "index_meal_plans_on_admin_id"
  end

  create_table "menu_items", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "image_url"
    t.integer "preparation_time"
    t.boolean "visible"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "restaurant_id", null: false
    t.index ["restaurant_id"], name: "index_menu_items_on_restaurant_id"
  end

  create_table "restaurants", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.string "image_url"
    t.string "icon_url"
    t.text "address"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "admin_id", null: false
    t.boolean "live"
    t.index ["admin_id"], name: "index_restaurants_on_admin_id"
  end

  create_table "restaurants_meal_plans", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "restaurant_id", null: false
    t.bigint "meal_plan_id", null: false
    t.index ["meal_plan_id"], name: "index_restaurants_meal_plans_on_meal_plan_id"
    t.index ["restaurant_id"], name: "index_restaurants_meal_plans_on_restaurant_id"
  end

  add_foreign_key "meal_plans", "admins"
  add_foreign_key "menu_items", "restaurants"
  add_foreign_key "restaurants", "admins"
  add_foreign_key "restaurants_meal_plans", "meal_plans"
  add_foreign_key "restaurants_meal_plans", "restaurants"
end
