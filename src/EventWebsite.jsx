import React, { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Code,
  Globe,
  Instagram,
  Smartphone,
  Brain,
  Palette,
  Shield,
  Terminal,
  Github,
  Linkedin,
  ExternalLink,
  Mail,
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
      slides:
        "https://drive.google.com/drive/folders/1vHtkiQrH5Hxq_o62YgAsXY5PamFFCYeQ?usp=sharing",
      video:
        "https://www.youtube.com/playlist?list=PLDBm9gwFY2vvyK3DtBYVcOXXrypakj_Vd",
      speaker: {
        name: "Vedant Salve",
        image:
          "https://media.licdn.com/dms/image/v2/D5603AQGUQV8LelTbDQ/profile-displayphoto-shrink_800_800/B56ZQqgaukGsAg-/0/1735879930430?e=1769040000&v=beta&t=amDbtKW5FDEpOivABiWX6Jn8zbglw3lUPXnCF0Xjy2A",
        github: "https://github.com/Vedant-Salve",
        linkedin: "https://www.linkedin.com/in/vedant-salve-92380b312/",
      },
    },
    {
      title: "Web Development",
      date: "Jan 5, 2025",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      slides:
        "https://drive.google.com/drive/folders/1vHtkiQrH5Hxq_o62YgAsXY5PamFFCYeQ?usp=sharing",
      video:
        "https://www.youtube.com/playlist?list=PLDBm9gwFY2vvyK3DtBYVcOXXrypakj_Vd",
      speaker: {
        name: "Nidhi Yadav",
        image:
          "https://media.licdn.com/dms/image/v2/D5603AQG9rgf1qauUOg/profile-displayphoto-crop_800_800/B56ZiUe2qaHQAI-/0/1754837776013?e=1769040000&v=beta&t=WT7pzz-g-ZDcpqbfFbFAHHXXDW29Z2YjT2aNzApRWUc",
        github: "",
        linkedin: "https://www.linkedin.com/in/nidhi-yadav-821404290/",
      },
    },
    {
      title: "Cyber Security",
      date: "Jan 6, 2025",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      slides:
        "https://drive.google.com/drive/folders/1vHtkiQrH5Hxq_o62YgAsXY5PamFFCYeQ?usp=sharing",
      video:
        "https://www.youtube.com/playlist?list=PLDBm9gwFY2vvyK3DtBYVcOXXrypakj_Vd",
      speaker: {
        name: "Mohit Ranjan",
        image:
          "https://media.licdn.com/dms/image/v2/D5635AQEe43AIBMOC-Q/profile-framedphoto-shrink_800_800/B56ZmdRLuKG4Ag-/0/1759280151714?e=1767805200&v=beta&t=sNoQuE0Aq_if-F2D2ycOCeOwy-JSnO8bLgbVdfV2MuQ",
        github: "",
        linkedin: "https://www.linkedin.com/in/itsmohitr/",
      },
    },
    {
      title: "Data Structures & Algorithms",
      date: "Jan 7, 2025",
      icon: Code,
      color: "from-pink-500 to-purple-500",
      slides:
        "https://drive.google.com/drive/folders/1vHtkiQrH5Hxq_o62YgAsXY5PamFFCYeQ?usp=sharing",
      video:
        "https://www.youtube.com/playlist?list=PLDBm9gwFY2vvyK3DtBYVcOXXrypakj_Vd",
      speaker: {
        name: "Harshvardhan Agarwal",
        image:
          "https://media.licdn.com/dms/image/v2/D5603AQFW8zozbiL-sQ/profile-displayphoto-crop_800_800/B56ZnScNsaIYAI-/0/1760172240702?e=1769040000&v=beta&t=92Jts9CxVV2SvddT9h_0or6ijoaeRr_10RHj97FV_XM",
        github: "https://github.com/Harshvardhan-91",
        linkedin: "https://www.linkedin.com/in/harshvardhan-agarwal-605931281/",
      },
    },
    {
      title: "DevOps",
      date: "Jan 8, 2025",
      icon: Terminal,
      color: "from-cyan-500 to-blue-500",
      slides:
        "https://drive.google.com/drive/folders/1vHtkiQrH5Hxq_o62YgAsXY5PamFFCYeQ?usp=sharing",
      video:
        "https://www.youtube.com/playlist?list=PLDBm9gwFY2vvyK3DtBYVcOXXrypakj_Vd",
      speaker: {
        name: "Shashank Singh",
        image:
          "https://media.licdn.com/dms/image/v2/D5603AQHYxCoGgeR0vg/profile-displayphoto-crop_800_800/B56ZnOoF4LH8AI-/0/1760108241175?e=1769040000&v=beta&t=_psGN2v6nFBO5utgQ0iYhVFHrrcaXo8-xzSGHcmTq2s",
        github: "",
        linkedin: "https://www.linkedin.com/in/shashank-singh-584860280/",
      },
    },
    {
      title: "Machine Learning & AI",
      date: "Jan 9, 2025",
      icon: Brain,
      color: "from-purple-500 to-indigo-500",
      slides:
        "https://drive.google.com/drive/folders/1vHtkiQrH5Hxq_o62YgAsXY5PamFFCYeQ?usp=sharing",
      video:
        "https://www.youtube.com/playlist?list=PLDBm9gwFY2vvyK3DtBYVcOXXrypakj_Vd",
      speaker: {
        name: "Vatsal Khanna",
        image:
          "https://media.licdn.com/dms/image/v2/D5603AQFfZpn2T-5nFQ/profile-displayphoto-crop_800_800/B56ZqHELgwHIAI-/0/1763202613789?e=1769040000&v=beta&t=5zS-emD7vq6Ot5BcvhKORZCm-ayRqw_Yp4EJgz0MxA8",
        github: "https://github.com/vatsalKhanna5/",
        linkedin: "https://www.linkedin.com/in/vatsalkhanna/",
      },
    },
    {
      title: "Git and GitHub",
      date: "Jan 10, 2025",
      icon: Github,
      color: "from-gray-600 to-gray-900",
      slides:
        "https://drive.google.com/drive/folders/1vHtkiQrH5Hxq_o62YgAsXY5PamFFCYeQ?usp=sharing",
      video:
        "https://www.youtube.com/playlist?list=PLDBm9gwFY2vvyK3DtBYVcOXXrypakj_Vd",
      speaker: {
        name: "Jayant Joshi",
        image:
          "https://media.licdn.com/dms/image/v2/D5635AQFtOIxrtI0X-g/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1731763231665?e=1767805200&v=beta&t=M6CCr3ELJ_ZZINuOBqM13oEcQa2vPic3CW8iZ483mbc",
        github: "https://github.com/JAYANTJOSHI001",
        linkedin: "https://www.linkedin.com/in/jayant-joshi-642a79305/",
      },
    },
    {
      title: "LinkedIn",
      date: "Jan 11, 2025",
      icon: Linkedin,
      color: "from-blue-600 to-blue-800",
      slides:
        "https://drive.google.com/drive/folders/1vHtkiQrH5Hxq_o62YgAsXY5PamFFCYeQ?usp=sharing",
      video:
        "https://www.youtube.com/playlist?list=PLDBm9gwFY2vvyK3DtBYVcOXXrypakj_Vd",
      speaker: {
        name: "Bhavya Goyal",
        image:
          "https://media.licdn.com/dms/image/v2/D4D03AQFtBbUGF79odw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1689836892765?e=1769040000&v=beta&t=i77Mq_L0gnpST0c_khmKWsc9KwHv37-pIGPMk3IjNb0",
        github: "https://github.com/BhavyaSpace/",
        linkedin: "https://www.linkedin.com/in/martianbhavya/",
      },
    },
    {
      title: "UI/UX Design",
      date: "Jan 12, 2025",
      icon: Palette,
      color: "from-orange-500 to-pink-500",
      slides:
        "https://drive.google.com/drive/folders/1vHtkiQrH5Hxq_o62YgAsXY5PamFFCYeQ?usp=sharing",
      video:
        "https://www.youtube.com/playlist?list=PLDBm9gwFY2vvyK3DtBYVcOXXrypakj_Vd",
      speaker: {
        name: "Chahat Kesharwani",
        image:
          "https://media.licdn.com/dms/image/v2/D5603AQENMwgP4jiscQ/profile-displayphoto-crop_800_800/B56Zff6.GvGQAI-/0/1751808468244?e=1769040000&v=beta&t=wd0O1b3lQCM6F0hyBhlhLfeTlxlgqQVQCOCUjhlcqF0",
        github: "https://github.com/chahatkesh/",
        linkedin: "https://linkedin.com/in/chahatkesharwani/",
      },
    },
  ];

  const organizers = [
    {
      name: "Chahat Kesharwani",
      role: "Session Organiser",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQENMwgP4jiscQ/profile-displayphoto-crop_800_800/B56Zff6.GvGQAI-/0/1751808468244?e=1769040000&v=beta&t=wd0O1b3lQCM6F0hyBhlhLfeTlxlgqQVQCOCUjhlcqF0",
      github: "https://github.com/chahatkesh",
      linkedin: "https://www.linkedin.com/in/chahatkesharwani/",
    },
    {
      name: "Saumya",
      role: "Session Organiser",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQGc9kP1PhgsyA/profile-displayphoto-shrink_800_800/B4DZZ8zBYwHIAc-/0/1745850472892?e=1769040000&v=beta&t=svrVrPMsjJeKdMa0Lyarln1_5NJJfRhhZHyZ8AsGWDo",
      github: "#",
      linkedin: "https://www.linkedin.com/in/saumya-252812274/",
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

        {/* Timeline Content */}
        <div className="hidden lg:block relative z-10 max-w-6xl mx-auto pt-32 px-4">
          {/* Timeline Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Event Schedule
            </h2>
            <p className="text-blue-200 text-lg">
              Join us for 9 days of expert-led sessions
            </p>
          </div>

          <div className="flex flex-col items-center">
            {sessions.map((session, index) => {
              const Icon = session.icon;
              const isLeft = index % 2 === 0;

              return (
                <div key={index} className="relative w-full">
                  {/* Timeline line with gradient effect */}
                  {index !== sessions.length - 1 && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400/40 to-transparent" />
                  )}

                  {/* Timeline node with pulse effect */}
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center"
                    style={{ top: "2.5rem" }}>
                    <div className="w-4 h-4 rounded-full bg-blue-400 z-10 flex items-center justify-center">
                      <div className="absolute w-full h-full rounded-full bg-blue-400 animate-ping opacity-75" />
                      {/* Date label */}
                      <div
                        className={`absolute z-10 w-[110px] ${
                          isLeft ? "left-[50%] ml-4" : "right-[50%] mr-4"
                        } 
                    text-sm text-blue-200 bg-blue-900/50 px-3 py-1 rounded-full`}>
                        {session.date}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`flex ${
                      isLeft ? "justify-start" : "justify-end"
                    } w-full mb-16`}>
                    <Card
                      className={`backdrop-blur-xl bg-white/10 border-none text-white p-6 rounded-xl 
                        transition-all duration-300 w-[calc(50%-2rem)] hover:bg-white/20
                        ${
                          hoveredIndex === index
                            ? "transform scale-102 shadow-xl shadow-blue-500/20"
                            : ""
                        }`}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}>
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className={`p-3 rounded-full bg-gradient-to-br ${
                            session.color
                          }
                          shadow-lg shadow-${session.color.split("-")[2]}/20`}>
                          <Icon size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-1">
                            {session.title}
                          </h3>
                          <p className="text-sm text-gray-300 flex items-center gap-2">
                            <Clock size={12} />
                            4:00 PM IST
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 mb-6 p-3 bg-black/20 rounded-lg">
                        <img
                          src={session.speaker.image}
                          alt={session.speaker.name}
                          className="w-12 h-12 rounded-full ring-2 ring-white/20"
                        />
                        <div>
                          <p className="font-medium text-lg">
                            {session.speaker.name}
                          </p>
                          <p className="text-sm text-gray-300">Speaker</p>
                          <div className="flex gap-3 mt-2">
                            {session.speaker.github && (
                              <a
                                href={session.speaker.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white transition-colors flex items-center gap-1">
                                <Github size={16} />
                                <span className="text-sm">GitHub</span>
                              </a>
                            )}
                            <a
                              href={session.speaker.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-300 hover:text-white transition-colors flex items-center gap-1">
                              <Linkedin size={16} />
                              <span className="text-sm">LinkedIn</span>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4">
                        <a
                          href={session.slides}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm bg-white/20 px-4 py-2 rounded-lg 
                            hover:bg-white/30 transition-colors group justify-center w-full">
                          <FilePresentation size={16} />
                          <span>View Slides</span>
                          <ExternalLink
                            size={12}
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          />
                        </a>
                      </div>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* mobile view */}
        <div className="relative z-10 lg:hidden">
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

                  <div className="mt-4">
                    <a
                      target="_blank"
                      href={session.slides}
                      className="flex items-center justify-center gap-2 text-sm bg-white/20 px-4 py-2 rounded-full hover:bg-white/30 transition-colors w-full">
                      <FilePresentation size={16} />
                      <span>View Slides</span>
                    </a>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-black/50 py-12">
          <div className="justify-center items-center flex flex-col">
            <p className="mb-4 text-[32px] font-bold pb-10 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Organized by IOTA
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-blue-900/20 backdrop-blur-xl rounded-2xl p-8 border border-blue-400/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {organizers.map((organizer, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-6 p-4 bg-blue-950/30 rounded-xl">
                    <img
                      src={organizer.image}
                      alt={organizer.name}
                      className="w-16 h-16 rounded-lg object-cover ring-2 ring-blue-400/30"
                    />
                    <div>
                      <p className="font-bold text-xl text-white mb-1">
                        {organizer.name}
                      </p>
                      <p className="text-blue-200 text-sm mb-2">
                        {organizer.role}
                      </p>
                      <div className="flex gap-3">
                        {organizer.github && (
                          <a
                            href={organizer.github}
                            className="text-blue-300 hover:text-blue-200"
                            target="_blank"
                            rel="noopener noreferrer">
                            <Github size={18} />
                          </a>
                        )}
                        <a
                          href={organizer.linkedin}
                          className="text-blue-300 hover:text-blue-200"
                          target="_blank"
                          rel="noopener noreferrer">
                          <Linkedin size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-t border-blue-400/10">
                <div className="flex items-center justify-center gap-2 text-blue-200">
                  <Mail size={18} />
                  <span>iota@nitj.ac.in</span>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <a
                    href="https://www.instagram.com/iota_nitj/"
                    className="text-blue-300 hover:text-blue-200">
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/iota-community/"
                    className="text-blue-300 hover:text-blue-200">
                    <Linkedin size={20} />
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2 text-blue-200">
                  <MapPin size={18} />
                  <span>NIT Jalandhar, Punjab</span>
                </div>
              </div>

              <div className="text-center text-blue-200/60 text-sm mt-6">
                &copy; {new Date().getFullYear()} IOTA - NIT Jalandhar. All
                rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default EventWebsite;
