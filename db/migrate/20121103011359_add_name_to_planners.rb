class AddNameToPlanners < ActiveRecord::Migration
  def change
  	add_column :planners, :name, :string
  end
end
