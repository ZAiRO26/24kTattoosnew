import React from 'react'
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
 

const DosAndDontsTattoosPage = () => (
  <div className="pt-16 bg-minimal-white text-minimal-black min-h-screen">
    
    <section className="py-16 bg-minimal-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-minimal-black mb-6">Tattoo Do's & Don'ts</h1>
        <p className="text-lg text-minimal-gray max-w-3xl mx-auto">
          Essential guidance to keep your tattoo healing cleanly and looking its best.
        </p>
      </div>
    </section>

    <section className="py-16 bg-minimal-light-gray">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-minimal-black mb-4">
            <CheckCircle className="inline w-8 h-8 text-green-600 mr-3" />
            Do's
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {n:'01', t:'Follow Aftercare Instructions', d:'Clean gently with mild soap and water, pat dry, and apply a thin layer of the recommended ointment or fragrance-free lotion.'},
            {n:'02', t:'Wash Hands First', d:'Always wash your hands before touching your tattoo to avoid introducing bacteria.'},
            {n:'03', t:'Moisturize Thinly', d:'Apply a very thin layer of fragrance-free moisturizer. Too much product can clog pores—less is more.'},
            {n:'04', t:'Protect From Sun', d:'After healing, use sunscreen to preserve color and detail. During healing, keep it out of direct sunlight.'}
          ].map((item) => (
            <div key={item.n} className="bg-white p-8 rounded-lg border border-minimal-border">
              <div className="flex items-start mb-2">
                <div className="bg-green-100 rounded-full p-3 mr-4"><span className="text-green-600 font-bold text-lg">{item.n}</span></div>
                <div>
                  <h3 className="text-xl font-semibold text-minimal-black mb-2">{item.t}</h3>
                  <p className="text-minimal-gray">{item.d}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-minimal-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-minimal-black mb-4">
            <XCircle className="inline w-8 h-8 text-red-600 mr-3" />
            Don'ts
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {n:'01', t:"Don't Pick or Scratch", d:'Let flakes and scabs fall off on their own. Picking can pull out ink and cause scarring.'},
            {n:'02', t:"Don't Soak", d:'Avoid swimming, baths, hot tubs, and saunas during healing. Quick showers are fine.'},
            {n:'03', t:"Don't Over-apply Products", d:'Heavy layers of ointment or lotion can suffocate the skin and prolong healing.'},
            {n:'04', t:"Don't Use Alcohol/Peroxide", d:'Harsh products can damage healing skin and fade ink. Stick to mild, fragrance-free care.'}
          ].map((item) => (
            <div key={item.n} className="bg-white p-8 rounded-lg border border-minimal-border">
              <div className="flex items-start mb-2">
                <div className="bg-red-100 rounded-full p-3 mr-4"><span className="text-red-600 font-bold text-lg">{item.n}</span></div>
                <div>
                  <h3 className="text-xl font-semibold text-minimal-black mb-2">{item.t}</h3>
                  <p className="text-minimal-gray">{item.d}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Tattoo Aftercare */}
    <section className="py-16 bg-minimal-light-gray">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-minimal-black mb-6">Tattoo Aftercare</h2>
        <p className="text-lg text-minimal-gray mb-6">
          Proper aftercare is essential for a beautiful, healthy tattoo. Follow these guidelines to ensure the best healing and long-lasting results:
        </p>
        <ul className="list-disc pl-6 text-minimal-gray space-y-2">
          <li>Leave the bandage on for 2-4 hours after your tattoo is finished.</li>
          <li>Wash your hands before touching your tattoo.</li>
          <li>Gently wash the tattoo with mild, fragrance-free soap and warm water.</li>
          <li>Pat dry with a clean towel—do not rub.</li>
          <li>Apply a thin layer of recommended ointment or fragrance-free lotion.</li>
          <li>Avoid soaking, swimming, or sun exposure during healing.</li>
          <li>Do not pick or scratch at scabs or peeling skin.</li>
          <li>Contact your artist or studio if you have any concerns.</li>
        </ul>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-light-charcoal">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-300 mb-6">Ready for Your Next Piece?</h2>
        <p className="text-lg text-gray-400 mb-8">Have questions about aftercare or planning your tattoo? We're here to help.</p>
        <Link to="/book-now" className="bg-minimal-black text-white px-8 py-4 font-medium inline-flex items-center justify-center hover:bg-minimal-dark-gray transition-colors duration-200">
          BOOK CONSULTATION
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </section>
  </div>
)

export default DosAndDontsTattoosPage


