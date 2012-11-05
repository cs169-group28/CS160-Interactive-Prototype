class SetupForeignKeysForAssociations < ActiveRecord::Migration
  def change
  	rename_column :objectives, :taskid, :task_id
  	rename_column :tasks, :eventid, :event_id
  end 
end
