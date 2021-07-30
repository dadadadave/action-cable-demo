require 'rails_helper'

RSpec.describe Donation, type: :model do
  subject(:donation) { create(:donation) }

  it { is_expected.to belong_to(:chat) }

  it { is_expected.to validate_numericality_of(:amount).is_greater_than(0) }
  it { is_expected.to validate_presence_of(:amount) }
  it { is_expected.to validate_presence_of(:chat) }
end
