import React from 'react'

const Section = ({ id, title, tagline, children }) => (
  <section id={id} className="scroll-mt-24 py-16 md:py-24">
    <div className="mx-auto max-w-6xl px-4">
      <div className="mb-8 md:mb-10">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">{title}</h2>
        {tagline && <p className="mt-2 text-slate-600">{tagline}</p>}
      </div>
      {children}
    </div>
  </section>
)

const Card = ({ children }) => (
  <div className="rounded-2xl border border-slate-200/80 bg-white shadow-sm shadow-slate-100 hover:shadow-md transition-shadow">{children}</div>
)

const Jargon = ({ term, definition }) => (
  <abbr title={definition} className="cursor-help underline decoration-dotted underline-offset-2 font-semibold text-slate-800">
    {term}
  </abbr>
)

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">{children}</span>
)

const CheckRow = ({ children }) => (
  <li className="flex gap-3">
    <span aria-hidden className="mt-1 h-5 w-5 shrink-0 rounded-full bg-emerald-100 text-emerald-700 grid place-items-center">✓</span>
    <span>{children}</span>
  </li>
)

const XRow = ({ children }) => (
  <li className="flex gap-3">
    <span aria-hidden className="mt-1 h-5 w-5 shrink-0 rounded-full bg-rose-100 text-rose-700 grid place-items-center">✕</span>
    <span>{children}</span>
  </li>
)

