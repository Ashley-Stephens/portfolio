/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";


// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ashley Stephens",
  title: "Hi all, I'm Saad",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/ashleyjstephens",
  gmail: "ashleystephens.ajs@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

// -------------------------
// Projects Page + Case Studies
// -------------------------

const projectsPage = {
  title: "Projects",
  subtitle: "Pick a case study to dive into.",
  projects: [
    {
      slug: "spoofify",
      name: "Spoofify — Music playback UX",
      oneLineProblem:
        "Reduced “what do I play?” friction with clearer queue + shuffle controls.",
      role: "UX/UI",
      methods: ["flows", "prototype", "usability testing"],
      outcome: "Iteration based on testing",
      tags: ["Human-Centered", "UX Systems", "Technical"],
      links: {
        prototype: "", // add later if you have
        github: "",    // add later if you have
        live: ""       // add later if you have
      },

      caseStudy: {
        whatItIs:
          "A Spotify-inspired music player focused on faster decisions and clearer playback control.",
        team: "",      // optional: "Team of 4"
        timeline: "",  // optional: "Spring 2025"

        problem: [
          "Music apps often bury queue and shuffle behavior behind unclear controls.",
          "When users just want to quickly pick something, uncertainty around “what plays next” increases friction."
        ],

        owned: [
          "Interaction design for queue + shuffle behavior",
          "Wireframes/prototype and iteration based on feedback",
          "Implementation details to match the UX decisions"
        ],

        constraints: [
          "Had to fit within an existing template + routes",
          "Time-limited iteration cycles",
          "Design needed to be understandable at a glance"
        ],

        process: {
          research: [
            "Quick scan of comparable players for queue/shuffle patterns",
            "Observed where users hesitated or got lost"
          ],
          synthesis: [
            "Identified primary tasks: pick, play, understand next, adjust quickly",
            "Prioritized controls that reduce decision friction"
          ],
          design: [
            "Designed clearer queue visibility and shuffle modes",
            "Reduced hidden states and improved labeling"
          ],
          iteration: [
            "Tested the flow, noted confusions, adjusted affordances and copy",
            "Refined layout for faster scanning"
          ]
        },

        decisions: [
          {
            issue: "Users couldn’t confidently predict what would play next.",
            change: "Made the queue easier to view and understand during playback.",
            why: "Reducing uncertainty improves speed-to-action.",
            result: "Users moved through “choose → play → confirm next” with less hesitation."
          },
          {
            issue: "Shuffle controls felt ambiguous (users didn’t know what shuffle meant).",
            change: "Clarified shuffle modes with explicit labels and placement.",
            why: "Transparency reduces misclicks and backtracking.",
            result: "Fewer “wait, why did it play that?” moments in testing."
          },
          {
            issue: "Too many controls competed for attention.",
            change: "Simplified the hierarchy so the primary action reads first.",
            why: "Cleaner hierarchy supports scanning and confidence.",
            result: "Faster initial orientation in the UI."
          }
        ],

        outcome: {
          metrics: [], // add numbers if you have them
          whatChanged: [
            "Validated key interaction changes through testing and iteration",
            "Improved clarity of queue + shuffle behavior"
          ]
        },

        reflection: [
          "Next: add lightweight instrumentation for behavioral metrics",
          "Next: test with users who rely heavily on queue management",
          "Learned: clear labels beat clever controls for decision-heavy moments"
        ]
      },

      nextSlug: "shelfsaver"
    },

    {
      slug: "shelfsaver",
      name: "ShelfSaver — Food tracking concept",
      oneLineProblem:
        "Help users track food and reduce waste with reminders and recipes.",
      role: "UX research + IA",
      methods: ["personas", "user stories", "wireframes"],
      outcome: "Clarified MVP + key flows",
      tags: ["Human-Centered", "Information Architecture"],
      links: {
        prototype: "",
        github: "",
        live: ""
      },

      caseStudy: {
        whatItIs:
          "A concept for tracking food, surfacing reminders, and suggesting recipes to reduce waste.",
        team: "",
        timeline: "",

        problem: [
          "People forget what they already have and discover food too late.",
          "A solution needs to be quick to use, or it becomes another chore."
        ],

        owned: [
          "Research framing and assumptions",
          "Information architecture and key user flows",
          "Wireframes for MVP screens"
        ],

        constraints: [
          "Concept had to stay minimal to avoid “another app I won’t use”",
          "Needed clear MVP scope for a first iteration"
        ],

        process: {
          research: [
            "Created personas + scenarios for typical households",
            "Mapped where forgetting happens in real routines"
          ],
          synthesis: [
            "Defined the MVP around: add item, see what’s expiring, act on it",
            "Reduced scope to the flows that drive habit formation"
          ],
          design: [
            "Designed flows for tracking + reminders + recipe prompt moments",
            "Wireframed screens with strong hierarchy"
          ],
          iteration: [
            "Reviewed flows for friction and removed unnecessary steps",
            "Refined IA so users can find items fast"
          ]
        },

        decisions: [
          {
            issue: "Too much data-entry kills adoption.",
            change: "Kept input lightweight and prioritized quick adds.",
            why: "Lower effort increases follow-through.",
            result: "The MVP stays usable even for busy users."
          },
          {
            issue: "Users needed a clear “what do I do now?” moment.",
            change: "Centered the experience around expiring-soon items and actions.",
            why: "Action-first design reduces procrastination.",
            result: "Flows feel more purposeful and less like “tracking for tracking’s sake.”"
          },
          {
            issue: "Feature creep made the concept unfocused.",
            change: "Tightened scope to MVP + key flows.",
            why: "A smaller product can be tested and improved faster.",
            result: "Clearer product definition and roadmap."
          }
        ],

        outcome: {
          metrics: [],
          whatChanged: [
            "Clarified MVP scope and core flows",
            "Produced wireframes aligned to realistic routines"
          ]
        },

        reflection: [
          "Next: validate reminder timing with quick user tests",
          "Next: explore scanning/receipt import as a later enhancement",
          "Learned: MVP clarity matters more than feature ambition"
        ]
      },

      nextSlug: "spoofify"
    }
  ]
};




export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  isHireable,
  resumeSection,
  projectsPage
};
