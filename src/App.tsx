import type { ReactElement } from 'react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4'

function Logo(): ReactElement {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 256 256"
      fill="none"
      aria-hidden="true"
    >
      <path
        fill="rgb(84, 84, 84)"
        d="M 160 88 L 194 34 L 216 0 L 256 0 L 256 40 L 221.5 93.5 L 200 128 L 256 128 L 256 256 L 96 256 L 96 168 L 64.246 220 L 40 256 L 0 256 L 0 216 L 34 162 L 56 128 L 0 128 L 0 0 L 160 0 Z"
      />
    </svg>
  )
}

const navigation = ['Story', 'Products', 'Help', 'Support']

export default function App(): ReactElement {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f0f0ee]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      <div className="relative z-10 flex min-h-screen flex-col">
        <nav className="flex items-center justify-center gap-2 px-4 pt-4 sm:gap-3 sm:px-8 sm:pt-6" aria-label="Main navigation">
          <a
            href="#home"
            aria-label="Home"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full sm:h-11 sm:w-11"
            style={{ backgroundColor: '#EDEDED' }}
          >
            <Logo />
          </a>

          <div
            className="flex items-center gap-4 rounded-xl px-4 py-2.5 sm:gap-10 sm:px-8 sm:py-3"
            style={{ backgroundColor: '#EDEDED' }}
          >
            {navigation.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[12px] font-medium text-gray-700 transition-colors duration-200 hover:text-gray-900 sm:text-[14px]"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

        <section
          id="home"
          className="flex flex-1 items-end px-6 pb-10 sm:px-12 sm:pb-16 md:px-20 lg:px-28 lg:pb-20"
          aria-labelledby="hero-heading"
        >
          <div className="max-w-xs">
            <a
              href="https://www.youtube.com/results?search_query=Shark+Tank+India+prosthetics"
              target="_blank"
              rel="noreferrer"
              className="group mb-3 inline-flex items-center gap-1.5 text-[11.5px] font-medium text-blue-500 transition-colors hover:text-blue-600"
            >
              Seen on Shark Tank in India
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </a>

            <h1
              id="hero-heading"
              className="mb-3 text-[1.5rem] font-medium leading-[1.15] tracking-tight text-gray-900 sm:text-[1.75rem]"
            >
              Simple, smart prosthetics made for people who keep fighting.
            </h1>

            <p className="mb-3 text-[13px] font-normal text-gray-400">
              Reclaim your movement now.
            </p>

            <a
              href="#fitting"
              className="group inline-flex items-center gap-2 rounded-full border border-blue-400 px-5 py-2.5 text-[13px] font-medium text-blue-500 transition-all duration-200 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
            >
              Try a free fitting
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}