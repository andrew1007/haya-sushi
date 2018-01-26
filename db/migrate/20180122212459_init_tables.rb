class InitTables < ActiveRecord::Migration[5.0]
  def change
    create_table :items do |t|
      t.string :description
      t.string :name, null: false
      t.string :price, default: ''
      t.integer :spiciness, default: 0
      t.integer :section_id, null: false
      t.integer :option_id
      t.integer :subsection_id
      t.boolean :discount, default: false
      t.timestamps
    end

    create_table :sections do |t|
      t.string :name, null: false
      t.string :description
    end
    add_index :sections, :name
    add_index :items, :name
    add_index :items, :section_id
  end
end
