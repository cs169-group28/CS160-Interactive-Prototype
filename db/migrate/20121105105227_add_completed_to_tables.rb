class AddCompletedToTables < ActiveRecord::Migration
  def change
  	add_column :tasks, :completed, :boolean
  	add_column :objectives, :completed, :boolean
  end
end
