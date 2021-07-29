class ChatNameIsUnique < ActiveRecord::Migration[6.1]
  def change
    add_index :chats, :name, unique: true
  end
end
