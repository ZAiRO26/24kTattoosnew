import React from 'react'
import { Newspaper, Instagram, Facebook, Youtube, ArrowRight } from 'lucide-react'
 

const PressSocialsPage = () => {
  const pressItems = [
    {
      outlet: 'Hyderabad Times',
      title: '24K Tattoo Hair & oddities: Elevating Body Art in Hyderabad',
      url: '#'
    },
    {
      outlet: 'Ink Magazine',
      title: 'Minimalist Mastery: Inside 24K Tattoo Hair & oddities',
      url: '#'
    },
    {
      outlet: 'City Arts',
      title: 'Artists to Watch: The 24K Collective',
      url: '#'
    }
  ]

  const socials = [
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, url: 'https://www.instagram.com/xxivk.in/?hl=en'},
    { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, url: 'https://www.facebook.com/xxivk.in'},
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, url: 'https://www.instagram.com/tattoosbyvikram/?hl=en'},
    { name: 'YouTube', icon: <Youtube className="w-5 h-5" />, url: 'https://www.youtube.com/@TattooHyderabad/featured'}
  ]

  return (
    <div className="pt-16 bg-minimal-white text-minimal-black min-h-screen">
      
      {/* Hero */}
      <section className="py-16 bg-minimal-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Press & Socials</h1>
          <p className="text-lg text-minimal-gray max-w-2xl mx-auto">
            Explore recent press mentions and connect with us on social media.
          </p>
        </div>
      </section>

      {/* Press */}
      <section className="py-16 bg-minimal-light-gray">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Press</h2>
            <p className="text-minimal-gray">Selected features and articles</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pressItems.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target={item.url.startsWith('http') ? '_blank' : undefined}
                rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block bg-white border border-minimal-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-minimal-black text-white flex items-center justify-center mr-3">
                    <Newspaper className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-minimal-gray">{item.outlet}</p>
                    <h3 className="text-lg font-semibold text-minimal-black">{item.title}</h3>
                  </div>
                </div>
                <span className="inline-flex items-center text-sm font-medium text-minimal-black">
                  Read more
                  <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              </a>
            ))}
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
            {socials.map((s) => (
              <a
                key={s.name}
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
    </div>
  )
}

export default PressSocialsPage


