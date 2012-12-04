class Event < ActiveRecord::Base
  # attr_accessible :title, :body
  attr_accessible :name, :userid, :start_date, :start_time, :end_date, :end_time, :location
  has_many :tasks, :dependent => :destroy
  has_many :objectives, :through => :tasks
end
