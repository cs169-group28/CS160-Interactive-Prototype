class Event < ActiveRecord::Base
  # attr_accessible :title, :body
  attr_accessible :name, :userid
  has_many :tasks
  has_many :objectives, :through => :tasks
end
