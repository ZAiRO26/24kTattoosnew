import React from 'react'

const QA = ({ q, a }) => (
  <div className="mb-6">
    <h4 className="font-semibold text-minimal-black mb-1">{q}</h4>
    <p className="text-minimal-gray">{a}</p>
  </div>
)

const Section = ({ title, children }) => (
  <section className="py-10">
    <h3 className="text-2xl md:text-3xl font-bold text-minimal-black mb-6">{title}</h3>
    {children}
  </section>
)

const DosAndDontsFAQPage = () => (
  <div className="pt-16 bg-minimal-white text-minimal-black min-h-screen">
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-6xl font-bold mb-8">FAQ</h1>

      <Section title="General Tattoo FAQs">
        <QA q="Is getting a tattoo safe?" a="Yes, tattoos are safe when done at a professional studio that follows strict hygiene standards and uses sterile equipment." />
        <QA q="Does getting a tattoo hurt?" a="Pain levels vary depending on placement, design, and individual sensitivity, but discomfort is normal and manageable." />
        <QA q="How much does a tattoo cost?" a="The price is based on the tattoo’s size, detail, placement, and the artist’s hourly rate—there is usually a shop minimum charge." />
        <QA q="How should I prepare for my tattoo session?" a="Arrive well-rested, hydrated, and having eaten a meal. Wear comfortable clothing that allows easy access to the tattoo area and bring a valid ID." />
        <QA q="Will my tattoo fade or need a touch-up?" a="Some fading over time is natural, especially with sun exposure. Most studios offer touch-ups within a certain period after your session." />
        <QA q="Can I choose my own design or artist?" a="Yes. Clients can consult for custom designs and request specific artists for their session." />
      </Section>

      <Section title="Tattoo Appointment & Aftercare">
        <QA q="Do I need a consultation before booking?" a="Yes, consultations help finalize your design, pricing, and scheduling, ensuring the best result." />
        <QA q="How do I care for my new tattoo?" a="Follow your artist’s aftercare instructions, which usually include gentle washing, moisturizing, and avoiding swimming or sun exposure during healing." />
        <QA q="How long does a tattoo take to heal?" a="Surface healing typically takes 2-4 weeks, with deeper healing up to 6 weeks. Do not scratch or pick at the area." />
        <QA q="Can I get a tattoo if I’m on medication, pregnant, or nursing?" a="Always consult with your doctor and inform the studio. Most recommend waiting if you are pregnant, nursing, or have certain health conditions." />
      </Section>

      <Section title="Piercing FAQs">
        <QA q="Is body piercing safe?" a="When performed by professionals using sterile techniques and quality jewelry, piercings are safe." />
        <QA q="Does piercing hurt?" a="Expect a quick, sharp sensation. Pain varies by location but is generally brief and moderate." />
        <QA q="How much do piercings cost?" a="Prices depend on the piercing type and jewelry choice; standard rates are displayed at the studio." />
        <QA q="What is proper aftercare for a piercing?" a="Clean with saline solution, avoid touching with dirty hands, and follow your piercer’s specific guidelines until fully healed." />
        <QA q="How old do you need to be for a piercing?" a="Minors typically require parental consent and proof of guardianship; age requirements vary by piercing type and studio policy." />
        <QA q="When can I change the jewelry?" a="Wait until the initial piercing is fully healed before changing jewelry; your piercer can advise and assist with safe changes." />
      </Section>

      <Section title="Studio Policies & Miscellaneous">
        <QA q="Do you accept walk-ins or only appointments?" a="Both options are available, but appointments are recommended for larger pieces or specific artists/piercers." />
        <QA q="What forms of payment are accepted?" a="Most studios accept cash, credit/debit cards, and digital payments." />
        <QA q="Can friends or children come to my appointment?" a="Adults may bring a support person, but children are typically not allowed in procedure areas for safety reasons." />
        <QA q="What if I need to cancel or reschedule my appointment?" a="Contact the studio at least 24 hours in advance to avoid losing your deposit." />
      </Section>
    </div>
  </div>
)

export default DosAndDontsFAQPage


