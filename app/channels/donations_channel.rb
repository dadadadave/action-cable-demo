class DonationsChannel < ApplicationCable::Channel
  def subscribed
    chat = Chat.find_by!(name: params[:chat])
    stream_from "donations:#{chat.name}"
    transmit(
      total: chat.donations.sum(:amount),
      lastDonation: chat.donations.order(created_at: :desc).first
    )
  end
end
