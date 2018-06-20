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

ActiveRecord::Schema.define(version: 20180620145923) do

  create_table "comments", force: :cascade do |t|
    t.string "author"
    t.text "content"
    t.string "sentiment"
    t.integer "pokemon_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["pokemon_id", "created_at"], name: "index_comments_on_pokemon_id_and_created_at"
    t.index ["pokemon_id"], name: "index_comments_on_pokemon_id"
  end

  create_table "pokemon", force: :cascade do |t|
    t.string "dex"
    t.string "name"
    t.text "description"
    t.string "maxcp"
    t.string "attack"
    t.string "defense"
    t.string "stamina"
    t.string "types"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