const Anchor = ({ href, children }) => (
  <a href={href} className="font-medium text-sky-700 underline underline-offset-2 hover:text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-300 rounded-md" target="_blank" rel="noreferrer">
    {children}
  </a>
)

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-white text-slate-800 selection:bg-sky-200/60">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:shadow">Skip to content</a>

      <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#home" className="group inline-flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-xl bg-sky-600 text-white font-bold">VS</div>
            <span className="text-sm font-semibold tracking-tight text-slate-900 group-hover:text-sky-700">Vaccine Safety</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#why" className="hover:text-sky-700">Why vaccines</a>
            <a href="#safety" className="hover:text-sky-700">How safety works</a>
            <a href="#types" className="hover:text-sky-700">Vaccine types</a>
            <a href="#myths" className="hover:text-sky-700">Myths vs facts</a>
            <a href="#compare" className="hover:text-sky-700">Everyday comparisons</a>
            <a href="#resources" className="hover:text-sky-700">Resources</a>
          </nav>
          <a href="#resources" className="ml-4 inline-flex items-center rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-sky-700">Get trusted info</a>
        </div>
      </header>

      <main id="main">
        <section id="home" className="relative overflow-clip">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                Vaccines save lives. <span className="text-sky-700">Safety comes first.</span>
              </h1>
              <p className="mt-4 text-lg text-slate-700">
                This page explains vaccine safety in clear, everyday language. No jargon. When a technical term appears, you’ll see a helpful hint — like <Jargon term="herd immunity" definition="When many people are immune, germs struggle to spread, so even those who aren’t immune are protected." />.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#safety" className="inline-flex items-center rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-sky-700">See how safety is built in →</a>
                <a href="#myths" className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold hover:border-slate-400">Myths, solved</a>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Pill>Evidence-based</Pill>
                <Pill>Plain English</Pill>
                <Pill>UK-focused resources</Pill>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-10 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.15),transparent_60%)]" aria-hidden />
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900">What to expect after a jab</h3>
                  <ul className="mt-3 space-y-2 text-slate-700">
                    <CheckRow>Sore arm for a day or two (your immune system is practising).</CheckRow>
                    <CheckRow>Brief tiredness or mild fever — usually gone in 24–48 hours.</CheckRow>
                    <CheckRow>Serious side effects are very rare; staff are trained to treat them immediately.</CheckRow>
                  </ul>
                  <p className="mt-4 text-sm text-slate-600">If you have questions about your health or allergies, speak to your GP, pharmacist, or vaccine clinic.</p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <Section id="why" title="Why vaccines matter" tagline="Protection for you, and protection for the people around you">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <div className="p-6">
                <div className="text-sm font-semibold text-sky-700">Prevention first</div>
                <h3 className="mt-1 text-lg font-bold text-slate-900">Stop illness before it starts</h3>
                <p className="mt-2 text-slate-700">Vaccines prepare your immune system so it can fight off germs quickly. It’s like giving your body a <span className="font-medium">cheat sheet</span> before an exam.</p>
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <div className="text-sm font-semibold text-sky-700">Community benefit</div>
                <h3 className="mt-1 text-lg font-bold text-slate-900">Protect people at risk</h3>
                <p className="mt-2 text-slate-700">Some people can’t be vaccinated — like certain cancer patients. High uptake builds <Jargon term="herd immunity" definition="When enough people are immune, germs find it hard to spread, protecting those who can’t be vaccinated." /> to shield them.</p>
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <div className="text-sm font-semibold text-sky-700">Trust and transparency</div>
                <h3 className="mt-1 text-lg font-bold text-slate-900">Checked again and again</h3>
                <p className="mt-2 text-slate-700">From lab tests to large human trials, independent review, and ongoing monitoring, safety checks never stop.</p>
              </div>
            </Card>
          </div>
        </Section>

        <Section id="safety" title="How vaccine safety is built in" tagline="From the first idea to years after approval, multiple layers protect you">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900">The journey to approval</h3>
                <ol className="mt-3 list-decimal pl-5 space-y-2 text-slate-700">
                  <li><span className="font-semibold">Pre‑clinical:</span> Lab and animal studies check basic safety and dosing.</li>
                  <li><span className="font-semibold">Phase 1:</span> Small group of healthy volunteers — safety and side‑effect profile.</li>
                  <li><span className="font-semibold">Phase 2:</span> Hundreds of people — safety, dosing, and immune response.</li>
                  <li><span className="font-semibold">Phase 3:</span> Thousands of people — safety and how well it works (<Jargon term="efficacy" definition="How well a vaccine works in controlled clinical trials; ‘effectiveness’ is how well it works in the real world." />).</li>
                  <li><span className="font-semibold">Independent review:</span> Regulators (e.g., the UK <Jargon term="MHRA" definition="Medicines and Healthcare products Regulatory Agency — the UK body that approves and monitors medicines and vaccines." />) check all data.</li>
                  <li><span className="font-semibold">Batch testing & quality control:</span> Every batch must meet strict manufacturing standards.</li>
                  <li><span className="font-semibold">Ongoing monitoring:</span> Systems like the UK <Jargon term="Yellow Card" definition="A UK scheme where anyone can report suspected side effects. Data are monitored to spot rare patterns." /> keep watch after rollout.</li>
                </ol>
                <p className="mt-4 text-sm text-slate-600">Clinical trials are designed to compare a vaccine with a <Jargon term="placebo" definition="A dummy treatment with no active ingredient; helps check what changes are due to the vaccine itself." /> under careful medical supervision.</p>
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900">What makes a side effect rare?</h3>
                <p className="mt-2 text-slate-700">Most side effects are mild and short‑lived (e.g., sore arm, tiredness). Severe reactions are possible with any medicine but are uncommon, and clinics are prepared to treat them immediately.</p>
                <ul className="mt-4 space-y-2 text-slate-700">
                  <CheckRow>Clear aftercare advice and 24/7 NHS help lines.</CheckRow>
                  <CheckRow>Screening questions check for allergies and medical history.</CheckRow>
                  <CheckRow>Continuous review of safety data; guidance is updated when needed.</CheckRow>
                </ul>
                <p className="mt-4 text-sm text-slate-600">If you’ve had allergic reactions to medicines before, ask the vaccinator. It’s okay to take your time and get answers.</p>
              </div>
            </Card>
          </div>
        </Section>

        <Section id="types" title="Common vaccine types" tagline="Different technologies, same goal: training your immune system">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <div className="p-6">
                <div className="text-sm font-semibold text-sky-700">mRNA</div>
                <h3 className="mt-1 text-lg font-bold text-slate-900">Like a recipe card</h3>
                <p className="mt-2 text-slate-700">mRNA vaccines (e.g., Pfizer‑BioNTech, Moderna) carry instructions that teach your cells to make a harmless piece of the germ. The mRNA is used and then disposed of — it <span className="font-semibold">does not enter the cell nucleus</span> and <span className="font-semibold">cannot change your DNA</span>.</p>
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <div className="text-sm font-semibold text-sky-700">Viral vector</div>
                <h3 className="mt-1 text-lg font-bold text-slate-900">Delivery van, engine removed</h3>
                <p className="mt-2 text-slate-700">A harmless, non‑replicating virus (the “van”) delivers instructions so your immune system can practise. It can’t copy itself or cause the disease.</p>
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <div className="text-sm font-semibold text-sky-700">Protein subunit</div>
                <h3 className="mt-1 text-lg font-bold text-slate-900">Just the target</h3>
                <p className="mt-2 text-slate-700">Contains purified pieces (proteins) of a germ, sometimes with an <Jargon term="adjuvant" definition="An ingredient that boosts the immune response so a smaller dose of antigen can be used." /> to help your immune system respond strongly.</p>
              </div>
            </Card>
          </div>
        </Section>

        <Section id="myths" title="Myths vs facts" tagline="Short answers you can share">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900">“The vaccine will give me the disease.”</h3>
                <p className="mt-2 text-slate-700"><span className="font-semibold">Fact:</span> None of the vaccines listed here contain live, disease‑causing germs. They teach your immune system using instructions or harmless pieces.</p>
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900">“mRNA changes your DNA.”</h3>
                <p className="mt-2 text-slate-700"><span className="font-semibold">Fact:</span> mRNA stays in the cell fluid and is broken down after use. DNA is stored separately in the nucleus. They don’t mix.</p>
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900">“Side effects mean it’s unsafe.”</h3>
                <p className="mt-2 text-slate-700"><span className="font-semibold">Fact:</span> Common side effects like a sore arm and tiredness are signs your immune system is practising. Staff are trained to handle rare reactions.</p>
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900">“It was rushed.”</h3>
                <p className="mt-2 text-slate-700"><span className="font-semibold">Fact:</span> No steps were skipped. Global collaboration, funding, and prior research let phases run in parallel while maintaining full safety checks.</p>
              </div>
            </Card>
          </div>
        </Section>

        <Section id="compare" title="Everyday comparisons" tagline="Putting risk into perspective">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900">Workout vs. vaccine day</h3>
                <p className="mt-2 text-slate-700">A sore arm after a jab is like muscle soreness after a new gym routine — a sign your body is adapting.</p>
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900">MOT for your car, checks for vaccines</h3>
                <p className="mt-2 text-slate-700">Cars pass an annual MOT to prove they’re roadworthy. Vaccines face many more checks <span className="font-medium">before</span> they’re allowed on the road — and are monitored continuously after.</p>
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900">Recipe card, then binned</h3>
                <p className="mt-2 text-slate-700">mRNA is like a recipe card your cells read once to practise — then it’s shredded. Your body keeps the skill, not the card.</p>
              </div>
            </Card>
          </div>
        </Section>

        <Section id="popular" title="Popular vaccines and why they’re considered safe" tagline="What makes widely‑used vaccines reassuring">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900">Childhood vaccines (UK schedule)</h3>
                <ul className="mt-2 space-y-2 text-slate-700">
                  <CheckRow><span className="font-semibold">MMR:</span> Protects against measles, mumps, rubella. Decades of data show strong safety and effectiveness.</CheckRow>
                  <CheckRow><span className="font-semibold">Td/IPV:</span> Tetanus, diphtheria, polio boosters keep immunity topped up.</CheckRow>
                  <CheckRow><span className="font-semibold">HPV:</span> Helps prevent cancers caused by HPV; monitored worldwide with a strong safety record.</CheckRow>
                </ul>
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900">Adult & seasonal vaccines</h3>
                <ul className="mt-2 space-y-2 text-slate-700">
                  <CheckRow><span className="font-semibold">Flu:</span> Updated yearly; recommended for people at higher risk and healthcare workers.</CheckRow>
                  <CheckRow><span className="font-semibold">COVID‑19:</span> Ongoing safety monitoring with many millions of doses given worldwide; benefits outweigh risks for groups offered the vaccine.</CheckRow>
                  <CheckRow><span className="font-semibold">Travel vaccines:</span> Protect against region‑specific diseases; your travel clinic can advise what you need.</CheckRow>
                </ul>
                <p className="mt-4 text-sm text-slate-600">Eligibility and recommendations can change. Check current NHS guidance or speak to a clinician.</p>
              </div>
            </Card>
          </div>
        </Section>

        <Section id="resources" title="Trusted resources" tagline="Read more from independent, authoritative organisations">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900">United Kingdom</h3>
                <ul className="mt-3 list-disc pl-6 space-y-2 text-slate-700">
                  <li><Anchor href="https://www.nhs.uk/conditions/vaccinations/">NHS — Vaccinations</Anchor></li>
                  <li><Anchor href="https://www.gov.uk/guidance/the-yellow-card-scheme-guidance-for-patients">MHRA — Yellow Card scheme</Anchor></li>
                  <li><Anchor href="https://www.gov.uk/government/collections/immunisation">UKHSA — Immunisation collections</Anchor></li>
                </ul>
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900">International</h3>
                <ul className="mt-3 list-disc pl-6 space-y-2 text-slate-700">
                  <li><Anchor href="https://www.who.int/teams/regulation-prequalification/regulation-and-safety/pharmacovigilance">WHO — Vaccine safety & pharmacovigilance</Anchor></li>
                  <li><Anchor href="https://www.cdc.gov/vaccinesafety/index.html">CDC — Vaccine safety basics</Anchor></li>
                </ul>
                <p className="mt-4 text-sm text-slate-600">These links open official sites with up‑to‑date guidance and detailed FAQs.</p>
              </div>
            </Card>
          </div>

          <Card>
            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-900">Share this page</h3>
              <p className="mt-2 text-slate-700">If you found this useful, pass it on. Clear, calm information helps friends and family make informed decisions.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <button className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold hover:border-slate-400" onClick={() => navigator.clipboard?.writeText(window.location.href)}>Copy link</button>
                <a className="rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700" href="#home">Back to top</a>
              </div>
            </div>
          </Card>
        </Section>
      </main>

      <footer className="border-t border-slate-200/80 bg-white py-10 text-sm">
        <div className="mx-auto max-w-6xl px-4 text-slate-600">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p>
              This site is for general information only and isn’t a substitute for medical advice. Talk to your GP or a qualified clinician about your personal circumstances.
            </p>
            <p className="text-slate-500">Made with ❤️ to support public health.</p>
          </div>
          <p className="mt-2 text-slate-400">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </footer>

      <style>{`
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  )
}
