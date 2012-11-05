class Task < ActiveRecord::Base
  # attr_accessible :title, :bod 
  attr_accessible :event_id, :b_flag, :budget, :owner, :name, :description, :completed
  belongs_to :event
  has_many :objectives
end
