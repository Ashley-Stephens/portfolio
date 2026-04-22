/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";

const greeting = {
  username: "Ashley Stephens",
  displayGreeting: true
};

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/ashleyjstephens",
  gmail: "ashleystephens.ajs@gmail.com",
  display: true
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle: "Discuss a project or just want to say hi? My inbox is open for all.",
  number: "",
  email_address: "ashleystephens.ajs@gmail.com"
};

const isHireable = true;

// ─── Projects ───────────────────────────────────────────────────────

const projectsPage = {
  title: "Work",
  subtitle: "Case studies in interaction design, research, and systems thinking.",
  projects: [
    {
      slug: "mixflow",
      name: "Mixflow",
      subtitle: "Music Playback UX",
      category: "Interaction Design",
      year: "2025",
      role: "UX Researcher · UI Designer · Lead Front-End",
      team: "Team of 5",
      platform: "Web App",
      duration: "12 weeks",
      tags: ["UX Research", "Interaction Design", "Figma", "Prototyping"],
      thumb: "/mixflow.png",
      links: { prototype: "", github: "", live: "" },

      heroStatement: "Millions of songs, yet the same ten keep playing.",
      heroSubtext: "Redesigning shuffle to restore trust and surface forgotten music.",

      caseStudy: {
        heroImage: "/high-fidelity.jpg",
        showcaseImage: "/high-fidelity.jpg",

        overview:
          "Mixflow is a music player centered on a core problem: shuffle feels broken. Users kept hearing the same songs on repeat while large portions of their library went untouched. I led UX research, UI design in Figma, and front-end development across a team of five.",

        problemSectionIcon: "!",
        problemBullets: [
          "Shuffle repeated the same songs — users felt like the algorithm had favorites",
          "Hundreds of library tracks never surfaced in a typical listening session",
          "No way to understand or influence how playback worked",
        ],
        problemQuote: "Shuffle doesn't feel random — it feels like it has a favorite.",

        research: {
          methods: ["User Interviews", "Persona Development", "Context Scenarios", "User Requirements Mapping"],
          insights: [
            { stat: "3 interviews", label: "uncovered consistent frustration with shuffle repetition and lack of playback control" },
            { stat: "2 personas", label: "guided every design decision — a casual mood-based listener and an organized curator" },
            { stat: "12 requirements", label: "formally extracted from context scenarios and traced directly to features" },
          ],
          quote: {
            text: "I added 200 songs and keep hearing the same 15. What's the point of having a library?",
            author: "Interview participant",
          },
        },

        process: [
          { step: "Discover", desc: "User interviews mapping shuffle frustration, platform habits, and listening patterns" },
          { step: "Define", desc: "Personas and context scenarios used to extract 12 formal user requirements" },
          { step: "Design", desc: "Low to high-fidelity Figma prototype across multiple iterations" },
          { step: "Deliver", desc: "Sole front-end developer — shipped the full working web app" },
        ],

        figmaNote:
          "Designed end-to-end in Figma, from wireframes through a high-fidelity prototype covering shuffle mode selection, queue visualization, and playlist management.",

        decisions: [
          {
            title: "Named Shuffle Modes",
            problem: "Shuffle was invisible — users had no mental model for what it was doing.",
            solution: "Three named modes (Comfort, Balanced, Pure Random) with plain-language descriptions shown before selection.",
            rationale: "Naming a system builds trust. Users who understand what a feature is doing forgive it when it's imperfect.",
            impact: "Users could immediately choose the mode that matched their activity instead of just hitting skip.",
          },
          {
            title: "Least Played Rediscovery",
            problem: "Songs added months ago were functionally invisible — the algorithm always favored familiar tracks.",
            solution: "A dedicated mode that deliberately surfaces low-play-count songs to resurface forgotten tracks.",
            rationale: "Users valued rediscovery but never sought it actively. Building it in removed the friction entirely.",
            impact: "Forgotten songs resurfaced naturally without the user needing to reorganize anything.",
          },
          {
            title: "Playlist Cleanup Prompts",
            problem: "Bloated playlists (100+ songs) made every shuffle worse — more noise, more repetition.",
            solution: "Optional, dismissible prompts that surface rarely-played tracks with a one-tap remove option.",
            rationale: "Never forced — users keep songs 'just in case.' The prompt assists without judging.",
            impact: "Users who engaged described their playlists as feeling intentional and trustworthy again.",
          },
        ],

        outcomes: [
          { title: "Named Shuffle Modes", description: "Comfort · Balanced · Pure Random — each tied to a real listening pattern from research." },
          { title: "Built-In Rediscovery", description: "Forgotten tracks surface naturally without manual effort." },
          { title: "Research-Driven Features", description: "Every feature traces back to a user requirement from interviews and scenarios." },
        ],

        reflection:
          "Invisible systems erode trust. The moment shuffle had a name and a visible logic, users felt in control — even before anything else changed. The best insights came from listening, not brainstorming.",
      },

      nextSlug: "shelfsaver",
    },

    {
      slug: "shelfsaver",
      name: "LeftoverChef",
      subtitle: "AI Meal Planner",
      category: "End-to-End Product Design",
      year: "2025",
      role: "UX Designer · UI Designer · Front-End Developer",
      team: "Team of 4",
      platform: "Web App",
      duration: "10 weeks · 4 prototype iterations",
      tags: ["UX Research", "End-to-End Design", "Figma", "Prototyping"],
      thumb: "/LeftoverChef.png",
      links: {
        prototype: "https://github.com/lillild/Final_Project_CSEN_163",
        github: "https://github.com/lillild/Final_Project_CSEN_163",
        live: "",
      },

      heroStatement: "What do I make with this half-empty fridge?",
      heroSubtext: "An AI meal planner that turns leftover anxiety into a cooking plan.",

      caseStudy: {
        heroImage: "",
        showcaseImage: "",

        overview:
          "LeftoverChef helps users cook with what they already have instead of ordering delivery. I designed the full flow — ingredient entry, equipment selection, AI recipe generation, and a sustainability tracker — across four prototype iterations ending in a fully coded working app.",

        problemSectionIcon: "?",
        problemBullets: [
          "Decision paralysis turns 'what's in the fridge?' into ordering delivery",
          "Recipe apps suggest meals users can't make with the equipment they own",
          "Food waste feels abstract — no personal feedback loop to motivate change",
        ],
        problemQuote: "I always end up ordering delivery because I can't figure out what to do with what I have.",

        research: {
          methods: ["User Interviews", "User Flow Mapping", "Comparative Analysis", "Iterative Usability Testing (4 rounds)"],
          insights: [
            { stat: "4 iterations", label: "each round surfaced a specific drop-off point — paper sketch through fully coded prototype" },
            { stat: "3 friction points", label: "decision paralysis at entry, equipment mismatch after generation, and disconnected sustainability messaging" },
            { stat: "Top drop-off", label: "at ingredient entry — eliminated after replacing a form with a chip-based input in iteration 2" },
          ],
          quote: {
            text: "I don't need a recipe app. I need something that looks at what I have and tells me what to make.",
            author: "Interview participant",
          },
        },

        process: [
          { step: "Discover", desc: "Interviews mapping where food decision friction actually happened in real routines" },
          { step: "Define", desc: "Three friction points identified and scoped — MVP focused on the highest-impact one first" },
          { step: "Design", desc: "Four Figma iterations: paper → low-fi → mid-fi → high-fidelity prototype" },
          { step: "Deliver", desc: "Translated Figma prototype into a working HTML/CSS/JS app with real interactions" },
        ],

        figmaNote:
          "Designed across four Figma iterations — from early flow sketches through a high-fidelity prototype covering the ingredient input, equipment toggles, recipe results, and Impact Score dashboard.",

        decisions: [
          {
            title: "Chip-Based Ingredient Input",
            problem: "A structured form at the start caused users to abandon the flow before reaching Step 2 every time.",
            solution: "A single text input that builds a real-time chip list — type 'onion, rice, eggs' and see your pantry appear.",
            rationale: "If the first interaction requires effort, users leave. The chip pattern is familiar, fast, and satisfying.",
            impact: "Completion of Step 1 improved significantly — users described it as 'satisfying to use.'",
          },
          {
            title: "Equipment Toggle Cards",
            problem: "Users got excited about a recipe, then discovered they couldn't make it. Drop-off after generation was steep.",
            solution: "Swipeable illustrated cards (Oven, Stovetop, Microwave, Air Fryer, Rice Cooker, No-Cook) with toggles — filter before generation.",
            rationale: "User constraints should shape the output from the start, not invalidate it afterward.",
            impact: "Eliminated the top post-generation drop-off. Users stopped encountering recipes they couldn't make.",
          },
          {
            title: "Impact Score Gamification",
            problem: "A sustainability info panel was completely ignored — it read as a PSA, not a product feature.",
            solution: "Personal achievement system tracking CO2 prevented, money saved, and ingredient badges earned per session.",
            rationale: "'Your impact' feels earned. 'Global crisis' feels preachy. Reframing sustainability as progress drives engagement.",
            impact: "The Impact Score became one of the most-revisited screens — users checked it even when not cooking.",
          },
        ],

        outcomes: [
          { title: "Frictionless Entry", description: "Chip input turned ingredient logging from a form into a 10-second natural interaction." },
          { title: "Equipment-Smart Recipes", description: "AI only suggests meals users can actually make — zero frustration loops." },
          { title: "Sustainability Gamified", description: "Personal stats and badges drove return visits beyond active cooking sessions." },
        ],

        reflection:
          "Four iterations taught me to cut early and often. Every feature we removed made the product more usable. The chip input came from a user muttering 'I just want to type stuff in' — the best design direction often arrives as frustration, not feedback.",
      },

      nextSlug: "mixflow",
    },
  ],
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
