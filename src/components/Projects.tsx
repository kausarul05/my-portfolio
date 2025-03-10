interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
  codeLink: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product management, shopping cart, user authentication, and payment integration using Stripe.",
      image: "/projects/ecommerce.jpg",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe"],
      demoLink: "https://example.com/demo",
      codeLink: "https://github.com/username/ecommerce",
    },
    {
      id: 2,
      title: "Task Management Dashboard",
      description: "A collaborative task management tool with real-time updates, team workspaces, and progress tracking features.",
      image: "/projects/taskmanager.jpg",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Express", "Socket.io"],
      demoLink: "https://example.com/demo",
      codeLink: "https://github.com/username/taskmanager",
    },
    {
      id: 3,
      title: "Social Media App",
      description: "A social networking platform with user profiles, posts, comments, and real-time notifications.",
      image: "/projects/socialapp.jpg",
      technologies: ["React", "Node.js", "Express", "MongoDB", "AWS S3"],
      demoLink: "https://example.com/demo",
      codeLink: "https://github.com/username/socialapp",
    },
    {
      id: 4,
      title: "Health & Fitness Tracker",
      description: "A health tracking application that allows users to log workouts, track nutrition, and visualize progress with interactive charts.",
      image: "/projects/fitness.jpg",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
      demoLink: "https://example.com/demo",
      codeLink: "https://github.com/username/fitnesstracker",
    },
    {
      id: 5,
      title: "Realtime Chat Application",
      description: "A messaging platform with private and group chats, file sharing, and online status indicators.",
      image: "/projects/chatapp.jpg",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
      demoLink: "https://example.com/demo",
      codeLink: "https://github.com/username/chatapp",
    },
    {
      id: 6,
      title: "Weather Dashboard",
      description: "An interactive weather application that provides current conditions, forecasts, and historical data for locations worldwide.",
      image: "/projects/weather.jpg",
      technologies: ["React", "Node.js", "Express", "OpenWeather API"],
      demoLink: "https://example.com/demo",
      codeLink: "https://github.com/username/weather",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Projects</h2>
          <div className="mt-2 w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my experience with the MERN stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm transition-transform hover:shadow-md hover:-translate-y-1"
            >
              <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-700">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
                  {/* This is a placeholder for project images */}
                  <span className="text-4xl">🖼️</span>
                </div>
                {/* Uncomment this when you have actual images */}
                {/* <Image
                  src={project.image}
                  alt={project.title}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                /> */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-3">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 