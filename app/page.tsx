import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <section className="relative overflow-hidden rounded-3xl border border-purple-200/70 bg-linear-to-br from-white via-purple-50/40 to-white px-6 py-16 shadow-[0_12px_40px_rgba(139,92,246,0.08)] md:px-10">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-purple-200/30 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-200/20 blur-3xl" />
        </div>

        <header className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-600/80">
            Frontend Engineer
          </p>

          <h1 className="mb-4 bg-linear-to-r from-indigo-700 to-purple-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl">
            Amanda Hotchkiss
          </h1>

          <p className="mx-auto mb-8 max-w-xl text-lg leading-8 text-gray-700 md:text-xl">
            I build clean, responsive web applications with React, Next.js, and
            TypeScript, with production experience in retail and e-commerce.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:amanda.hotchkiss1011@gmail.com"
              className="inline-flex items-center justify-center rounded-xl bg-purple-600 px-6 py-3 font-medium text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:bg-purple-700"
              title="Email me"
            >
              Email Me
            </a>

            <a
              href="/projects"
              className="inline-flex items-center justify-center rounded-xl border border-purple-200/70 bg-white px-6 py-3 font-medium text-purple-700 transition duration-200 hover:-translate-y-0.5 hover:border-purple-300/70 hover:bg-purple-50"
              title="View my projects"
            >
              View Projects
            </a>
          </div>
        </header>
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-3xl border border-purple-200/70 bg-white/90 p-6 shadow-[0_10px_30px_rgba(139,92,246,0.08)] md:p-8">
          <div className="overflow-hidden rounded-2xl border border-purple-200/70 bg-linear-to-br from-white to-purple-50 p-3 shadow-[0_8px_24px_rgba(139,92,246,0.10)]">
            <Image
              src="/images/coding-selfie.jpg"
              alt="Amanda Hotchkiss smiling at the camera in front of a coding setup"
              width={500}
              height={500}
              className="h-105 w-full rounded-xl object-cover"
              priority
            />
          </div>
        </div>

        <div className="flex rounded-3xl border border-purple-200/70 bg-white/90 p-6 shadow-[0_10px_30px_rgba(139,92,246,0.08)] md:p-8">
          <div className="my-auto">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-purple-700">
              About Me
            </p>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-gray-900">
              Frontend developer focused on clean UI and maintainable architecture
            </h2>
            <p className="mb-6 leading-8 text-gray-700">
              I build responsive web applications using React, Next.js, and TypeScript, with a focus on component architecture, API integration, accessibility, and maintainable UI.
            </p>
            <a
              href="/about"
              className="inline-flex items-center justify-center rounded-xl bg-purple-600 px-6 py-3 font-medium text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:bg-purple-700"
              title="Learn more about me"
            >
              More About Me
            </a>
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex rounded-3xl border border-purple-200/70 bg-white/90 p-6 shadow-[0_10px_30px_rgba(139,92,246,0.08)] md:p-8">
          <div className="my-auto">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-purple-700">
              Featured Work
            </p>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-gray-900">
              Projects built with real-world functionality in mind
            </h2>
            <p className="mb-6 leading-8 text-gray-700">
              Explore selected work across React, API integration, reusable components, asynchronous data handling, responsive UI development, and full-stack e-commerce architecture.
            </p>
            <a
              href="/projects"
              className="inline-flex items-center justify-center rounded-xl border border-purple-200/70 bg-white px-6 py-3 font-medium text-purple-700 transition duration-200 hover:-translate-y-0.5 hover:border-purple-300/70 hover:bg-purple-50"
              title="Full list of my projects"
            >
              See My Projects
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-purple-200/70 bg-white/90 p-6 shadow-[0_10px_30px_rgba(139,92,246,0.08)] md:p-8">
          <div className="overflow-hidden rounded-2xl border border-purple-200/70 bg-linear-to-br from-white to-purple-50 p-3 shadow-[0_8px_24px_rgba(139,92,246,0.10)]">
            <Image
              src="/images/Crochet-Cosmos.png"
              alt="Crochet Cosmos logo with a purple and pink galaxy background and a white crochet hook orbiting a yarn ball planet"
              width={700}
              height={500}
              className="h-auto w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}