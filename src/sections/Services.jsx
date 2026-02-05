import Container from '../components/Container.jsx'
import Button from '../components/Button.jsx'
import { Assets } from '../assets'

const cards = [
  { title: 'Phone Repair', desc: 'Screen, battery, charging, camera, speaker issues.', img: Assets.photoCard1 },
  { title: 'Laptop Repair', desc: 'OS install, SSD/RAM upgrade, keyboard, motherboard.', img: Assets.photoCard2 },
  { title: 'Device Exchange', desc: 'Sell or exchange your used device for best value.', img: Assets.photoMain },
  { title: 'Verified Shops', desc: 'Only verified partners with ratings and service history.', img: Assets.photoPortrait },
]

export default function Services() {
  return (
    <section id="services" className="border-t border-slate-200 bg-slate-50/60">
      <Container className="py-14">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Services designed for speed</h2>
          <p className="mt-3 text-slate-600">
            Choose a category, get a quotation, confirm pickup — and track everything from your dashboard.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div key={c.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="h-40 bg-slate-100">
                <img src={c.img} alt={c.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <div className="text-base font-semibold">{c.title}</div>
                <div className="mt-1 text-sm text-slate-600">{c.desc}</div>
                <Button variant="secondary" className="mt-4 w-full">
                  Explore
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
