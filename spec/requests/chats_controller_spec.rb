require 'rails_helper'

RSpec.describe ChatsController, type: :request do
  describe 'GET #index' do
    subject(:action) { get chats_path(format: :json) }

    it 'returns a list of chat names, sorted by creation date' do
      chat1 = create(:chat, name: 'dogs')
      chat2 = create(:chat, name: 'cats')

      action

      expect(JSON.parse(response.body)).to eq('chats' => %w[dogs cats])
    end
  end

  describe 'POST #create' do
    subject(:action) { post chats_path(chat: { name: 'cats' }, format: :json) }

    context 'when the chat already exists' do
      before { create(:chat, name: 'cats') }

      it 'does not create a new chat' do
        expect { action }.not_to change(Chat, :count)
      end

      it 'does not broadcast to Action Cable' do
        expect { action }.not_to have_broadcasted_to('chat_list')
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

      it 'broadcasts to Action Cable' do
        expect { action }.to have_broadcasted_to('chat_list').with(chat: 'cats')
      end

      it 'responds with success' do
        action
        expect(response).to be_successful
      end
    end
  end
end
