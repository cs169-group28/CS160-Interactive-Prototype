class Objective < ActiveRecord::Base
  # attr_accessible :title, :body
  belongs_to :task
end
