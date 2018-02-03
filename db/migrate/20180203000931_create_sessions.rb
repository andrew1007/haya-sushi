class CreateSessions < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :session_token, null: false
    end
    add_index :users, :session_token
  end
end
