require 'rails_helper'

RSpec.describe ChatsController, type: :request do
  describe 'POST #create' do
    subject(:action) { post chats_path(chat: { name: 'cats' }, format: :json) }

    context 'when the chat already exists' do
      before { create(:chat, name: 'cats') }

      it 'does not create a new chat' do
        expect { action }.not_to change(Chat, :count)
      end

      it 'responds with success' do
        action
        expect(response).to be_successful
      end
    end

    context 'when the chat does not exist yet' do
      it 'creates a new chat' do
        expect { action }.to change(Chat, :count)
        expect(Chat.last.name).to eq('cats')
      end

      it 'responds with success' do
        action
        expect(response).to be_successful
      end
    end
  end
end
