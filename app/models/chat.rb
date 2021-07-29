class Chat < ApplicationRecord
  validates :name, presence: true, uniqueness: true
end
