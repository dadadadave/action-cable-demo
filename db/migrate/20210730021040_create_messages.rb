class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.string :body, null: false
      t.string :author, null: false
      t.belongs_to :chat, foreign_key: true, null: false

      t.timestamps
    end
  end
end
