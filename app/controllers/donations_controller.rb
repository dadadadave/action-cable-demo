class DonationsController < ApplicationController
  respond_to :json

  def create
    chat = Chat.find_by!(name: params[:chat_name])
    chat.donations.create(donation_params)

    head :ok
  end

  private

  def donation_params
    params.require(:donation).permit(:amount, :donor)
  end
end
