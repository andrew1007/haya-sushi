class AddOptionTable < ActiveRecord::Migration[5.0]
  def change
    create_table :options do |t|
      t.string :details, null: false
      t.integer :subsection_id, null: false
    end
    add_index :options, :subsection_id
    add_column(:subsections, :option_id, :integer)
    add_index :subsections, :option_id
  end
end
