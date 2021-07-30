class ChatsController < ApplicationController
  respond_to :json

  def index
    render json: { chats: Chat.order(created_at: :asc).pluck(:name) }
  end

  def create
    chat = Chat.create(chat_params)

    ActionCable.server.broadcast('chat_list', { chat: chat.name }) if chat.valid?

    head :ok
  end

  private

  def chat_params
    params.require(:chat).permit(:name)
  end
end