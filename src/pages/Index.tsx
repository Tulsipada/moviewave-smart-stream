import React from "react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">StreamVibe</div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a>
            <a href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
          </nav>
          <div className="flex space-x-4">
            <a 
              href="/login" 
              className="text-white/80 hover:text-white transition-colors px-4 py-2 rounded-md border border-white/20 hover:border-white/40"
            >
              Login
            </a>
            <a 
              href="/register" 
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              Sign Up
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-8">
          Unlock the Ultimate Streaming Experience
        </h1>
        <p className="text-lg text-white/80 mb-12">
          StreamVibe brings all your favorite streaming services together in one place. Discover new content, share with friends, and create your personalized vibe.
        </p>
        <a 
          href="/register" 
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md text-xl font-semibold transition-colors"
        >
          Start Streaming Now
        </a>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Choose Your Vibe
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="bg-black/20 backdrop-blur-sm rounded-md p-6 border border-white/10 text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">Basic</h3>
            <div className="text-white text-5xl font-extrabold mb-4">$9.99</div>
            <p className="text-white/60 mb-6">
              Access to standard streaming content.
            </p>
            <a 
              href="/register" 
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition-colors inline-block"
            >
              Get Started
            </a>
          </div>

          {/* Premium Plan */}
          <div className="bg-black/20 backdrop-blur-sm rounded-md p-6 border border-white/10 text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">Premium</h3>
            <div className="text-white text-5xl font-extrabold mb-4">$19.99</div>
            <p className="text-white/60 mb-6">
              Ad-free streaming with 4K Ultra HD.
            </p>
            <a 
              href="/register" 
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition-colors inline-block"
            >
              Upgrade Now
            </a>
          </div>

          {/* Family Plan */}
          <div className="bg-black/20 backdrop-blur-sm rounded-md p-6 border border-white/10 text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">Family</h3>
            <div className="text-white text-5xl font-extrabold mb-4">$29.99</div>
            <p className="text-white/60 mb-6">
              Share with the whole family, up to 5 devices.
            </p>
            <a 
              href="/register" 
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition-colors inline-block"
            >
              Join Family
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          About StreamVibe
        </h2>
        <p className="text-lg text-white/80 text-center">
          StreamVibe is designed to revolutionize your streaming experience. We believe in bringing all your content into one seamless platform, making discovery and sharing easier than ever. Join us in creating the ultimate vibe!
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 py-8">
        <div className="container mx-auto px-4 text-center text-white/60">
          &copy; {new Date().getFullYear()} StreamVibe. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
