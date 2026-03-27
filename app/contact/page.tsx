export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <section className="relative overflow-hidden rounded-3xl border border-purple-200/70 bg-linear-to-br from-white via-purple-50/40 to-white px-6 py-14 shadow-[0_12px_40px_rgba(139,92,246,0.08)] md:px-10">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-0 top-0 h-48 w-48 rounded-full bg-purple-200/30 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-indigo-200/20 blur-3xl" />
        </div>

        <header className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-600/80">
            Contact
          </p>

          <h1 className="mb-4 bg-linear-to-r from-indigo-700 to-purple-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
            Let’s Work Together
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-gray-700">
            I’m currently open to frontend development opportunities, freelance projects, and technical collaboration.
          </p>

          <a
            href="mailto:amanda.hotchkiss1011@gmail.com"
            className="inline-flex items-center justify-center rounded-xl bg-purple-600 px-6 py-3 font-medium text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:bg-purple-700"
          >
            Email Me
          </a>
        </header>
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-purple-200/70 bg-white/90 p-6 shadow-[0_10px_30px_rgba(139,92,246,0.08)] md:p-8">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900">
            Get in Touch
          </h2>

          <p className="mb-6 leading-8 text-gray-700">
            If you’re looking for a React or Next.js developer with production retail and e-commerce experience, I’d be glad to connect.
          </p>

          <p className="leading-8 text-gray-700">
            The best way to reach me is via{" "}
            <a
              href="mailto:amanda.hotchkiss1011@gmail.com"
              className="text-purple-600 underline transition hover:text-purple-700"
            >
              email
            </a>{" "}
            or{" "}
            <a
              href="https://www.linkedin.com/in/amandahotchkiss/"
              className="text-purple-600 underline transition hover:text-purple-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>

        <div className="rounded-3xl border border-purple-200/70 bg-white/90 p-6 shadow-[0_10px_30px_rgba(139,92,246,0.08)] md:p-8">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-gray-900">
            Contact Details
          </h2>

          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Email</h3>
              <a
                href="mailto:amanda.hotchkiss1011@gmail.com"
                className="text-purple-600 underline transition hover:text-purple-700"
              >
                amanda.hotchkiss1011@gmail.com
              </a>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/amandahotchkiss/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 underline transition hover:text-purple-700"
              >
                linkedin.com/in/amandahotchkiss
              </a>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">GitHub</h3>
              <a
                href="https://github.com/hotchkissdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 underline transition hover:text-purple-700"
              >
                github.com/hotchkissdev
              </a>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Location</h3>
              <p>Knoxville, TN — open to remote opportunities</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}