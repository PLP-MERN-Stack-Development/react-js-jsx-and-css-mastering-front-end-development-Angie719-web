// src/App.jsx
import React from "react";
import "./App.css"; // Keep this if you have global styles, otherwise Tailwind handles most styling

// Card Component
function Card({ title, description, buttonText }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto my-4 hover:shadow-xl transition">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        {buttonText}
      </button>
    </div>
  );
}

// Main App Component
function App() {
  const cards = [
    {
      title: "Card 1",
      description: "This is the first card component styled with Tailwind CSS.",
      buttonText: "Click Me",
    },
    {
      title: "Card 2",
      description: "Another beautiful card to showcase your content.",
      buttonText: "Learn More",
    },
    {
      title: "Card 3",
      description: "Tailwind makes it easy to create reusable UI components.",
      buttonText: "Explore",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">My Tailwind Cards</h1>
      <div className="flex flex-col md:flex-row md:justify-center md:space-x-6">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
