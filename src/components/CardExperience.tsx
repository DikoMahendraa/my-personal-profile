import { Building, CalendarDays, MapPin, UserRound } from 'lucide-react'
import React, { memo } from 'react'

interface CardExperienceProps {
  title?: string
  list: Readonly<Array<string>>
  company: string
  position: string
  time: string
  location: string
  techTitle: string
  techUsed: string
}

const CardExperience = ({
  company,
  techTitle,
  techUsed,
  location,
  list,
  position,
  time,
  title,
}: Readonly<CardExperienceProps>) => {
  return (
    <div className="mb-8">
      {title && (
        <h1 className="lg:text-2xl text-lg font-extrabold mb-4 text-black">
          {title}
        </h1>
      )}

      <div
        className="
          relative
          bg-white
          border-[4px] border-black
          rounded-xl
          shadow-[6px_6px_0_0_#000]
          p-5 lg:p-6
          transition
          hover:translate-x-1 hover:translate-y-1 hover:shadow-none
        "
      >
        {/* Halftone overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:14px_14px] opacity-[0.06] pointer-events-none rounded-xl" />

        <div className="relative z-10">
          {/* Header */}
          <div className="lg:flex sm:flex justify-between items-start xs:grid sm:grid-cols-2 gap-4">
            <div className="xs:col-span-2">
              <p className="text-lg lg:text-xl font-extrabold text-black flex items-center gap-2">
                <Building />
                {company}
              </p>

              <p className="mt-2 text-sm lg:text-base font-semibold text-gray-800 flex items-center gap-2">
                <UserRound />
                {position}
              </p>
            </div>

            <div className="xs:col-span-2 lg:text-right">
              <p className="text-xs lg:text-sm text-gray-700 flex items-center gap-2 lg:justify-end">
                <CalendarDays size={18} />
                {time}
              </p>
              <p className="mt-1 text-xs lg:text-sm text-gray-700 flex items-center gap-2 lg:justify-end">
                <MapPin size={18} />
                {location}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-4 border-t-[3px] border-black" />

          {/* Description */}
          <ul className="list-disc ml-5 space-y-1 text-sm lg:text-base text-black font-medium">
            {list.map((description) => (
              <li key={description}>{description}</li>
            ))}
          </ul>

          {/* Tech */}
          <div className="mt-5 bg-yellow-100 border-[3px] border-black rounded-md p-3">
            <p className="font-extrabold text-sm lg:text-base mb-4 text-black">
              {techTitle}
            </p>
            <p className="font-semibold comic-chip text-left text-sm lg:text-base underline">
              « {techUsed}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(CardExperience)
