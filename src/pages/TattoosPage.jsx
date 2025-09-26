import React from 'react';
import { Link } from 'react-router-dom';

const TattoosPage = () => (
  <div className="pt-16 min-h-screen bg-black text-white">
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400">24K Tattoos</h1>
      <p className="text-lg text-gray-300 mb-6">
        Featuring the 24K Tattoos artists, serving Seattle since 1995! 24K Tattoos is the premier tattoo studio in Washington State, known for custom work, award-winning artists, and a welcoming environment at both our Ballard and Wallingford locations.
      </p>
      <p className="text-lg text-gray-300 mb-6">
        We are an internationally recognized, award-winning tattoo and body piercing studio. Voted 'Best Tattoo & Piercing Studio' by local polls for years, our artists are dedicated to the art of tattooing and body modification.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-900 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-2 text-yellow-400">Ballard</h2>
          <p className="text-gray-400 mb-1">508 NW 65th Street Seattle, WA 98117</p>
          <p className="text-gray-400 mb-1">206-789-2618</p>
          <Link to="/locations#ballard" className="text-red-400 hover:underline">Contact Ballard Shop</Link>
        </div>
        <div className="bg-gray-900 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-2 text-yellow-400">Wallingford</h2>
          <p className="text-gray-400 mb-1">403 NE 45th Street Seattle, WA 98105</p>
          <p className="text-gray-400 mb-1">206-545-3685</p>
          <Link to="/locations#wallingford" className="text-red-400 hover:underline">Contact Wallingford Shop</Link>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mb-8">
        <Link to="/tattoos/artists" className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold uppercase tracking-widest shadow hover:bg-yellow-500 transition-colors">Tattoo Artists</Link>
        <Link to="/tattoos/galleries" className="bg-gray-800 text-yellow-400 px-6 py-3 rounded-lg font-bold uppercase tracking-widest shadow hover:bg-yellow-900 transition-colors">Tattoo Galleries</Link>
        <Link to="/tattoos/aftercare" className="bg-gray-800 text-yellow-400 px-6 py-3 rounded-lg font-bold uppercase tracking-widest shadow hover:bg-yellow-900 transition-colors">Tattoo Aftercare</Link>
        <Link to="/tattoos/policies" className="bg-gray-800 text-yellow-400 px-6 py-3 rounded-lg font-bold uppercase tracking-widest shadow hover:bg-yellow-900 transition-colors">Tattoo Policies</Link>
      </div>
      <p className="text-gray-400 text-sm mt-8">
        Follow us: {' '}
  {/* Facebook link removed for rebranding */}
  {/* Instagram link removed for rebranding */}
        <a href="http://pinterest.com/seattletattooer/" target="_blank" rel="noopener noreferrer" className="hover:underline text-red-400">Pinterest</a>
      </p>
    </section>
  </div>
);

export default TattoosPage;
