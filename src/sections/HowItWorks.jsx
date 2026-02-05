import Container from '../components/Container.jsx'

const steps = [
  { title: 'Tell us your issue', desc: 'Select brand/model and describe the problem.' },
  { title: 'Get a quotation', desc: 'Transparent pricing from verified service partners.' },
  { title: 'Pickup & repair', desc: 'Pickup scheduled, repair starts, updates shared.' },
  { title: 'Delivery & invoice', desc: 'Delivered back with invoice + service history.' },
]

export default function HowItWorks() {
  return (
    <section id="how" className="border-t border-slate-200 bg-white">
      <Container className="py-14">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Fix your device in a few simple steps</h2>
          <p className="mt-3 text-slate-600">A clear workflow that keeps users confident at every stage.</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, idx) => (
            <div key={s.title} className="rounded-2xl border border-slate-200 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-800">
                  {idx + 1}
                </div>
                <div className="text-base font-semibold">{s.title}</div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
