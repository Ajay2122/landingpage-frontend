import React from 'react';
import { FaUserTie, FaRocket, FaLayerGroup, FaShieldHalved } from 'react-icons/fa6';

const features = [
  {
    icon: FaUserTie,
    title: 'Senior Engineers',
    description: 'Top 5% vetted developers with real production experience',
    topBar: 'from-[#6318F1] to-[#3F5EFB]',
    iconColor: 'text-[#6318F1]',
  },
  {
    icon: FaRocket,
    title: 'Fast Delivery',
    description: 'Rapid execution with optimized workflows',
    topBar: 'from-[#FC466B] to-[#6318F1]',
    iconColor: 'text-[#FC466B]',
  },
  {
    icon: FaLayerGroup,
    title: 'Scalable Teams',
    description: 'Easily scale teams based on project needs',
    topBar: 'from-[#3F5EFB] to-[#59D3AA]',
    iconColor: 'text-[#3F5EFB]',
  },
  {
    icon: FaShieldHalved,
    title: 'Secure by Design',
    description: 'Security-first architecture and implementation',
    topBar: 'from-[#59D3AA] to-[#6318F1]',
    iconColor: 'text-[#59D3AA]',
  },
];

const FeatureCard = ({ feature }) => {
  const Icon = feature.icon;
  return (
    <div className='group relative bg-[#110D2E] rounded-2xl p-8 flex flex-col items-center text-center gap-5 border border-white/5 hover:border-[#6318F1]/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_40px_rgba(99,24,241,0.18)]'>
      <div className={`absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-gradient-to-r ${feature.topBar}`} />
      <div className={`${feature.iconColor} bg-[#050023] p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
        <Icon size={34} />
      </div>
      <h3 className='text-white text-xl font-semibold tracking-wide'>{feature.title}</h3>
      <p className='text-gray-400 text-sm leading-relaxed'>{feature.description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className='container mx-auto px-6 py-20'>
      <div className='flex flex-col items-center text-center mb-14'>
        <span className='text-[#59D3AA] text-xs uppercase tracking-[0.2em] font-semibold mb-3'>Why Choose Us</span>
        <h2 className='text-white text-3xl lg:text-4xl font-bold max-w-xl leading-tight'>
          Built by Experts.{' '}
          <span className='bg-gradient-to-r from-[#FC466B] to-[#3F5EFB] bg-clip-text text-transparent'>
            Delivered with Excellence.
          </span>
        </h2>
        <p className='text-gray-400 mt-4 max-w-lg text-sm leading-relaxed'>
          We combine deep technical expertise with agile delivery to help your business grow faster and smarter.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
