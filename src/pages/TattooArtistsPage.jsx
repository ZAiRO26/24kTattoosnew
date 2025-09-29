import React from 'react';

const TattooArtistsPage = () => (
  <div className="pt-16 min-h-screen bg-black text-white">
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400">Tattoo Artists</h1>
      <p className="text-lg text-gray-300 mb-6">
        Each of our artists is completely dedicated to the art of tattooing, and it shows. Most of the tattoos done here are fully custom, but we also have thousands of designs to choose from. We proudly boast one of the most extensive flash collections on the west coast!
      </p>
      <p className="text-lg text-gray-300 mb-6">
        Our artists have received numerous awards and are recognized internationally for their skill and creativity. Browse our artist galleries to find the perfect match for your next piece.
      </p>
      {/* You can add a grid of artist cards or images here in the future */}
    </section>
  </div>
);

export default TattooArtistsPage;







