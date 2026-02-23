import Image from 'next/image';

type ProjectCardProps = {
  title: string;
  subtitle: string;
  description: string;
  highlights?: string[];
  imageSrc: string;
  imageAlt: string;
  appLink: string;
  githubLink?: string;
  reverse?: boolean;
};

export default function ProjectCard({
  title,
  subtitle,
  description,
  highlights,
  imageSrc,
  imageAlt,
  appLink,
  githubLink,
  reverse = false,
}: ProjectCardProps) {
  return (
    <div
      className={`flex gap-20 mb-12 items-center ${
        reverse ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div className="flex justify-center">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={400}
          height={400}
          className="rounded-lg shadow-2xl object-cover w-auto h-auto max-w-[300px] md:max-w-[400px]"
        />
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <h3 className="text-xl mb-4">{subtitle}</h3>
        <p className="mb-4">{description}</p>

        {highlights && (
          <ul className="list-disc list-inside mb-4 space-y-1 text-gray-700">
            <h4 className='text-lg font-semibold'>Highlights:</h4>
            {highlights.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}

        <div className="flex space-x-4">
          <a
            href={appLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-indigo-600 text-white font-medium rounded shadow hover:bg-indigo-700 transform hover:-translate-y-0.5 transition"
          >
            Live Demo
          </a>
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-indigo-600 text-white font-medium rounded shadow hover:bg-indigo-700 transform hover:-translate-y-0.5 transition"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
