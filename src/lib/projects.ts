export type Project = {
  slug: string
  title: string
  discipline: string
  platform: string
  summary: string
  thesis: string
  context: string
  productDecisions: readonly string[]
  engineeringDecisions: readonly string[]
  stack: readonly string[]
  result: string
  image: string
  imageAlt: string
  liveUrl?: string
  liveLabel?: string
  repoUrl: string
}

export const projects: readonly Project[] = [
  {
    slug: 'football-explorer',
    title: 'Football Explorer',
    discipline: 'Live data product',
    platform: 'Responsive web application',
    summary:
      'A matchday command centre that turns a dense global football schedule into a calm, navigable product.',
    thesis:
      'Live football data is most useful when it feels legible. Football Explorer keeps scores, schedules, competitions, teams, and players connected without making the interface feel like a spreadsheet.',
    context:
      'A global fixture feed brings several hard product problems at once: time zones, changing match states, provider limits, and a large number of competitions on the same day. The interface has to preserve that complexity while helping someone find the match that matters quickly.',
    productDecisions: [
      'Make the matchday centre the primary entry point, with previous, current, and upcoming dates always within reach.',
      'Group fixtures by competition and expose live, upcoming, and finished states as useful filters rather than decorative labels.',
      'Keep the selected time zone and refresh state visible so time-sensitive information has clear context.',
      'Connect match detail, competition, team, and player routes so discovery can continue without returning to search.',
    ],
    engineeringDecisions: [
      'TanStack Start provides server rendering and route-level data loading for a fast, shareable application shell.',
      'TanStack Query coordinates API state while a process-local LRU cache reduces repeated provider requests.',
      'Stale responses, explicit timeout handling, quota visibility, and error states keep the product useful when API-Football is constrained.',
      'Schema validation and typed entities protect the interface from incomplete or changing provider responses.',
    ],
    stack: [
      'React 19',
      'TypeScript',
      'TanStack Start',
      'TanStack Query',
      'Tailwind CSS',
      'API-Football',
      'Zod',
    ],
    result:
      'The production application now supports date-led match discovery, competition and entity navigation, live-state filtering, time-zone control, and resilient handling of provider limits.',
    image: '/projects/football-explorer.png',
    imageAlt:
      'Football Explorer homepage showing its editorial football hero and mobile fixture interface.',
    liveUrl: 'https://football-explorer-gamma.vercel.app/',
    repoUrl: 'https://github.com/Oyedelehabeeb/football-explorer',
  },
  {
    slug: 'travel-intelligence',
    title: 'Travel Intelligence',
    discipline: 'Decision-support product',
    platform: 'Responsive web application',
    summary:
      'A passport-aware travel discovery product built to make visa guidance clearer, more honest, and easier to compare.',
    thesis:
      'Travel eligibility is contextual. Instead of guessing where a traveller is from, the product starts with an explicit passport choice and keeps the source and certainty of its guidance visible.',
    context:
      'Travel discovery sits at the intersection of inspiration and consequential information. Provider coverage varies by endpoint and plan, while passport context changes the answer. The product needs to be inviting without pretending that illustrative or unavailable data is authoritative.',
    productDecisions: [
      'Offer destination-first and passport-first paths so users can begin with either a place or their travel document.',
      'Ask for passport context explicitly and remember it locally only after submission; never infer nationality from location.',
      'Label preview data and plan-gated coverage clearly instead of silently substituting fabricated global results.',
      'Keep discover, compare, passport, and destination views connected as parts of one decision journey.',
    ],
    engineeringDecisions: [
      'Run in fixture mode by default, with live Orizn requests isolated to the server so provider credentials never enter the client bundle.',
      'Use a bundled ISO country catalogue for stable country and territory discovery independent of provider availability.',
      'Validate runtime configuration and upstream responses with Zod before data reaches the interface.',
      'Align the production runtime with Node 24 and ship security headers alongside the server-rendered TanStack Start application.',
    ],
    stack: [
      'React 19',
      'TypeScript',
      'TanStack Start',
      'TanStack Query',
      'Tailwind CSS',
      'Orizn API',
      'Zod',
    ],
    result:
      'The deployed product combines a complete country directory with transparent preview data, passport-aware lookup flows, comparison tools, and a production-ready path to live provider coverage.',
    image: '/projects/travel-intelligence.png',
    imageAlt:
      'Travel Intelligence homepage with a globe, passport artwork, and passport-aware travel copy.',
    liveUrl: 'https://travel-int-eta.vercel.app/',
    repoUrl: 'https://github.com/Oyedelehabeeb/travel-int',
  },
  {
    slug: 'ecovogue',
    title: 'Ecovogue',
    discipline: 'Commerce experience',
    platform: 'Responsive storefront',
    summary:
      'A fashion storefront shaped around confident browsing, clear category paths, saved products, and cart flow.',
    thesis:
      'Fashion commerce should give the collection room to lead. Ecovogue pairs expressive campaign imagery with a restrained interface that keeps shopping actions close at hand.',
    context:
      'The storefront needs to serve visitors who arrive ready to shop as well as people still exploring. Category structure, product discovery, saved items, and cart access must remain understandable without competing with the visual identity.',
    productDecisions: [
      'Use campaign-led imagery as the emotional entry point while keeping direct shop actions visible.',
      'Separate women, men, and baby collections at the top level to shorten common browsing paths.',
      'Keep saved products, cart, and account actions present throughout discovery.',
      'Balance featured and trending merchandising with clear product-group navigation.',
    ],
    engineeringDecisions: [
      'Build the storefront from reusable catalogue and merchandising sections while preserving different visual compositions.',
      'Treat saved products and cart state as persistent parts of the browsing experience rather than isolated destination pages.',
      'Use responsive image-led layouts that preserve hierarchy from wide campaign canvases to small touch screens.',
    ],
    stack: ['React', 'JavaScript', 'Responsive CSS', 'Vercel'],
    result:
      'The public storefront presents a complete discovery surface with segmented collections, merchandising areas, saved items, cart access, and account entry points.',
    image: '/projects/ecovogue.png',
    imageAlt:
      'Ecovogue fashion storefront with campaign photography and collection navigation.',
    liveUrl: 'https://ecovogue-jade.vercel.app/',
    repoUrl: 'https://github.com/Oyedelehabeeb/ecovogue',
  },
  {
    slug: 'opal-horizon',
    title: 'Opal Horizon',
    discipline: 'Hospitality product',
    platform: 'Responsive booking experience',
    summary:
      'A cabin hospitality experience that connects atmospheric discovery with practical guest journeys.',
    thesis:
      'A stay begins before a booking form. Opal Horizon uses place, photography, and quiet typography to establish a point of view, then provides direct paths into cabins and the guest area.',
    context:
      'Hospitality interfaces have to carry mood and utility at the same time. The product needs to make the property feel distinctive while keeping cabin exploration and returning-guest actions obvious.',
    productDecisions: [
      'Lead with a full-bleed sense of place instead of opening with a dense reservation form.',
      'Make cabins the primary exploration path and keep the guest area separate for returning visitors.',
      'Use restrained copy and navigation so imagery can communicate the character of the stay.',
    ],
    engineeringDecisions: [
      'Separate the public catalogue, brand story, and guest workflows into focused routes.',
      'Build full-bleed media compositions with readable overlays and responsive crops.',
      'Use explicit loading and error handling around network-dependent guest interactions.',
    ],
    stack: ['React', 'JavaScript', 'Responsive CSS', 'Vercel'],
    result:
      'The deployed site delivers a coherent public hospitality experience spanning cabin discovery, brand context, and a dedicated guest entry point.',
    image: '/projects/opal-horizon.png',
    imageAlt:
      'Opal Horizon homepage featuring a secluded cabin in a full-screen landscape.',
    liveUrl: 'https://the-opal-horizon-website.vercel.app/',
    repoUrl: 'https://github.com/Oyedelehabeeb/the-opal-horizon-website',
  },
  {
    slug: 'learned',
    title: 'Learned',
    discipline: 'Learning platform',
    platform: 'Responsive web product',
    summary:
      'An approachable course-discovery experience designed to move learners from curiosity into structured study.',
    thesis:
      'Online learning becomes easier to enter when the interface makes the next step obvious. Learned focuses its public experience on course discovery and a clear route into the learner account.',
    context:
      'Learning platforms often have to explain a broad catalogue without overwhelming first-time visitors. The public surface must build orientation quickly, while sign-in and enrolment paths remain easy to find.',
    productDecisions: [
      'Lead with a focused learning proposition and two clear actions: get started or browse courses.',
      'Keep authentication visible without allowing account controls to dominate discovery.',
      'Use course-led sections to turn broad marketing into tangible learning choices.',
      'Avoid using promotional audience numbers as portfolio evidence; the product experience is the proof presented here.',
    ],
    engineeringDecisions: [
      'Compose the experience from reusable course, feature, and navigation patterns.',
      'Preserve clear focus order and touch targets across marketing and account entry points.',
      'Design responsive content hierarchy for both scanning and longer course descriptions.',
    ],
    stack: ['React', 'JavaScript', 'Responsive CSS', 'Vercel'],
    result:
      'The live product provides a polished entry point for discovering courses, understanding the learning offer, and moving into registration or sign-in.',
    image: '/projects/learned.png',
    imageAlt:
      'Learned online learning homepage with course-focused copy and a student portrait.',
    liveUrl: 'https://learned-website.vercel.app/',
    repoUrl: 'https://github.com/Oyedelehabeeb/learned-website',
  },
  {
    slug: 'chopng',
    title: 'chopNG',
    discipline: 'Mobile product system',
    platform: 'Mobile app + web operations',
    summary:
      'A mobile-led food product supported by a separate authenticated administration surface and API services.',
    thesis:
      'Consumer products rarely end at the consumer interface. chopNG is presented as a connected product system: a mobile experience supported by purpose-built operational tooling.',
    context:
      'A mobile-led service needs distinct interfaces for customers and internal operations. Those surfaces have different jobs, interaction density, and access requirements, but still need to feel like parts of the same product.',
    productDecisions: [
      'Keep the consumer experience mobile-led rather than forcing it into a desktop showcase.',
      'Give operational work a separate, authenticated admin surface with a denser visual language.',
      'Carry a shared orange accent across surfaces while adapting hierarchy to each audience.',
      'Present only the publicly verifiable admin entry point here; authenticated product screens remain private.',
    ],
    engineeringDecisions: [
      'Separate mobile, API, and administration concerns so each surface can evolve around its own users.',
      'Place authentication at the boundary of the operations interface rather than exposing administrative controls publicly.',
      'Use a high-contrast, responsive sign-in surface that remains usable on smaller screens.',
    ],
    stack: ['React Native', 'Expo', 'Web administration', 'API services'],
    result:
      'The public evidence shows a deployed, authenticated administration entry point supporting a broader mobile-led product architecture.',
    image: '/projects/chopng.png',
    imageAlt:
      'chopNG administration sign-in screen in a dark interface with orange accents.',
    liveUrl: 'https://chopng-admin.vercel.app/',
    liveLabel: 'Open admin surface',
    repoUrl: 'https://github.com/Oyedelehabeeb/chop-chop',
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
