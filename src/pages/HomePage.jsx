// src/pages/HomePage.jsx
import React, { useState } from 'react';
import TaskForm from '../components/tasks/TaskForm';
import TaskList from '../components/tasks/TaskList';
import Card from '../ui/Card';
import useLocalStorage from '../hooks/useLocalStorage';

const HomePage = () => {
  // Use custom hook for persistent storage
  const [tasks, setTasks] = useLocalStorage('react-master-tasks', []);

  // Use useState for the next ID
  // Note: Finding max ID on load is crucial to prevent ID collisions
  const [nextId, setNextId] = useState(() => {
    const maxId = tasks.reduce((max, task) => Math.max(max, task.id), 0);
    return maxId + 1;
  });

  const addTask = (text) => {
    const newTask = {
      id: nextId,
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setNextId(nextId + 1); // Increment ID for the next task
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const completedCount = tasks.filter(task => task.completed).length;
  const totalCount = tasks.length;

  return (
    <div className="pt-8">
      <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8 text-center">
        Task Manager
      </h2>
      
      <Card className="max-w-3xl mx-auto">
        <div className="mb-6 flex justify-between items-center bg-indigo-50 dark:bg-indigo-900 p-4 rounded-lg shadow-inner">
          <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300">
            Progress:
          </h3>
          <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            {completedCount} / {totalCount}
          </p>
        </div>

        <TaskForm onAddTask={addTask} />
        
        <TaskList 
          tasks={tasks} 
          onToggle={toggleTask} 
          onDelete={deleteTask} 
        />
      </Card>
    </div>
  );
};

export default HomePage;