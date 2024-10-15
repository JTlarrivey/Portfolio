import { useSpring, animated } from 'react-spring';

const Header = () => {
  const slideDown = useSpring({
    from: { transform: 'translateY(-100%)' },
    to: { transform: 'translateY(0)' },
    config: { tension: 280, friction: 60 },
  });

  return (
    <animated.header style={slideDown} className="bg-indigo-800 py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Joaquin Larrivey</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-indigo-300 transition-colors">About</a></li>
            <li><a href="#projects" className="hover:text-indigo-300 transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-indigo-300 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </animated.header>
  );
};

export default Header;