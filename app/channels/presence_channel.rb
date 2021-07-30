class PresenceChannel < ApplicationCable::Channel
  def subscribed
    stream_for chat
    PresenceChannel.broadcast_to(chat, { name: user, status: :active })
  end

  def unsubscribed
    PresenceChannel.broadcast_to(chat, { name: user, status: :absent })
  end

  def appear
    PresenceChannel.broadcast_to(chat, { name: user, status: :active })
  end

  def away
    PresenceChannel.broadcast_to(chat, { name: user, status: :inactive })
  end

  private

  def chat
    @chat ||= Chat.find_by!(name: params[:chat])
  end
end
