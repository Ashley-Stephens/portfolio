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
      slug: "violetcraftworks",
      name: "VioletCraftworks",
      subtitle: "Cross-Stitch Pattern Shop",
      category: "End-to-End Product Design & Front-End",
      year: "2026",
      role: "Solo Designer & Developer",
      platform: "Web · Next.js",
      duration: "Live · actively building",
      tags: ["E-Commerce UX", "Information Architecture", "Accessibility", "Cloudflare Workers", "Next.js · TypeScript"],
      thumb: "/VioletCraftworks/violetcraftworks_thumb.png",
      wip: true,
      featured: true,
      links: {
        prototype: "",
        github: "",
        live: "https://violetcraftworks.com",
      },

      heroStatement: "A real cross-stitch shop needed more than an Etsy page could give it.",
      heroSubtext:
        "I designed and built the storefront end to end. Shoppers can buy patterns direct via Stripe or through Etsy. The site handles checkout, PDF delivery, filtering, a beginner hub, blog, and a growing SEO layer.",

      caseStudy: {
        heroImage: "/VioletCraftworks/violetcraftworks_thumb.png",

        overview:
          "VioletCraftworks started as an Etsy shop selling PDF cross-stitch patterns. Etsy handled checkout and brought in buyers, but the storefront couldn't teach beginners, tell the brand's story, or control how shoppers discovered patterns. I built a standalone site that does all three while keeping Etsy as a sales channel alongside direct Stripe checkout. The project spans roughly five months of active work, from first wireframe to the current production site, with ongoing content and feature additions.",

        roleList: [
          { title: "Product & UX", body: "Brand direction, user research, information architecture, and the two-path navigation model." },
          { title: "Design & content", body: "UI design, product cards, filter interface, type and color system, product copy, blog content." },
          { title: "Engineering & ops", body: "Full front-end build, payment integration, edge deployment, database setup, secure file delivery, and CI validation." },
        ],

        evidence: {
          intro: "No formal usability study. Design decisions came from selling patterns on Etsy, reading customer messages, watching how cross-stitch communities discuss purchases, and analyzing competing shops.",
          sources: [
            { label: "Seller experience", body: "Over a year of Etsy sales surfaced recurring customer questions: how hard is this, what supplies do I need, and how big is the finished piece. Those questions shaped the product-page information hierarchy." },
            { label: "Community patterns", body: "Cross-stitch forums and social groups show beginners asking the same three things before every purchase. Independent shops that answered those questions in the listing had stronger conversion." },
            { label: "Competitive review", body: "Compared Etsy-only sellers to independent pattern shops. Shops with their own sites had stronger brand recognition and repeat buyers. Shops without difficulty ratings or supply lists had more confused customer messages." },
            { label: "Post-launch analytics", body: "PostHog session recordings and filter-usage data confirmed which categories shoppers reach for first and where they hesitate." },
          ],
        },

        problemStatement: "Etsy brought in buyers and handled payment, but three things kept the shop from growing past a certain point.",
        problemBullets: [
          "Etsy structures every shop the same way. There's no room for brand identity, storytelling, or trust signals beyond the listing itself.",
          "Cross-stitch shoppers filter by difficulty, project type, and size. Etsy's category system doesn't map to those criteria, so beginners can't narrow results to patterns they can finish.",
          "Beginners were the most likely new customers, and they had the most questions. Etsy gave them a product grid with no guidance.",
        ],
        problemInsight: "The consistent signal across customer messages and community posts: shoppers check who made the pattern and want context before buying. A thumbnail in a search result doesn't provide that.",
        evidenceLine: "These patterns came from over a year of Etsy sales, recurring customer questions, cross-stitch community observation, competitive analysis of independent pattern shops, and post-launch PostHog analytics.",

        goals: [
          "Build a branded storefront distinct from the Etsy listing.",
          "Help shoppers evaluate patterns before buying, especially beginners unfamiliar with cross-stitch terminology.",
          "Support both Etsy and direct Stripe checkout from one product catalog.",
          "Get patterns indexed in search with structured, crawlable content.",
        ],
        constraints: [
          "Solo build: one person on design, code, content, and deployment.",
          "Small catalog (~22 patterns). A database or CMS adds complexity without a matching benefit at this scale.",
          "Checkout session creation and price lookup must stay server-side. The client never determines the charge amount.",
          "Monthly operating cost near zero. No per-seat SaaS, no managed database bill.",
        ],

        users: [
          { tag: "Needs help choosing", body: "New to cross-stitch. Doesn't know fabric counts or DMC numbers. Wants small, finishable projects and plain language about what's involved." },
          { tag: "Wants something quick", body: "Knows the basics. Looking for keychains, bookmarks, or pins they can finish in a sitting. Filters by project type and size." },
          { tag: "Knows what they like", body: "Experienced stitcher. Shops by theme, color, or format. Wants to scan fast and skip beginner content." },
        ],

        strategy:
          "Two groups visit the shop: people ready to buy and people who need help choosing their first project. The navigation follows that split. One path holds the catalog, filters, and product detail pages. The other holds a beginner hub, guides, and blog content. Product pages serve both groups by answering the buying questions up front (difficulty, size, stitch count, supplies) and offering two checkout options: buy direct through Stripe or purchase on Etsy.",

        decisions: [
          {
            title: "Two-path navigation",
            problem: "Beginners and experienced stitchers want different things. Mixing product browsing and educational content in one flow slows both groups down.",
            solution: "Shop and Learn as distinct navigation paths. Shop holds the catalog, filters, and product pages. Learn holds the beginner hub, blog, and guides.",
            rationale: "Someone ready to buy shouldn't scroll past tutorials. A beginner shouldn't hit a grid of unfamiliar products with no context.",
            outcome: "Cross-stitch community forums consistently show two distinct visitor types. PostHog session recordings confirmed the split: returning buyers go straight to filters, first-time visitors explore the beginner hub first.",
          },
          {
            title: "Filters built for stitching behavior",
            problem: "Generic e-commerce filters (price, newest, bestselling) don't match how people choose a cross-stitch pattern.",
            solution: "Filters for difficulty, project type, size, and theme. Difficulty is the most prominent filter because it's the first question beginners ask.",
            rationale: "With ~22 patterns, heavy filtering could feel like overkill. But patterns vary across 5+ attributes that matter to buyers, and competitive analysis showed that independent shops without difficulty filters had more confused customer messages. A small catalog with clear facets is faster to browse than one with only a search box.",
            outcome: "PostHog filter-usage data shows difficulty and project type as the most-used facets, confirming the hierarchy. Session recordings caught the iteration: I originally placed filters below the product grid, but first-time visitors clicked a difficulty filter before scrolling past the first row. Filters moved up.",
          },
          {
            title: "Dual checkout: Etsy and direct",
            problem: "Etsy has built-in buyer trust and handles payment disputes. But it takes a cut, limits branding, and owns the customer relationship. Dropping Etsy would sacrifice established buyers. Offering only Etsy would keep the shop dependent on one platform.",
            solution: "Every product page shows two purchase options: Buy Direct (Stripe) and Shop on Etsy. Both lead to the same pattern. Stripe is positioned first. Etsy acts as a trust fallback for buyers who prefer a marketplace.",
            rationale: "A year of Etsy sales showed strong repeat-buyer loyalty to the platform. Forcing those customers off Etsy risks losing them. At the same time, search traffic landing on the standalone site shouldn't have to leave to complete a purchase. One typed product catalog serves both channels with no duplication.",
            outcome: "Both checkout paths are live and tested end to end. Stripe sessions are created server-side; the client never sees secret keys or price IDs. Etsy links carry UTM parameters so traffic source is trackable across both rails.",
          },
          {
            title: "Product pages that answer buying questions",
            problem: "A cross-stitch pattern is a PDF. From a thumbnail, a shopper can't tell the difficulty, required supplies, finished size, or what the piece is for.",
            solution: "Every product page shows stitch count, fabric size, color count, DMC thread list, difficulty rating, and suggested use. These details appear above the fold, before the purchase buttons.",
            rationale: "The most common Etsy customer messages asked three things: how hard is this, what supplies do I need, and how big is the finished piece. Those three questions directly shaped the product-page information hierarchy.",
            outcome: "Product pages link to beginner-hub articles where terminology needs explanation, connecting the shop path to the learn path. Structured data (Product schema) validates cleanly, and all product pages are indexed.",
          },
        ],

        visualDirection: {
          intro:
            "The look is cozy and handmade without being childish. Warm cream backgrounds, soft blush accents, and a stitched violet brand color keep it gentle. A brighter butter accent marks calls to action. Deep plum handles text and outlines for readability. The type hierarchy uses one serif for headings and one sans-serif for body, with generous line height to keep dense product details scannable.",
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
            context: "Solo build, ~22 products, one content author. A headless CMS or database adds hosting cost, API complexity, and a per-seat dependency that doesn't earn its weight at this scale. Monthly operating cost needed to stay near zero.",
            decision: "Products, blog posts, categories, and freebies live in TypeScript files with strict types. Helper modules enforce visibility, SEO rules, and featuring logic at the read layer.",
            tradeoff: "Adding a product means editing a file and pushing a commit. That works for one author. If the catalog grows past ~100 items or gains a second editor, the content layer moves to a database or CMS. The UI reads through the same helper functions either way, so the migration is a backend change.",
          },
          {
            title: "Server-side checkout and webhook fulfillment",
            context: "Stripe requires checkout sessions be created with a secret API key. The client should never determine the charge amount or access restricted keys. Both Etsy and direct checkout need to coexist from a single product catalog, so the typed content files serve as the shared source of truth for prices and product data.",
            decision: "A server-side API route creates the Stripe Checkout Session with a price lookup from typed product data. After payment, Stripe sends a webhook. The server verifies the webhook signature, writes an order record to D1, and mints a one-time expiring signed URL pointing to the PDF in R2 storage.",
            tradeoff: "Webhook-only fulfillment means a brief delay before the download link is ready. The tradeoff is reliability: if the buyer closes their browser mid-checkout, the order still fulfills correctly.",
          },
          {
            title: "Build-time content validation",
            context: "With typed content files and no CMS validation layer, a missing field, broken image path, or duplicate slug could ship to production unnoticed. Solo build means no second pair of eyes on content changes.",
            decision: "Vitest runs content checks in CI. The build fails on missing required fields, dead image paths, orphan blog posts, duplicate slugs, and fabricated review data.",
            tradeoff: "Every content change runs through CI. Adds ~30 seconds to deploys. Catches errors that would otherwise surface as blank pages or broken images in production.",
          },
          {
            title: "Edge deployment on Cloudflare Workers",
            context: "The site needs fast response times, near-zero monthly cost, and a deploy process that doesn't require manual infrastructure management. No per-seat SaaS, no managed database bill.",
            decision: "Deployed on Cloudflare Workers via OpenNext adapter. D1 (SQLite at the edge) stores cart and order data. R2 (object storage) holds pattern PDFs behind signed URLs. Deploys happen on git push to main.",
            tradeoff: "Workers use an isolate model instead of containers, avoiding container cold-start overhead. The constraint is Workers have execution limits (CPU time, memory) that wouldn't suit a compute-heavy application, but an e-commerce storefront fits within them. Current monthly infrastructure cost is effectively zero on Cloudflare's free tier.",
          },
        ],

        results: {
          intro: "The site is live with paying customers on both checkout paths. Traffic is early-stage, so behavioral conclusions are limited. Here is what I can measure so far.",
          items: [
            { label: "Product", body: "22 patterns live across both Etsy and direct checkout. Single content source serves both channels with no duplication." },
            { label: "Checkout", body: "End-to-end purchase tested on both Stripe and Etsy paths. Webhook fulfillment delivers PDF download links without depending on browser state." },
            { label: "Search", body: "All product and blog pages indexed. Structured data (Product, Article, FAQPage, Organization) validates cleanly." },
            { label: "Quality", body: "CI catches content errors before deploy. No broken images, missing metadata, or orphan pages have reached production since the validation suite was added." },
            { label: "Accessibility", body: "Keyboard navigation works through the filter drawer, product cards, and checkout flow. Focus moves into the drawer on open and returns to the trigger on close. Color contrast meets WCAG AA." },
            { label: "Cost", body: "Monthly infrastructure cost is effectively zero on Cloudflare's free tier." },
          ],
        },

        future: [
          "Buyer accounts with a personal download library for repeat purchases.",
          "More blog and beginner-hub content to build an owned search acquisition channel.",
          "Customer reviews and richer product photography.",
          "Freebie gallery expansion and email list capture.",
        ],

        reflection:
          "Early in the project I assumed beginners would browse the full catalog and then use filters to narrow down. PostHog recordings showed the opposite: most first-time visitors clicked a category or difficulty filter before scrolling past the first row. I moved the filter controls higher and made difficulty the default open facet. That assumption was wrong, and the analytics caught it within the first two weeks of real traffic.",
      },

      nextSlug: "mixflow",
    },

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
      thumb: "/Mixflow.png",
      links: { prototype: "", github: "", live: "" },

      heroStatement: "Millions of songs, yet the same few keep playing.",
      heroSubtext: "Redesigning shuffle to restore trust and surface forgotten music.",

      caseStudy: {
        heroImage: "/default_cover.jpg",
        showcaseImage: "/high-fidelity.png",

        overview:
          "Mixflow is a music player centered on a core problem: shuffle feels broken. Users kept hearing the same songs on repeat while large portions of their library went untouched. I led UX research, UI design in Figma, and front-end development across a team of five.",

        problemSectionIcon: "!",
        problemBullets: [
          "Shuffle repeated the same songs constantly. Users felt the algorithm had favorites and couldn't do anything about it",
          "Most of the library never surfaced. Users had 200+ songs and heard the same 10 — and had no visibility into why",
          "Playlists grew unchecked. Users rarely deleted songs because they had no way to see which ones they'd stopped caring about",
        ],
        problemQuote: "Shuffle doesn't feel random. It feels like it has favorites.",

        research: {
          methods: ["User Interviews", "Persona Development", "Context Scenarios", "User Requirements Mapping"],
          insights: [
            { stat: "\"Shuffle has favorites\"", label: "— said unprompted by multiple interviewees. Repetition wasn't occasional. It was the default experience every single session." },
            { stat: "Invisible libraries", label: "Users with 200+ songs couldn't name what they'd actually listened to. Most had never thought about their listening habits until we asked." },
            { stat: "Playlists never get cleaned", label: "Interviewees almost never deleted songs. Libraries grew indefinitely because users had no play data to tell them what they'd outgrown." },
            { stat: "No control, no trust", label: "Without any visibility into how shuffle worked, users felt powerless. They'd skip obsessively rather than change a mode they didn't know existed." },
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
              body: "Interviews revealed a second problem beneath shuffle: users had no idea what they actually listened to. They couldn't name their most-played songs. A dedicated habits view gives users a mirror into their own behavior — which in turn builds a reason to care about fixing shuffle.",
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
              body: "Bucketing songs by play count (Once / 2-5x / 6+) validates what users already suspected: shuffle has favorites. It also surfaces the playlist cleanup opportunity — songs played 6+ times are candidates to remove, helping users keep their library intentional without forcing them to.",
            },
          ],
        },

        figmaNote:
          "Designed end-to-end in Figma, from wireframes through a high-fidelity prototype covering shuffle mode selection, queue visualization, and playlist management.",

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
                body: "Visualizing listening patterns over time lets users spot their own habits. When behavior becomes visible, users start making sense of why shuffle kept repeating the same music — and what to do about it.",
              },
              {
                title: "Top Artists Breakdown",
                body: "Showing exactly which artists dominate a library makes the 'shuffle has favorites' complaint concrete. Users can see the data behind the frustration and decide whether they want to change it.",
              },
            ],
            bottomCallouts: [
              {
                title: "Library Coverage Donut",
                body: "34% played vs 66% unplayed is the core problem in one chart. A single visual reframes the issue from 'shuffle feels broken' to 'most of my library has never been touched' — no onboarding copy needed.",
              },
              {
                title: "Repetition Rate Segmentation",
                body: "Play counts broken into Once / 2-5x / 6+ validates what interviewees already suspected. Songs in the 6+ bucket become natural playlist cleanup candidates — surfaced without forcing any action.",
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
            solution: "A dedicated Least Played mode that deliberately surfaces low-play-count tracks to bring forgotten songs back.",
            rationale: "Users valued rediscovery but never sought it actively. Building it in as a named mode removed the friction entirely.",
            impact: "Forgotten songs resurfaced naturally without the user needing to search, reorganize, or do anything.",
          },
          {
            title: "Playlist Cleanup Prompts",
            problem: "Users with large libraries still heard the same 15 tracks. More songs in a playlist didn't mean more variety.",
            solution: "Optional, dismissible prompts that surface rarely-played tracks with a one-tap remove option.",
            rationale: "Never forced. Users keep songs 'just in case.' The prompt assists without judging.",
            impact: "Users who engaged described their playlists as feeling intentional and trustworthy again.",
          },
        ],

        outcomes: [
          { title: "Named Shuffle Modes", description: "Default · Most Played · Least Played · No Shuffle, each tied to a real listening pattern from research." },
          { title: "Built-In Rediscovery", description: "Forgotten tracks surface naturally without manual effort." },
          { title: "Research-Driven Features", description: "Every feature traces back to a user requirement from interviews and scenarios." },
        ],

        reflection:
          "Invisible systems erode trust. The moment shuffle had a name and a visible logic, users felt in control, even before anything else changed. The best insights came from listening, not brainstorming.",
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
        prototype: "",
        github: "https://github.com/lillild/Final_Project_CSEN_163",
        live: "",
      },

      heroStatement: "What do I make with this half-empty fridge?",
      heroSubtext: "Reducing food waste one leftover at a time, through better UX, not guilt.",

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
              why: "Checkboxes require reading every label sequentially. Illustrated cards are scannable at a glance and reduce cognitive effort when making multiple selections. Active state contrast also improves accessibility.",
            },
            {
              title: "Static Info Block → Impact Score",
              what: "The sustainability section was redesigned from a read-only info panel into a personal gamified dashboard with a score and badges.",
              why: "Testing showed the original panel was completely ignored — it read like a PSA. Reframing it as personal progress made it one of the most-revisited screens in the final product.",
            },
            {
              title: "Text List → Visual Recipe Cards",
              what: "Recipe results evolved from a text-based list into image-forward cards with food photography.",
              why: "Users made decisions based on visual appetite appeal, not recipe names. Food photos carry meaning instantly and reduced time-to-selection while making the experience feel rewarding rather than functional.",
            },
          ],
        },

        overview:
          "The average household throws away around 30% of the food it buys. LeftoverChef addresses that at the moment it actually happens: when someone opens the fridge, sees partial ingredients, and defaults to takeout. I designed the end-to-end experience across four prototype iterations: ingredient entry, equipment selection, AI recipe generation, and a personal Impact Score that makes sustainability feel rewarding instead of preachy.",

        problemBullets: [
          "People have partial ingredients (half a block of tofu, wilting spinach, leftover rice) but no idea what to cook with the combination",
          "Existing recipe apps require a full pantry; they don't help when you're working with scraps",
          "Food waste feels abstract until it's personal. Users had no feedback loop connecting their choices to real environmental or financial impact",
        ],
        problemQuote: "I throw out so much food every week. I know it's wasteful but I never know what to actually make with what's left.",

        research: {
          methods: ["User Interviews", "User Flow Mapping", "Comparative Analysis", "Iterative Usability Testing (4 rounds)"],
          insights: [
            { stat: "3 interviews", label: "revealed a consistent pattern: partial ingredients sit unused until they go bad, then get tossed" },
            { stat: "Top drop-off", label: "happened at ingredient entry. Users abandoned a structured form before ever reaching recipe results" },
            { stat: "4 iterations", label: "each round exposed a new friction point, from entry to equipment mismatch to disconnected sustainability messaging" },
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
            rationale: "If the first interaction requires effort, users leave. The chip pattern is familiar, fast, and satisfying.",
            impact: "Step 1 completion improved significantly. Users described the input as 'satisfying to use.'",
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
            rationale: "'Your impact' feels earned. 'Global crisis' feels preachy. Reframing sustainability as personal progress drives engagement.",
            impact: "The Impact Score became one of the most-revisited screens. Users checked it even when they weren't actively cooking.",
          },
        ],

        outcomes: [
          { title: "Frictionless Entry", description: "Chip input turned ingredient logging from a form into a 10-second natural interaction." },
          { title: "Equipment-Smart Recipes", description: "AI only suggests meals users can actually make. Zero post-generation frustration." },
          { title: "Sustainability Gamified", description: "Personal stats and badges drove return visits beyond active cooking sessions." },
        ],

        reflection:
          "Four iterations taught me to cut early and often. Every feature we removed made the product more usable. The chip input came from a user muttering 'I just want to type stuff in.' The best design direction often arrives as frustration, not feedback.",
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
