// About.jsx
import React from 'react';
import { Lightbulb, Users, Award, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
      title: "Interactive Learning",
      description: "Engage with our dynamic quiz platform designed to make learning enjoyable and effective."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Community Driven",
      description: "Join thousands of learners who trust our platform for their educational journey."
    },
    {
      icon: <Award className="w-8 h-8 text-green-500" />,
      title: "Skill Assessment",
      description: "Test and improve your knowledge with our comprehensive question bank."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "User-Friendly",
      description: "Experience seamless navigation and intuitive design for optimal learning."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Our Quiz Platform
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're dedicated to making learning engaging and accessible through 
            interactive quizzes and comprehensive resources.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="ml-3 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 mb-4">
            We strive to provide a comprehensive learning platform that enables students 
            and professionals to test their knowledge, identify areas for improvement, 
            and achieve their educational goals through interactive quizzes and 
            detailed feedback.
          </p>
          <p className="text-gray-600">
            Our platform is built on the principles of accessibility, engagement, and 
            continuous improvement, ensuring that every user has the tools they need 
            to succeed in their learning journey.
          </p>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Made with ❤️ by Dedicated Educators
          </h2>
          <p className="text-gray-600">
            Our team consists of passionate educators and developers working together 
            to create the best learning experience for our users.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;