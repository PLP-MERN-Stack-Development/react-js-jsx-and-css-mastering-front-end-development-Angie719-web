// src/components/tasks/TaskList.jsx
import React, { useState } from 'react';
import TaskItem from './TaskItem';
import Button from '../../ui/Button';

const TaskList = ({ tasks, onToggle, onDelete }) => {
  const [filter, setFilter] = useState('All'); // State for filtering

  const filterTasks = (tasks, filter) => {
    switch (filter) {
      case 'Active':
        return tasks.filter(task => !task.completed);
      case 'Completed':
        return tasks.filter(task => task.completed);
      case 'All':
      default:
        return tasks;
    }
  };

  const filteredTasks = filterTasks(tasks, filter);

  const filterButtons = ['All', 'Active', 'Completed'].map(f => (
    <Button
      key={f}
      variant={filter === f ? 'primary' : 'secondary'}
      onClick={() => setFilter(f)}
      className="text-sm px-3 py-1"
    >
      {f}
    </Button>
  ));

  return (
    <div className="space-y-4">
      <div className="flex justify-center space-x-2 mb-6 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-inner">
        {filterButtons}
      </div>
      
      {filteredTasks.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400 text-lg p-10">
          No {filter.toLowerCase()} tasks found.
        </p>
      ) : (
        <div className="space-y-3">
          {filteredTasks.map(task => (
            <TaskItem 
              key={task.id} 
              task={task} 
              onToggle={onToggle} 
              onDelete={onDelete} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;