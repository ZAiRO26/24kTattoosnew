import React from 'react'
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react'

const DosAndDontsPage = () => {
  return (
    <div className="pt-16 bg-minimal-white text-minimal-black min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-minimal-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-minimal-black mb-6">
              Do's & Don'ts
            </h1>
            <p className="text-lg text-minimal-gray max-w-3xl mx-auto">
              Essential guidelines for proper piercing and tattoo care. Follow these tips for the best healing experience.
            </p>
          </div>
        </div>
      </section>

      {/* Do's Section */}
      <section className="py-16 bg-minimal-light-gray">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-minimal-black mb-4">
              <CheckCircle className="inline w-8 h-8 text-green-600 mr-3" />
              Piercing Do's
            </h2>
            <p className="text-lg text-minimal-gray">
              Follow these essential practices for proper piercing care
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-minimal-border">
              <div className="flex items-start mb-4">
                <div className="bg-green-100 rounded-full p-3 mr-4">
                  <span className="text-green-600 font-bold text-lg">01</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-minimal-black mb-2">Do Think About the Decision</h3>
                  <p className="text-minimal-gray">
                    Decisions made impulsively rarely end well. Give this important step a thought, and be confident in the direction you're going. Consider the location of the piercing, how long it will take to heal, and the jewelry you'll wear there.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-minimal-border">
              <div className="flex items-start mb-4">
                <div className="bg-green-100 rounded-full p-3 mr-4">
                  <span className="text-green-600 font-bold text-lg">02</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-minimal-black mb-2">Do Go to a Pro</h3>
                  <p className="text-minimal-gray">
                    You only have one chance to get your piercing right—so make sure you visit a reputable and professional piercer.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-minimal-border">
              <div className="flex items-start mb-4">
                <div className="bg-green-100 rounded-full p-3 mr-4">
                  <span className="text-green-600 font-bold text-lg">03</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-minimal-black mb-2">Do Start with Quality</h3>
                  <p className="text-minimal-gray">
                    Give your piercing the best start by wearing quality jewelry as it heals. Surgical grade studs are always a great choice. They go with anything, and you can add them to your jewelry wardrobe and wear them again and again.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-minimal-border">
              <div className="flex items-start mb-4">
                <div className="bg-green-100 rounded-full p-3 mr-4">
                  <span className="text-green-600 font-bold text-lg">04</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-minimal-black mb-2">Do Clean Regularly</h3>
                  <p className="text-minimal-gray">
                    Clean your piercing at least twice a day with clean hands. Do not touch your piercing for no reason and do not pull or rotate your jewellery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Don'ts Section */}
      <section className="py-16 bg-minimal-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-minimal-black mb-4">
              <XCircle className="inline w-8 h-8 text-red-600 mr-3" />
              Piercing Don'ts
            </h2>
            <p className="text-lg text-minimal-gray">
              Avoid these common mistakes that can harm your piercing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-minimal-border">
              <div className="flex items-start mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <span className="text-red-600 font-bold text-lg">01</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-minimal-black mb-2">Don't Use Peroxide or Alcohol</h3>
                  <p className="text-minimal-gray">
                    These products are too harsh, especially for fresh wounds.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-minimal-border">
              <div className="flex items-start mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <span className="text-red-600 font-bold text-lg">02</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-minimal-black mb-2">Don't Overclean</h3>
                  <p className="text-minimal-gray">
                    Even though you should clean your wounds regularly, don't overdo it. If your skin stays wet constantly, bacteria can breed and create an infection.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-minimal-border">
              <div className="flex items-start mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <span className="text-red-600 font-bold text-lg">03</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-minimal-black mb-2">Don't Go With Sterling Silver</h3>
                  <p className="text-minimal-gray">
                    We love sterling silver earrings, but not while we're healing—it can have traces of lead. Instead, use titanium, surgical stainless steel, or 14K gold for best results. Once healed, you can wear all of the sterling silver earrings you want!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-minimal-border">
              <div className="flex items-start mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <span className="text-red-600 font-bold text-lg">04</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-minimal-black mb-2">Don't Swap Jewelry</h3>
                  <p className="text-minimal-gray">
                    If you are tempted to change your jewelry before it's healed, don't. Know that healing takes time—even months, depending on where you were pierced. Stay patient and stick with your cleaning protocol, and know the results will be worth the wait.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Tips Section */}
      <section className="py-16 bg-minimal-light-gray">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-minimal-black mb-4">
              <AlertCircle className="inline w-8 h-8 text-yellow-600 mr-3" />
              Additional Tips
            </h2>
            <p className="text-lg text-minimal-gray">
              More important information for your piercing journey
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg border border-minimal-border">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-minimal-black mb-4">Healing Timeline</h3>
                <ul className="space-y-2 text-minimal-gray">
                  <li>• Earlobe: 6-8 weeks</li>
                  <li>• Cartilage: 3-6 months</li>
                  <li>• Nose: 2-4 months</li>
                  <li>• Tongue: 4-6 weeks</li>
                  <li>• Navel: 6-12 months</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-minimal-black mb-4">When to Contact Us</h3>
                <ul className="space-y-2 text-minimal-gray">
                  <li>• Excessive swelling or redness</li>
                  <li>• Persistent pain after 48 hours</li>
                  <li>• Unusual discharge or odor</li>
                  <li>• Signs of infection</li>
                  <li>• Jewelry becomes too tight</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tattoo Do's Section */}
      <section className="py-16 bg-minimal-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-minimal-black mb-4">
              <CheckCircle className="inline w-8 h-8 text-green-600 mr-3" />
              Tattoo Do's
            </h2>
            <p className="text-lg text-minimal-gray">
              Follow these guidelines to help your tattoo heal beautifully
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-minimal-border">
              <div className="flex items-start mb-4">
                <div className="bg-green-100 rounded-full p-3 mr-4">
                  <span className="text-green-600 font-bold text-lg">01</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-minimal-black mb-2">Do Follow Aftercare Instructions</h3>
                  <p className="text-minimal-gray">
                    Clean gently with mild soap and water, pat dry, and apply a thin layer of the recommended ointment or fragrance-free lotion as advised by your artist.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-minimal-border">
              <div className="flex items-start mb-4">
                <div className="bg-green-100 rounded-full p-3 mr-4">
                  <span className="text-green-600 font-bold text-lg">02</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-minimal-black mb-2">Do Wash Your Hands First</h3>
                  <p className="text-minimal-gray">
                    Always wash your hands before touching your tattoo to avoid introducing bacteria to the healing area.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-minimal-border">
              <div className="flex items-start mb-4">
                <div className="bg-green-100 rounded-full p-3 mr-4">
                  <span className="text-green-600 font-bold text-lg">03</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-minimal-black mb-2">Do Keep It Moisturized (Thin Layer)</h3>
                  <p className="text-minimal-gray">
                    Apply a very thin layer of fragrance-free moisturizer to prevent over-drying. Too much product can clog pores—less is more.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-minimal-border">
              <div className="flex items-start mb-4">
                <div className="bg-green-100 rounded-full p-3 mr-4">
                  <span className="text-green-600 font-bold text-lg">04</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-minimal-black mb-2">Do Protect From Sun</h3>
                  <p className="text-minimal-gray">
                    After it heals, use sunscreen to preserve color and detail. During healing, keep the area covered from direct sunlight.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tattoo Don'ts Section */}
      <section className="py-16 bg-minimal-light-gray">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-minimal-black mb-4">
              <XCircle className="inline w-8 h-8 text-red-600 mr-3" />
              Tattoo Don'ts
            </h2>
            <p className="text-lg text-minimal-gray">
              Avoid these common mistakes that can damage your tattoo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-minimal-border">
              <div className="flex items-start mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <span className="text-red-600 font-bold text-lg">01</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-minimal-black mb-2">Don't Pick or Scratch</h3>
                  <p className="text-minimal-gray">
                    Let flakes and scabs fall off on their own. Picking can pull out ink and cause scarring.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-minimal-border">
              <div className="flex items-start mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <span className="text-red-600 font-bold text-lg">02</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-minimal-black mb-2">Don't Soak</h3>
                  <p className="text-minimal-gray">
                    Avoid swimming, baths, hot tubs, and saunas during healing. Quick showers are fine.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-minimal-border">
              <div className="flex items-start mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <span className="text-red-600 font-bold text-lg">03</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-minimal-black mb-2">Don't Over-apply Products</h3>
                  <p className="text-minimal-gray">
                    Heavy layers of ointment or lotion can suffocate the skin and prolong healing.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-minimal-border">
              <div className="flex items-start mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <span className="text-red-600 font-bold text-lg">04</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-minimal-black mb-2">Don't Use Alcohol/Peroxide</h3>
                  <p className="text-minimal-gray">
                    Harsh products can damage healing skin and fade ink. Stick to mild, fragrance-free care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-light-charcoal">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-300 mb-6">
            Need Professional Help?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Our experienced piercers are here to help with any questions or concerns about your piercing care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book-now"
              className="bg-accent-gold text-luxury-dark px-8 py-4 font-medium hover:bg-gold-dark transition-colors duration-200"
            >
              BOOK CONSULTATION
            </a>
            <a
              href="tel:+919876543210"
              className="border border-accent-gold text-accent-gold px-8 py-4 font-medium hover:bg-accent-gold hover:text-luxury-dark transition-colors duration-200"
            >
              CALL US NOW
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DosAndDontsPage
