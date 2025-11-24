export default function StatCard({ title, value }) {
  return (
    <div className="bg-white shadow rounded-lg p-5 text-center">
      <p className="text-gray-600 text-sm">{title}</p>
      <h2 className="text-3xl font-bold mt-1">{value}</h2>
    </div>
  );
}
