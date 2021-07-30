require 'rails_helper'

RSpec.describe DonationsController, type: :request do
  describe 'POST #create' do
    subject(:action) { post chat_donations_path(chat.name, donation: { amount: amount, donor: donor }, format: :json) }

    let(:chat) { create(:chat) }
    let(:amount) { 23 }
    let(:donor) { 'Generous Diplodocus' }

    it 'creates a new donation' do
      expect { action }.to change(Donation, :count)
      donation = Donation.last
      expect(donation.chat).to eq(chat)
      expect(donation.amount).to eq(amount)
      expect(donation.donor).to eq(donor)
    end

    it 'responds with success' do
      action
      expect(response).to be_successful
    end
  end
end
