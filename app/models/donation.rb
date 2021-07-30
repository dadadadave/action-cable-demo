class Donation < ApplicationRecord
  belongs_to :chat

  validates :amount, numericality: { greater_than: 0 }
  validates :amount, :chat, presence: true
end
