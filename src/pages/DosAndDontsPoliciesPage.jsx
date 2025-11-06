import React from 'react'
 

const DosAndDontsPoliciesPage = () => (
  <div className="pt-16 bg-minimal-white text-minimal-black min-h-screen">
    
    <section className="py-16 bg-minimal-white">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Tattoo Policies</h1>
        <p className="text-minimal-gray mb-6">Please review our studio policies before booking your tattoo appointment:</p>
        <ul className="list-disc pl-6 space-y-2 text-minimal-gray mb-12">
          <li>You must be 18 years or older with valid ID for all tattoos—no exceptions.</li>
          <li>Deposits are required for all appointments and are non-refundable.</li>
          <li>Rescheduling requires 48 hours notice to retain your deposit.</li>
          <li>No children or pets allowed in the studio.</li>
          <li>We reserve the right to refuse service to anyone.</li>
          <li>Prices vary by artist, size, and complexity—consult with your artist for a quote.</li>
        </ul>

        <h2 className="text-3xl md:text-4xl font-bold mb-6">Piercing Policies</h2>
        <p className="text-minimal-gray mb-6">Please review our piercing policies to ensure a safe and professional experience for all clients.</p>
        <ul className="list-disc pl-6 space-y-2 text-minimal-gray">
          <li>All clients must present valid government-issued photo ID for any piercing service.</li>
          <li>Minors must be accompanied by a parent or legal guardian with matching last names or proof of guardianship.</li>
          <li>We reserve the right to refuse service to anyone for any reason, including health or safety concerns.</li>
          <li>No outside jewelry may be used for initial piercings.</li>
          <li>Clients must follow all aftercare instructions provided by our staff.</li>
          <li>For questions about our policies, please contact our Ballard location.</li>
        </ul>
        <p className="text-minimal-gray mt-6">Thank you for helping us maintain a safe and welcoming environment for everyone.</p>
      </div>
    </section>
  </div>
)

export default DosAndDontsPoliciesPage


