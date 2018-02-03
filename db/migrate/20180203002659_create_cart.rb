class CreateCart < ActiveRecord::Migration[5.0]
  def change
    create_table :carts do |t|
      t.string :session_token, null: false
      t.integer :item_id
    end
    add_index :carts, :session_token
  end
end
