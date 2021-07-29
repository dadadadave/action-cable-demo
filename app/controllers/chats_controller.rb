class ChatsController < ApplicationController
  respond_to :json, only: %i[create]

  def create
    Chat.create(chat_params)

    head :ok
  end

  private

  def chat_params
    params.require(:chat).permit(:name)
  end
end