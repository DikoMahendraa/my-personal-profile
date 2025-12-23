import { CalendarDays, GraduationCap, MapPin } from 'lucide-react'
import React, { memo } from 'react'

const educations = {
  title_education: 'Educations',
  schools: [
    {
      name: 'SMK Negeri 1 Rawajitu Selatan',
      major: 'Computer & Network Engineering',
      since: '2017 - May 2019',
      place: 'Tulang Bawang, Lampung, Indonesia.',
    },
    {
      name: 'Pondok IT QODR',
      major: 'Frontend Developer',
      since: 'Jul 2019 - Jan 2022',
      place: 'Bantul Dlingo, Yogyakarta - Indonesia',
    },
  ],
}

const EducationItem = () => {
  return educations.schools.map((item, index) => (
    <div
      key={item.name}
      className="
        relative
        col-span-2 lg:col-span-1
        bg-white
        border-[4px] border-black
        rounded-xl
        shadow-[6px_6px_0_0_#000]
        p-5
        transition
        hover:translate-x-1 hover:translate-y-1 hover:shadow-none
      "
    >
      {/* Panel number */}
      <span className="absolute -top-4 -left-4 bg-black text-white text-xs font-extrabold px-3 py-1 border-[3px] border-black">
        EDU #{index + 1}
      </span>

      {/* Halftone */}
      <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:14px_14px] opacity-[0.06] pointer-events-none rounded-xl" />

      <div className="relative z-10">
        <p className="lg:text-lg text-base font-extrabold text-black flex items-center gap-2">
          <GraduationCap />
          {item.name}
        </p>

        <p className="mt-1 text-sm lg:text-base font-semibold text-gray-800">
          {item.major}
        </p>

        {/* Divider */}
        <div className="my-4 border-t-[3px] border-black" />

        <p className="text-sm lg:text-base font-medium text-gray-700 flex items-center gap-2">
          <CalendarDays size={18} />
          {item.since}
        </p>

        <p className="mt-2 text-sm lg:text-base font-medium text-gray-700 flex items-center gap-2">
          <MapPin size={18} />
          {item.place}
        </p>
      </div>
    </div>
  ))
}

const Educations = () => {
  return (
    <section id="education" className="mt-10">
      <h1 className="lg:text-2xl text-lg font-extrabold mb-6 text-black">
        🎓 {educations.title_education}
      </h1>

      <div className="grid grid-cols-2 gap-6">
        <EducationItem />
      </div>
    </section>
  )
}

export default memo(Educations)
