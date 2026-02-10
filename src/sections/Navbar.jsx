import { useState } from 'react'
import Container from '../components/Container.jsx'
import Button from '../components/Button.jsx'
import { Assets } from '../assets'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'How it works', href: '#how' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={Assets.logoVariant} alt="ThikHolo" className="h-16 md:h-20 w-auto"/>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} className="text-sm font-medium text-slate-700 hover:text-slate-900" href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="secondary" as="a" href="#footer">
            Contact
          </Button>
          <Button variant="brand" as="a" href="#get-started">
            Download
          </Button>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-700 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path
              strokeWidth="2"
              strokeLinecap="round"
              d={open ? 'M6 6l12 12M18 6l-12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </Container>

      {open ? (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <Container className="py-4">
            <div className="grid gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  href={l.href}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-3">
                <Button variant="secondary" as="a" href="#contact" onClick={() => setOpen(false)}>
                  Contact
                </Button>
                <Button variant="brand" as="a" href="#get-started" onClick={() => setOpen(false)}>
                  Sign Up
                </Button>
              </div>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  )
}
