import Container from "../components/Container.jsx";
import { Link } from "react-router-dom";

export default function TermsCondition() {
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
            Terms &amp; Conditions
          </h1>
          <div className="mt-2 text-sm text-slate-500">Last updated: 11-02-2026</div>

          <div className="mt-8 space-y-6 text-slate-700">
            <IntroCard />

            <Section title="1) Platform Overview & Scope of Service">
              <SubTitle>1.1 Nature of ThikHolo</SubTitle>
              <Bullets
                items={[
                  "ThikHolo is an online service facilitation platform.",
                  "ThikHolo connects users with verified third-party technicians and service vendors.",
                  "ThikHolo itself is not a manufacturer or brand-authorized service center, unless explicitly stated.",
                ]}
              />
              <SubTitle className="mt-5">1.2 Services Covered</SubTitle>
              <Bullets
                items={[
                  "Smartphone repair",
                  "Tablet, laptop, and PC repair",
                  "Diagnostics and inspection",
                  "Pickup & drop-off logistics",
                  "Device resale or post-service listing (Device Bank)",
                ]}
              />
            </Section>

            <Section title="2) User Eligibility & Responsibilities">
              <SubTitle>2.1 Eligibility</SubTitle>
              <Bullets items={["Users must be 18 years or older or have guardian consent.", "Users must be the legal owner of the device or have authorization from the owner."]} />
              <SubTitle className="mt-5">2.2 User Declarations</SubTitle>
              <p className="mt-2 text-sm leading-relaxed">
                By submitting a service request, the user confirms the device is not stolen/lost/under dispute, information provided is accurate, and they understand repairs may involve opening/replacing/modifying components.
              </p>
            </Section>

            <Section title="3) Full Device Condition Disclosure">
              <SubTitle>3.1 Mandatory Disclosure by User</SubTitle>
              <p className="mt-2 text-sm leading-relaxed">
                Users must disclose before handover: existing physical damage, water exposure, previous repair/modifications, battery/overheating issues, and any network/IMEI/software locks.
              </p>
              <SubTitle className="mt-5">3.2 Hidden or Undisclosed Issues</SubTitle>
              <Bullets items={["ThikHolo and its vendors are not responsible for faults discovered after opening the device.", "Revised quotations may apply if additional issues are identified."]} />
            </Section>

            <Section title="4) Data Privacy, Storage & Loss Disclaimer">
              <SubTitle>4.1 User Data Responsibility</SubTitle>
              <Bullets items={["Users are strongly advised to back up all data before service.", "ThikHolo is not liable for data loss, corruption, or leakage during repair."]} />
              <SubTitle className="mt-5">4.2 Access & Testing</SubTitle>
              <Bullets items={["Technicians may access device functions strictly for diagnostic and testing purposes.", "No personal data will be intentionally copied or retained."]} />
            </Section>

            <Section title="5) Pickup, Drop-off & Logistics">
              <Bullets
                items={[
                  "Pickup and drop services are subject to availability and service area coverage.",
                  "Transit time may vary due to traffic, weather, or third-party logistics delays.",
                  "Devices are handled with care; however, minor cosmetic wear may occur.",
                  "Liability during transit is limited to the declared condition at handover.",
                ]}
              />
            </Section>

            <Section title="6) Diagnostics, Repair & Approval Process">
              <Bullets
                items={[
                  "Initial quotes are tentative; final pricing is confirmed after physical inspection.",
                  "No repair will proceed without explicit user approval.",
                  "If the user declines repair after inspection, diagnostic or logistics fees may apply.",
                ]}
              />
            </Section>

            <Section title="7) Repair Outcome & Risk Acceptance">
              <Bullets
                items={[
                  "Repairs are conducted on a best-effort basis.",
                  "Some devices may be beyond economical or technical repair.",
                  "Devices with prior damage/water exposure/aftermarket parts carry higher failure risk.",
                  "ThikHolo is not liable for sudden device death after repair, manufacturer defects, or software/firmware limitations.",
                ]}
              />
            </Section>

            <Section title="8) Spare Parts & Components">
              <Bullets
                items={[
                  "Spare parts may be original (when available), OEM-grade, or high-quality compatible alternatives.",
                  "Color tone/brightness/performance may vary slightly in non-original parts.",
                ]}
              />
            </Section>

            <Section title="9) Warranty & Post-Service Support">
              <Bullets
                items={[
                  "Limited service warranty applies only to the replaced part.",
                  "Warranty does not cover physical damage, water damage, power surge, or misuse.",
                  "Warranty becomes void if device is opened by a third party, software is altered post-repair, or physical/liquid damage occurs.",
                ]}
              />
            </Section>

            <Section title="10) Payments, Pricing & Refunds">
              <Bullets
                items={[
                  "Prices are inclusive/exclusive of VAT as stated.",
                  "Emergency/express services may incur additional charges.",
                  "Diagnostic and pickup fees are non-refundable.",
                  "Refunds apply only if repair was approved and not performed, or payment was taken in error.",
                ]}
              />
            </Section>

            <Section title="11) Device Selling & Device Bank (If Applicable)">
              <Bullets
                items={[
                  "Users may opt to sell serviced devices on the platform; resale price/time is not guaranteed.",
                  "Users must remove accounts and personal data before sale.",
                ]}
              />
            </Section>

            <Section title="12) Vendor Responsibility & Platform Limitation">
              <Bullets
                items={[
                  "Repairs are performed by independent vendors; ThikHolo acts as a facilitator.",
                  "Maximum liability shall not exceed the amount paid for the specific service.",
                ]}
              />
            </Section>

            <Section title="13) Prohibited Use & Account Termination">
              <p className="text-sm leading-relaxed">
                Users must not submit fraudulent/stolen devices, abuse staff/technicians, or manipulate ratings/reviews. ThikHolo may suspend/terminate accounts without notice.
              </p>
            </Section>

            <Section title="14) Legal Compliance & Governing Law">
              <Bullets
                items={[
                  "These terms are governed by the laws of Bangladesh.",
                  "Any disputes shall be subject to the exclusive jurisdiction of Bangladeshi courts.",
                ]}
              />
            </Section>

            <Section title="15) Acceptance & Consent">
              <p className="text-sm leading-relaxed">
                By submitting a service request or handing over a device, the user confirms understanding of risks, acceptance of these Terms & Conditions, and consent to proceed with diagnostics and repair.
              </p>
            </Section>
          </div>
        </div>
      </Container>
    </section>
  );
}

function IntroCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-[#F8F9FC] p-6">
      <p className="text-sm leading-relaxed">
        These Full Disclosure and Terms & Conditions (“T&amp;C”) govern the use of ThikHolo’s online
        smartphone and electronics repair platform, including its website, mobile application,
        pickup &amp; drop services, and any related services.
      </p>
      <p className="mt-3 text-sm leading-relaxed">
        By placing a service request, selling a device, or using any feature of ThikHolo, the customer
        (“User”) confirms they have read, understood, and agreed to these terms.
      </p>
    </div>
  );
}

function Section({ title, children }) {
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
