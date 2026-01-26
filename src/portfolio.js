/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";


// Summary And Greeting Section

const greeting = {
  username: "Ashley Stephens",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/ashleyjstephens",
  gmail: "ashleystephens.ajs@gmail.com",
  display: true // Set true to display this section, defaults to false
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
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
      slug: "mixflow",

      // ADD these (so your existing case study page can render it)
      name: "Mixflow — Music playback UX",
      oneLineProblem:
        "Users don’t trust shuffle—repeat loops happen while many songs never play, and users can’t influence playback behavior.",
      role: "UX/UI Designer + Front-end (Solo FE) • Team of 5",
      tags: ["Human-Centered", "UX Systems", "Technical"],
      methods: ["interviews", "surveys", "personas", "scenarios", "wireframes", "prototyping", "usability testing"],
      outcome: "Visible shuffle modes + rediscovery + optional playlist cleanup prompts",
      thumb: "/Mixflow.png",
      links: { prototype: "", github: "", live: "" },

      caseStudy: {
        heroTagline: "Improving shuffle to give users control and rediscover forgotten songs.",
        platform: "Web",
        heroImage: "/mixflow-hero.jpg",
        problemBullets: [
          "Shuffle felt random but predictable",
          "Same songs repeated too often",
          "No control over shuffle behavior"
        ],
        problemQuote: "Shuffle doesn’t feel random — it feels biased.",
        problemImage: "/images/mixflow/problem-photo.png",

        featuresIntro: "I designed Mixflow around usability and rediscovery.",
        features: [
          {
            title: "Visible Shuffle Modes",
            description: "Give users control with preset shuffle modes.",
            badges: ["Balanced", "Least Played"],
            image: "/feature-modes.png"
          },
          {
            title: "Rediscover Least Played",
            description: "Prioritize lesser played songs for discovery.",
            image: "/images/mixflow/feature-least-played.png"
          }
        ],

        outcomes: [
          { icon: "☰", title: "Shuffle Modes", description: "Clear preset options gave users control." },
          { icon: "⟲", title: "Rediscovered Songs", description: "Forgotten tracks resurfaced in playlists." },
          { icon: "▢", title: "Cleaner Playlists", description: "Users kept playlists fresh and relevant." }
        ]
      },

      nextSlug: "shelfsaver",

      // (You can keep your existing title/oneLiner/etc too if you want)
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

      nextSlug: "mixflow"
    }
  ]
};




export {
  greeting,
  socialMediaLinks,
  openSource,
  contactInfo,
  isHireable,
  resumeSection,
  projectsPage
};
