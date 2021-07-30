require 'rails_helper'

RSpec.describe DonationsController, type: :request do
  describe 'POST #create' do
    subject(:action) { post chat_donations_path(chat.name, donation: { amount: amount, donor: donor }, format: :json) }

    let(:chat) { create(:chat) }
    let(:amount) { 23 }
    let(:donor) { 'Generous Diplodocus' }

    it 'queues up a job to create a new donation' do
      action
      assert_enqueued_with(job: DonationJob, args: [chat.name, '23', 'Generous Diplodocus'])
    end

    it 'responds with success' do
      action
      expect(response).to be_successful
    end
  end
end
