
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Download, Shield, Smartphone, Search, Cast, Users, Star, Check, ArrowRight, Award, Globe, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Play className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-bold text-xl">MovieWave</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            </div>
            <div className="flex space-x-4">
              <Link to="/login">
                <Button variant="ghost" className="text-white hover:bg-white/10">
                  Sign In
                </Button>
              </Link>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Stream Your
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> World</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experience unlimited movies, shows, and exclusive content with AI-powered recommendations, 
              offline downloads, and seamless streaming across all your devices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-4 h-auto">
                <Play className="w-5 h-5 mr-2" />
                Start Watching Now
              </Button>
              <Button size="lg" className="bg-white/10 border border-white/30 text-white hover:bg-white/20 hover:border-white/50 backdrop-blur-sm text-lg px-8 py-4 h-auto">
                Watch Trailer
              </Button>
            </div>
          </div>
          
          {/* Hero Visual */}
          <div className="mt-16 relative">
            <div className="relative mx-auto max-w-4xl">
              <div className="aspect-video bg-gradient-to-r from-purple-800/50 to-pink-800/50 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white/80">Platform Preview</p>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-72 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-72 h-40 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Everything You Need to
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Stream</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover why millions choose MovieWave for their entertainment needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">AI Recommendations</h3>
                <p className="text-gray-300">
                  Personalized content curation powered by advanced AI algorithms that learn your preferences.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Offline Downloads</h3>
                <p className="text-gray-300">
                  Download your favorite content for offline viewing. Watch anywhere, anytime, even without internet.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Parental Controls</h3>
                <p className="text-gray-300">
                  Keep your family safe with comprehensive parental controls and dedicated kids mode.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Multi-Device Sync</h3>
                <p className="text-gray-300">
                  Continue watching seamlessly across all your devices. Your progress syncs automatically.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Advanced Search</h3>
                <p className="text-gray-300">
                  Find exactly what you're looking for with our powerful search engine and smart filters.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-500 rounded-full flex items-center justify-center mx-auto">
                  <Cast className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Chromecast & AirPlay</h3>
                <p className="text-gray-300">
                  Stream directly to your TV with built-in Chromecast and AirPlay support for the big screen experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Choose Your
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Plan</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options designed to fit your entertainment needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Basic</h3>
                  <div className="text-4xl font-bold text-white mb-1">$9.99</div>
                  <p className="text-gray-400">per month</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">HD streaming quality</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">1 device at a time</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Limited downloads</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Basic content library</span>
                  </div>
                </div>
                <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white border-0">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="bg-gradient-to-b from-purple-600/30 to-pink-600/30 border-purple-400/50 backdrop-blur-sm hover:from-purple-600/40 hover:to-pink-600/40 transition-all duration-300 scale-105 shadow-2xl shadow-purple-500/25">
              <CardContent className="p-8 space-y-6 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Premium</h3>
                  <div className="text-4xl font-bold text-white mb-1">$19.99</div>
                  <p className="text-gray-300">per month</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white">4K Ultra HD streaming</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white">4 devices simultaneously</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white">Unlimited downloads</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white">Premium content library</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white">AI recommendations</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            {/* Family Plan */}
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Family</h3>
                  <div className="text-4xl font-bold text-white mb-1">$29.99</div>
                  <p className="text-gray-400">per month</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">4K Ultra HD streaming</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">8 devices simultaneously</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Unlimited downloads</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Complete content library</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Enhanced parental controls</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">6 user profiles</span>
                  </div>
                </div>
                <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white border-0">
                  Choose Family
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              About
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> MovieWave</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionizing the way you experience entertainment with cutting-edge technology and unparalleled content quality
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">Our Story</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Founded in 2020, MovieWave began with a simple mission: to create the ultimate streaming experience that puts users first. 
                We believe entertainment should be accessible, personalized, and seamless across all devices.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Today, we serve over 10 million users worldwide, delivering premium content with industry-leading technology 
                including AI-powered recommendations, advanced parental controls, and innovative offline capabilities.
              </p>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                    <Globe className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-white/80 text-lg">Global Reach</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm text-center p-8">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white">Innovation First</h4>
                <p className="text-gray-300">
                  We're constantly pushing boundaries with AI technology, advanced streaming capabilities, and user-centric features.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm text-center p-8">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white">Community Driven</h4>
                <p className="text-gray-300">
                  Our platform evolves based on user feedback, ensuring we deliver exactly what our community wants.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm text-center p-8">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white">Performance Excellence</h4>
                <p className="text-gray-300">
                  Lightning-fast streaming, minimal buffering, and 99.9% uptime ensure you never miss a moment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-white">50K+</div>
              <div className="text-gray-300">Movies & Shows</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-white">10M+</div>
              <div className="text-gray-300">Happy Users</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-white">190+</div>
              <div className="text-gray-300">Countries</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-white">4.8★</div>
              <div className="text-gray-300">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to Start Your
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Journey?</span>
          </h2>
          <p className="text-xl text-gray-300">
            Join millions of users worldwide and discover your next favorite movie or show today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-4 h-auto">
              Start Free Trial
            </Button>
            <Button size="lg" className="bg-white/10 border border-white/30 text-white hover:bg-white/20 hover:border-white/50 backdrop-blur-sm text-lg px-8 py-4 h-auto">
              <Users className="w-5 h-5 mr-2" />
              View Plans
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Play className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-bold text-xl">MovieWave</span>
              </div>
              <p className="text-gray-400">
                The ultimate streaming platform for movies and entertainment.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Product</h4>
              <div className="space-y-2 text-gray-400">
                <div>Features</div>
                <div>Pricing</div>
                <div>Download App</div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Support</h4>
              <div className="space-y-2 text-gray-400">
                <div>Help Center</div>
                <div>Contact Us</div>
                <div>System Status</div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Company</h4>
              <div className="space-y-2 text-gray-400">
                <div>About Us</div>
                <div>Careers</div>
                <div>Privacy Policy</div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MovieWave Smart Stream. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
