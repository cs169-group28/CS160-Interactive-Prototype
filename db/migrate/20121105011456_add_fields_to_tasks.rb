class AddFieldsToTasks < ActiveRecord::Migration
  def change
  	add_column :tasks, :budget, :decimal
  	add_column :tasks, :userid, :integer
  	add_column :tasks, :b_flag, :boolean
  	add_column :tasks, :eventid, :integer
  end
end
