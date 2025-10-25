export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Lavanya</h1>
      <p className="text-xl text-gray-700 mb-6">
        A passionate developer building beautiful web experiences.
      </p>

      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-4 py-2 bg-gray-200 text-gray-900 rounded hover:bg-gray-300"
        >
          Contact Me
        </a>
      </div>

      <section id="projects" className="mt-16 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <li className="p-4 border rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold">Project 1</h3>
            <p>A cool web app built with Next.js and Tailwind CSS.</p>
          </li>
          <li className="p-4 border rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold">Project 2</h3>
            <p>Another awesome project showcasing responsive design.</p>
          </li>
        </ul>
      </section>

      <section id="contact" className="mt-16 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
        <p>You can reach me at: <a href="mailto:lavanya@example.com" className="text-blue-600">lavanya@example.com</a></p>
      </section>
    </main>
  );
}
