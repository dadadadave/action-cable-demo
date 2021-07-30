require 'rails_helper'

describe ChatChannel, type: :channel do
  before { stub_connection random_id: 'some-id' }

  let(:chat) { create(:chat) }

  it 'subscribes to the named chat' do
    subscribe chat: chat.name

    expect(subscription).to be_confirmed

    expect(subscription).to have_stream_from(described_class.broadcasting_for(chat))
  end
end
