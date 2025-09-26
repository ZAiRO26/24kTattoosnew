
import React from 'react';

const PiercingPricingPage = () => (
  <div className="pt-16">
    <section className="relative py-20 bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text uppercase">Piercing Pricing</h1>
        <p className="text-xl text-gray-300 mb-6">
          We offer transparent and competitive pricing for all our piercing services. Please contact our Ballard location for the most up-to-date pricing information.
        </p>
        <table className="mx-auto text-left text-gray-200 bg-black/60 rounded-lg shadow-lg mb-6" style={{minWidth: 320}}>
          <thead>
            <tr>
              <th className="px-4 py-2 border-b border-gray-700">Piercing Type</th>
              <th className="px-4 py-2 border-b border-gray-700">Price (Starting At)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border-b border-gray-800">Ear Lobe</td>
              <td className="px-4 py-2 border-b border-gray-800">$40</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-800">Cartilage</td>
              <td className="px-4 py-2 border-b border-gray-800">$45</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-800">Nostril</td>
              <td className="px-4 py-2 border-b border-gray-800">$50</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-800">Septum</td>
              <td className="px-4 py-2 border-b border-gray-800">$60</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-800">Navel</td>
              <td className="px-4 py-2 border-b border-gray-800">$55</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-800">Eyebrow</td>
              <td className="px-4 py-2 border-b border-gray-800">$50</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-800">Nipple</td>
              <td className="px-4 py-2 border-b border-gray-800">$60</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-800">Other</td>
              <td className="px-4 py-2 border-b border-gray-800">Call for quote</td>
            </tr>
          </tbody>
        </table>
        <p className="text-gray-400">Prices may vary depending on jewelry selection and complexity. For a full quote, please contact our Ballard studio.</p>
      </div>
    </section>
  </div>
);

export default PiercingPricingPage;

