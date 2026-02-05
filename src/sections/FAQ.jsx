import Container from '../components/Container.jsx'

const faqs = [
  {
    q: 'How do I submit a quotation?',
    a: 'Choose the service, describe the issue, and submit. You will receive a quotation and next steps.',
  },
  {
    q: 'Can I negotiate the quote?',
    a: 'If negotiation is enabled for that service partner, you can counter-offer before confirming.',
  },
  {
    q: 'Do you provide invoices & history?',
    a: 'Yes — every job is tracked with invoice and service history for transparency.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="border-t border-slate-200 bg-white">
      <Container className="py-14">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">FAQ</h2>

        <div className="mt-8 grid gap-4 md:max-w-3xl">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-slate-200 p-5">
              <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">
                {f.q}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  )
}
