import React from 'react';
import {
  Calendar,
  Users,
  Shield,
  Search,
  Settings,
  Bell,
  Smartphone,
  Code,
  Database,
  Server,
  Palette,
  Target,
  Zap,
  Heart,
  ArrowRight,
  Github,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useEventStore from '../stores/eventStore';
import Footer from '../components/Footer';
const features = [
  {
    icon: Shield,
    title: "Secure Authentication",
    description: "JWT-based secure login and registration system to protect user data and ensure safe access.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Search,
    title: "Event Discovery",
    description: "Browse and discover events by categories like Technical, Cultural, Sports, and more.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Calendar,
    title: "Detailed Event Pages",
    description: "Rich event pages with images, pricing, descriptions, and all the information you need.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Settings,
    title: "Admin Dashboard",
    description: "Comprehensive admin panel to manage events, participants, and platform analytics.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Bell,
    title: "Real-time Updates",
    description: "Stay updated with instant notifications and real-time event updates using Zustand.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Fully responsive UI that works seamlessly across all devices and screen sizes.",
    color: "from-teal-500 to-teal-600",
  },
];

const techStack = {
  frontend: [
    { name: "React 19", icon: Code, description: "Latest React with concurrent features" },
    { name: "Vite", icon: Zap, description: "Lightning-fast build tool and dev server" },
    { name: "Zustand", icon: Database, description: "Lightweight state management" },
    { name: "Tailwind CSS", icon: Palette, description: "Utility-first CSS framework" },
  ],
  backend: [
    { name: "Express.js 5", icon: Server, description: "Fast, minimalist web framework" },
    { name: "MongoDB", icon: Database, description: "NoSQL database for flexibility" },
    { name: "JWT Auth", icon: Shield, description: "Secure token-based authentication" },
  ],
};


export default function EventifyAbout() {
  
  
  const { events } = useEventStore();
  const navigate = useNavigate();
  const stats = [
    { label: "Events Managed", value:`${events.length} +`, icon: Calendar },
    { label: "Active Users", value: "100+", icon: Users },
    { label: "Categories", value: "8+", icon: Target },
    { label: "Uptime", value: "99.9%", icon: Zap },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20 md:py-32">
          <div className="text-center space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Event<span className="text-yellow-300">ify</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-4">
                Streamlining college event management with modern technology and intuitive design
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 px-4">
              <span className="bg-white/20 text-white hover:bg-white/30 px-3 py-2 text-xs sm:text-sm rounded-md transition-colors cursor-default">
                🎓 College Events
              </span>
              <span className="bg-white/20 text-white hover:bg-white/30 px-3 py-2 text-xs sm:text-sm rounded-md transition-colors cursor-default">
                🚀 Full-Stack
              </span>
              <span className="bg-white/20 text-white hover:bg-white/30 px-3 py-2 text-xs sm:text-sm rounded-md transition-colors cursor-default">
                ⚡ Real-time
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-6 md:pt-8 px-4">
              <button className="bg-white text-blue-600 hover:bg-blue-50 transition-colors px-6 py-3 rounded-lg shadow-lg flex items-center justify-center gap-2 font-medium">
                <ExternalLink className="h-5 w-5" />
                View Demo
              </button>
              <Link to='https://github.com/async-chinmoy/Eventify/'> <button className="border-2 border-white text-white hover:bg-white/10 transition-colors px-6 py-3 rounded-lg shadow-lg flex items-center justify-center gap-2 font-medium">
                <Github className="h-5 w-5" />
                View Source
              </button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="mx-auto w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <stat.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 space-y-16 md:space-y-20">
        {/* Mission Section */}
        <section className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Mission</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              To revolutionize how college events are organized and experienced by providing a comprehensive,
              user-friendly platform that connects students with opportunities and helps administrators manage events
              efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-8">
            {/* For Students Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 md:p-8">
              <div className="text-center space-y-4">
                <div className="mx-auto w-14 h-14 md:w-16 md:h-16 bg-blue-500 rounded-full flex items-center justify-center">
                  <Target className="h-7 w-7 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-blue-900">For Students</h3>
                <p className="text-sm md:text-base text-blue-700">
                  Discover exciting events, register seamlessly, and never miss out on opportunities that matter to you.
                </p>
              </div>
            </div>

            {/* For Admins Card */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 md:p-8">
              <div className="text-center space-y-4">
                <div className="mx-auto w-14 h-14 md:w-16 md:h-16 bg-purple-500 rounded-full flex items-center justify-center">
                  <Settings className="h-7 w-7 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-purple-900">For Admins</h3>
                <p className="text-sm md:text-base text-purple-700">
                  Manage events effortlessly with powerful tools, analytics, and real-time participant tracking.
                </p>
              </div>
            </div>

            {/* For Community Card */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 md:p-8">
              <div className="text-center space-y-4">
                <div className="mx-auto w-14 h-14 md:w-16 md:h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <Heart className="h-7 w-7 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-green-900">For Community</h3>
                <p className="text-sm md:text-base text-green-700">
                  Build stronger college communities by making event participation more accessible and engaging.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Powerful Features</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage and participate in college events, all in one platform.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group p-6"
              >
                <div className="space-y-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Built with Modern Technology</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Leveraging cutting-edge technologies to deliver a fast, reliable, and scalable platform.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Frontend Card */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-6 md:p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-900 flex items-center gap-3 mb-2">
                    <Code className="h-7 w-7 md:h-8 md:w-8" />
                    Frontend
                  </h3>
                  <p className="text-blue-700">
                    Modern React ecosystem for exceptional user experience
                  </p>
                </div>

                <div className="space-y-4">
                  {techStack.frontend.map((tech, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-white/60 rounded-lg hover:bg-white/80 transition-colors">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <tech.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-900">{tech.name}</h4>
                        <p className="text-sm text-blue-700">{tech.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Backend Card */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-6 md:p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-green-900 flex items-center gap-3 mb-2">
                    <Server className="h-7 w-7 md:h-8 md:w-8" />
                    Backend
                  </h3>
                  <p className="text-green-700">
                    Robust server architecture for reliability and performance
                  </p>
                </div>

                <div className="space-y-4">
                  {techStack.backend.map((tech, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-white/60 rounded-lg hover:bg-white/80 transition-colors">
                      <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <tech.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900">{tech.name}</h4>
                        <p className="text-sm text-green-700">{tech.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="text-center space-y-8 py-12 md:py-16">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Vision</h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                We envision a future where every college event becomes a catalyst for learning, growth, and community building.
                Through innovative technology and thoughtful design, we're creating connections that last beyond the classroom
                and fostering environments where students thrive both academically and socially.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 pt-8">
                <div className="text-center space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-indigo-600">10K+</div>
                  <div className="text-sm text-gray-600">Students Connected</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-purple-600">500+</div>
                  <div className="text-sm text-gray-600">Events Hosted</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-pink-600">50+</div>
                  <div className="text-sm text-gray-600">Colleges Served</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center space-y-8 py-12 md:py-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Events?</h2>
              <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
                Join hundreds of colleges already using Eventify to create amazing event experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button onClick={() => navigate("/home")} className="bg-white text-blue-600 hover:bg-blue-50 transition-colors px-6 py-3 rounded-lg shadow-lg flex items-center justify-center gap-2 font-medium">
                  Get Started Today
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="border-2 border-white text-white hover:bg-white/10 transition-colors px-6 py-3 rounded-lg shadow-lg font-medium">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer/>
    
    </div>
  );
}