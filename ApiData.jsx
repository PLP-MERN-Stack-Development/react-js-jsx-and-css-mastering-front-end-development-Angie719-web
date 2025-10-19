import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function ApiData() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load data: " + (err?.message || err));
        setLoading(false);
      });
  }, []);

  const filtered = posts.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Card title="API Data">
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-4 w-full rounded"
      />
      <div className="grid md:grid-cols-2 gap-4">
        {filtered.slice(0, 10).map((p) => (
          <div key={p.id} className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
            <h3 className="font-bold">{p.title}</h3>
            <p>{p.body}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
