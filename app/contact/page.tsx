export default function ContactPage() {
  return (
    <>
      <main className="max-w-5xl mx-auto px-4 py-8">
        <header className="text-center mb-5">
          <h1 className="text-4xl font-bold text-indigo-700">Amanda Hotchkiss</h1>
          <h2 className="text-xl mt-2 text-gray-600">Frontend Developer</h2>
        </header>
        
        <div className="flex justify-center mb-12">
          <a href="mailto:..." className="inline-block px-6 py-2 bg-indigo-600 text-white font-medium rounded shadow hover:bg-indigo-700 transform hover:-translate-y-0.5 transition">
            Email Me
          </a>
        </div>

        <section className="text-lg text-gray-700 leading-relaxed mb-12">
          <h3 className="text-2xl font-semibold mb-4">Let’s Work Together</h3>
          <p className="mb-4">
            I’m currently open to frontend development opportunities, freelance projects, and technical collaboration.
            If you're looking for a React or Next.js developer with production retail and e-commerce experience, I’d be glad to connect.
            <br /><br />
            The best way to reach me is via <a href="mailto:amanda.hotchkiss1011@gmail.com" className="text-indigo-600 underline">email</a> or <a href="https://www.linkedin.com/in/amanda-hotchkiss-1a4056134/" className="text-indigo-600 underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
          </p>

          <h4 className="text-lg font-semibold">Email:</h4> 
          <p className="mb-4">
            <a
              href="mailto:amanda.hotchkiss1011@gmail.com"
              className="text-indigo-600 underline"
            >
              amanda.hotchkiss1011@gmail.com
            </a>
          </p>

          <h4 className="text-lg font-semibold">LinkedIn:</h4> 
          <p className="mb-4">
            <a
              href="https://www.linkedin.com/in/amandahotchkiss/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 underline"
            >
              linkedin.com/in/amandahotchkiss
            </a>
          </p>

          <h4 className="text-lg font-semibold">GitHub:</h4> 
          <p className="mb-4">
            <a
              href="https://github.com/hotchkissdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 underline"
            >
              github.com/hotchkissdev
            </a>
          </p>
          <p>
            Based in Knoxville, TN — open to remote opportunities.
          </p>
        </section>
      </main>
    </>
  );
}
