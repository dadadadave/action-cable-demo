require 'rails_helper'

describe ApplicationCable::Connection, type: :channel do
  context 'when there is a user in the cookies' do
    it 'connects as the user' do
      cookies[:_chatAppUser] = 'Some User'

      connect '/cable'

      expect(connection.user).to eq('Some User')
    end
  end

  context 'when there is no user in the cookies' do
    it 'does not connect' do
      expect { connect '/cable' }.to raise_error(ActionCable::Connection::Authorization::UnauthorizedError)
    end
  end
end
