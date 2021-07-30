FactoryBot.define do
  factory :donation do
    chat
    amount { 1 }
    donor { "some donor" }
  end
end
