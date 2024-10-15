
import { useSpring, animated } from 'react-spring';
import { Github, Linkedin, Mail } from 'lucide-react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticlesBack from './components/particles/ParticlesBack';

function App() {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <animated.div style={fadeIn} className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
      <Header />
      <ParticlesBack /> 
      <main className="container mx-auto px-4 py-8">
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-indigo-800 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p>&copy; 2024 Joaquin Larrivey. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://github.com/JTlarrivey" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/joaquin-larrivey-803327212/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:joaqlarrivey@gmail.com">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </animated.div>
  );
}

export default App;