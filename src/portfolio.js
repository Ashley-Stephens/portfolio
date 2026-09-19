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
  subtitle: "Experience, skills, and work history.",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle: "Discuss a project or just want to say hi? Reach out anytime.",
  number: "",
  email_address: "ashleystephens.ajs@gmail.com"
};

const isHireable = true;

// ─── Projects ───────────────────────────────────────────────────────

const projectsPage = {
  title: "Work",
  subtitle: "Case studies in interaction design, research, and front-end development.",
  projects: [
    {
      slug: "violetcraftworks",
      name: "VioletCraftworks",
      subtitle: "Cross-Stitch Pattern Shop",
      category: "End-to-End Product Design & Front-End",
      year: "2026",
      role: "Solo Designer & Developer",
      platform: "Web, Next.js",
      duration: "July 2026",
      wip: true,
      thumb: "/VioletCraftworks/violetcraftworks_thumb.png",
      featured: true,
      links: {
        prototype: "",
        github: "",
        live: "https://violetcraftworks.com",
      },

      heroStatement:
        "A real cross-stitch shop needed more than an Etsy page could give it.",
      heroSubtext:
        "I designed and built a standalone storefront with stitching-specific filters, a beginner learning hub, and direct Stripe checkout. Etsy stays open for buyers who prefer it.",

      caseStudy: {
        heroImage: "/VioletCraftworks/violetcraftworks_thumb.png",

        timeline: [
          { phase: "Research and planning", period: "March–April 2026" },
          { phase: "Design and MVP build", period: "April–June 2026" },
          { phase: "MVP launch (Etsy checkout only)", period: "July 1, 2026" },
          { phase: "Direct Stripe checkout added", period: "July 2026" },
          { phase: "Current phase", period: "Early traffic, measurement, iteration" },
        ],

        goals: [
          "Build an owned brand and discovery experience outside Etsy.",
          "Help buyers evaluate pattern difficulty, size, and supplies before purchasing.",
          "Give beginners a guided path into cross-stitching.",
          "Add a direct purchase channel without removing Etsy.",
          "Create a content and technical foundation that grows with the catalog.",
        ],
        goalsNote:
          "The site launched without an established traffic channel. Initial success meant production readiness, discoverability, and reliable fulfillment, not direct-sales volume.",

        scopeCuts: {
          items: [
            "Customer accounts",
            "Wishlists and saved favorites",
            "On-site reviews",
            "Full-text search",
            "Personalized recommendations",
            "A content management system",
            "Automated difficulty scoring",
          ],
          rationale:
            "I prioritized product discovery, purchase confidence, and reliable fulfillment before retention features. With low traffic, accounts and personalization add complexity without solving the immediate problem: getting buyers to find and trust the shop.",
        },

        roleList: [
          {
            title: "Product & UX",
            body: "Studied buyer questions through Etsy messages and stitching community posts. Defined the information architecture and the Shop/Learn navigation split.",
          },
          {
            title: "Visual design & content",
            body: "Type and color system, product cards, filter interface, product copy, and blog content.",
          },
          {
            title: "Engineering",
            body: "Next.js front end on Cloudflare Workers. Stripe checkout, D1 order storage, R2 file delivery, and CI content-integrity checks.",
          },
        ],

        problemHeadline: [
          "Etsy drove traffic in.",
          "The storefront couldn't explain the shop.",
        ],
        problemStatement:
          "Etsy handled payment and brought in buyers, but the storefront compressed the shop into a search result. Buyers picked patterns from thumbnails without knowing the difficulty, stitch count, or finished size. Beginners had no guidance on where to start.",
        problemInsight:
          "Across roughly 30 Etsy customer conversations from October 2024 onward and a handful of stitching community threads, the same questions kept appearing: who designed this pattern, and can I trust the quality? Etsy's storefront gave the shop no space to answer.",
        problemStats: [
          {
            value: "30",
            label: "buyer conversations",
            caption: "reviewed since Oct 2024",
          },
          {
            value: "3",
            label: "questions asked on repeat",
            caption: "difficulty, materials, finished size",
          },
          {
            value: "1",
            label: "layer the storefront lacked",
            caption: "room to explain, not just sell",
          },
        ],

        evidence: {
          intro:
            "I reviewed approximately 30 Etsy customer conversations from October 2024 to mid-2026, a handful of relevant stitching community discussions, and PostHog recordings after launch. These sources were directional rather than representative because traffic and direct feedback were limited.",
          items: [
            "~30 Etsy customer conversations (Oct 2024–Jul 2026)",
            "A handful of stitching community threads",
            "PostHog session recordings after launch",
            "Etsy product and sales history",
          ],
        },

        strategy:
          "I organized the navigation around two common visitor intents: direct browsing when someone knows what they want (Shop), and guided discovery when they need help evaluating a project (Learn). Product pages bridge both with buying specs and links to beginner content.",

        decisions: [
          {
            title: "Split browsing from guided discovery",
            problem:
              "The first version used one navigation path for both product browsing and beginner content. Repeat buyers scrolled past tutorials to find patterns. Beginners hit a grid of unfamiliar products with no context.",
            solution:
              "I separated Shop and Learn into distinct paths. Shop holds the catalog and filters. Learn holds a beginner hub, guides, and blog content. Product pages connect both with links to beginner articles.",
            rationale:
              "PostHog recordings showed two browsing patterns. Some visitors moved straight to the catalog. Others explored learning content before viewing products. The sample is too small to confirm this as a stable segmentation, but I saw it often enough to justify the split.",
            outcome:
              "Repeat visitors reach filters in one click. Beginners can build confidence before shopping. I plan to validate the model with moderated sessions once traffic grows.",
          },
          {
            title: "Filters built for how stitchers shop",
            problem:
              "Standard e-commerce filters (price, newest, bestselling) don't match how people choose a cross-stitch pattern. Buyers ask about difficulty first.",
            solution:
              "Filters for difficulty, project type, size, and theme. Difficulty is the most prominent because it was one of the most repeated pre-purchase questions in the customer conversations I reviewed.",
            rationale:
              "22 patterns is a small catalog for filtering, but those patterns span five or more attributes that matter to buyers. A small catalog with clear facets is faster than a search box. I placed filters below the product grid at first. PostHog recordings showed visitors reaching for a difficulty filter before scrolling past the first row, so I moved them up.",
            outcome:
              "In recorded filter interactions so far, difficulty and project type appear most often. The sample is too small to rank them reliably.",
          },
          {
            title: "Give buyers the specs they need, then let them choose where to pay",
            problem:
              "A cross-stitch pattern is a PDF. From a thumbnail, you can't tell the difficulty, supplies needed, or finished size. The MVP launched with Etsy as the only checkout path. I added direct Stripe checkout after the site was live.",
            solution:
              "Product pages show stitch count, fabric size, color count, difficulty, and supply list above the fold. Two purchase options sit below: Buy Direct with Stripe and Shop on Etsy.",
            rationale:
              "Across the ~30 customer conversations I reviewed, buyers asked the same three questions more than any others: how hard is it, what do I need, and how big is the finished piece? Those shaped the page hierarchy. Etsy stays because 9 buyers have purchased more than once there. Stripe gives the shop a direct revenue path without platform dependency.",
            outcome:
              "Both checkout paths are live. At least one organic Stripe purchase has completed end to end. Product pages link to beginner-hub articles, connecting the Shop and Learn paths.",
          },
        ],

        visualDirection: {
          intro:
            "Most cross-stitch shops use clip-art aesthetics or default marketplace templates. I wanted something warm and grounded in the craft: cream backgrounds, blush accents, a stitched-violet brand color. Butter yellow marks calls to action. Deep plum provides text contrast against the light backgrounds.",
          swatches: [
            { name: "Brand Violet", hex: "#8D68B8" },
            { name: "Warm Cream", hex: "#F8F2E8" },
            { name: "Soft Blush", hex: "#FBF3F8" },
            { name: "Butter CTA", hex: "#FFF1BF" },
            { name: "Deep Plum", hex: "#4E3B63" },
          ],
        },

        technicalDecisions: [
          {
            title: "Typed content files instead of a CMS",
            context:
              "One author, 22 products. A headless CMS adds hosting cost and API requests that don't earn their weight at this scale.",
            decision:
              "Products, blog posts, categories, and freebies live in TypeScript files with strict types. Helper modules enforce visibility rules, SEO metadata, and featuring logic.",
            tradeoff:
              "Adding a product means editing a file and deploying. If the catalog passes 100 items or gains a second editor, I move the content layer to a database. The UI reads through the same helpers either way.",
          },
          {
            title: "Server-side checkout and webhook fulfillment",
            context:
              "Stripe requires checkout sessions created with a secret key. The client should never set the charge amount.",
            decision:
              "A server-side API route creates the Stripe Checkout Session from typed product data. After payment, a webhook verifies the Stripe signature, writes an order to D1, and generates a signed R2 download URL.",
            tradeoff:
              "A brief delay before the download link is ready. The upside: if the buyer closes their browser mid-checkout, the order still fulfills.",
          },
        ],

        technicalSummary:
          "Vitest runs content-integrity checks in CI. Missing metadata, broken image paths, duplicate slugs, and orphaned posts fail the build before deploy. The site runs on Cloudflare Workers with D1 for order storage and R2 for signed PDF delivery.",

        results: {
          intro:
            "VioletCraftworks launched July 1, 2026. Both checkout paths are live and have processed real purchases. Traffic is early-stage, so behavioral signals are directional, not conclusive.",
          items: [
            {
              label: "Catalog",
              body: "22 patterns published across Etsy and direct checkout from a single typed content source.",
            },
            {
              label: "Checkout",
              body: "Stripe checkout, webhook verification, order storage, and signed PDF delivery are live. At least one organic Stripe purchase has completed. Etsy remains active with 9 repeat buyers.",
            },
            {
              label: "Discoverability",
              body: "All product and blog pages are indexed as of July 2026. Structured data for Product, Article, FAQPage, and Organization validates without errors.",
            },
            {
              label: "Build quality",
              body: "CI blocks deploys on missing metadata, broken image paths, duplicate slugs, and orphaned posts.",
            },
            {
              label: "Accessibility",
              body: "Keyboard navigation works through the filter drawer, product cards, and checkout flow. Color contrast meets WCAG AA.",
            },
            {
              label: "Early signals",
              body: "In PostHog recordings collected so far, difficulty and project-type filters are the most-used facets. Visitors split between catalog-first and learning-first browsing. The sample is too small to treat these as stable patterns.",
            },
            {
              label: "Infrastructure",
              body: "Runs on Cloudflare's free tier.",
            },
          ],
        },

        reflection:
          "Working alone let me iterate fast, but no one challenged my assumptions. PostHog filled part of that gap. I placed filters below the product grid, expecting beginners to browse the catalog first. In the recordings, visitors reached for difficulty filters before scrolling. I moved filters up.\n\nThe site can't produce meaningful conversion evidence until more visitors find product pages. Acquisition is the largest unresolved risk.\n\nMy next step: five moderated sessions with beginner or returning stitchers. Each participant picks a first project and walks through what information built or broke their confidence. The results will tell me whether the Learn path reduces enough uncertainty, or whether product pages should absorb more of that guidance.",
      },

      nextSlug: "mixflow",
    },

    {
      slug: "mixflow",
      name: "Mixflow",
      subtitle: "Music Playback UX",
      category: "Interaction Design",
      year: "2025",
      role: "UX Researcher, UI Designer, Lead Front-End",
      team: "Team of 5",
      platform: "Web App",
      duration: "12 weeks",
      thumb: "/Mixflow.png",
      links: { prototype: "", github: "", live: "" },

      heroStatement: "Millions of songs, yet the same few keep playing.",
      heroSubtext: "Shuffle kept playing the same songs. We redesigned it so the rest of the library gets heard.",

      caseStudy: {
        heroImage: "/default_cover.jpg",
        showcaseImage: "/high-fidelity.png",

        overview:
          "Mixflow is a music player built around one problem: shuffle feels broken. Users kept hearing the same songs on repeat while large portions of their library went untouched. I led UX research, UI design in Figma, and front-end development across a team of five.",

        problemSectionIcon: "!",
        problemBullets: [
          "Shuffle repeated the same songs constantly. Users felt the algorithm had favorites and couldn't do anything about it",
          "Most of the library never played. Users had 200+ songs and heard the same 10 — and couldn't tell why",
          "Playlists grew unchecked. Users rarely deleted songs because they had no way to see which ones they'd stopped caring about",
        ],
        problemQuote: "Shuffle doesn't feel random. It feels like it has favorites.",

        research: {
          methods: ["User Interviews", "Persona Development", "Context Scenarios", "User Requirements Mapping"],
          insights: [
            { stat: "\"Shuffle has favorites\"", label: "— said unprompted by multiple interviewees. Repetition wasn't occasional. It was the default experience every single session." },
            { stat: "Invisible libraries", label: "Users with 200+ songs couldn't name what they'd actually listened to. Most had never thought about their listening habits until we asked." },
            { stat: "Playlists never get cleaned", label: "Interviewees almost never deleted songs. Libraries grew indefinitely because users had no play data to tell them what they'd outgrown." },
            { stat: "No control, no trust", label: "Users couldn't see how shuffle picked songs. Most just kept hitting skip instead of changing a mode they didn't know existed." },
          ],
          quote: {
            text: "I have like 300 songs in there and keep hearing the same 10. I don't even know why I keep adding stuff.",
            author: "Interview participant",
          },
        },

        process: [
          { step: "Discover", desc: "User interviews mapping shuffle frustration, platform habits, and listening patterns" },
          { step: "Define", desc: "Personas and context scenarios used to extract formal user requirements" },
          { step: "Design", desc: "Low to high-fidelity Figma prototype across multiple iterations" },
          { step: "Deliver", desc: "Sole front-end developer, shipped the full working web app" },
        ],

        loFiImage: {
          image: "/low-fidelity-mixflow.png",
          leftCallouts: [
            {
              title: "Listening Habits Page",
              body: "Interviews turned up a second problem: users had no idea what they actually listened to. They couldn't name their most-played songs. A dedicated habits view shows them that data, which gives them a reason to care about how shuffle works.",
            },
            {
              title: "Activity Over Time",
              body: "A time-based chart shows when users listen heavily and when they go quiet. One interviewee said 'I basically stopped using it for a month and didn't notice.' Making that pattern visible doesn't require explanation — users see it and draw their own conclusions.",
            },
          ],
          rightCallouts: [
            {
              title: "Played vs. Unplayed Ratio",
              body: "When shown a split like 34% played / 66% never heard, interviewees reacted immediately. It reframes the complaint from 'shuffle feels off' to 'most of my library is invisible.' One number does more than a paragraph of onboarding ever could.",
            },
            {
              title: "Repetition Breakdown",
              body: "Bucketing songs by play count (Once / 2-5x / 6+) confirms what users already suspected: shuffle has favorites. Songs in the 6+ bucket are natural candidates to remove, which helps users clean up their library without pressuring them to.",
            },
          ],
        },

        figmaNote:
          "Designed in Figma from wireframes through a high-fidelity prototype covering shuffle mode selection, queue visualization, and playlist management.",

        shuffleModes: [
          { icon: "/shuffle.png",      name: "Default",      desc: "Standard shuffle. No bias toward play count." },
          { icon: "/mostshuffle.png",  name: "Most Played",  desc: "Weighted toward your most-played songs. Good for comfort listening." },
          { icon: "/leastshuffle.png", name: "Least Played", desc: "Surfaces tracks you've been neglecting. Rediscovery mode." },
          { icon: "/noshuffle.png",    name: "No Shuffle",   desc: "Plays in order. Full control, no surprises." },
        ],

        annotatedScreenshots: [
          {
            image: "/mixflow_home.png",
            eyebrow: "Final Product",
            title: "Working Application",
            layout: "vertical",
            topCallouts: [
              {
                title: "Stats at a Glance",
                body: "Total Time, Unique Tracks, Avg/Day, and Top Genre in one scannable row. Research found users had no mental model of their own listening. Four numbers answer that question instantly without requiring any exploration.",
              },
              {
                title: "30-Day Activity Chart",
                body: "A time-based chart lets users spot their own listening patterns — heavy weeks, quiet stretches, shifts in taste. Once they can see when and how much they listen, shuffle's repetition problem starts making more sense.",
              },
              {
                title: "Top Artists Breakdown",
                body: "Showing exactly which artists dominate a library makes the 'shuffle has favorites' complaint concrete. Users can see the data behind the frustration and decide whether they want to change it.",
              },
            ],
            bottomCallouts: [
              {
                title: "Library Coverage Donut",
                body: "34% played vs 66% unplayed tells the whole story. The chart turns 'shuffle feels broken' into something specific: most of my library has never been played. No explanation needed.",
              },
              {
                title: "Repetition Rate Segmentation",
                body: "Play counts broken into Once / 2-5x / 6+ confirms what interviewees already suspected. Songs in the 6+ bucket are obvious candidates to remove — shown to the user, but never forced.",
              },
              {
                title: "Queue Always in View",
                body: "The now-playing queue stays visible alongside the stats panel. Users can check their listening data and manage upcoming tracks without switching context, keeping the two most important views connected.",
              },
            ],
          },
        ],

        decisions: [
          {
            title: "Named Shuffle Modes",
            problem: "Shuffle was invisible. Users had no mental model for what it was doing or why the same songs kept coming up.",
            solution: "Four named modes (Default, Most Played, Least Played, No Shuffle) each with a plain-language description before selection.",
            rationale: "Naming a system builds trust. Users who understand what a feature is doing forgive it when it's imperfect.",
            impact: "Users could immediately choose the mode that matched their listening mood instead of just hitting skip repeatedly.",
          },
          {
            title: "Least Played Rediscovery",
            problem: "Songs added months ago were functionally invisible. The algorithm always gravitated toward familiar tracks.",
            solution: "A dedicated Least Played mode that pulls low-play-count tracks back into the queue.",
            rationale: "Users wanted to hear forgotten songs but never went looking for them. A named mode puts that option one tap away.",
            impact: "Songs that hadn't played in months started showing up again without the user doing anything.",
          },
          {
            title: "Playlist Cleanup Prompts",
            problem: "Users with large libraries still heard the same 15 tracks. More songs in a playlist didn't mean more variety.",
            solution: "Optional, dismissible prompts that flag rarely-played tracks with a one-tap remove option.",
            rationale: "Never forced. Users keep songs 'just in case.' The prompt assists without judging.",
            impact: "Users who tried it said their playlists felt like theirs again — not just a pile of songs they forgot about.",
          },
        ],

        outcomes: [
          { title: "Named Shuffle Modes", description: "Default, Most Played, Least Played, No Shuffle, each tied to a real listening pattern from research." },
          { title: "Built-In Rediscovery", description: "Low-play-count tracks show up in the queue without the user doing anything." },
          { title: "Research-Driven Features", description: "Named modes, the habits dashboard, and cleanup prompts all came directly from interview findings." },
        ],

        reflection:
          "Once shuffle had a name and a visible logic, users felt in control — even before anything else changed. The shuffle-mode idea didn't come from brainstorming. It came from watching people skip the same five songs and not knowing why.",
      },

      nextSlug: "shelfsaver",
    },

    {
      slug: "shelfsaver",
      name: "LeftoverChef",
      subtitle: "AI Meal Planner",
      category: "End-to-End Product Design",
      year: "2025",
      role: "UX Designer, UI Designer, Front-End Developer",
      team: "Team of 4",
      platform: "Web App",
      duration: "10 weeks, 4 prototype iterations",
      thumb: "/LeftoverChef.png",
      links: {
        prototype: "",
        github: "https://github.com/lillild/Final_Project_CSEN_163",
        live: "",
      },

      heroStatement: "What do I make with this half-empty fridge?",
      heroSubtext: "Turning a half-empty fridge into dinner, without the guilt trip.",

      caseStudy: {
        heroImage: "",
        heroLogo: "/logo_no_text.png",
        showcaseImage: "",
        hiFiToFinal: {
          hiFi: "/lc-recipes.png",
          final: "/final-product-leftoverchef.png",
          changes: [
            {
              title: "Form Fields → Chip Input",
              what: "Replaced structured form inputs with a free-type chip tag system for entering ingredients.",
              why: "Usability testing round 1 showed users abandoning the flow before reaching recipes. The form felt like homework. Chips feel like tagging — lighter, faster, and forgiving of typos.",
            },
            {
              title: "Checklist → Illustrated Equipment Cards",
              what: "Equipment selection changed from a plain checkbox list to visual toggle cards with icons per appliance.",
              why: "Checkboxes require reading every label in order. Illustrated cards are scannable at a glance and easier to pick from when selecting more than one. Active-state contrast also helps accessibility.",
            },
            {
              title: "Static Info Block → Impact Score",
              what: "The sustainability section was redesigned from a read-only info panel into a personal gamified dashboard with a score and badges.",
              why: "Testing showed the original panel was completely ignored — it read like a PSA. Reframing it as personal progress made it one of the most-revisited screens in the final product.",
            },
            {
              title: "Text List → Visual Recipe Cards",
              what: "Recipe results evolved from a text-based list into image-forward cards with food photography.",
              why: "Users picked recipes by how the food looked, not by the recipe name. Photos let them decide faster and made browsing feel like choosing, not working.",
            },
          ],
        },

        overview:
          "The average household throws away around 30% of the food it buys. LeftoverChef addresses that at the moment it actually happens: when someone opens the fridge, sees partial ingredients, and defaults to takeout. I designed the full flow across four prototype iterations: ingredient entry, equipment selection, AI recipe generation, and a personal Impact Score that makes sustainability feel rewarding instead of preachy.",

        problemBullets: [
          "People have partial ingredients (half a block of tofu, wilting spinach, leftover rice) but no idea what to cook with the combination",
          "Existing recipe apps require a full pantry; they don't help when you're working with scraps",
          "Food waste feels abstract until it hits your wallet. Users had no way to see how their cooking choices added up — what they saved, what they wasted",
        ],
        problemQuote: "I throw out so much food every week. I know it's wasteful but I never know what to actually make with what's left.",

        research: {
          methods: ["User Interviews", "User Flow Mapping", "Comparative Analysis", "Iterative Usability Testing (4 rounds)"],
          insights: [
            { stat: "3 interviews", label: "revealed a consistent pattern: partial ingredients sit unused until they go bad, then get tossed" },
            { stat: "Top drop-off", label: "happened at ingredient entry. Users abandoned a structured form before ever reaching recipe results" },
            { stat: "4 iterations", label: "each round turned up a different problem: entry was too slow, recipes didn't match available appliances, and the sustainability section read like a PSA" },
          ],
          quote: {
            text: "I know I have stuff in my fridge. I just don't know what I can actually make with it. So I just order pizza.",
            author: "Interview participant",
          },
        },

        process: [
          { step: "Discover", desc: "User interviews uncovering why people throw away food they meant to use — and what stops them from cooking with what they already have" },
          { step: "Define", desc: "Identified three blockers: ingredient entry was too tedious, recipes didn't match what users owned, and sustainability messaging felt preachy instead of personal" },
          { step: "Design", desc: "Four Figma iterations: paper → low-fi → mid-fi → high-fidelity prototype" },
          { step: "Deliver", desc: "Translated Figma into a fully coded HTML/CSS/JS web app with real interactions" },
        ],

        loFiImage: {
          image: "/low-fidelity-leftoverchef.png",
          leftCallouts: [
            {
              title: "Chip Input vs. Form Field",
              body: "Tags feel like tagging, not data entry. Testing a structured form in iteration 1 showed users abandoning at Step 1. Switching to chips cut that drop-off significantly.",
            },
            {
              title: "Progressive Step Labels",
              body: "Three clearly labeled sections keep users oriented without overwhelming them. Showing all steps up front eliminates 'how long is this?' anxiety.",
            },
          ],
          rightCallouts: [
            {
              title: "Card-Per-Appliance Layout",
              body: "One appliance per card instead of a checklist gives each option visual weight. Users process choices faster when they're spatially separated, not stacked.",
            },
            {
              title: "Deferred Recipe Generation",
              body: "Placing 'Suggest Recipes' after both steps ensures constraints are complete before output is generated.",
            },
          ],
        },

        figmaNote:
          "Designed across four Figma iterations, from early sketches through high-fidelity, covering the ingredient input, equipment toggles, recipe results, and Impact Score dashboard.",

        decisions: [
          {
            title: "Chip-Based Ingredient Input",
            problem: "A structured form at the start caused users to abandon the flow before ever reaching recipe results.",
            solution: "A single text input that builds a real-time chip list. Type 'onion, rice, eggs' and see your pantry appear instantly.",
            rationale: "If the first step feels like a form, users leave. Chips are familiar and fast — type a word, see a tag.",
            impact: "Drop-off at Step 1 fell after the switch. Users described the input as 'satisfying to use.'",
          },
          {
            title: "Equipment Toggle Cards",
            problem: "Users got excited about a recipe, then discovered they couldn't make it with what they owned. Drop-off after generation was steep.",
            solution: "Illustrated toggle cards for each appliance (Oven, Stovetop, Microwave, Air Fryer, Rice Cooker, No-Cook) so constraints are set before generation, not after.",
            rationale: "User constraints should shape the output from the start, not invalidate it after the fact.",
            impact: "Eliminated the top post-generation drop-off. Users stopped encountering recipes they couldn't make.",
          },
          {
            title: "Impact Score Gamification",
            problem: "A sustainability info panel was completely ignored. It read as a PSA, not a product feature.",
            solution: "A personal dashboard showing CO₂ prevented, money saved, and ingredient badges earned per session.",
            rationale: "'Your impact' feels earned. 'Global crisis' feels preachy. When the score is about what you did, people actually check it.",
            impact: "The Impact Score became one of the most-revisited screens. Users checked it even when they weren't actively cooking.",
          },
        ],

        outcomes: [
          { title: "Frictionless Entry", description: "Chip input turned ingredient entry from a form into a 10-second task." },
          { title: "Equipment-Smart Recipes", description: "AI only suggests meals users can actually make. Zero post-generation frustration." },
          { title: "Sustainability Gamified", description: "Users came back to check their Impact Score even when they weren't cooking." },
        ],

        reflection:
          "Four iterations taught me to cut early and often. Every feature we removed made the product more usable. The chip input came from a user muttering 'I just want to type stuff in' — that one complaint reshaped the whole entry flow.",
      },

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
