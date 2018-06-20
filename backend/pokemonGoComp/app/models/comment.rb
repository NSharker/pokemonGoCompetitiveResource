class Comment < ApplicationRecord
  belongs_to :pokemon
  default_scope -> { order(created_at: :desc) }
  validates :pokemon_id, presence:true
end
