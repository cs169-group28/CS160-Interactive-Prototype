class AddColumnsToEvents < ActiveRecord::Migration
  def change
  	add_column :events, :location, :string
  	add_column :events, :start_time, :time
  	add_column :events, :end_time, :time
  	add_column :events, :start_date, :date
  	add_column :events, :end_date, :date
  end
end
