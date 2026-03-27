import ProjectCard from '../../components/ProjectCard';

const projects = [
  {
    title: 'Crochet Cosmos',
    subtitle: 'Full-Stack E-Commerce Platform — Next.js, TypeScript, Supabase, Stripe',
    description: 'Built a full-stack e-commerce platform for a real business using Next.js (App Router), TypeScript, Supabase, and Stripe. Designed a flexible product system to support variations, inventory tracking, and dynamic product pages, while implementing secure authentication and checkout flows. Focused on creating a scalable architecture that can support future admin tools, analytics, and business growth.',
    highlights: [
      'Designed dynamic product system with variation support and inventory tracking',
      'Implemented Supabase authentication and relational database structure',
      'Built Stripe checkout integration with secure payment handling',
      'Developed admin dashboard for managing products and stock',
      'Structured scalable component architecture using Next.js App Router',
    ],
    imageSrc: '/images/crochet-cosmos.png',
    imageAlt: 'Crochet Cosmos logo',
    appLink: 'https://crochetcosmos.com/',
  },
  {
    title: 'Cellular Sales Website',
    subtitle: 'Production Retail Website — WordPress → Next.js Migration',
    description: 'Worked on a high-traffic production retail website for a nationwide Verizon authorized retailer. Contributed to maintaining and improving marketing and product pages, while supporting a migration from WordPress to a modern Next.js + TypeScript + Tailwind architecture. Focused on clean UI implementation, performance, and consistency within strict brand guidelines.',
    highlights: [
      'Maintained and updated high-traffic production pages',
      'Implemented UI changes aligned with strict Verizon design standards',
      'Supported migration from WordPress to Next.js architecture',
      'Worked within a CI/CD production workflow',
      'Collaborated with marketing and design stakeholders',
    ],
    imageSrc: '/images/cellular-sales.png',
    imageAlt: 'Cellular Sales website screenshot',
    appLink: 'https://www.cellularsales.com/',
  },
  {
    title: 'React Dictionary',
    subtitle: 'API-Driven Dictionary Application — React',
    description: 'Built a React-based dictionary application that integrates a third-party API to provide real-time word definitions. Focused on managing asynchronous data flows, controlled inputs, and conditional rendering while maintaining a clean and reusable component structure.',
    highlights: [
      'Integrated third-party REST API for dynamic data retrieval',
      'Managed component state with controlled inputs',
      'Implemented conditional rendering patterns',
      'Structured reusable functional components',
      'Handled asynchronous flows with loading and error states',
    ],
    imageSrc: '/images/dictionary-app.png',
    imageAlt: 'React Dictionary App',
    appLink: 'https://nostalgic-lovelace-ab297e.netlify.app/',
    githubLink: 'https://github.com/hotchkissdev/react-weather-project',
  },
  {
    title: 'Stormy Weather App',
    subtitle: 'Weather Dashboard — JavaScript, HTML, CSS',
    description: 'Developed a weather dashboard that consumes live API data to display real-time conditions and forecasts. Implemented asynchronous JavaScript, geolocation-based requests, and responsive UI updates based on user input.',
    imageSrc: '/images/my-weather-app.png',
    highlights: [
      'Consumed live weather API with fetch and async/await',
      'Implemented geolocation-based data requests',
      'Processed and formatted real-time forecast data',
      'Managed user-driven search queries and state updates',
      'Handled API response parsing and edge cases',
    ],
    imageAlt: 'My Weather App',
    appLink: 'https://optimistic-booth-6cfdcd.netlify.app/',
    githubLink: 'https://github.com/hotchkissdev/my-shecodespro-project',
  },
  {
    title: 'Click-A-Sketch Browser Game',
    subtitle: 'Interactive Drawing Tool — Vanilla JavaScript',
    description: 'Built an interactive browser-based drawing tool using vanilla JavaScript. Focused on dynamic DOM manipulation, event handling, and performance optimization for real-time grid updates without external libraries.',
    highlights: [
      'Programmatically generated interactive grid system',
      'Implemented custom color state logic',
      'Managed complex DOM event delegation',
      'Built interactive UI without external libraries',
      'Optimized rendering performance for large grid updates',
    ],
    imageSrc: '/images/etch-a-sketch.png',
    imageAlt: 'etch a sketch browser game',
    appLink: 'https://hotchkissdev.github.io/etch-a-sketch/',
    githubLink: 'https://github.com/hotchkissdev/etch-a-sketch',
  },
];

export default function ProjectsPage() {
  return (
    <>
      <main className="mx-auto max-w-6xl px-4 py-10 bg-linear-to-b from-white via-purple-50/30 to-white">
        <header className="mb-14 text-center">
          <h1 className="text-4xl font-bold bg-linear-to-r from-indigo-800 to-purple-300 bg-clip-text text-transparent pb-3">
            My Projects
          </h1>
          <p className="text-gray-600">
            A selection of frontend and full-stack work focused on clean UI, real-world functionality, and maintainable architecture.
          </p>
        </header>

        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            {...project}
            reverse={index % 2 !== 0}
          />
        ))}

        <div className="text-center mb-12">
          <a href="#top" className="text-indigo-600 underline">Return to top of page</a>
        </div>
      </main>
    </>
  );
}
