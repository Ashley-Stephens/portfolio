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
      thumb: "/mixflow.png",
      links: { prototype: "", github: "", live: "" },

      caseStudy: {
        whatItIs:
          "Mixflow is a music player that gives users meaningful control over how their playlists shuffle, helping them rediscover forgotten songs and reduce repetitive listening.",
        team: "Team of 5",
        timeline: "",

        problem: [
          "People don’t trust shuffle. It doesn’t feel random—users hear the same songs repeatedly while others never play.",
          "Shuffle felt unpredictable but not transparent, so users couldn’t influence playback behavior or understand why repeats happened.",
          "Users wanted agency: steer playback toward discovery and away from repetition."
        ],

        owned: [
          "End-to-end UX (research, personas, scenarios, flows, IA, wireframes, prototypes, UI specs)",
          "Usability testing + iteration (copy, layout, interaction)",
          "Solo front-end implementation of the UI and core interactions"
        ],

        constraints: [
          "Time-limited iteration cycles (shipping mattered)",
          "Avoid ‘settings hell’—controls must be understandable at a glance",
          "Playback/shuffle behavior needed to stay feasible for a web app",
          "Team alignment across 5 people while I owned UX/UI + front end"
        ],

        process: {
          research: [
            "Interviewed students about shuffle trust, repeats, and discovery habits",
            "Identified pain points: repetition, missed songs, lack of control"
          ],
          synthesis: [
            "Mapped primary tasks: pick music fast, reduce repeats, discover underplayed tracks",
            "Converted insights into requirements: transparency + control with low effort"
          ],
          design: [
            "Made shuffle behavior visible via modes instead of hidden logic",
            "Added ‘Least played’ mode to encourage rediscovery",
            "Designed cleanup as a gentle prompt triggered by repeated skips"
          ],
          iteration: [
            "Tested early prototypes; users understood modes faster than customization sliders",
            "Refined labels and microcopy so modes feel obvious and low-risk"
          ]
        },

        decisions: [
          {
            issue: "Shuffle felt ‘random’ but untrustworthy (black box).",
            change: "Added visible shuffle modes users can choose.",
            why: "Transparency increases perceived fairness and reduces frustration.",
            result: "Users could predict outcomes and felt more in control."
          },
          {
            issue: "Repetition made playlists feel stale.",
            change: "Introduced ‘Least played’ mode to encourage rediscovery.",
            why: "Directly targets the ‘forgotten songs’ problem without extra work.",
            result: "Users reported more novelty and fewer repeat loops."
          },
          {
            issue: "Users kept skipping the same songs but rarely cleaned playlists.",
            change: "Designed ‘push gently’ cleanup prompts based on repeated skips.",
            why: "Nudges support maintenance without guilt or forced decisions.",
            result: "Users liked that it was optional and reversible."
          },
          {
            issue: "Why presets instead of infinite customization?",
            change: "Chose preset modes over sliders/weight tuning.",
            why: "Lower cognitive load + feasible within solo FE time constraints.",
            result: "Controls stayed simple while still feeling powerful."
          }
        ],

        outcome: {
          metrics: [],
          whatChanged: [
            "Turned shuffle into a transparent, user-controlled system (mode-based playback)",
            "Reduced perceived repetition with an explicit rediscovery path (Least played)",
            "Added lightweight playlist maintenance via optional ‘push gently’ prompts"
          ]
        },

        reflection: [
          "Learned: Perceived randomness matters as much as mathematical randomness—trust comes from clarity.",
          "Learned: Preset controls can feel more empowering than deep customization when users are time-poor.",
          "Learned: Nudges work best when optional, reversible, and framed neutrally.",
          "Next: Add ‘session goals’ (discovery vs comfort) to auto-suggest a mode.",
          "Next: Add lightweight “why this played next” explanations.",
          "Next: Explore personalization using skip/like patterns while preserving user control."
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
