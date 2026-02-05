import Container from '../components/Container.jsx'
import Button from '../components/Button.jsx'

const plans = [
  {
    name: 'Basic',
    price: 'Free',
    desc: 'For customers trying ThikHolo.',
    items: ['Request quotation', 'Pickup scheduling', 'Status tracking'],
    cta: 'Start free',
    variant: 'secondary',
  },
  {
    name: 'Plus',
    price: '৳199/mo',
    desc: 'Best for frequent users.',
    items: ['Priority support', 'Faster matching', 'Discount coupons'],
    cta: 'Choose Plus',
    variant: 'brand',
    featured: true,
  },
  {
    name: 'Partner',
    price: 'Custom',
    desc: 'For shops & service centers.',
    items: ['Shop dashboard', 'Order management', 'Ratings & verification'],
    cta: 'Become partner',
    variant: 'secondary',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t border-slate-200 bg-slate-50/60">
      <Container className="py-14">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Pricing</h2>
          <p className="mt-3 text-slate-600">Simple options for customers and partners.</p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={
                'rounded-2xl border bg-white p-6 shadow-sm ' +
                (p.featured ? 'border-brand-200 ring-1 ring-brand-200/40' : 'border-slate-200')
              }
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-base font-semibold">{p.name}</div>
                  <div className="mt-1 text-sm text-slate-600">{p.desc}</div>
                </div>
                {p.featured ? (
                  <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-800">Popular</span>
                ) : null}
              </div>

              <div className="mt-5 text-3xl font-semibold tracking-tight">{p.price}</div>

              <ul className="mt-5 grid gap-2 text-sm text-slate-700">
                {p.items.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-500" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>

              <Button variant={p.variant} className="mt-6 w-full">
                {p.cta}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
