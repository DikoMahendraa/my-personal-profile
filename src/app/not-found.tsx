import { ArrowLeft, NotepadText } from 'lucide-react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="comic-panel p-10 text-center max-w-md w-full">
        {/* ICON */}
        <div className="flex justify-center mb-6 text-cyan-300/70">
          <NotepadText size={96} strokeWidth={1.5} />
        </div>

        {/* TITLE */}
        <h1 className="text-3xl font-extrabold uppercase tracking-wide mb-3 text-gray-800 dark:text-white">
          Page Not Found
        </h1>

        {/* DESCRIPTION */}
        <p className="text-base text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          Oops! <br />
          You’ve stumbled upon an <b>unwritten comic panel</b>.
        </p>

        {/* ACTION */}
        <Link
          href="/"
          className="comic-button inline-flex justify-center mx-auto"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
