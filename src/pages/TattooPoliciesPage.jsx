import React from 'react';

const TattooPoliciesPage = () => (
  <div className="pt-16 min-h-screen bg-black text-white">
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400">Tattoo Policies</h1>
      <p className="text-lg text-gray-300 mb-6">
        Please review our studio policies before booking your tattoo appointment:
      </p>
      <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
        <li>You must be 18 years or older with valid ID for all tattoos—no exceptions.</li>
        <li>Deposits are required for all appointments and are non-refundable.</li>
        <li>Rescheduling requires 48 hours notice to retain your deposit.</li>
        <li>No children or pets allowed in the studio.</li>
        <li>We reserve the right to refuse service to anyone.</li>
        <li>Prices vary by artist, size, and complexity—consult with your artist for a quote.</li>
      </ul>
      <p className="text-gray-400 text-sm mt-8">Contact us if you have questions about our policies or need more information.</p>
    </section>
  </div>
);

export default TattooPoliciesPage;








