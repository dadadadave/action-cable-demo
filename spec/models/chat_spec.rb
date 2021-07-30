require 'rails_helper'

RSpec.describe Chat, type: :model do
  subject(:chat) { create(:chat) }

  it { is_expected.to have_many(:messages).dependent(:destroy) }

  it { is_expected.to validate_presence_of(:name) }
  it { is_expected.to validate_uniqueness_of(:name) }

  describe '#latest_messages' do
    let!(:message1) { create(:message, chat: chat) }
    let!(:message2) { create(:message, chat: chat) }
    let!(:message3) { create(:message, chat: chat) }
    let!(:message4) { create(:message, chat: chat) }

    it 'is the 3 most recent messages in chronological order' do
      expect(chat.latest_messages).to eq([message2, message3, message4])
    end
  end

  describe '#more_messages?' do
    subject(:more_messages) { chat.more_messages? }

    context 'when the chat has at most 3 messages' do
      before { create_list(:message, 3, chat: chat) }

      it { is_expected.to be_falsey }
    end

    context 'when the chat has more than 3 messages' do
      before { create_list(:message, 4, chat: chat) }

      it { is_expected.to be_truthy }
    end
  end
end
