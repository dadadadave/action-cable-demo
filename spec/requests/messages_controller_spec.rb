require 'rails_helper'

RSpec.describe MessagesController, type: :request do
  describe 'POST #create' do
    subject(:action) { post chat_messages_path(chat.name, message: { body: body, author: author }, format: :json) }

    let(:chat) { create(:chat) }
    let(:body) { 'some body' }
    let(:author) { 'Some Person' }

    it 'creates a new message' do
      expect { action }.to change(Message, :count)
      message = Message.last
      expect(message.chat).to eq(chat)
      expect(message.body).to eq(body)
      expect(message.author).to eq(author)
    end

    it 'responds with success' do
      action
      expect(response).to be_successful
    end
  end
end
