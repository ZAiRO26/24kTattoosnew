import React from 'react';
import { Link } from 'react-router-dom';

export default function TattooAcademyPage() {
  return (
    <div className="min-h-screen bg-minimal-white">
      {/* Hero Section */}
      <section className="relative bg-minimal-black text-minimal-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide">
            24K Tattoo Academy
          </h1>
          <p className="text-xl md:text-2xl text-minimal-light-gray font-light">
            Where artistry meets structured expertise
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-minimal-black leading-relaxed">
            <p className="text-xl mb-8">
              Step inside the 24K Tattoo Academy—where the spirit of artistry meets structured expertise. This academy is dedicated to transforming passionate individuals into professional tattoo artists, driven by creativity and anchored by industry-leading standards. Whether just embarking on a journey or seeking to elevate a seasoned skillset, every student receives personalized guidance from internationally recognized instructors.
            </p>
            
            <p className="text-lg mb-8">
              Our immersive programs span the full spectrum of tattoo art, from foundational practices to advanced specializations. Each curriculum is crafted to foster artistic innovation, technical mastery, and rigorous hygiene protocols reflecting global standards. The learning environment is nurturing yet challenging, merging theory, live demonstrations, and extensive hands-on training.
            </p>
            
            <p className="text-lg mb-8">
              We emphasize not only technical skills but also design thinking, artistic integrity, and client collaboration. Our academy helps students develop stunning portfolios and instills professional ethics, preparing them for a successful and responsible career. With limited batch sizes and a mentorship-driven approach, every learner is assured personal attention and a supportive atmosphere that encourages creative risk-taking.
            </p>
            
            <p className="text-lg mb-12">
              The 24K Tattoo Academy is more than a learning space—it's a destination for those ready to reshape body art, express stories on skin, and define their place in the industry. Begin your journey with us, where every course is a step toward mastery and every experience is gilded with possibility.
            </p>
          </div>

          {/* Course Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <Link 
              to="/tattoo-academy/short-term-courses"
              className="bg-minimal-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-minimal-border group"
            >
              <h3 className="text-2xl font-bold text-minimal-black mb-4 group-hover:text-accent-gold transition-colors">
                Short Term Courses
              </h3>
              <p className="text-minimal-gray leading-relaxed">
                Intensive modules providing high-impact training for hobbyists and professionals seeking core tattooing skills in a condensed timeframe.
              </p>
              <div className="mt-6 text-accent-gold font-medium group-hover:underline">
                Learn More →
              </div>
            </Link>

            <Link 
              to="/tattoo-academy/basic-courses"
              className="bg-minimal-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-minimal-border group"
            >
              <h3 className="text-2xl font-bold text-minimal-black mb-4 group-hover:text-accent-gold transition-colors">
                Basic Tattoo Courses
              </h3>
              <p className="text-minimal-gray leading-relaxed">
                Gateway to professional artistry—a meticulously structured program for beginners determined to excel in the tattoo industry.
              </p>
              <div className="mt-6 text-accent-gold font-medium group-hover:underline">
                Learn More →
              </div>
            </Link>

            <Link 
              to="/tattoo-academy/pro-courses"
              className="bg-minimal-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-minimal-border group"
            >
              <h3 className="text-2xl font-bold text-minimal-black mb-4 group-hover:text-accent-gold transition-colors">
                Pro Tattoo Courses
              </h3>
              <p className="text-minimal-gray leading-relaxed">
                Advanced program for artists aspiring to push boundaries and become industry leaders with mastery in specialized techniques.
              </p>
              <div className="mt-6 text-accent-gold font-medium group-hover:underline">
                Learn More →
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent-gold py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-minimal-black mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-minimal-black mb-8">
            Join the 24K Tattoo Academy and transform your passion into professional expertise.
          </p>
          <Link 
            to="/book-now"
            className="inline-block bg-minimal-black text-minimal-white px-8 py-4 font-medium hover:bg-charcoal-text transition-colors duration-200"
          >
            CONTACT US TODAY
          </Link>
        </div>
      </section>
    </div>
  );
}