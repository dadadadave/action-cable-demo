class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_for Chat.find_by!(name: params[:chat])
  end
end
