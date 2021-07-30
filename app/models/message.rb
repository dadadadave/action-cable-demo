class Message < ApplicationRecord
  belongs_to :chat

  validates :body, :author, :chat, presence: true
end
