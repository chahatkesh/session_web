import React, { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
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
      title: "App Development",
      date: "Jan 4, 2025",
      icon: Smartphone,
      color: "from-green-500 to-teal-500",
      meet: "https://meet.google.com/rqk-usgg-rqg",
      slides: "https://slides.com",
      video: "https://youtube.com",
      speaker: {
        name: "Vedant Salve",
        image: "https://avatars.githubusercontent.com/u/173059390?v=4",
        github: "https://github.com/Vedant-Salve",
        linkedin: "https://www.linkedin.com/in/vedant-salve-92380b312/",
      },
    },
    {
      title: "Web Development",
      date: "Jan 5, 2025",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      meet: "https://meet.google.com/rqk-usgg-rqg",
      slides: "https://slides.com",
      video: "https://youtube.com",
      speaker: {
        name: "Nidhi Yadav",
        image:
          "https://media.licdn.com/dms/image/v2/D5603AQEnNpmRcdy53A/profile-displayphoto-shrink_800_800/B56ZPlE.sFHoAc-/0/1734715115385?e=1741219200&v=beta&t=ctjAcY9slCR-kcdbw5E_iASkEwrCgXIFIQL0Zi8Eg3w",
        github: "",
        linkedin: "https://www.linkedin.com/in/nidhi-yadav-821404290/",
      },
    },
    {
      title: "Cyber Security",
      date: "Jan 6, 2025",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      meet: "https://meet.google.com/rqk-usgg-rqg",
      slides: "https://slides.com",
      video: "https://youtube.com",
      speaker: {
        name: "Mohit Ranjan",
        image:
          "https://media.licdn.com/dms/image/v2/D4E03AQEnsWgwGRUPAQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729770463518?e=1741219200&v=beta&t=dm_MF1vcbVN3bp1MapoFgQq2Fc9zSyYJv8Mkfq__6EI",
        github: "",
        linkedin: "https://www.linkedin.com/in/itsmohitr/",
      },
    },
    {
      title: "Data Structures & Algorithms",
      date: "Jan 7, 2025",
      icon: Code,
      color: "from-pink-500 to-purple-500",
      meet: "https://meet.google.com/rqk-usgg-rqg",
      slides: "https://slides.com",
      video: "https://youtube.com",
      speaker: {
        name: "Harshvardhan Agarwal",
        image:
          "https://media.licdn.com/dms/image/v2/D4D03AQG8eXHcrE9JEA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693983521059?e=1741219200&v=beta&t=0HF6DUpMeDXlW0yfMHkJBid-8_FQywwE06rSocXcKsQ",
        github: "https://github.com/Harshvardhan-91",
        linkedin: "https://www.linkedin.com/in/harshvardhan-agarwal-605931281/",
      },
    },
    {
      title: "DevOps",
      date: "Jan 8, 2025",
      icon: Terminal,
      color: "from-cyan-500 to-blue-500",
      meet: "https://meet.google.com/rqk-usgg-rqg",
      slides: "https://slides.com",
      video: "https://youtube.com",
      speaker: {
        name: "Shashank Singh",
        image:
          "https://media.licdn.com/dms/image/v2/D4D03AQFk56qhuMpoDA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1699990386419?e=1741219200&v=beta&t=gSgYxhwHMj-MlxCq4M87zOR9rfyvBtLHx_miHLpxzJU",
        github: "",
        linkedin: "https://www.linkedin.com/in/shashank-singh-584860280/",
      },
    },
    {
      title: "Machine Learning & AI",
      date: "Jan 9, 2025",
      icon: Brain,
      color: "from-purple-500 to-indigo-500",
      meet: "https://meet.google.com/rqk-usgg-rqg",
      slides: "https://slides.com",
      video: "https://youtube.com",
      speaker: {
        name: "Vatsal Khanna",
        image:
          "https://media.licdn.com/dms/image/v2/D4E03AQGBwIJdp-bJeQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728579143693?e=1741219200&v=beta&t=L0B61qKKRKdE0QuTzfnsxGG81y3LLmqpW0eM2L43nFM",
        github: "https://github.com/vatsalKhanna5/",
        linkedin: "https://www.linkedin.com/in/vatsalkhanna/",
      },
    },
    {
      title: "UI/UX Design",
      date: "Jan 10, 2025",
      icon: Palette,
      color: "from-orange-500 to-pink-500",
      meet: "https://meet.google.com/rqk-usgg-rqg",
      slides: "https://slides.com",
      video: "https://youtube.com",
      speaker: {
        name: "Chahat Kesharwani",
        image:
          "https://media.licdn.com/dms/image/v2/D4D03AQGYfizBcQGVXA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1698137364469?e=1741219200&v=beta&t=R7fzAqHEFVmY0NXMemIuDu7LgzD5RFz3BP3rUcy1mS0",
        github: "https://github.com/chahatkesh/",
        linkedin: "https://linkedin.com/in/chahatkesharwani/",
      },
    },
    {
      title: "LinkedIn",
      date: "Jan 11, 2025",
      icon: Linkedin,
      color: "from-blue-600 to-blue-800",
      meet: "https://meet.google.com/rqk-usgg-rqg",
      slides: "https://slides.com",
      video: "https://youtube.com",
      speaker: {
        name: "Bhavya Goyal",
        image:
          "https://media.licdn.com/dms/image/v2/D4D03AQFtBbUGF79odw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1689836892765?e=1741219200&v=beta&t=1KToF_ObgbmUlia4psHyQHrCljG7v-bhfSVBnkfJZL4",
        github: "https://github.com/BhavyaSpace/",
        linkedin: "https://www.linkedin.com/in/bhavyaspace/",
      },
    },
    {
      title: "Git and GitHub",
      date: "Jan 12, 2025",
      icon: Github,
      color: "from-gray-600 to-gray-900",
      meet: "https://meet.google.com/rqk-usgg-rqg",
      slides: "https://slides.com",
      video: "https://youtube.com",
      speaker: {
        name: "Jayant Joshi",
        image:
          "https://media.licdn.com/dms/image/v2/D5603AQFnVKuHKjGHyg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1702898584147?e=1741219200&v=beta&t=xQOsqZ5QUUOS1GOc3r8ckBv763eV3k1t2BXJ0xx9mmw",
        github: "https://github.com/JAYANTJOSHI001",
        linkedin: "https://www.linkedin.com/in/jayant-joshi001/",
      },
    },
  ];
  return (
    <>
      <div className="relative w-screen h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-indigo-500 rounded-full blur-3xl"></div>
        </div>

        {/* Content Container */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 text-white">
          {/* Event Badge */}
          <div className="mb-8 bg-blue-700/30 backdrop-blur-sm px-6 py-2 rounded-full border border-blue-400/30">
            <span className="text-blue-200">IOTA - NIT Jalandhar Presents</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-4">
            Tech Learning Series
            <span className="text-blue-300"> 2025</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-200 text-center mb-12">
            9 Days of Knowledge Sharing & Growth
          </p>

          {/* Event Details */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-400" />
              <span>January 4-12, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-400" />
              <span>04:00 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>Virtual</span>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 transform hover:scale-105">
            Explore More
          </button>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <div className="w-1 h-16 bg-gradient-to-b from-blue-400/0 to-blue-400/50"></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
          </div>
        </div>
      </div>
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
          {/* Sessions Grid */}
          <div className="max-w-6xl pt-32 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
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
                      <p className="text-sm text-gray-300 justify-center items-center gap-2 inline-flex">
                        <Calendar size={12} />
                        {session.date}
                      </p>
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
                      Recording
                    </a>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Footer */}
          <footer className="max-w-6xl mx-auto mt-16 mb-8 text-center text-gray-300 px-4 py-20">
            <p className="mb-4 text-[32px] font-bold pb-10 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Organized by IOTA
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
    </>
  );
};

export default EventWebsite;
