
import React from 'react';

const PiercingPoliciesPage = () => (
  <div className="pt-16">
    <section className="relative py-20 bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text uppercase">Piercing Policies</h1>
        <p className="text-xl text-gray-300 mb-6">
          Please review our piercing policies to ensure a safe and professional experience for all clients.
        </p>
        <ul className="text-left text-gray-400 mb-6 list-disc list-inside mx-auto" style={{maxWidth: 600}}>
          <li>All clients must present valid government-issued photo ID for any piercing service.</li>
          <li>Minors must be accompanied by a parent or legal guardian with matching last names or proof of guardianship.</li>
          <li>We reserve the right to refuse service to anyone for any reason, including health or safety concerns.</li>
          <li>No outside jewelry may be used for initial piercings.</li>
          <li>Clients must follow all aftercare instructions provided by our staff.</li>
          <li>For questions about our policies, please contact our Ballard location.</li>
        </ul>
        <p className="text-gray-400">Thank you for helping us maintain a safe and welcoming environment for everyone.</p>
      </div>
    </section>
  </div>
);

export default PiercingPoliciesPage;




