class CreatePokemon < ActiveRecord::Migration[5.1]
  def change
    create_table :pokemon do |t|
      t.string :dex
      t.string :name
      t.text :description
	  t.string :maxcp
      t.string :attack
      t.string :defense
      t.string :stamina
      t.string :types

      t.timestamps
    end
  end
end
