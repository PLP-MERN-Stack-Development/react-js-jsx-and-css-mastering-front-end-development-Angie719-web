// src/components/tasks/TaskItem.jsx
import React from 'react';
import Button from '../../ui/Button';
import Card from '../../ui/Card';

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <Card className="flex items-center justify-between transition-all duration-300 transform hover:scale-[1.01]">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="mr-4 h-5 w-5 text-indigo-600 dark:text-indigo-400 border-gray-300 dark:border-gray-600 rounded focus:ring-indigo-500"
        />
        <span 
          className={`text-lg font-medium text-gray-900 dark:text-gray-100 ${task.completed ? 'line-through text-gray-500 dark:text-gray-400' : ''}`}
        >
          {task.text}
        </span>
      </div>
      <Button 
        variant="danger" 
        onClick={() => onDelete(task.id)}
        className="text-sm p-2"
      >
        Delete
      </Button>
    </Card>
  );
};

export default TaskItem;