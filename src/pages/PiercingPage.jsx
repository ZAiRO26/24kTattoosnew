
import React from 'react';
import { Link } from 'react-router-dom';

const PiercingPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text uppercase">Body Piercings Seattle</h1>
          <p className="text-xl text-gray-300 mb-6">
            Get expert body piercing in Seattle with our highly trained team, offering a safe and professional experience at our Ballard location.
          </p>
          <Link to="/piercings/book-online" className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center mb-4">
            BOOK ONLINE
          </Link>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Link to="/piercings/artists" className="underline text-red-400">PIERCING ARTISTS</Link>
            <Link to="/piercings/aftercare" className="underline text-red-400">PIERCING AFTERCARE</Link>
            <Link to="/piercings/pricing" className="underline text-red-400">PRICING</Link>
            <Link to="/piercings/jewelry" className="underline text-red-400">JEWELRY</Link>
            <Link to="/piercings/policies" className="underline text-red-400">POLICIES</Link>
            <Link to="/faq#piercing" className="underline text-red-400">FAQ</Link>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Professional Body Piercing in Seattle</h2>
          <p className="text-lg text-gray-300 mb-6">
            Our experienced piercers in Seattle are highly skilled in all types of piercing techniques and are dedicated to meeting your piercing needs. With extensive training in both piercing procedures and aseptic techniques, they ensure a safe and professional experience.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            Learn more about our talented piercers, Josh, Kali, Gray and Chris by checking out their bios!
          </p>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <img
              src="/tattoo-hero-logo.png"
              alt="Close-up of an ear with multiple piercings, including a cartilage piercing with a small chain, two lobe piercings with a pink and blue stud, and a helix piercing with a circular stud."
              className="w-full md:w-1/2 rounded-lg shadow-lg mb-6 md:mb-0"
              style={{maxWidth: 350}}
            />
            <div className="flex-1">
              <div className="bg-red-900/20 border border-red-600 rounded-lg p-6 mb-4">
                <h3 className="text-xl font-bold text-red-400 mb-2">Please note:</h3>
                <p className="text-gray-200 mb-2">Piercing services are exclusively available at our Ballard location.</p>
                <Link to="/locations#ballard" className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-semibold transition-colors inline-flex items-center">
                  Contact Ballard Shop
                </Link>
              </div>
              <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-6">
                <h4 className="font-semibold text-lg mb-2">Ballard Address</h4>
                <p className="text-gray-300 mb-1">508 NW 65th Street Seattle, WA 98117</p>
                <a href="tel:206-789-2618" className="text-red-400 underline mb-2 block">206-789-2618</a>
                <Link to="/locations#ballard" className="underline text-red-400">Contact Ballard Shop</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wallingford Location Notice */}
      <section className="py-10 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-6 mb-4">
            <h4 className="font-semibold text-lg mb-2">Wallingford Address</h4>
            <p className="text-gray-300 mb-1">403 NE 45th Street Seattle, WA 98105</p>
            <a href="tel:206-545-3685" className="text-red-400 underline mb-2 block">206-545-3685</a>
            <Link to="/locations#wallingford" className="underline text-red-400">Contact Wallingford Shop</Link>
          </div>
          <p className="text-gray-400 mt-2">Our Wallingford location specializes in tattoos only. For all piercing services, please visit our Ballard studio.</p>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-10 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold mb-4 text-gray-200">Follow Us</h3>
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            {/* Facebook link removed for rebranding */}
            {/* Instagram link removed for rebranding */}
            <a href="http://pinterest.com/seattletattooer/" target="_blank" rel="noopener noreferrer" className="text-red-400 underline">Pinterest</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PiercingPage;



