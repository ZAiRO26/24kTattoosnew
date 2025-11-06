import React from 'react'
import { Scissors, Sparkles, Palette, Award, Heart, Instagram, Facebook, Youtube } from 'lucide-react'
 

const HairArtistPage = () => {
  const specialties = [
    { icon: <Scissors className="w-6 h-6" />, title: 'Precision Cuts', desc: 'Face-shape focused cuts with clean lines and tailored texture.' },
    { icon: <Palette className="w-6 h-6" />, title: 'Colour & Finish', desc: 'Global colouring, root touch-ups, and glossy finishes that last.' },
    { icon: <Sparkles className="w-6 h-6" />, title: 'Styling & Care', desc: 'Blow dry, ironing, and care routines for healthy, styled hair.' },
    { icon: <Award className="w-6 h-6" />, title: 'Professional Standards', desc: 'Quality products, hygienic process, and consistent results.' }
  ]

  return (
    <div className="pt-16 bg-minimal-white text-minimal-black min-h-screen">
      
      {/* Hero */}
      <section className="py-16 bg-minimal-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About the Hair Artist</h1>
          <p className="text-lg text-minimal-gray max-w-3xl mx-auto">
            Crafting clean, modern hair with an emphasis on precision, health, and finish. From sharp cuts to seamless colour, every service is shaped to your style.
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-12 bg-minimal-light-gray">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">Philosophy & Approach</h2>
            <p className="text-minimal-gray text-lg leading-relaxed">
              Guided by a minimalist aesthetic and a client-first mindset, the Hair Artist focuses on precise execution and sustainable care. Every appointment begins with consultation—face shape, lifestyle, and hair health inform technique and finish.
            </p>
            <p className="text-minimal-gray text-lg leading-relaxed">
              Services span crisp cuts, blow dries, ironing, global colouring, and root touch-ups. Premium products, hygienic process, and consistent technique ensure results that look great and feel natural.
            </p>
            <div className="flex items-center gap-3 text-minimal-black">
              <Heart className="w-5 h-5 text-accent-gold" />
              <span className="font-medium">Friendly, detail-driven, and committed to healthy hair.</span>
            </div>
          </div>
          <div className="bg-white border border-minimal-border rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Specialties</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {specialties.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="bg-minimal-black text-white p-3 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-minimal-black">{item.title}</div>
                    <div className="text-minimal-gray text-sm">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Socials */}
      <section className="py-16 bg-minimal-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Socials</h2>
            <p className="text-minimal-gray">Follow our latest work and updates</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, url: 'https://www.instagram.com/karishmathakkar06/?hl=en' },
              { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, url: 'https://www.facebook.com/xxivk.in' },
              { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, url: 'https://www.instagram.com/tattoosbyvikram/?hl=en' },
              { name: 'YouTube', icon: <Youtube className="w-5 h-5" />, url: 'https://www.youtube.com/@TattooHyderabad/featured' },
            ].map((s) => (
              <a
                key={`${s.name}-${s.url}`}
                href={s.url}
                target={s.url.startsWith('http') ? '_blank' : undefined}
                rel={s.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center justify-center gap-2 border border-minimal-border rounded-lg px-4 py-3 hover:bg-minimal-light-gray transition-colors"
              >
                <span className="text-minimal-black">{s.icon}</span>
                <span className="text-sm font-medium text-minimal-black group-hover:text-minimal-black">{s.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-light-charcoal">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-300 mb-6">Book Your Hair Appointment</h2>
          <p className="text-lg text-gray-400 mb-8">Schedule a consultation and get a look crafted for you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book-now"
              className="bg-accent-gold text-luxury-dark px-8 py-4 font-medium hover:bg-gold-dark transition-colors duration-200"
            >
              BOOK HAIR APPOINTMENT
            </a>
            <a
              href="tel:+918178687129"
              className="border border-accent-gold text-accent-gold px-8 py-4 font-medium hover:bg-accent-gold hover:text-luxury-dark transition-colors duration-200"
            >
              CALL FOR CONSULTATION
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HairArtistPage