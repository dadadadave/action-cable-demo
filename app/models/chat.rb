class Chat < ApplicationRecord
  has_many :messages, dependent: :destroy

  validates :name, presence: true, uniqueness: true

  def latest_messages
    messages.order(created_at: :desc).limit(3).reverse
  end

  def more_messages?
    messages.count > 3
  end
end
