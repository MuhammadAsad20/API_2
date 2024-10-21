"use client";

import { motion } from 'framer-motion';
import { FaBullhorn, FaPencilRuler, FaSearch, FaGlobe, FaPaintBrush, FaFileAlt, FaChartLine } from 'react-icons/fa';
import { useState } from 'react';

const services = [
  {
    icon: <FaBullhorn size={40} className="text-yellow-500" />,
    title: 'Digital Marketing',
    description: `In order to improve your online presence and generate results, Virtual Crafters provides a full range of digital marketing services. Our knowledgeable team has expertise in *content creation*, **social media marketing** 📱, **PPC advertising** 💰, SEO 🔍, and more. We customize our services to your unique needs, assisting you in productively reaching and engaging your target audience 🎯 while maximizing your online visibility 🌐 and return on investment (ROI) 🤑.`
  },
  {
    icon: <FaSearch size={40} className="text-blue-500" />,
    title: 'SEO',
    description: `To help your company move up the search engine results pages 📊 and increase organic website traffic 🚦, Virtual Crafters offers professional **SEO services**. We conduct in-depth keyword research 🔑, optimize on-page content ✍️, improve website structure 🏗️, and create high-quality backlinks 🔗. Our SEO strategies are data-driven, and we ensure that your website ranks higher on search engines, driving more targeted traffic and improving your online visibility 🌍.`
  },
  {
    icon: <FaFileAlt size={40} className="text-green-500" />,
    title: 'Content Writing',
    description: `Virtual Crafters provides exceptional content writing services 📝 that are adapted to your unique requirements. Our talented team of writers produces high-quality, compelling, and **SEO-optimized content** for *websites*, *blogs*, *social media*, and more. Whether you need engaging articles 📰, persuasive copy for product descriptions, or captivating storytelling for your brand, our content drives meaningful engagement and ensures your message resonates with your audience. We help you connect with readers and establish authority through well-crafted content.`
  },
  {
    icon: <FaPaintBrush size={40} className="text-pink-500" />,
    title: 'Graphic Designing',
    description: `Virtual Crafters offers innovative graphic design solutions that elevate your brand's visual identity. Our creative team specializes in *animated logos* 🖌️, brochure designs 📰, and marketing materials that truly make your company stand out. Whether it's a fresh logo design 🏷️ or an animated version of your existing one, we ensure your brand resonates with your target audience 🎯 through captivating visuals. From print to digital, our designs speak your brand language and communicate your values visually 💼.`
  },
  {
    icon: <FaChartLine size={40} className="text-red-500" />,
    title: 'UI / UX Design',
    description: `Our UI/UX design services focus on understanding your users' needs 👥 and behaviors, ensuring that every interaction with your product is intuitive and enjoyable 🎯. We create **user interfaces** that are not only visually appealing ✨ but also enhance usability, driving engagement and conversion rates 💡. By following *user-centered design* principles, we make sure that your website or application delivers a seamless experience from start to finish 🚀.`
  },
  {
    icon: <FaPencilRuler size={40} className="text-purple-500" />,
    title: 'Animation',
    description: `At Virtual Crafters, our mission is to create highly effective and tailored animation plans that align with your business goals. Our expertise lies in producing captivating **2D** and **3D animations** 🖼️ that leave a lasting impression on your audience. From animating existing logos 🌀 to crafting entirely new ones, our creative solutions ensure your brand stands out in a competitive marketplace. Whether for ads, product showcases, or explainer videos, our animations captivate audiences and communicate your message effectively 💡.`
  },
  {
    icon: <FaGlobe size={40} className="text-orange-500" />,
    title: 'Web Design & Development',
    description: `We are your trusted partner for *web design* and *development services*. At Virtual Crafters, we focus on creating **visually stunning** and *highly functional* websites that leave a lasting impact 💻. Our mission is to build websites that not only look great but also perform exceptionally in today’s competitive digital landscape. From e-commerce platforms 🛒 to informational websites, we ensure your site is responsive 📱, user-friendly 👥, and optimized for search engines 🔍.`
  }
];

const OurServices = () => {
  return (
    <div className="container mx-auto p-10 bg-[#000319] text-gray-400">
      <motion.h2 
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-center my-12 text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Services
      </motion.h2>
      <motion.p 
        className="text-base sm:text-xl md:text-xl leading-relaxed mb-8 sm:mb-12 text-gray-100 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        We Help You To Build High-Quality Digital Solutions And Products As Well As Deliver A Wide Range Of Related Professional Services. We Are Providing World-Class Service To Our Clients.
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

const ServiceCard = ({ service, index }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <motion.div
      className="p-6 bg-[#1A1A2E] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.1 }}
      whileHover={{ scale: 1.06 }}
    >
      <div className="flex justify-center mb-4">
        {service.icon}
      </div>
      <h3 className="text-2xl font-semibold mb-3 text-center text-white">{service.title}</h3>
      <p className="text-gray-200 text-justify">
        {showFullDescription ? service.description : `${service.description.slice(0, 100)}...`}
      </p>
      <button
        className="mt-2 text-purple-300 hover:underline focus:outline-none"
        onClick={toggleDescription}
      >
        {showFullDescription ? 'Read Less' : 'Read More'}
      </button>
    </motion.div>
  );
};

export default OurServices;
