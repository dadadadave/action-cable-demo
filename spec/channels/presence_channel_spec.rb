require 'rails_helper'

RSpec.describe PresenceChannel, type: :channel do
  before { stub_connection user: 'someone' }

  let(:chat) { create(:chat) }

  shared_examples_for 'broadcasting a presence update' do
    it 'broadcasts the name and status of the user' do
      expect { action }.to have_broadcasted_to(chat).with('name' => 'someone', 'status' => status)
    end
  end

  it 'subscribes to the named chat' do
    subscribe chat: chat.name

    expect(subscription).to be_confirmed

    expect(subscription).to have_stream_from(described_class.broadcasting_for(chat))
  end

  describe 'subscribing' do
    let(:action) { subscribe chat: chat.name }
    let(:status) { 'active' }

    it_behaves_like 'broadcasting a presence update'
  end

  describe 'unsubscribing' do
    let(:action) { unsubscribe }
    let(:status) { 'absent' }

    before { subscribe chat: chat.name }

    it_behaves_like 'broadcasting a presence update'
  end

  describe '#appear' do
    let(:action) { subscription.appear }
    let(:status) { 'active' }

    before { subscribe chat: chat.name }

    it_behaves_like 'broadcasting a presence update'
  end

  describe '#away' do
    let(:action) { subscription.away }
    let(:status) { 'inactive' }

    before { subscribe chat: chat.name }

    it_behaves_like 'broadcasting a presence update'
  end
end
