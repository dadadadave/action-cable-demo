require 'rails_helper'

RSpec.describe DonationsChannel, type: :channel do
  before { stub_connection user: 'someone' }

  let(:chat) { create(:chat) }
  let!(:donation) { create(:donation, chat: chat, amount: 12) }

  it 'subscribes to the named stream' do
    subscribe chat: chat.name

    expect(subscription).to be_confirmed

    expect(subscription).to have_stream_from(described_class.broadcasting_for(chat))
  end

  it 'transmits the current data' do
    subscribe chat: chat.name

    expect(transmissions.last).to eq(
      'total' => 12,
      'lastDonation' => donation
    )
  end
end
