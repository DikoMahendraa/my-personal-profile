import React, { memo } from 'react'
import { Code2 } from 'lucide-react'

const skills = {
  title_skills: 'Skills',
  title_programming: 'Programming Languages',
  title_library: 'Library / Framework / Services',
  title_tools: 'Tools',
  programming: ['Javascript', 'Typescript'],
  library: [
    'React Js',
    'React Native',
    'Dart / Flutter',
    'Next Js',
    'Firebase',
    'TailwindCSS',
    'REST API',
    'Docker',
    'Google Cloud Platform (GCP)',
    'Zod / Yup',
    'GraphQL',
    'React Hook Form',
    'TanStack Query',
    'E2E Automation (Cypress)',
    'Unit Test (RTL, Jest)',
    'Framer Motion',
  ],
  tools: ['Postman', 'Figma', 'Jira', 'Trello', 'Insomnia', 'Swagger'],
}

const SectionDescription = ({
  title,
  items,
}: {
  title: string
  items: Array<string>
}) => (
  <div
    className="
      relative
      bg-white
      border-[4px] border-black
      rounded-xl
      shadow-[6px_6px_0_0_#000]
      p-5
      mt-6
      transition
      hover:translate-x-1 hover:translate-y-1 hover:shadow-none
    "
  >
    {/* Label */}
    <span className="absolute -top-4 -left-4 bg-black text-white text-xs font-extrabold px-3 py-1 border-[3px] border-black">
      SKILL
    </span>

    {/* Halftone */}
    <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:14px_14px] opacity-[0.06] pointer-events-none rounded-xl" />

    <div className="relative z-10">
      <p className="mb-3 text-black lg:text-lg text-base font-extrabold flex items-center gap-2">
        <Code2 size={18} />
        {title}
      </p>

      {/* Skill pills */}
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="
              bg-yellow-100
              border-[3px] border-black
              px-3 py-1
              rounded-md
              text-sm lg:text-base
              font-semibold
              shadow-[2px_2px_0_0_#000]
            "
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </div>
)

const Skills = () => {
  return (
    <section id="skills" className="mt-10">
      <h1 className="lg:text-2xl text-lg font-extrabold text-black mb-4">
        ⚡ {skills.title_skills}
      </h1>

      <SectionDescription
        title={skills.title_programming}
        items={skills.programming}
      />

      <SectionDescription
        title={skills.title_tools}
        items={skills.tools}
      />

      <SectionDescription
        title={skills.title_library}
        items={skills.library}
      />
    </section>
  )
}

export default memo(Skills)
