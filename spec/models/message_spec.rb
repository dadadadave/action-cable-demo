require 'rails_helper'

RSpec.describe Message, type: :model do
  subject(:message) { create(:message) }

  it { is_expected.to belong_to(:chat) }

  it { is_expected.to validate_presence_of(:body) }
  it { is_expected.to validate_presence_of(:author) }
  it { is_expected.to validate_presence_of(:chat) }
end
