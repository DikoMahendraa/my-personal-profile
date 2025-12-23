const Footer = () => {
  return (
    <footer
      className="
        relative
        w-full
        mt-12
        mb-6
        flex
        justify-center
      "
    >
      <div
        className="
          bg-white
          border-[4px] border-black
          rounded-lg
          shadow-[6px_6px_0_0_#000]
          px-6
          py-4
          text-center
        "
      >
        {/* Halftone */}
        <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:14px_14px] opacity-[0.05] pointer-events-none rounded-lg" />

        <p className="relative z-10 text-black text-xs lg:text-sm font-extrabold">
          © {new Date().getFullYear()} NEXT.
          <span className="mx-1">MADE WITH</span>
          <span className="text-red-500 mx-1">❤️</span>
          USING NEXT.JS APP DIR
        </p>
      </div>
    </footer>
  )
}

export default Footer
