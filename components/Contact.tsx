import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import FadeInSection from './FadeInSection';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6 lg:px-12 bg-[#f5f8fd]">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <h2 className="text-3xl font-bold font-heading text-[#173b6c] relative pb-4 mb-12 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-primary">
            Contact
          </h2>

          <div className="flex justify-center">
            <div className="space-y-8 w-full max-w-3xl">
              <div className="bg-white p-8 rounded-lg shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="bg-blue-100 p-3 rounded-full text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#173b6c] mb-2">Location:</h4>
                  <p className="text-gray-600">Eluru, Andhra Pradesh, India</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="bg-blue-100 p-3 rounded-full text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#173b6c] mb-2">Email:</h4>
                  <p className="text-gray-600">harivenkatcm048@gmail.com</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="bg-blue-100 p-3 rounded-full text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#173b6c] mb-2">Call:</h4>
                  <p className="text-gray-600">+91 9347892915</p>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Contact;