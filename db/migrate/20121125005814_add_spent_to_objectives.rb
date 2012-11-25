class AddSpentToObjectives < ActiveRecord::Migration
  def change
  	add_column :objectives, :spent, :decimal
  end
end
