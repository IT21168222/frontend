export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md bg-[#033CAA]">
      <div className="text-xl font-bold flex items-center">
        <span className="mr-2">⚙️</span>Predictive Ops
      </div>
      <div className="space-x-6">
        <a href="/dashboard" className="text-gray-700 hover:text-black">
          Dashboard
        </a>
        <a href="/suggesion" className="text-gray-700 hover:text-black">
          Model Interpretation
        </a>
        <a href="/correlation" className="text-gray-700 hover:text-black">
          Correlation
        </a>
      </div>
    </nav>
  );
}
