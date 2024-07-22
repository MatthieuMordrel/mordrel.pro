import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-16 bg-paneGrey py-6">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:gap-0">
        <p className="text-sm">&copy; 2024 Matthieu Mordrel. All rights reserved.</p>
        <nav className="flex items-center gap-4">
          <a href="mailto:matthieu@mordrel.pro" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
            matthieu@mordrel.pro
          </a>
          <span className="text-sm">|</span>
          <Link href="/pricing#FAQ" className="text-sm hover:underline" prefetch={false}>
            FAQ
          </Link>
          <span className="text-sm">|</span>
          <Link href="/contact" className="text-sm hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  )
}
