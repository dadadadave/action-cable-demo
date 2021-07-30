class CreateDonations < ActiveRecord::Migration[6.1]
  def change
    create_table :donations do |t|
      t.integer :amount, null: false
      t.string :donor, null: false
      t.belongs_to :chat, foreign_key: true, null: false

      t.timestamps
    end
  end
end
