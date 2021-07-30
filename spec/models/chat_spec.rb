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
end
