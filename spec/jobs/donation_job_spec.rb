require 'rails_helper'

RSpec.describe DonationJob, type: :job do
  subject(:perform) { described_class.perform_now(chat.name, amount, donor) }

  let(:chat) { create(:chat) }
  let(:amount) { 34 }
  let(:donor) { 'A Pterodactyl' }

  it 'creates a new donation' do
    expect { perform }.to change(Donation, :count)
    donation = Donation.last
    expect(donation.chat).to eq(chat)
    expect(donation.amount).to eq(amount)
    expect(donation.donor).to eq(donor)
  end

  it 'broadcasts to Action Cable' do
    donation = create(:donation, chat: chat, amount: 34)
    allow(Chat).to receive(:find_by!).with(name: chat.name).and_return(chat)
    allow(chat.donations).to receive(:create).and_return(donation)
    expect { perform }.to have_broadcasted_to(DonationsChannel.broadcasting_for(chat)).with('total' => 34, 'lastDonation' => donation.as_json)
  end
end
