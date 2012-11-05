class Task < ActiveRecord::Base
  # attr_accessible :title, :bod 
  attr_accessible :event_id
  belongs_to :event
  has_many :objectives
end
