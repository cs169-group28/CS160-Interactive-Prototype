class Objective < ActiveRecord::Base
  # attr_accessible :title, :body
  attr_accessible :description, :owner, :name, :task_id, :budget, :b_flag, :completed, :spent
  belongs_to :task

  after_commit :updateTask

  def updateTask
  	@task = Task.find(task_id)
  	@objectives = Objective.where("task_id = ?", @task.id)

  	complete = true

  	@objectives.each do |objective|
  		if !objective.completed
  			complete = false
  		end
  	end

  	if complete
  		@task.update_attributes(:completed => true)
  	end
  end

end
