class Task < ActiveRecord::Base
  # attr_accessible :title, :bod  
  belongs_to :event
  has_many :objectives
end
