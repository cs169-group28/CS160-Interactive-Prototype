class Tasks < ActiveRecord::Base
  # attr_accessible :title, :body
  belongs_to :event
  has_many :objectives
end
