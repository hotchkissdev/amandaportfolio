export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <section className="relative overflow-hidden rounded-3xl border border-purple-200/70 bg-linear-to-br from-white via-purple-50/40 to-white px-6 py-14 shadow-[0_12px_40px_rgba(139,92,246,0.08)] md:px-10">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-0 top-0 h-48 w-48 rounded-full bg-purple-200/30 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-indigo-200/20 blur-3xl" />
        </div>

        <header className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-600/80">
            About
          </p>

          <h1 className="mb-4 bg-linear-to-r from-indigo-700 to-purple-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
            About Me
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-gray-700">
            Frontend developer focused on scalable React interfaces, clean architecture, and real-world product experiences.
          </p>

          <a
            href="/Amanda_Hotchkiss_Resume.pdf"
            download="Amanda_Hotchkiss_Resume.pdf"
            className="inline-flex items-center justify-center rounded-xl bg-purple-600 px-6 py-3 font-medium text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:bg-purple-700"
          >
            Download My Resume
          </a>
        </header>
      </section>

      <section className="mt-12 grid gap-8">
        <div className="rounded-3xl border border-purple-200/70 bg-white/90 p-6 shadow-[0_10px_30px_rgba(139,92,246,0.08)] md:p-8">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900">
            Hi, I’m Amanda Hotchkiss.
          </h2>
          <p className="leading-8 text-gray-700">
            I’m a frontend developer specializing in React and Next.js applications. I build modern, scalable web interfaces with a focus on clean component architecture, performance, and maintainable code.
          </p>
          <p className="mt-4 leading-8 text-gray-700">
            I’ve contributed to production retail websites and developed a full-stack e-commerce platform using Next.js (App Router), TypeScript, Supabase, and Stripe. I translate business requirements into intuitive user experiences and structured, reliable frontend systems.
          </p>
        </div>

        <div className="rounded-3xl border border-purple-200/70 bg-white/90 p-6 shadow-[0_10px_30px_rgba(139,92,246,0.08)] md:p-8">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900">
            Technical Background
          </h2>
          <p className="mb-4 leading-8 text-gray-700">
            My experience spans both enterprise and independent projects. In a corporate environment, I contributed to high-traffic marketing and product pages while assisting in a migration from WordPress to a modern Next.js + TypeScript stack.
          </p>
          <p className="mb-4 leading-8 text-gray-700">
            Independently, I’ve built:
          </p>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-purple-500" />
              <span>A full-stack e-commerce platform with authentication, relational data modeling, and secure payments</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-purple-500" />
              <span>API-driven React applications with controlled state and conditional rendering</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-purple-500" />
              <span>JavaScript tools leveraging browser APIs, asynchronous logic, and DOM event systems</span>
            </li>
          </ul>

          <p className="mt-6 leading-8 text-gray-700">
            My current focus is strengthening React architecture, scalable UI patterns, and frontend performance optimization.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-purple-200/70 bg-white/90 p-6 shadow-[0_10px_30px_rgba(139,92,246,0.08)] md:p-8">
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900">
              Certifications
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-purple-500" />
                <span>SheCodes Basic</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-purple-500" />
                <span>SheCodes Plus</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-purple-500" />
                <span>SheCodes Responsive</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-purple-500" />
                <span>SheCodes React</span>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-purple-200/70 bg-white/90 p-6 shadow-[0_10px_30px_rgba(139,92,246,0.08)] md:p-8">
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900">
              Outside of Work
            </h2>
            <p className="leading-8 text-gray-700">
              I’m originally from California and enjoy being outdoors when I can, especially kayaking and coastal travel. Maintaining balance outside of development helps me stay focused and creative in my technical work.
            </p>
          </div>
        </div>

        <div className="text-center">
          <a href="#top" className="text-purple-600 underline hover:text-purple-700">
            Return to top of page
          </a>
        </div>
      </section>
    </main>
  );
}