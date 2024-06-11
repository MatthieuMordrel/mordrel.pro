'use client'
import { HeartHandShake } from '@/app/data/Icons'
import { TypewriterEffectSmooth } from '@/app/ui/Effects/TypeWriter'
import Link from 'next/link'
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: 'Write the future of your company'
    },
    {
      text: 'today.',
      className: 'text-techPurple dark:text-techPurple'
    }
  ]
  return (
    <div className="flex h-[30rem] flex-col items-center justify-center ">
      <div className="rounded-3xl border p-4 shadow-2xl">
        <HeartHandShake className="h-16 w-16 border-techPurple text-white " />
      </div>
      {/* <p className="mt-2 text-xs text-neutral-600 sm:text-base dark:text-neutral-200">Contact us for an assessment of your situation</p> */}
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <Link
          href="/contact"
          className="flex h-10 w-40 items-center justify-center rounded-xl border border-transparent bg-black text-sm text-white dark:border-white"
        >
          Contact us
        </Link>
        <a
          href="mailto:matthieu@mordrel.pro"
          className="flex h-10 w-40 items-center justify-center rounded-xl border border-black bg-white text-sm text-black"
          target="_blank"
          rel="noopener noreferrer"
        >
          Send a mail
        </a>
      </div>
    </div>
  )
}
