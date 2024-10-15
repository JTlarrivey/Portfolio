
import { useSpring, animated } from 'react-spring';

const About = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 280, friction: 60 },
    delay: 300,
  });

  return (
    <animated.section id="about" style={fadeIn} className="mb-16">
      <h2 className="text-4xl font-bold mb-8">About Me</h2>
      <div className="flex flex-col md:flex-row items-center">
        <img
          src="/profile.jpg"
          alt="Joaquin Larrivey"
          className="w-64 h-64 rounded-full object-cover mb-8 md:mb-0 md:mr-8"
        />
        <div>
          <p className="text-lg mb-4">
            Hello! I'm a passionate full-stack developer with a keen eye for front-end design and a love for creating beautiful, interactive web experiences as well as configuring clean, secure, effective and fully documented back-end apps. With expertise in React, TypeScript, modern CSS
            frameworks, NextJS/NestJS, Prisma, Express, NodeJS, PSQL (you name it!), I bring ideas to life through pattern designed, efficient code and intuitive user interfaces.
          </p>
          <p className="text-lg">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source
            projects, or enjoying the great mystic of music and literature, and yes, I also enjoy being outside a little bit! I'm always excited to take on new challenges and collaborate on innovative projects.
          </p>
        </div>
      </div>
    </animated.section>
  );
};

export default About;