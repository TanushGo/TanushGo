export default function Home() {
  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4 max-w-4xl">
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
          <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
              What is Lorem Ipsum?
              Lorem Ipsum is simply dummy text of the printing and typesetting industry...
            </p>
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