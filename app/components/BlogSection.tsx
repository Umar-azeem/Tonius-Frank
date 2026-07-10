// // app/components/HeroSection.tsx
// 'use client';

// import { useEffect, useRef } from 'react';
// import { motion, useAnimation, useInView } from 'framer-motion';
// import Image from 'next/image';

// // Animation variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//       delayChildren: 0.1
//     }
//   }
// };

// const itemVariants = {
//   hidden: { y: 30, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       type: "spring",
//       damping: 15,
//       stiffness: 100,
//       duration: 0.8
//     }
//   }
// };

// const fadeInLeftVariants = {
//   hidden: { x: -50, opacity: 0 },
//   visible: {
//     x: 0,
//     opacity: 1,
//     transition: {
//       type: "spring",
//       damping: 12,
//       stiffness: 80,
//       duration: 0.8
//     }
//   }
// };

// const fadeInRightVariants = {
//   hidden: { x: 50, opacity: 0 },
//   visible: {
//     x: 0,
//     opacity: 1,
//     transition: {
//       type: "spring",
//       damping: 12,
//       stiffness: 80,
//       duration: 0.8,
//       delay: 0.2
//     }
//   }
// };

// const floatAnimation = {
//   y: [0, -10, 0],
//   transition: {
//     duration: 3,
//     repeat: Infinity,
//     ease: "easeInOut"
//   }
// };

// const pulseAnimation = {
//   scale: [1, 1.05, 1],
//   transition: {
//     duration: 2,
//     repeat: Infinity,
//     ease: "easeInOut"
//   }
// };

// // Services data
// const services = [
//   {
//     id: 1,
//     title: "100% Financing",
//     description: "FHA and USDA loan options for qualified borrowers.",
//     icon: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v1m0 1v1m0 1v1m0 1v1m0 1v1" />
//       </svg>
//     )
//   },
//   {
//     id: 2,
//     title: "VA Loans",
//     description: "Special programs for veterans and surviving spouses.",
//     icon: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//       </svg>
//     )
//   },
//   {
//     id: 3,
//     title: "Conventional Loans",
//     description: "Up to 97% financing for qualified buyers.",
//     icon: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//       </svg>
//     )
//   },
//   {
//     id: 4,
//     title: "Refinancing Options",
//     description: "Both rate-and-term and cash-out options to help you save money, pay off debt, or upgrade your home.",
//     icon: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
//       </svg>
//     )
//   },
//   {
//     id: 5,
//     title: "Non-Traditional Products",
//     description: "Solutions for investors (DSCR) and self-employed clients (Bank Statement only loans) who need specialized qualification methods.",
//     icon: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//       </svg>
//     )
//   },
//   {
//     id: 6,
//     title: "Down-Payment Assistance",
//     description: "Programs with flexible criteria—no income limits and no first-time homebuyer requirement.",
//     icon: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
//       </svg>
//     )
//   }
// ];

// // Feature cards data (repeated for the two sections)
// const featureCards = [
//   {
//     id: 1,
//     title: "Home Purchases & Refinances",
//     description: "I'm your About section. Click to edit and share your experience with residential, investment, and commercial real estate, market trends, and the real estate buying and selling process. Additionally, I can assist you with home financing options, mortgage services, and refinancing options to help make your transactions smoother.",
//     icon: (
//       <svg className="w-12 h-12" fill="none" stroke="#006132" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 11h8m-8 4h6" />
//       </svg>
//     )
//   },
//   {
//     id: 2,
//     title: "Home Purchases & Refinances",
//     description: "I'm your About section. Click to edit and share your experience with residential, investment, and commercial real estate, market trends, and the real estate buying and selling process. Additionally, I can assist you with home financing options, mortgage services, and refinancing options to help make your transactions smoother.",
//     icon: (
//       <svg className="w-12 h-12" fill="none" stroke="#006132" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 11h8m-8 4h6" />
//       </svg>
//     )
//   }
// ];

// export default function BlogSectio() {
//   const controls = useAnimation();
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.1 });
//   const networkRef = useRef(null);
//   const networkInView = useInView(networkRef, { once: true, amount: 0.2 });

//   useEffect(() => {
//     if (isInView) {
//       controls.start('visible');
//     }
//   }, [controls, isInView]);

//   return (
//     <section className="relative overflow-hidden bg-[#F8F8F9] py-16 md:py-24 lg:py-32">
//       {/* Decorative Background Elements */}
//       <div className="absolute inset-0 -z-10 overflow-hidden">
//         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#006132]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
//         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#006132]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
//         {/* Grid Pattern */}
//         <svg className="absolute inset-0 w-full h-full opacity-[0.03]" aria-hidden="true">
//           <defs>
//             <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
//               <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#006132" strokeWidth="0.5" />
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#grid-pattern)" />
//         </svg>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Main Content - Two Column Layout */}
//         <motion.div
//           ref={ref}
//           variants={containerVariants}
//           initial="hidden"
//           animate={controls}
//           className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
//         >
//           {/* Left Column */}
//           <motion.div variants={fadeInLeftVariants} className="space-y-8">
//             {/* Badge */}
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="inline-flex items-center gap-2 bg-[#006132] text-white px-4 py-2 rounded-full text-sm font-semibold"
//             >
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//               </svg>
//               Home Purchases & Refinances
//             </motion.div>

//             {/* Title */}
//             <motion.h1 
//               variants={itemVariants}
//               className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
//             >
//               <span className="text-[#006132]">Tonius Frank</span>
//               <br />
//               <span className="text-gray-800">The Mortgage Wizard</span>
//             </motion.h1>

//             {/* Description */}
//             <motion.p 
//               variants={itemVariants}
//               className="text-base md:text-lg text-gray-700 leading-relaxed"
//             >
//               Tonius Frank, a broker partner with The Mortgage Disrupters, is dedicated to simplifying your home financing journey. Affectionately known as <span className="font-semibold text-[#006132]">"The Mortgage Wizard,"</span> Tonius leverages over <span className="font-semibold text-[#006132]">25 years</span> of experience in mortgage services to help clients navigate the path to closing. He is committed to providing unrivaled customer service, speed, and market knowledge to help you achieve your mortgage goals.
//             </motion.p>

