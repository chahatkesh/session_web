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
    slides:
      "https://drive.google.com/drive/folders/1vHtkiQrH5Hxq_o62YgAsXY5PamFFCYeQ?usp=sharing",
    video:
      "https://www.youtube.com/playlist?list=PLDBm9gwFY2vvyK3DtBYVcOXXrypakj_Vd",
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
    slides:
      "https://drive.google.com/drive/folders/1vHtkiQrH5Hxq_o62YgAsXY5PamFFCYeQ?usp=sharing",
    video:
      "https://www.youtube.com/playlist?list=PLDBm9gwFY2vvyK3DtBYVcOXXrypakj_Vd",
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
    slides:
      "https://drive.google.com/drive/folders/1vHtkiQrH5Hxq_o62YgAsXY5PamFFCYeQ?usp=sharing",
    video:
      "https://www.youtube.com/playlist?list=PLDBm9gwFY2vvyK3DtBYVcOXXrypakj_Vd",
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
    slides:
      "https://drive.google.com/drive/folders/1vHtkiQrH5Hxq_o62YgAsXY5PamFFCYeQ?usp=sharing",
    video:
      "https://www.youtube.com/playlist?list=PLDBm9gwFY2vvyK3DtBYVcOXXrypakj_Vd",
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
    slides:
      "https://drive.google.com/drive/folders/1vHtkiQrH5Hxq_o62YgAsXY5PamFFCYeQ?usp=sharing",
    video:
      "https://www.youtube.com/playlist?list=PLDBm9gwFY2vvyK3DtBYVcOXXrypakj_Vd",
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
    slides:
      "https://drive.google.com/drive/folders/1vHtkiQrH5Hxq_o62YgAsXY5PamFFCYeQ?usp=sharing",
    video:
      "https://www.youtube.com/playlist?list=PLDBm9gwFY2vvyK3DtBYVcOXXrypakj_Vd",
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
    slides:
      "https://drive.google.com/drive/folders/1vHtkiQrH5Hxq_o62YgAsXY5PamFFCYeQ?usp=sharing",
    video:
      "https://www.youtube.com/playlist?list=PLDBm9gwFY2vvyK3DtBYVcOXXrypakj_Vd",
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
    slides:
      "https://drive.google.com/drive/folders/1vHtkiQrH5Hxq_o62YgAsXY5PamFFCYeQ?usp=sharing",
    video:
      "https://www.youtube.com/playlist?list=PLDBm9gwFY2vvyK3DtBYVcOXXrypakj_Vd",
    speaker: {
      name: "Jayant Joshi",
      image:
        "https://media.licdn.com/dms/image/v2/D5635AQFtOIxrtI0X-g/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1731763231665?e=1736582400&v=beta&t=gpI2beK4vfoUnEatv7cuvmnTN4SQ5CETpPkWTta96K8",
      github: "https://github.com/JAYANTJOSHI001",
      linkedin: "https://www.linkedin.com/in/jayant-joshi-642a79305/",
    },
  },
];


const organizers = [
  {
    name: "Chahat Kesharwani",
    role: "Lead Organizer",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQGYfizBcQGVXA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1698137364469?e=1741219200&v=beta&t=R7fzAqHEFVmY0NXMemIuDu7LgzD5RFz3BP3rUcy1mS0",
    github: "https://github.com/chahatkesh",
    linkedin: "https://www.linkedin.com/in/chahatkesharwani/",
  },
  {
    name: "Saumya",
    role: "Event Coordinator",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQGa2CLsxKjFMw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720478995462?e=1741219200&v=beta&t=00j_WHpSPxzdQ0DGPIOSCTSkqZQ7zzTzwvFLaY268Ik",
    github: "#",
    linkedin: "https://www.linkedin.com/in/saumya-252812274/",
  },
];