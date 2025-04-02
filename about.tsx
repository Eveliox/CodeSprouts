import { Link } from "wouter";

import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About CodeSprouts - Our Mission and Team</title>
        <meta name="description" content="Learn about CodeSprouts' mission, teaching philosophy, and our team of expert coding instructors." />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Helmet>
      
      <section className="bg-[#4361EE] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">About CodeSprouts</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">Planting the seeds of computational thinking in curious young minds</p>
        </div>
      </section>
      
      <section id="about" className="py-16 bg-[#F8F9FA] scroll-section">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 relative">
              <img 
                src="https://images.unsplash.com/photo-1569360157800-2db48f127fe3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Kids programming together" 
                className="rounded-xl shadow-lg w-full"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-[#7209B7] text-white p-4 rounded-lg shadow-lg transform rotate-3 animate-wiggle">
                <p className="font-bold font-heading">"Coding is today's language of creativity"</p>
              </div>
              

            </div>
            
            <div className="md:w-1/2">
              <h2 className="font-heading font-bold text-3xl mb-6 text-[#4361EE]">Our Story</h2>
              
              <p className="mb-4 text-lg">CodeSprouts was founded by a team of educators and software engineers who believe that coding literacy is essential for today's children.</p>
              
              <p className="mb-6 text-lg">Our mission is to plant the seeds of computational thinking and nurture them through engaging, age-appropriate coding experiences that build confidence and creativity.</p>
              
              <div className="bg-white p-6 rounded-xl shadow-md mb-6">
                <h3 className="font-heading font-bold text-xl mb-3 text-[#7209B7]">Our Teaching Philosophy</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-[#F72585] mr-2"><i className="fas fa-check-circle"></i></span>
                    Learning through creative projects, not lectures
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#F72585] mr-2"><i className="fas fa-check-circle"></i></span>
                    Building problem-solving skills through coding challenges
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#F72585] mr-2"><i className="fas fa-check-circle"></i></span>
                    Fostering collaboration and peer learning
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#F72585] mr-2"><i className="fas fa-check-circle"></i></span>
                    Celebrating mistakes as learning opportunities
                  </li>
                </ul>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#4361EE]/10 p-4 rounded-lg">
                  <h4 className="font-heading font-bold mb-2">Skills Developed</h4>
                  <p>Logical thinking, creativity, problem-solving, algorithmic thinking</p>
                </div>
                <div className="bg-[#7209B7]/10 p-4 rounded-lg">
                  <h4 className="font-heading font-bold mb-2">Technologies</h4>
                  <p>Scratch, Python, micro:bit, HTML/CSS basics, robotics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl mb-10 text-[#4361EE] text-center">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#F8F9FA] rounded-xl p-6 shadow-md text-center">
              <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                <img 
                  src="/images/eve.png" 
                  alt="Evelio Gonzalez" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">Evelio Gonzalez</h3>
              <p className="text-[#7209B7] font-medium mb-3">Lead Instructor</p>
              <p className="mb-4">Computer science student at Florida International University with a passion for cloud computing, cybersecurity, and DevOps. Providing personalized support and mentorship to aspiring developers, helping them navigate the world of secure, scalable systems and automation.</p>
              <div className="flex justify-center space-x-3">
                <a href="https://www.linkedin.com/in/evelio-gonzalez-77a3b5329/" target="_blank" rel="noopener noreferrer" className="text-[#4361EE] hover:text-[#7209B7]">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            
            <div className="bg-[#F8F9FA] rounded-xl p-6 shadow-md text-center">
              <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                <img 
                  src="/images/david.png" 
                  alt="David Cabrera" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">David Cabrera</h3>
              <p className="text-[#7209B7] font-medium mb-3">Game Development Instructor</p>
              <p className="mb-4">Computer science student at Florida International University (FIU) who love game development. We guide young learners through the process of building interactive games, offering mentorship and support in game mechanics, real-time 3D graphics, and gameplay optimization.</p>
              <div className="flex justify-center space-x-3">
                <a href="https://www.linkedin.com/in/davidacabrerawrestling/" target="_blank" rel="noopener noreferrer" className="text-[#4361EE] hover:text-[#7209B7]">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            
            <div className="bg-[#F8F9FA] rounded-xl p-6 shadow-md text-center">
              <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                <img 
                  src="/images/ricky.png" 
                  alt="Ricardo Oliva" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">Ricardo Oliva</h3>
              <p className="text-[#7209B7] font-medium mb-3">Assistant Instructor</p>
              <p className="mb-4">Computer science student and coding enthusiast who loves working with young learners. Provides personalized support and mentorship during projects.</p>
              <div className="flex justify-center space-x-3">
                <a href="https://www.linkedin.com/in/ricardo-oliva0811/" target="_blank" rel="noopener noreferrer" className="text-[#4361EE] hover:text-[#7209B7]">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl mb-6 text-[#4361EE]">Our Impact</h2>
          <p className="max-w-3xl mx-auto mb-12 text-lg">We've introduced over 200 students to the world of coding and digital creation.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl text-[#F72585] mb-3">
                <i className="fas fa-child"></i>
              </div>
              <h3 className="text-3xl font-bold font-heading mb-2">100+</h3>
              <p>Students taught</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl text-[#F72585] mb-3">
                <i className="fas fa-code"></i>
              </div>
              <h3 className="text-3xl font-bold font-heading mb-2">50+</h3>
              <p>Projects completed</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl text-[#F72585] mb-3">
                <i className="fas fa-robot"></i>
              </div>
              <h3 className="text-3xl font-bold font-heading mb-2">20+</h3>
              <p>Robots programmed</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl text-[#F72585] mb-3">
                <i className="fas fa-smile"></i>
              </div>
              <h3 className="text-3xl font-bold font-heading mb-2">95%</h3>
              <p>Parent satisfaction</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl mb-6 text-[#4361EE]">Ready to Join Our Coding Adventure?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">Spots for our summer camp are limited and fill quickly. Reserve your child's place today!</p>
          <Link 
            href="/register" 
            className="inline-block px-8 py-3 bg-[#F72585] text-white font-bold rounded-full hover:bg-[#7209B7] transition-colors transform hover:scale-105 duration-200 shadow-lg"
          >
            Register Now
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
