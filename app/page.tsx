import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <main className="max-w-5xl mx-auto px-4 py-8">
        <header className="text-center mb-12 max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-indigo-800">Amanda Hotchkiss</h1>
          <p className="text-lg text-gray-600 font-medium mb-2">
            Frontend Developer specializing in React & Next.js<br />Production retail and e-commerce experience
          </p>
          <a href="mailto:amanda.hotchkiss1011@gmail.com" className="inline-block px-6 py-2 bg-indigo-600 text-white font-medium rounded shadow hover:bg-indigo-700 transform hover:-translate-y-0.5 transition" title="Email me">Email Me</a>
        </header>

        <section className="flex flex-row w-full mb-12 items-center justify-between">
          <div className='flex flex-col w-1/2'>
            <Image
              src="/images/coding-selfie.jpg"
              alt="Amanda Hotchkiss sitting in outdoor patio area, smiling at the camera"
              width={400}
              height={400}
              className="rounded-lg max-h-[300px] md:max-w-[400px] object-cover"
            />
          </div>
          <div className='flex flex-col w-1/2 items-end'>
            <h2 className="text-2xl font-semibold mb-4 w-full">About Me</h2>
            <p className="text-gray-400 mb-4">
              Frontend developer experienced in building responsive web applications using React, Next.js, and TypeScript. I focus on clean component architecture, API integration, and creating intuitive, accessible user interfaces.
            </p>
            <div className='w-full'>
              <a href="/about" className="inline-block px-6 py-2 bg-indigo-600 text-white font-medium rounded shadow hover:bg-indigo-700 transform hover:-translate-y-0.5 transition w-fit" title="Learn more about me">Who Am I?</a>
            </div>
          </div>
        </section>

        <section className="flex flex-row w-full mb-12 items-center justify-between">
          <div className='flex flex-col w-1/2'>
            <h2 className="text-2xl font-semibold mb-4">Projects</h2>
            <p className="text-gray-400 mb-4">
              Selected projects demonstrating experience with React, API integration, state management, and responsive UI development.
            </p>
            <a href="/projects" className="inline-block px-6 py-2 bg-indigo-600 text-white font-medium rounded shadow hover:bg-indigo-700 transform hover:-translate-y-0.5 transition w-fit" title="Full list of my projects">See My Projects</a>
          </div>
          <div className='flex flex-col w-1/2 items-end'>
            <Image
              src="/images/my-weather-app.png"
              alt="My Weather App screenshot"
              width={500}
              height={500}
              className="rounded-lg object-cover max-h-[300px] md:max-w-[400px]"
            />
          </div>
        </section>
      </main>
    </>
  );
}
