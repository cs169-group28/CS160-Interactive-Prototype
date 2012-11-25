class Objective < ActiveRecord::Base
  # attr_accessible :title, :body
  attr_accessible :description, :owner, :name, :task_id, :budget, :b_flag, :completed, :spent
  belongs_to :task
end
