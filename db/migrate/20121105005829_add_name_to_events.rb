class AddNameToEvents < ActiveRecord::Migration
  def change
  	add_column :events, :name, :string
  	add_column :events, :userid, :integer
  end
end
