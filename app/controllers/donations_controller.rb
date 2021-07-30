class DonationsController < ApplicationController
  respond_to :json

  def create
    DonationJob.perform_later(
      params[:chat_name],
      params[:donation][:amount],
      params[:donation][:donor]
    )

    head :ok
  end
end
