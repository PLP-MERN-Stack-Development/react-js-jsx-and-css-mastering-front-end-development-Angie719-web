// src/components/tasks/TaskForm.jsx
import React, { useState } from 'react';
import Button from '../../ui/Button';

const TaskForm = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() === '') return;
    onAddTask(taskText.trim());
    setTaskText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-3 mb-6">
      <input
        type="text"
        placeholder="Add a new task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        className="flex-grow p-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm 
                   focus:ring-indigo-500 focus:border-indigo-500 
                   bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 
                   transition-colors duration-200"
      />
      <Button type="submit" variant="primary">
        Add Task
      </Button>
    </form>
  );
};

export default TaskForm;