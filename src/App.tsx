import { useState, type ReactElement } from 'react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4'

function Logo(): ReactElement {
  return (
    <svg width="18" height="18" viewBox="0 0 256 256" fill="none" aria-hidden="true">
      <path
        fill="rgb(84, 84, 84)"
        d="M 160 88 L 194 34 L 216 0 L 256 0 L 256 40 L 221.5 93.5 L 200 128 L 256 128 L 256 256 L 96 256 L 96 168 L 64.246 220 L 40 256 L 0 256 L 0 216 L 34 162 L 56 128 L 0 128 L 0 0 L 160 0 Z"
      />
    </svg>
  )
}

const navigation = ['Story', 'Products', 'Help', 'Support']

export default function App(): ReactElement {
  const [videoReady, setVideoReady] = useState(false)

  return (
    <main className="hero-shell relative min-h-screen overflow-hidden bg-[#f0f0ee]">
      <div className="hero-fallback absolute inset-0" aria-hidden="true" />
      <video
        className={`hero-video absolute inset-0 h-full w-full object-cover ${videoReady ? 'is-ready' : ''}`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
        onCanPlay={() => setVideoReady(true)}
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>
      <div className="hero-shade absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <nav className="flex items-center justify-center gap-2 px-4 pt-4 sm:gap-3 sm:px-8 sm:pt-6" aria-label="Main navigation">
          <a
            href="#home"
            aria-label="OG Concepts home"
            className="brand-mark flex h-10 w-10 shrink-0 items-center justify-center rounded-full sm:h-11 sm:w-11"
          >
            <Logo />
          </a>

          <div className="nav-pill flex items-center gap-4 rounded-xl px-4 py-2.5 sm:gap-10 sm:px-8 sm:py-3">
            <span className="brand-name mr-1 hidden text-[10px] font-bold tracking-[0.18em] text-gray-800 sm:inline">
              OG CONCEPTS
            </span>
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
          <div className="hero-copy max-w-sm">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/65 px-3 py-1.5 shadow-sm backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              <span className="text-[9px] font-bold tracking-[0.2em] text-gray-700">OG CONCEPTS</span>
              <span className="text-[9px] text-gray-400">/</span>
              <span className="text-[9px] font-semibold tracking-[0.16em] text-gray-600">ADVERTISEMENT</span>
            </div>

            <a
              href="https://www.youtube.com/results?search_query=Shark+Tank+India+prosthetics"
              target="_blank"
              rel="noreferrer"
              className="group mb-3 inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-blue-600 transition-colors hover:text-blue-700"
            >
              Seen on Shark Tank in India
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </a>

            <h1
              id="hero-heading"
              className="mb-3 text-[1.75rem] font-semibold leading-[1.08] tracking-[-0.045em] text-gray-950 sm:text-[2.65rem] lg:text-[3.15rem]"
            >
              Simple, smart prosthetics made for people who keep fighting.
            </h1>

            <p className="mb-5 text-[14px] font-medium text-gray-700 sm:text-[15px]">
              Reclaim your movement now.
            </p>

            <a
              href="#fitting"
              className="hero-cta group inline-flex items-center gap-2 rounded-full border border-blue-500 px-6 py-3 text-[13px] font-semibold text-blue-600 transition-all duration-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
            >
              Try a free fitting
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </a>

            <p className="mt-5 text-[9px] font-medium tracking-[0.17em] text-gray-600/90">
              A FEATURED BRAND PRESENTATION BY OG CONCEPTS
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
