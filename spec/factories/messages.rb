FactoryBot.define do
  factory :message do
    chat
    body { "some body" }
    author { "some author" }
  end
end
