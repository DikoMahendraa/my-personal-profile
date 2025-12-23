import React, { memo } from 'react'
import Image from 'next/image'
import { AtSign, Github, NotebookPen, Phone } from 'lucide-react'
import Link from 'next/link'
import ButtonDownload from './ButtonDownload'

const Profile = () => {
  return (
    <div className="w-full flex justify-center mt-12 px-4">
      <div
        className="
          w-full max-w-5xl
          bg-yellow-100 dark:bg-yellow-300
          border-[4px] border-black
          rounded-xl
          shadow-[8px_8px_0_0_#000]
          p-6 lg:p-10
          relative
        "
      >
        {/* Halftone background */}
        <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:12px_12px] opacity-10 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10">
          <div className="flex gap-6 items-center mb-8">
            {/* Avatar */}
            <div className="relative hidden lg:block w-[14rem] h-[14rem] overflow-hidden border-[4px] border-black rounded-lg bg-white">
              <Image
                src="/me.jpg"
                alt="image-profile"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Intro */}
            <div>
              <p className="mb-4 text-black lg:text-5xl text-4xl font-extrabold leading-tight">
                Hi! I’m <br />
                <span className="uppercase text-red-600">
                  Diko Mahendra
                </span>
              </p>

              {/* Contacts */}
              <div className="space-y-2 text-black font-medium">
                <p className="flex items-center gap-2 hover:translate-x-1 transition">
                  <Phone size={18} />
                  <a target="_blank" href="https://wa.me/082384898030">
                    082384898030
                  </a>
                </p>

                <p className="flex items-center gap-2 hover:translate-x-1 transition">
                  <NotebookPen size={18} />
                  <a
                    target="_blank"
                    href="https://diko-dev99.medium.com/"
                  >
                    Medium Articles
                  </a>
                </p>

                <p className="flex items-center gap-2 hover:translate-x-1 transition">
                  <AtSign size={18} />
                  <a
                    target="_blank"
                    href="mailto:diko.dev99@gmail.com"
                  >
                    diko.dev99@gmail.com
                  </a>
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-4 mt-6">
                <ButtonDownload />

                <Link
                  target="_blank"
                  href="https://github.com/DikoMahendraa"
                  className="
                    bg-black text-white
                    border-[3px] border-black
                    px-4 py-2
                    rounded-md
                    shadow-[4px_4px_0_0_#000]
                    hover:translate-x-1 hover:translate-y-1 hover:shadow-none
                    transition
                  "
                >
                  <Github />
                </Link>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="text-black text-sm lg:text-base space-y-3 font-medium">
            <p>
              🔭 Looking for Fullstack Developer (Frontend Focus)
              <br />
              🤝 Learning with ChatGPT, Docs, Claude & DeepSeek
              <br />
              🌱 Improving website performance
              <br />
              ⚡ Fun fact: Cat person 🐈
            </p>

            <p>
              Frontend Developer with 5+ years of experience in JavaScript,
              TypeScript, and Python. I turn ideas into bold, interactive web
              experiences with a focus on usability and performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Profile)
