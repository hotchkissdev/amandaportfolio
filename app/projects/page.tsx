import ProjectCard from '../../components/ProjectCard';

const projects = [
  {
    title: 'Crochet Cosmos',
    subtitle: 'Full-Stack E-Commerce Platform — Next.js, TypeScript, Supabase, Stripe',
    description: 'Production-ready e-commerce application built with Next.js (App Router) and TypeScript. Implements Supabase for authentication and data management, Stripe for secure checkout processing, and Tailwind CSS for adaptive UI design. Includes dynamic product pages, admin management features, and scalable component architecture.',
    highlights: [
      'App Router–based dynamic product routing',
      'Supabase authentication and relational data modeling',
      'Stripe checkout flow with secure payment handling',
      'Admin dashboard for product and inventory management',
      'Modular component architecture using TypeScript and Tailwind',
    ],
    imageSrc: '/images/crochet-cosmos.png',
    imageAlt: 'Crochet Cosmos logo',
    appLink: 'https://crochetcosmos.com/',
  },
  {
    title: 'Cellular Sales Website',
    subtitle: 'Production Retail Website — WordPress → Next.js Migration',
    description: 'Contributed to the development and maintenance of a large-scale retail website serving a nationwide Verizon authorized retailer. Assisted in transitioning portions of the site from WordPress to a modern Next.js + TypeScript + Tailwind architecture.',
    highlights: [
      'Maintained high-traffic marketing and product pages',
      'Executed UI updates within strict Verizon brand standards',
      'Contributed to phased migration from WordPress to Next.js',
      'Worked within an established production CI/CD workflow',
      'Partnered with marketing and design stakeholders',
    ],
    imageSrc: '/images/cellular-sales.png',
    imageAlt: 'Cellular Sales website screenshot',
    appLink: 'https://www.cellularsales.com/',
  },
  {
    title: 'React Dictionary',
    subtitle: 'API-Driven Dictionary Application — React',
    description: 'React-based word lookup application integrating an external dictionary API. Implements controlled inputs, asynchronous data fetching, conditional rendering, and responsive design patterns. Demonstrates state management and component-based architecture.',
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
    description: 'Dynamic weather dashboard consuming live API data with real-time rendering of current conditions and forecasts. Implements asynchronous JavaScript (fetch/async-await), responsive layout, and UI state updates based on user input and geolocation.',
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
    description: 'Browser-based drawing application utilizing DOM manipulation, dynamic grid generation, event handling, and interactive color state logic. Demonstrates JavaScript-driven UI updates and responsive layout structuring.',
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
      <main className="max-w-5xl mx-auto px-4 py-8">
        <header className="mb-12 text-center gap-5">
          <h1 className="text-4xl font-bold text-indigo-700">My Projects</h1>
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
