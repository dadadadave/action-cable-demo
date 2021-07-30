class MessagesController < ApplicationController
  respond_to :json

  def create
    chat = Chat.find_by!(name: params[:chat_name])
    message = chat.messages.create(message_params)

    ChatChannel.broadcast_to(chat, message: message)

    head :ok
  end

  private

  def message_params
    params.require(:message).permit(:body, :author)
  end
end
