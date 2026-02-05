import Container from '../components/Container.jsx'
import Button from '../components/Button.jsx'

export default function CTA() {
  return (
    <section id="contact" className="border-t border-slate-200 bg-slate-900 text-white">
      <Container className="py-14">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Ready to get your device fixed?</h2>
            <p className="mt-3 text-white/70">
              Leave your email and we’ll reach out with a demo / onboarding details.
            </p>
          </div>

          <form className="rounded-2xl bg-white/5 p-6">
            <label className="text-xs text-white/70">Your email</label>
            <input
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-white/40"
              placeholder="name@company.com"
            />
            <Button
              type="button"
              variant="secondary"
              className="mt-4 w-full rounded-xl bg-white text-slate-900 hover:bg-slate-100"
            >
              Request demo
            </Button>
            <p className="mt-3 text-xs text-white/60">Replace this with your actual CTA flow.</p>
          </form>
        </div>
      </Container>
    </section>
  )
}
