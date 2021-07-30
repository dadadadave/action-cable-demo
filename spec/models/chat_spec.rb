require 'rails_helper'

RSpec.describe Chat, type: :model do
  subject(:chat) { create(:chat) }

  it { is_expected.to have_many(:messages).dependent(:destroy) }

  it { is_expected.to validate_presence_of(:name) }
  it { is_expected.to validate_uniqueness_of(:name) }
end
