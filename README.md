# README

This toy chat app demonstrates some of the features of Action Cable. Features include:

* a list of available chats, updated as new chats are added ([ChatListChannel](https://github.com/dadadadave/action-cable-demo/blob/main/app/channels/chat_list_channel.rb))
* a chat page where new messages appear as they are sent ([ChatChannel](https://github.com/dadadadave/action-cable-demo/blob/main/app/channels/chat_channel.rb))
* a presence indicator, showing who's in a given chat and whether they're active or inactive ([PresenceChannel](https://github.com/dadadadave/action-cable-demo/blob/main/app/channels/presence_channel.rb))
* a donation form for each chat, updated with the total donation amount and details of the most recent donation ([DonationsChannel](https://github.com/dadadadave/action-cable-demo/blob/main/app/channels/donations_channel.rb)); donation processing happens in Sidekiq ([DonationJob](https://github.com/dadadadave/action-cable-demo/blob/main/app/jobs/donation_job.rb)), demonstrating how real-time events can be broadcast from background jobs
