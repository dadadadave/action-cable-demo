require 'rails_helper'

describe ApplicationCable::Connection, type: :channel do
  it 'gives the connection a random identifier' do
    allow(SecureRandom).to receive(:uuid).and_return('some-uuid')

    connect '/cable'

    expect(connection.random_id).to eq('some-uuid')
  end
end
