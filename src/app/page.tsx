import Experience from "@/components/Experience";
import { userInfo } from "os";

interface WorkExperience {
  title: string;
  company: string;
  companyLink: string;
  date: string;
  desc: string[];
}

const workExperience: WorkExperience[] = [
  {
    company: "Company Name",
    title: "Software Engineer",
    date: "Jan 2023 - Present",
    desc: [
      "Developed and maintained web applications using React and TypeScript",
      "Implemented responsive designs using Tailwind CSS",
      "Collaborated with team members using Git and GitHub",
      "Optimized application performance and improved load times by 40%"
    ],
    companyLink :"Bam"
  },
  {
    company: "Previous Company",
    title: "Junior Developer",
    date: "Jun 2022 - Dec 2022",
    desc: [
      "Built and maintained RESTful APIs using Node.js",
      "Worked with MongoDB for database management",
      "Participated in code reviews and agile development processes",
      "Contributed to front-end development using React"
    ],
    companyLink :"Bam"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen pt-24 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <section id="about" className="mb-20">
          <h2 className="text-3xl font-bold mb-6">About</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
              What is Lorem Ipsum?
              Lorem Ipsum is simply dummy text of the printing and typesetting industry...
            </p>
            {/* Other paragraphs with same styling */}
          </div>
        </section>

        <section id="projects" className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
              What is Lorem Ipsum?
              Lorem Ipsum is simply dummy text of the printing and typesetting industry...
            </p>
        </section>

        <section id="experience" className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <Experience experiences={workExperience} />
        </section>

        <section id="contact" className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
              What is Lorem Ipsum?
              Lorem Ipsum is simply dummy text of the printing and typesetting industry...
            </p>
        </section>
      </div>
    </main>
  );
}