import Container from "../components/Container.jsx";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <section className="bg-white">
      <Container className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
        >
          ← Back to Home
        </Link>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl mt-10">
            Privacy Policy
          </h1>
          <div className="mt-2 text-sm text-slate-500">Last updated: 11-02-2026</div>

          <div className="mt-8 space-y-8 text-slate-700">
            <div className="rounded-2xl border border-slate-200 bg-[#F8F9FC] p-6">
              <p className="text-sm leading-relaxed">
                ThikHolo (“ThikHolo”, “we”, “us”) respects your privacy. This Privacy Policy explains
                what information we collect, how we use it, how we share it, and the choices you have
                when you use our website, mobile app, pickup & delivery services, and related features
                (together, the “Services”).
              </p>
              <p className="mt-3 text-sm leading-relaxed">
                ThikHolo is an online service facilitation platform that connects users with verified
                third-party technicians/service vendors and logistics partners.
              </p>
            </div>

            <PolicySection title="1) Information We Collect">
              <SubTitle>A) Information you provide</SubTitle>
              <Bullets
                items={[
                  "Contact info: name, phone number, email address, address/area (for pickup & delivery).",
                  "Service request info: device type, brand, model, issue description, preferred schedule, and any notes you submit.",
                  "Device condition details: damage history, repairs, modifications, and other condition disclosures.",
                  "Communications: messages you send to us (support emails, chats, call notes), and feedback/ratings where applicable.",
                ]}
              />

              <SubTitle className="mt-5">B) Device/service-related information (for repair workflow)</SubTitle>
              <Bullets
                items={[
                  "Diagnostic details: inspection notes, test results, service history, quotation and approval records.",
                  "Device identifiers (only when needed): e.g., IMEI/serial number, lock status, network/software details—when relevant for verification and repair processing.",
                  "Photos/videos (if applicable): device condition images for documentation, handover proof, and dispute prevention.",
                ]}
              />

              <SubTitle className="mt-5">C) Automatically collected information</SubTitle>
              <Bullets
                items={[
                  "Usage data: pages/screens viewed, actions taken, timestamps, and error logs.",
                  "Device/app data: approximate device info (OS, browser/app version), IP address, and basic analytics.",
                  "Cookies/Similar tech (web): for essential site functions, security, and performance.",
                ]}
              />

              <SubTitle className="mt-5">D) Third-party platforms you use to contact us</SubTitle>
              <p className="mt-2 text-sm leading-relaxed">
                If you contact us via Facebook/Messenger or other platforms, the content is also subject
                to that platform’s own privacy policy.
              </p>
            </PolicySection>

            <PolicySection title="2) How We Use Your Information">
              <Bullets
                items={[
                  "Provide and manage services: create service requests, arrange pickup & delivery, generate quotations, obtain approvals, and track service progress.",
                  "Connect you with vendors/technicians: share required details so a verified partner can inspect and repair your device (best-effort basis).",
                  "Communicate with you: updates, confirmations, support replies, and service notifications.",
                  "Improve and secure the platform: fraud prevention, abuse prevention, debugging, and performance analytics.",
                  "Compliance: meet legal/regulatory requirements when applicable.",
                ]}
              />
            </PolicySection>

            <PolicySection title="3) Device Access & Personal Data on Your Device">
              <p className="text-sm leading-relaxed">
                During diagnostics and repair, technicians may need to access device functions strictly
                for diagnostic/testing purposes. We do not intentionally copy or retain personal files.
              </p>
              <p className="mt-2 text-sm leading-relaxed">
                Please back up your data before handing over a device. ThikHolo is not liable for data
                loss, corruption, or leakage during repair, as stated in your terms.
              </p>
            </PolicySection>

            <PolicySection title="4) When We Share Information">
              <Bullets
                items={[
                  "Verified technicians/service vendors (to inspect, quote, repair, and provide warranty support).",
                  "Logistics partners (to complete pickup & drop-off, with necessary contact/location details).",
                  "Payment providers (if you pay digitally; we typically receive confirmation, not full card/mobile wallet details).",
                  "Customer support tools (ticketing/CRM systems, email providers).",
                  "Legal or safety reasons: to comply with law, enforce terms, or protect users and the platform.",
                ]}
              />
              <p className="mt-2 text-sm leading-relaxed">We do not sell your personal information.</p>
            </PolicySection>

            <PolicySection title="5) Data Retention">
              <p className="text-sm leading-relaxed">
                We keep your information only as long as needed to provide the Services, maintain service
                records/history and invoices, handle disputes/warranty issues, and meet legal/accounting
                obligations. Retention periods may vary depending on service type and legal requirements.
              </p>
            </PolicySection>

            <PolicySection title="6) Security">
              <p className="text-sm leading-relaxed">
                We use reasonable safeguards to protect your information. However, no method of transmission
                or storage is 100% secure.
              </p>
            </PolicySection>

            <PolicySection title="7) Your Choices & Rights">
              <Bullets
                items={[
                  "Access the information we hold about you",
                  "Correct inaccurate info",
                  "Delete certain information (where applicable)",
                  "Withdraw consent for optional communications/marketing",
                  "Close your account (if accounts are supported)",
                ]}
              />
              <p className="mt-2 text-sm leading-relaxed">
                To request any of these, contact us using the details below.
              </p>
            </PolicySection>

            <PolicySection title="8) Children’s Privacy">
              <p className="text-sm leading-relaxed">
                Our Services are intended for users who are 18+ or have guardian consent. If we learn we
                collected personal data from a child without appropriate consent, we will take steps to
                delete it where reasonably possible.
              </p>
            </PolicySection>

            <PolicySection title="9) International Data Transfers">
              <p className="text-sm leading-relaxed">
                If we use service providers that process data outside Bangladesh, we take reasonable steps
                to ensure appropriate safeguards are in place.
              </p>
            </PolicySection>

            <PolicySection title="10) Changes to This Policy">
              <p className="text-sm leading-relaxed">
                We may update this Privacy Policy from time to time. We will update the “Last updated” date
                and, when appropriate, notify users through the platform.
              </p>
            </PolicySection>

            <PolicySection title="11) Contact Us">
              <div className="text-sm leading-relaxed">
                <div>Email: thikholo.live@gmail.com</div>
                <div>Facebook Page: ThikHolo</div>
                <div>Phone: +8801738588006</div>
                <div>
                  Address: Rifles Square, Shimanto Shambhar Mall. Level 3. Shop 3053. Jigatola. Dhanmondi, Dhaka.
                </div>
              </div>
            </PolicySection>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* --- small helpers --- */
function PolicySection({ title, children }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <h2 className="text-base font-bold text-slate-900">{title}</h2>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function SubTitle({ children, className = "" }) {
  return <div className={`text-sm font-semibold text-slate-900 ${className}`}>{children}</div>;
}

function Bullets({ items }) {
  return (
    <ul className="mt-2 grid gap-2 text-sm leading-relaxed">
      {items.map((t) => (
        <li key={t} className="flex gap-2">
          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-slate-400" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}
