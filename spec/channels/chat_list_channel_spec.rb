require 'rails_helper'

describe ChatListChannel, type: :channel do
  before { stub_connection user: 'someone' }

  it 'subscribes to the generic stream' do
    subscribe

    expect(subscription).to be_confirmed

    expect(subscription).to have_stream_from('chat_list')
  end
end
