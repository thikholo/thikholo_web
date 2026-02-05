import Container from '../components/Container.jsx'
import { Assets } from '../assets'

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <Container className="py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <img src={Assets.logoInverseSmall} alt="ThikHolo" className="h-10 w-auto" />
          <div className="text-xs text-white/60">© {new Date().getFullYear()} ThikHolo. All rights reserved.</div>
        </div>
      </Container>
    </footer>
  )
}
