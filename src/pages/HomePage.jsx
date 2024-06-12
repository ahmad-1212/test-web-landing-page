import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-20 text-center">
      <div className="max-w-[1400px] mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Ace Your Anesthesiology Boards — With Confidence!
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Join thousands of successful anesthesiologists.
        </p>
        <div className="mt-8">
          <button className="bg-white text-purple-500 font-semibold py-2 px-6 rounded-lg m-2 shadow-lg hover:bg-gray-200 transition duration-300">
            Start Your Free Trial
          </button>
          <button className="bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg m-2 shadow-lg hover:bg-gray-700 transition duration-300">
            How We Help You Succeed
          </button>
        </div>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <div className="py-20 bg-gray-100 text-center">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold">
          Tailored Practice Exams, Instant Feedback, and More!
        </h2>
        <div className="mt-10 flex flex-wrap justify-center">
          <div className="w-full md:w-1/4 p-4">
            <div className="text-purple-500 mb-2">
              <i className="fas fa-file-alt text-4xl"></i>
            </div>
            <h3 className="font-semibold text-lg">Practice Exams</h3>
            <p>Simulated real test environment exams crafted by experts.</p>
          </div>
          <div className="w-full md:w-1/4 p-4">
            <div className="text-purple-500 mb-2">
              <i className="fas fa-chart-line text-4xl"></i>
            </div>
            <h3 className="font-semibold text-lg">
              Real-time Progress Tracking
            </h3>
            <p>Monitor your progress and identify areas for improvement.</p>
          </div>
          <div className="w-full md:w-1/4 p-4">
            <div className="text-purple-500 mb-2">
              <i className="fas fa-lightbulb text-4xl"></i>
            </div>
            <h3 className="font-semibold text-lg">Expert Explanations</h3>
            <p>Detailed explanations to help you understand each answer.</p>
          </div>
          <div className="w-full md:w-1/4 p-4">
            <div className="text-purple-500 mb-2">
              <i className="fas fa-users text-4xl"></i>
            </div>
            <h3 className="font-semibold text-lg">Community Support</h3>
            <p>Join a supportive community of peers and professionals.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <div className="py-20 text-center bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold">
          Hear from Those Who've Passed!
        </h2>
        <div className="mt-10 flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 p-4">
            <img
              src="https://via.placeholder.com/150"
              alt="User 1"
              className="rounded-full mx-auto mb-4 shadow-lg"
            />
            <p className="italic">
              "Pass Anesthesia Boards helped me achieve my goals!"
            </p>
            <h3 className="font-semibold mt-2">- User 1</h3>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <img
              src="https://via.placeholder.com/150"
              alt="User 2"
              className="rounded-full mx-auto mb-4 shadow-lg"
            />
            <p className="italic">
              "The practice exams were just like the real thing."
            </p>
            <h3 className="font-semibold mt-2">- User 2</h3>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <img
              src="https://via.placeholder.com/150"
              alt="User 3"
              className="rounded-full mx-auto mb-4 shadow-lg"
            />
            <p className="italic">
              "I couldn't have done it without this site."
            </p>
            <h3 className="font-semibold mt-2">- User 3</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutUsSection = () => {
  return (
    <div className="py-20 bg-gray-100 text-center">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold">
          Dedicated to Your Success in Anesthesiology
        </h2>
        <div className="mt-10">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Our Team"
            className="mx-auto rounded-lg shadow-lg"
          />
          <p className="mt-4">
            Meet the dedicated team behind Pass Anesthesia Boards.
          </p>
        </div>
      </div>
    </div>
  );
};

const BlogSection = () => {
  return (
    <div className="py-20 text-center bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold">
          Get Insights and Tips from Our Experts
        </h2>
        <div className="mt-10 flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 p-4">
            <img
              src="https://via.placeholder.com/300"
              alt="Blog 1"
              className="rounded-lg mb-4 shadow-lg"
            />
            <h3 className="font-semibold text-lg">Blog Post Title 1</h3>
            <p className="mt-2">Short description of the blog post.</p>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <img
              src="https://via.placeholder.com/300"
              alt="Blog 2"
              className="rounded-lg mb-4 shadow-lg"
            />
            <h3 className="font-semibold text-lg">Blog Post Title 2</h3>
            <p className="mt-2">Short description of the blog post.</p>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <img
              src="https://via.placeholder.com/300"
              alt="Blog 3"
              className="rounded-lg mb-4 shadow-lg"
            />
            <h3 className="font-semibold text-lg">Blog Post Title 3</h3>
            <p className="mt-2">Short description of the blog post.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-purple-500 text-white py-10 text-center">
      <div className="flex justify-center mb-10">
        <img src="./logo-white.png" className="h-[50px]" />
      </div>
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="mb-4">
          <a href="#" className="mx-2 hover:underline">
            Home
          </a>
          <a href="#" className="mx-2 hover:underline">
            Practice Exams
          </a>
          <a href="#" className="mx-2 hover:underline">
            Study Tools
          </a>
          <a href="#" className="mx-2 hover:underline">
            Success Stories
          </a>
          <a href="#" className="mx-2 hover:underline">
            Blog
          </a>
          <a href="#" className="mx-2 hover:underline">
            Contact Us
          </a>
        </div>
        <div className="mb-4">
          <a href="#" className="mx-2 text-xl">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="mx-2 text-xl">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="mx-2 text-xl">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="mx-2 text-xl">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div>
          <p>&copy; 2024 Pass Anesthesia Boards. All rights reserved.</p>
          <a href="#" className="mx-2 hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="mx-2 hover:underline">
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <AboutUsSection />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;
