import React, { useState } from "react";
import {
  Calendar,
  Code,
  Globe,
  Smartphone,
  Brain,
  Palette,
  Shield,
  Terminal,
  Github,
  Linkedin,
  ExternalLink,
  Video,
  Presentation as FilePresentation,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const EventWebsite = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const sessions = [
    {
      title: "Data Structures & Algorithms",
      date: "Jan 2, 2025",
      icon: Code,
      color: "from-pink-500 to-purple-500",
      meet: "https://meet.google.com",
      slides: "https://slides.com",
      video: "https://youtube.com",
      speaker: {
        name: "Alex Chen",
        image: "/api/placeholder/150/150",
        github: "https://github.com/alexchen",
        linkedin: "https://linkedin.com/in/alexchen",
      },
    },
    {
      title: "Web Development",
      date: "Jan 3, 2025",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      meet: "https://meet.google.com",
      slides: "https://slides.com",
      video: "https://youtube.com",
      speaker: {
        name: "Sarah Miller",
        image: "/api/placeholder/150/150",
        github: "https://github.com/sarahmiller",
        linkedin: "https://linkedin.com/in/sarahmiller",
      },
    },
    {
      title: "App Development",
      date: "Jan 4, 2025",
      icon: Smartphone,
      color: "from-green-500 to-teal-500",
      meet: "https://meet.google.com",
      slides: "https://slides.com",
      video: "https://youtube.com",
      speaker: {
        name: "David Park",
        image: "/api/placeholder/150/150",
        github: "https://github.com/davidpark",
        linkedin: "https://linkedin.com/in/davidpark",
      },
    },
    {
      title: "Machine Learning & AI",
      date: "Jan 5, 2025",
      icon: Brain,
      color: "from-purple-500 to-indigo-500",
      meet: "https://meet.google.com",
      slides: "https://slides.com",
      video: "https://youtube.com",
      speaker: {
        name: "Emma Watson",
        image: "/api/placeholder/150/150",
        github: "https://github.com/emmawatson",
        linkedin: "https://linkedin.com/in/emmawatson",
      },
    },
    {
      title: "UI/UX Design",
      date: "Jan 6, 2025",
      icon: Palette,
      color: "from-orange-500 to-pink-500",
      meet: "https://meet.google.com",
      slides: "https://slides.com",
      video: "https://youtube.com",
      speaker: {
        name: "Michael Lee",
        image: "/api/placeholder/150/150",
        github: "https://github.com/michaellee",
        linkedin: "https://linkedin.com/in/michaellee",
      },
    },
    {
      title: "Cyber Security",
      date: "Jan 7, 2025",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      meet: "https://meet.google.com",
      slides: "https://slides.com",
      video: "https://youtube.com",
      speaker: {
        name: "Lisa Brown",
        image: "/api/placeholder/150/150",
        github: "https://github.com/lisabrown",
        linkedin: "https://linkedin.com/in/lisabrown",
      },
    },
    {
      title: "DevOps",
      date: "Jan 8, 2025",
      icon: Terminal,
      color: "from-cyan-500 to-blue-500",
      meet: "https://meet.google.com",
      slides: "https://slides.com",
      video: "https://youtube.com",
      speaker: {
        name: "James Wilson",
        image: "/api/placeholder/150/150",
        github: "https://github.com/jameswilson",
        linkedin: "https://linkedin.com/in/jameswilson",
      },
    },
    {
      title: "Git and GitHub",
      date: "Jan 9, 2025",
      icon: Github,
      color: "from-gray-600 to-gray-900",
      meet: "https://meet.google.com",
      slides: "https://slides.com",
      video: "https://youtube.com",
      speaker: {
        name: "Rachel Kim",
        image: "/api/placeholder/150/150",
        github: "https://github.com/rachelkim",
        linkedin: "https://linkedin.com/in/rachelkim",
      },
    },
    {
      title: "LinkedIn",
      date: "Jan 10, 2025",
      icon: Linkedin,
      color: "from-blue-600 to-blue-800",
      meet: "https://meet.google.com",
      slides: "https://slides.com",
      video: "https://youtube.com",
      speaker: {
        name: "Tom Anderson",
        image: "/api/placeholder/150/150",
        github: "https://github.com/tomanderson",
        linkedin: "https://linkedin.com/in/tomanderson",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
              }}>
              <div
                className={`w-24 h-24 rounded-full bg-gradient-to-br ${
                  sessions[i % sessions.length].color
                } opacity-20 blur-xl`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-6xl mx-auto pt-16 pb-12 text-center px-4">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-4">
            Tech Learning Series 2025
          </h1>
          <p className="text-xl text-gray-300">
            9 Days of Knowledge Sharing & Growth
          </p>
        </div>

        {/* Sessions Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {sessions.map((session, index) => {
            const Icon = session.icon;
            return (
              <Card
                key={index}
                className={`backdrop-blur-xl bg-white/10 border-none text-white p-6 rounded-xl transition-all duration-300 ${
                  hoveredIndex === index ? "transform scale-105" : ""
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}>
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`p-3 rounded-full bg-gradient-to-br ${session.color}`}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">{session.title}</h3>
                    <p className="text-sm text-gray-300">{session.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={session.speaker.image}
                    alt={session.speaker.name}
                    className="w-12 h-12 rounded-full ring-2 ring-white/20"
                  />
                  <div>
                    <p className="font-medium">{session.speaker.name}</p>
                    <div className="flex gap-2 mt-1">
                      <a
                        target="_blank"
                        href={session.speaker.github}
                        className="text-gray-300 hover:text-white transition-colors">
                        <Github size={16} />
                      </a>
                      <a
                        target="_blank"
                        href={session.speaker.linkedin}
                        className="text-gray-300 hover:text-white transition-colors">
                        <Linkedin size={16} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-4">
                  <a
                    target="_blank"
                    href={session.meet}
                    className="flex items-center gap-1 text-sm bg-white/20 px-3 py-1 rounded-full hover:bg-white/30 transition-colors">
                    <ExternalLink size={14} />
                    Join
                  </a>
                  <a
                    target="_blank"
                    href={session.slides}
                    className="flex items-center gap-1 text-sm bg-white/20 px-3 py-1 rounded-full hover:bg-white/30 transition-colors">
                    <FilePresentation size={14} />
                    Slides
                  </a>
                  <a
                    target="_blank"
                    href={session.video}
                    className="flex items-center gap-1 text-sm bg-white/20 px-3 py-1 rounded-full hover:bg-white/30 transition-colors">
                    <Video size={14} />
                    Record
                  </a>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Footer */}
        <footer className="max-w-6xl mx-auto mt-16 mb-8 text-center text-gray-300 px-4">
          <p className="mb-4 text-lg bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Organized by
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 ">
            <div className="flex items-center gap-2">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQGYfizBcQGVXA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1698137364469?e=1741219200&v=beta&t=R7fzAqHEFVmY0NXMemIuDu7LgzD5RFz3BP3rUcy1mS0"
                alt="Chahat"
                className="rounded-full ring-2 ring-purple-500/50 h-10"
              />
              <div className="text-left">
                <p className="font-medium text-white">Chahat Kesharwani</p>
                <div className="flex gap-2">
                  <a
                    target="_blank"
                    href="https://github.com/chahatkesh"
                    className="text-gray-300 hover:text-purple-400 transition-colors">
                    <Github size={16} />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/chahatkesharwani/"
                    className="text-gray-300 hover:text-purple-400 transition-colors">
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQGa2CLsxKjFMw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720478995462?e=1741219200&v=beta&t=00j_WHpSPxzdQ0DGPIOSCTSkqZQ7zzTzwvFLaY268Ik"
                alt="Saumya"
                className="rounded-full ring-2 ring-pink-500/50 h-10"
              />
              <div className="text-left">
                <p className="font-medium text-white">Saumya</p>
                <div className="flex gap-2">
                  <a
                    target="_blank"
                    href=""
                    className="text-gray-300 hover:text-pink-400 transition-colors">
                    <Github size={16} />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/saumya-252812274/"
                    className="text-gray-300 hover:text-pink-400 transition-colors">
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default EventWebsite;
