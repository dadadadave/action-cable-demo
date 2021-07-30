class DonationJob < ApplicationJob
  queue_as :default

  def perform(chat_name, amount, donor)
    chat = Chat.find_by!(name: chat_name)
    donation = chat.donations.create(amount: amount, donor: donor)
    DonationsChannel.broadcast_to(
      chat,
      total: chat.donations.sum(:amount),
      lastDonation: donation
    )
  end
end
