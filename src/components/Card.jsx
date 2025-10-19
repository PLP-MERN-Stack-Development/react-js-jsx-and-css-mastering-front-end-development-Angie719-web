// src/components/Card.jsx
export default function Card() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto mt-10">
      <h2 className="text-xl font-bold mb-2">Card Title</h2>
      <p className="text-gray-700 mb-4">This is a simple Tailwind card component in React.</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Click Me
      </button>
    </div>
  );
}

