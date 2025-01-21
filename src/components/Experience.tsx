interface WorkExperience {
    title: string;
    company: string;
    companyLink: string;
    date: string;
    desc: string[];
  }
  
  interface ExperienceProps {
    experiences: WorkExperience[];
  }
  
  export default function Experience({ experiences }: ExperienceProps) {
    return (
      <section className="w-full py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:gap-12">
            {experiences.map((exp: WorkExperience, idx: number) => (
              <ExperienceCard
                key={idx}
                title={exp.title}
                desc={exp.desc}
                date={exp.date}
                company={exp.company}
                companyLink={exp.companyLink}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  const ExperienceCard = ({ title, desc, date, company, companyLink }: { 
    title: string, 
    desc: string[], 
    date: string, 
    company: string, 
    companyLink: string 
  }) => {
    return (
      <div className="relative p-4 sm:p-6 lg:p-8 rounded-xl shadow-xl bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h1 className="font-semibold text-xl md:text-2xl mb-2">{title}</h1>
            <a href={companyLink} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
              {company}
            </a>
          </div>
          <span className="text-gray-400 dark:text-gray-500 text-lg md:text-xl font-medium mt-2 md:mt-0">
            {date}
          </span>
        </div>
        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
          {desc.map((item, index) => (
            <li key={index} className="text-sm md:text-base">
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };