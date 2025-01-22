import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Features from '@/components/Pro';

export default function Contact(){
    return (
        <div>
                  <div className="relative h-[300px] w-full">
      <div className="absolute inset-0">
        <Image
          src="/images/sp.png" 
          alt="Blog banner background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        
        <div className="absolute inset-0 "></div>
      </div>

      
      <div className="relative h-full max-w-6xl mx-auto px-4">
        
        <div className="flex justify-center pt-8">
          <svg 
            viewBox="0 0 24 24" 
            className="w-12 h-12 text-amber-500"
            fill="currentColor"
          >
            <path d="M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2z" />
          </svg>
        </div>

        <div className="text-center text-black mt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
          
         
          <nav className="flex justify-center items-center space-x-2 text-sm md:text-base">
            <Link href="/" className="hover:text-amber-500 transition-colors">
              Home
            </Link>
            <span className="text-black">›</span>
            <span className="text-black">Contact</span>
          </nav>
        </div>
      </div>
    </div>   
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Get In Touch With Us</h1>
          <p className="text-gray-600 text-center mb-12 px-4">
            For More Information About Our Product & Services. Please Feel Free To Drop Us
            An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
    
          <div className="grid md:grid-cols-2 gap-12">
            
            <div className="space-y-8">
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-bold text-xl mb-2">Address</h2>
                  <p className="text-gray-600">236 5th SE Avenue, New York NY10000, United States</p>
                </div>
              </div>
    
         
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-bold text-xl mb-2">Phone</h2>
                  <p className="text-gray-600">Mobile: +(84) 546-6789</p>
                  <p className="text-gray-600">Hotline: +(84) 456-6789</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-bold text-xl mb-2">Working Time</h2>
                  <p className="text-gray-600">Monday-Friday: 9:00 - 22:00</p>
                  <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
                </div>
              </div>
            </div>
    

            <form  className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Abc"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                />
              </div>
    
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Abc@def.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                />
              </div>
    
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="This is an optional"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                />
              </div>
    
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Hi! I'd like to ask about"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                />
              </div>
    
              <button
                type="submit"
                className="w-fit bg-amber-500 text-white py-3 px-20 rounded-lg hover:bg-amber-700 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <Features/>
        </div>
      );
    
}

