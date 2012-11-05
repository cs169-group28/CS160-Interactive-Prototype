class AddColumnsToTasks < ActiveRecord::Migration
  def change
  	add_column :tasks, :b_flag, :boolean
  	add_column :tasks, :budget, :decimal
  	add_column :tasks, :owner, :integer
  	add_column :tasks, :event_id, :integer
  	add_column :tasks, :name, :string
  	add_column :tasks, :description, :text
  end
end
