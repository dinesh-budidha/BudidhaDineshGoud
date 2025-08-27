import React from "react";
// If animations are desired, uncomment the next line and wrap elements with <motion.div>
// import { motion } from "framer-motion";

// NOTE: This is a single-file, self-contained React + Tailwind portfolio page
// designed to closely mimic a modern minimal portfolio layout similar to the
// one you referenced. Replace placeholder content with your details.

export default function PortfolioClone() {
  const projects = [
    {
      title: "Project One",
      desc: "Brief one-liner about what this project does and why it matters.",
      link: "#",
      tags: ["Next.js", "TypeScript", "Tailwind"],
    },
    {
      title: "Project Two",
      desc: "Short description: performance, features, or impact.",
      link: "#",
      tags: ["React", "Node", "PostgreSQL"],
    },
    {
      title: "Project Three",
      desc: "Highlight a unique capability or metric (e.g., 10k+ users).",
      link: "#",
      tags: ["LLM", "RAG", "Vector DB"],
    },
  ];

  const skills = [
    "JavaScript/TypeScript",
    "React/Next.js",
    "Node.js",
    "Tailwind CSS",
    "Python",
    "PostgreSQL / MongoDB",
    "Docker",
    "Git & GitHub",
    "Cloud (Vercel / AWS)",
  ];

  const experience = [
    {
      role: "Software Engineer Intern",
      org: "Company Name",
      time: "Jun 2024 – Sep 2024",
      bullets: [
        "Shipped feature X that improved Y by Z%.",
        "Collaborated with N engineers to deliver releases on a 2-week cadence.",
      ],
    },
    {
      role: "GDSC Lead / Organizer",
      org: "Your College",
      time: "2024 – 2025",
      bullets: [
        "Led workshops for 70+ peers on web and AI tooling.",
        "Organized hackathons and mentorship sessions.",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-lg">YourName.dev</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:opacity-80" href="#projects">Projects</a>
            <a className="hover:opacity-80" href="#skills">Skills</a>
            <a className="hover:opacity-80" href="#experience">Experience</a>
            <a className="hover:opacity-80" href="#contact">Contact</a>
          </nav>
          <a
            href="#contact"
            className="text-sm rounded-2xl px-4 py-2 border border-neutral-700 hover:bg-neutral-800"
          >
            Get in touch
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="mx-auto max-w-6xl px-4 pt-16 pb-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">AI • Web • Cloud • UX</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-semibold leading-tight">
              Hi, I’m <span className="text-neutral-300">Your Name</span>
            </h1>
            <p className="mt-4 text-neutral-300">
              I build clean, fast, and accessible experiences with Next.js, Tailwind, and AI tooling.
              Open to collabs, internships, and interesting problems.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-2xl px-4 py-2 bg-white/10 hover:bg-white/20">View Projects</a>
              <a href="mailto:you@example.com" className="rounded-2xl px-4 py-2 border border-neutral-700 hover:bg-neutral-800">Email Me</a>
              <a href="/resume.pdf" className="rounded-2xl px-4 py-2 border border-neutral-700 hover:bg-neutral-800">Download CV</a>
            </div>
          </div>
          <div className="relative aspect-square rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-800 shadow-2xl overflow-hidden">
            {/* Replace with your photo or a nice illustration */}
            <div className="absolute inset-0 grid place-items-center text-center p-6">
              <div>
                <div className="text-7xl">👨‍💻</div>
                <p className="mt-4 text-sm text-neutral-400">Drop your headshot/illustration here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <a href="#" className="text-sm text-neutral-400 hover:text-neutral-200">See all →</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <a key={i} href={p.link} className="group rounded-3xl border border-neutral-800 hover:border-neutral-700 bg-neutral-900/40 p-5 transition">
              <div className="aspect-video rounded-2xl bg-neutral-800 mb-4" />
              <h3 className="font-medium group-hover:opacity-90">{p.title}</h3>
              <p className="text-sm text-neutral-400 mt-1">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full border border-neutral-700 px-2 py-1 text-neutral-300">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {skills.map((s) => (
            <li key={s} className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4 text-sm">
              {s}
            </li>
          ))}
        </ul>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-semibold mb-6">Experience</h2>
        <div className="space-y-6">
          {experience.map((e, i) => (
            <div key={i} className="rounded-3xl border border-neutral-800 bg-neutral-900/40 p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-medium">{e.role}</h3>
                  <p className="text-sm text-neutral-400">{e.org}</p>
                </div>
                <div className="text-sm text-neutral-400 mt-2 sm:mt-0">{e.time}</div>
              </div>
              <ul className="mt-3 list-disc list-inside text-sm text-neutral-300 space-y-1">
                {e.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-14">
        <div className="rounded-3xl border border-neutral-800 bg-neutral-900/40 p-8">
          <h2 className="text-2xl font-semibold">Let’s work together</h2>
          <p className="text-neutral-300 mt-2 text-sm">I’m open to internships, freelance and collaboration. Drop a message:</p>
          <form className="mt-6 grid sm:grid-cols-2 gap-4">
            <input className="w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm outline-none focus:border-neutral-600" placeholder="Your name" />
            <input className="w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm outline-none focus:border-neutral-600" placeholder="Email" type="email" />
            <textarea className="sm:col-span-2 rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm outline-none focus:border-neutral-600" rows={5} placeholder="Your message" />
            <button type="submit" className="justify-self-start rounded-xl px-5 py-2 bg-white/10 hover:bg-white/20 text-sm">Send</button>
          </form>
          <div className="mt-6 flex items-center gap-4 text-sm text-neutral-400">
            <a className="hover:text-neutral-200" href="https://github.com/yourname">GitHub</a>
            <span>•</span>
            <a className="hover:text-neutral-200" href="https://www.linkedin.com/in/yourname">LinkedIn</a>
            <span>•</span>
            <a className="hover:text-neutral-200" href="https://x.com/yourhandle">X</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-4 pb-16">
        <div className="border-t border-neutral-900 pt-6 text-sm text-neutral-500">
          © {new Date().getFullYear()} Your Name. Built with Next.js & Tailwind. Deployed on Vercel.
        </div>
      </footer>
    </main>
  );
}
