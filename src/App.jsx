import React from "react";

export default function App() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <header className="bg-blue-900 text-white py-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          The Facts on Vaccine Safety — From Childhood Immunisations to COVID-19
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Vaccines protect against serious, sometimes life-threatening diseases.
          This site explains each vaccine given in the UK, addresses common
          misconceptions, and outlines the rigorous safety checks they undergo.
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        {/* Childhood Vaccines */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">UK Childhood Vaccines</h2>
          <p className="mb-8 text-lg">
            The UK immunisation schedule protects children from multiple
            dangerous diseases. Each vaccine has been extensively tested and
            monitored for safety over decades.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "6-in-1 Vaccine",
                desc: "Protects against diphtheria, tetanus, whooping cough, polio, Hib, and hepatitis B. Given at 8, 12, and 16 weeks. Decades of use worldwide show an excellent safety profile."
              },
              {
                title: "Rotavirus Vaccine",
                desc: "Oral vaccine given at 8 and 12 weeks. Prevents severe diarrhoea and vomiting in babies. Mild temporary diarrhoea is the most common side effect."
              },
              {
                title: "MenB Vaccine",
                desc: "Protects against meningococcal group B disease, a rare but life-threatening infection. Given at 8 weeks, 16 weeks, and 1 year."
              },
              {
                title: "Pneumococcal Vaccine (PCV)",
                desc: "Prevents pneumococcal infections such as meningitis and pneumonia. Given at 12 weeks and 1 year."
              },
              {
                title: "MMR Vaccine",
                desc: "Protects against measles, mumps, and rubella. Two doses at 1 year and at 3 years 4 months. No credible evidence links MMR to autism — numerous large studies confirm safety."
              },
              {
                title: "Hib/MenC Booster",
                desc: "Given at 1 year to protect against Haemophilus influenzae type b and meningococcal group C."
              },
              {
                title: "4-in-1 Pre-School Booster",
                desc: "Protects against diphtheria, tetanus, whooping cough, and polio. Given at 3 years 4 months."
              },
              {
                title: "HPV Vaccine",
                desc: "Given at age 12–13 to protect against cancers caused by human papillomavirus, including cervical cancer. Over 15 years of data show excellent safety."
              }
            ].map((vaccine, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
              >
                <h3 className="text-xl font-semibold mb-2">{vaccine.title}</h3>
                <p className="text-gray-700">{vaccine.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* COVID-19 Vaccine */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">COVID-19 Vaccine</h2>
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <p className="text-lg mb-4">
              COVID-19 vaccines protect against severe illness, hospitalisation,
              and death. They are recommended for those at higher risk, including
              older adults and people with underlying health conditions. All
              approved vaccines underwent large-scale trials with tens of
              thousands of participants and continue to be monitored by the MHRA
              and international bodies.
            </p>
            <p className="text-lg">
              Common short-term effects include a sore arm, fatigue, or mild
              fever. Serious side effects are rare, and the benefits greatly
              outweigh the risks — particularly compared to the risks from
              COVID-19 infection itself.
            </p>
          </div>
        </section>

        {/* Myths & Evidence */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Common Myths & Evidence</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                myth: "The COVID-19 vaccine causes dangerous myocarditis.",
                fact: "The risk of myocarditis after vaccination is rare and usually mild. COVID-19 infection itself carries a much higher risk of myocarditis and more severe heart complications."
              },
              {
                myth: "Vaccines cause autism.",
                fact: "Extensive research, including studies on over a million children, shows no link between vaccines and autism. The original claim has been discredited and retracted."
              },
              {
                myth: "Too many vaccines overwhelm a child's immune system.",
                fact: "Children encounter far more antigens daily through food, the environment, and infections than they do from vaccines. The immune system is well-equipped to handle vaccines safely."
              },
              {
                myth: "COVID-19 vaccines were rushed and not properly tested.",
                fact: "The vaccines followed the same testing phases as any other, but global collaboration and funding allowed steps to happen faster without skipping safety checks."
              },
              {
                myth: "Natural immunity is better than vaccine protection.",
                fact: "Infection can give immunity, but at the cost of the illness — which may be severe or fatal. Vaccines provide strong protection without the risks of the disease itself."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-red-700 mb-2">
                  Myth: {item.myth}
                </h3>
                <p className="text-gray-800">
                  <strong className="text-green-700">Fact:</strong> {item.fact}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How Vaccines Are Tested */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">
            How Vaccines Are Tested & Monitored
          </h2>
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 space-y-4 text-lg">
            <p>
              Vaccines undergo one of the most rigorous testing processes in
              medicine:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Pre-clinical testing</strong> — Laboratory and animal
                studies to assess safety and immune response.
              </li>
              <li>
                <strong>Phase 1 trials</strong> — Dozens of volunteers to check
                safety and dosage.
              </li>
              <li>
                <strong>Phase 2 trials</strong> — Hundreds of participants to
                study immune response and further safety.
              </li>
              <li>
                <strong>Phase 3 trials</strong> — Tens of thousands of people to
                confirm effectiveness and detect rare side effects.
              </li>
              <li>
                <strong>Regulatory review</strong> — Independent experts at the
                MHRA, EMA, and WHO assess the full data.
              </li>
              <li>
                <strong>Post-approval monitoring</strong> — Continuous safety
                checks in millions of people; issues investigated promptly.
              </li>
            </ul>
          </div>
        </section>

        {/* Summary & Resources */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Summary</h2>
          <p className="bg-white shadow-md rounded-lg p-6 border border-gray-200 text-lg">
            Vaccines remain one of the safest and most effective tools in modern
            medicine. Their benefits far outweigh the risks, and ongoing
            monitoring ensures that safety remains the highest priority. Making
            informed health decisions means relying on credible, evidence-based
            information.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6">Trusted Resources</h2>
          <ul className="list-disc list-inside text-blue-700 text-lg">
            <li>
              <a href="https://www.nhs.uk/vaccinations" target="_blank" rel="noreferrer">
                NHS — Vaccinations
              </a>
            </li>
            <li>
              <a href="https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency" target="_blank" rel="noreferrer">
                MHRA — Medicines and Healthcare products Regulatory Agency
              </a>
            </li>
            <li>
              <a href="https://www.who.int/health-topics/vaccines-and-immunization" target="_blank" rel="noreferrer">
                World Health Organization — Vaccines & Immunisation
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="bg-gray-200 py-6 mt-12 text-center text-gray-700 text-sm">
        © {new Date().getFullYear()} Vaccine Safety Information — Created by Ben
      </footer>
    </div>
  );
}