//             {/* CTA Buttons */}
//             <motion.div 
//               variants={itemVariants}
//               className="flex flex-wrap gap-4 pt-4"
//             >
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-3 bg-[#006132] text-white font-semibold rounded-full hover:bg-[#005228] transition-all duration-300 shadow-lg shadow-[#006132]/30 hover:shadow-[#006132]/50"
//               >
//                 Get Started
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.05, x: 5 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-3 bg-white text-[#006132] font-semibold rounded-full border-2 border-[#006132] hover:bg-[#006132]/5 transition-all duration-300"
//               >
//                 Learn More
//                 <svg className="inline-block w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                 </svg>
//               </motion.button>
//             </motion.div>

//             {/* Trust Indicators */}
//             <motion.div 
//               variants={itemVariants}
//               className="flex items-center gap-6 pt-4"
//             >
//               <div className="flex -space-x-2">
//                 {[1, 2, 3, 4].map((i) => (
//                   <div key={i} className="w-10 h-10 rounded-full bg-[#006132]/20 border-2 border-white flex items-center justify-center text-[#006132] font-bold text-xs">
//                     {String.fromCharCode(64 + i)}
//                   </div>
//                 ))}
//               </div>
//               <div>
//                 <p className="text-sm font-semibold text-gray-900">Trusted by 1000+</p>
//                 <p className="text-xs text-gray-500">Happy homeowners</p>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Right Column - Image/Visual */}
//           <motion.div 
//             variants={fadeInRightVariants}
//             className="relative lg:sticky lg:top-8"
//           >
//             <div className="relative">
//               {/* Main Image Container */}
//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ type: "spring", damping: 20, stiffness: 150 }}
//                 className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#006132]/20"
//               >
//                 <div className="aspect-[4/3] bg-gradient-to-br from-[#006132] to-[#004826] relative">
//                   {/* Decorative elements inside image */}
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="text-center text-white p-8">
//                       <svg className="w-24 h-24 mx-auto mb-4 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//                       </svg>
//                       <h3 className="text-2xl font-bold text-white">The Mortgage Wizard</h3>
//                       <p className="text-white/80 mt-2">25+ Years of Excellence</p>
//                     </div>
//                   </div>
                  
//                   {/* Floating badges */}
//                   <motion.div
//                     animate={floatAnimation}
//                     className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
//                   >
//                     <div className="flex items-center gap-2">
//                       <div className="w-3 h-3 bg-[#006132] rounded-full animate-pulse" />
//                       <span className="text-sm font-semibold text-gray-900">25+ Years</span>
//                     </div>
//                   </motion.div>

//                   <motion.div
//                     animate={floatAnimation}
//                     transition={{ delay: 0.5 }}
//                     className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
//                   >
//                     <div className="flex items-center gap-2">
//                       <svg className="w-5 h-5 text-[#006132]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                       </svg>
//                       <span className="text-sm font-semibold text-gray-900">100% Satisfaction</span>
//                     </div>
//                   </motion.div>
//                 </div>
//               </motion.div>

//               {/* Decorative circles */}
//               <motion.div
//                 animate={pulseAnimation}
//                 className="absolute -top-4 -right-4 w-24 h-24 bg-[#006132]/10 rounded-full -z-10"
//               />
//               <motion.div
//                 animate={pulseAnimation}
//                 transition={{ delay: 0.5 }}
//                 className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#006132]/10 rounded-full -z-10"
//               />
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Services Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           viewport={{ once: true }}
//           className="mt-20 md:mt-24"
//         >
//           <div className="text-center mb-12">
//             <motion.h2 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
//             >
//               A Wide Range of Solutions to Fit Your Needs
//             </motion.h2>
//             <motion.div 
//               initial={{ opacity: 0, width: 0 }}
//               whileInView={{ opacity: 1, width: "80px" }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="h-1 bg-[#006132] mx-auto rounded-full"
//             />
//           </div>
//         </motion.div>

//         {/* Feature Cards Section - Two Cards with Network Icon */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8"
//         >
//           {featureCards.map((card, index) => (
//             <motion.div
//               key={card.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.15 }}
//               viewport={{ once: true }}
//               whileHover={{ 
//                 y: -8,
//                 transition: { type: "spring", damping: 12, stiffness: 120 }
//               }}
//               className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
//             >
//               {/* Background decoration */}
//               <div className="absolute top-0 right-0 w-32 h-32 bg-[#006132]/5 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2" />
              
//               <div className="relative">
//                 {/* Icon with network visualization */}
//                 <div className="flex items-start gap-6">
//                   <motion.div 
//                     animate={floatAnimation}
//                     className="flex-shrink-0 p-4 bg-[#F8F8F9] rounded-2xl group-hover:bg-[#006132]/5 transition-colors duration-300"
//                   >
//                     {card.icon}
//                   </motion.div>
                  
//                   {/* Network lines decoration */}
//                   <div className="flex-1">
//                     <div className="flex items-center gap-3 mb-4">
//                       <div className="flex-1 h-px bg-gradient-to-r from-[#006132]/20 to-transparent" />
//                       <svg className="w-4 h-4 text-[#006132]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                       </svg>
//                     </div>
                    
//                     <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#006132] transition-colors duration-300">
//                       {card.title}
//                     </h3>
//                     <p className="text-gray-600 text-sm leading-relaxed">
//                       {card.description}
//                     </p>
                    
//                     {/* Network nodes */}
//                     <div className="mt-4 flex items-center gap-2">
//                       {[1, 2, 3, 4, 5].map((node) => (
//                         <motion.div
//                           key={node}
//                           animate={{
//                             scale: [1, 1.2, 1],
//                             opacity: [0.5, 1, 0.5]
//                           }}
//                           transition={{
//                             duration: 2,
//                             delay: node * 0.3,
//                             repeat: Infinity
//                           }}
//                           className="w-2 h-2 rounded-full bg-[#006132]"
//                         />
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Bottom CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="mt-20 text-center bg-[#006132] rounded-3xl p-10 md:p-14 relative overflow-hidden"
//         >
//           <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
//           <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
//           <div className="relative z-10">
//             <motion.h3 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="text-2xl md:text-3xl font-bold text-white mb-4"
//             >
//               Ready to Start Your Mortgage Journey?
//             </motion.h3>
//             <motion.p 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="text-white/80 mb-8 max-w-2xl mx-auto"
//             >
//               Let Tonius Frank, The Mortgage Wizard, guide you through the process with over 25 years of expertise.
//             </motion.p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-10 py-4 bg-white text-[#006132] font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg shadow-black/20"
//             >
//               Schedule a Consultation
//             </motion.button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }