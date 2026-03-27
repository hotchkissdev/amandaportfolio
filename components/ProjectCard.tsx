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
    <section
      className={`group mb-12 rounded-3xl border border-purple-100 bg-white/80 p-6 shadow-[0_10px_30px_rgba(139,92,246,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(139,92,246,0.14)] md:p-8 ${
        reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } flex flex-col items-center gap-10`}
    >
      {/* Image */}
      <div className="flex w-full justify-center lg:w-1/2">
        <div className="overflow-hidden rounded-2xl border border-purple-100 bg-gradient-to-br from-white to-purple-50 p-3 shadow-[0_8px_24px_rgba(139,92,246,0.12)]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={400}
            height={400}
            className="h-auto w-auto max-w-full rounded-xl object-cover transition duration-500 group-hover:scale-[1.02]"
          />
        </div>
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2">
        <h2 className="mb-3 text-3xl font-semibold tracking-tight text-gray-900">
          {title}
        </h2>

        <h3 className="mb-4 text-lg font-medium text-purple-700">
          {subtitle}
        </h3>

        <p className="mb-6 leading-7 text-gray-700">
          {description}
        </p>

        {/* FIXED Highlights structure */}
        {highlights && highlights.length > 0 && (
          <div className="mb-6">
            <h4 className="mb-3 text-lg font-semibold text-gray-900">
              Highlights
            </h4>
            <ul className="space-y-2 text-gray-700">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-purple-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href={appLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-purple-600 px-6 py-3 font-medium text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:bg-purple-700"
          >
            Live Demo
          </a>

          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-purple-200 bg-white px-6 py-3 font-medium text-purple-700 transition duration-200 hover:-translate-y-0.5 hover:border-purple-300 hover:bg-purple-50"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </section>
  );
}