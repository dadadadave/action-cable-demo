module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :random_id

    def connect
      self.random_id = generate_random_id
    end

    private

    def generate_random_id
      SecureRandom.uuid
    end
  end
end
