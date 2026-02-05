import Container from '../components/Container.jsx'
import Button from '../components/Button.jsx'
import Badge from '../components/Badge.jsx'
import { Assets } from '../assets'

function Select({ label, options = ['Select'], defaultValue }) {
  return (
    <label className="grid gap-1">
      <span className="text-xs font-semibold text-slate-700">{label}</span>
      <select
        defaultValue={defaultValue ?? options[0]}
        className="h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-200/70"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50 via-white to-white" />
      <div className="pointer-events-none absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-brand-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-12 h-[520px] w-[520px] rounded-full bg-slate-200/70 blur-3xl" />

      <Container className="grid items-center gap-10 py-12 md:grid-cols-2 md:py-16">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="border-brand-200 bg-brand-50 text-brand-800">Trusted technicians</Badge>
            <Badge>Pickup & delivery</Badge>
            <Badge>Transparent quotations</Badge>
          </div>

          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Repair, buy & exchange —
            <span className="text-brand-700"> all from one place</span>.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
            ThikHolo helps people book repair services, get clear quotations, and track pickup-to-delivery in real time.
          </p>

          <div id="get-started" className="mt-7 rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
            <div className="grid gap-3 sm:grid-cols-3">
              <Select label="Brand" options={['Apple', 'Samsung', 'Xiaomi', 'Vivo', 'Oppo']} defaultValue="Apple" />
              <Select label="Model" options={['iPhone 15', 'iPhone 14', 'iPhone 13', 'iPhone 12']} defaultValue="iPhone 14" />
              <Select label="Area" options={['Dhaka', 'Chattogram', 'Sylhet', 'Khulna']} defaultValue="Dhaka" />
            </div>

            <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
              <label className="grid gap-1">
                <span className="text-xs font-semibold text-slate-700">Issue</span>
                <input
                  placeholder="Example: Screen broken, battery draining..."
                  className="h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-200/70"
                />
              </label>

              <Button variant="brand" className="h-11 rounded-2xl px-6">
                Get quotation
              </Button>
            </div>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-xs text-slate-500">
                Average response: <span className="font-semibold text-slate-700">within 30 minutes</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-slate-500">Pay with</span>
                <img src={Assets.payVisa} alt="Visa" className="h-6 w-auto" />
                <img src={Assets.payNagad} alt="Nagad" className="h-6 w-auto" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-brand-200/35 via-white to-slate-200/55 blur-2xl" />
          <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-soft">
            <img src={Assets.hero} alt="ThikHolo hero" className="h-auto w-full object-cover" />
          </div>
        </div>
      </Container>
    </section>
  )
}
