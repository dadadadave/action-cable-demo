module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :user

    def connect
      self.user = user_from_cookie
    end

    private

    def user_from_cookie
      cookies[:_chatAppUser] || reject_unauthorized_connection
    end
  end
end
