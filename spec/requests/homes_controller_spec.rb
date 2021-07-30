require 'rails_helper'

RSpec.describe HomesController, type: :request do
  describe 'GET #show' do
    subject(:action) { get root_path }

    it 'responds with success' do
      action
      expect(response).to be_successful
    end
  end
end
