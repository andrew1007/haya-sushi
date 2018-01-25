class ChangeNullConditionSectionIdOptions < ActiveRecord::Migration[5.0]
  def change
    change_column(:options, :subsection_id, :integer, null: true)
  end
end
