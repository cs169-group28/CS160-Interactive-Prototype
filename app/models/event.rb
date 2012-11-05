class Event < ActiveRecord::Base
  # attr_accessible :title, :body
  has_many :tasks
  has_many :objectives, :through => :tasks
end
