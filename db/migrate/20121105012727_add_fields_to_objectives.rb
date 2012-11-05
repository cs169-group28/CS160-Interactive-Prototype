class AddFieldsToObjectives < ActiveRecord::Migration
  def change
  	add_column :objectives, :owner, :integer
  	add_column :objectives, :taskid, :integer
  	add_column :objectives, :name, :string
  	add_column :objectives, :description, :text
  end
end
