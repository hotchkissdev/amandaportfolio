import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <main className="max-w-5xl mx-auto px-4 py-8">
        <header className="text-center mb-5">
          <h1 className="text-4xl font-bold text-indigo-700">About Me</h1>
        </header>

        <div className='flex justify-center mb-12'>
          <a
            href="/Amanda_Hotchkiss_Resume.pdf"
            download="Amanda_Hotchkiss_Resume.pdf"
            className="inline-block px-6 py-2 bg-indigo-600 text-white font-medium rounded shadow hover:bg-indigo-700 transform hover:-translate-y-0.5 transition w-fit"
          >
            Download My Resume
          </a>
        </div>

        {/* First Section */}
        <section className="flex mb-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Hi, I’m Amanda Hotchkiss.</h2>
            <p className="text-gray-700 mb-4">
              I’m a frontend developer specializing in React and Next.js applications. I build modern, scalable web interfaces with a focus on clean component architecture, performance, and maintainable code.

              I’ve contributed to production retail websites and developed a full-stack e-commerce platform using Next.js (App Router), TypeScript, Supabase, and Stripe. I translate business requirements into intuitive user experiences and structured, reliable frontend systems.
            </p>
          </div>
        </section>

        {/* Second Section */}
        <section className="flex mb-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Technical Background</h2>
            <p className="text-gray-700 mb-4">
              My experience spans both enterprise and independent projects. In a corporate environment, I contributed to high-traffic marketing and product pages while assisting in a migration from WordPress to a modern Next.js + TypeScript stack.
              <br /><br />
              Independently, I’ve built:
              <br /><br />
              <ul className='list-disc list-inside'>
                <li>A full-stack e-commerce platform with authentication, relational data modeling, and secure payments</li>
                <li>API-driven React applications with controlled state and conditional rendering</li>
                <li>JavaScript tools leveraging browser APIs, asynchronous logic, and DOM event systems</li>
              </ul>
              <br />
              My current focus is strengthening React architecture, scalable UI patterns, and frontend performance optimization.
            </p>
          </div>
        </section>

        {/* Third Section */}
        <section className="flex mb-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
            <ul className='list-disc list-inside'>
              <li>SheCodes Basic</li>
              <li>SheCodes Plus</li>
              <li>SheCodes Responsive</li>
              <li>SheCodes React</li>
            </ul>
          </div>
        </section>

        {/* Fourth Section */}
        <section className="flex mb-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Outside of Work</h2>
            <p className="text-gray-700 mb-4">
              I’m originally from California and enjoy being outdoors when I can, especially kayaking and coastal travel. Maintaining balance outside of development helps me stay focused and creative in my technical work.
            </p>
          </div>
        </section>

        <div className="text-center mb-12">
          <a href="#top" className="text-indigo-600 underline">Return to top of page</a>
        </div>
      </main>
    </>
  );
}
