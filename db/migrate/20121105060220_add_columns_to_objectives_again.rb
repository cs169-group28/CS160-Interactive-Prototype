class AddColumnsToObjectivesAgain < ActiveRecord::Migration
  def change
  	add_column :objectives, :description, :text
  	add_column :objectives, :owner, :integer
  	add_column :objectives, :name, :string
  	add_column :objectives, :task_id, :integer
  	add_column :objectives, :budget, :decimal
  	add_column :objectives, :b_flag, :boolean
  end
end
