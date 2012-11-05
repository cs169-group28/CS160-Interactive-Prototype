class RenameUseridToOwnerInTasks < ActiveRecord::Migration
  def change
  	rename_column :tasks, :userid, :owner
  end
end
