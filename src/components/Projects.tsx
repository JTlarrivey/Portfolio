
import { useSpring, animated } from 'react-spring';

const ProjectCard = ({ title, description, image, link }:{ title: string, description: string, image: string, link: string} )  => {
  const [props, set] = useSpring(() => ({ scale: 1 }));

  return (
    <animated.div
      style={props}
      onMouseEnter={() => set({ scale: 1.05 })}
      onMouseLeave={() => set({ scale: 1 })}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition-colors"
        >
          View Project
        </a>
      </div>
    </animated.div>
  );
};

const Projects = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 280, friction: 60 },
    delay: 600,
  });

  const projects = [
    {
      title: "Booknity",
      description: "A Social Media Library built with Next/NestJS and Prisma",
      image: "Booknity.jpg",
      link: "https://henry-pf-rho.vercel.app"
    },
    {
      title: "Booknity API",
      description: "A Swagger fully documented API",
      image: "library.jpeg",
      link: "https://booknity-api.onrender.com/api"
    },
    {
      title: "E-Commerce Backend",
      description: "A backend built with TypeScript, NestJS and TypeOrm",
      image:"https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      link: "https://github.com/pi-rym/PM4BE-JTlarrivey"
    },
    {
      title: "Schedule Master",
      description: "An appointment manager built with React and TypeScript",
      image: "schedule.jpeg",
      link: "https://github.com/pi-rym/PM3-JTlarrivey"
    }
  ];

  return (
    <animated.section id="projects" style={fadeIn} className="mb-16">
      <h2 className="text-4xl font-bold mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </animated.section>
  );
};

export default Projects;