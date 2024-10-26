"use client";

export default function ButtonsPage() {
  return (
    <div className="container mx-auto p-12">
      {" "}
      <h1 className="text-3xl font-bold mb-8 text-center">Buttons</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <a
            href="#_"
            className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group cursor-pointer"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span className="relative">Hover Me!</span>
          </a>
        </div>
      </div>
    </div>
  );
}
