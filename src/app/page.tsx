const miniProjects = [
  {
    title: "Calculator",
    description: "A simple calculator app",
    path: "/mini-projects/calculator",
  },
  {
    title: "Buttons",
    description: "Various button styles and animations",
    path: "/mini-projects/buttons",
  },
  {
    title: "Loaders",
    description: "Different types of loading animations",
    path: "/mini-projects/loaders",
  },
  {
    title: "Navigation Menu",
    description: "Responsive navigation menu examples",
    path: "/mini-projects/navigation-menu",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Mini Projects</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {miniProjects.map((project) => (
          <div 
            key={project.path} 
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 dark:bg-gray-800"
          >
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-500 mb-4 dark:text-gray-400">
                {project.description}
              </p>
              <a 
                href={project.path} 
                className="text-blue-600 hover:underline inline-flex items-center dark:text-blue-400"
              >
                <span>View Project</span>
                <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}