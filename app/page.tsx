"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import Image from "next/image"
import { BookOpen, Zap, Layout, Mail, Video, Newspaper, Lightbulb, TrendingUp } from "lucide-react"

export default function ScrollCards() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    mass: 1,
  })

  const cards = [
    {
      title: "Vast Topic Selection",
      icon: BookOpen,
      description: "Choose from hundreds of topics or suggest your own. From tech to arts, we've got you covered.",
      image: "/images/image1.jpg",
    },
    {
      title: "Customizable Content",
      icon: Zap,
      description: "Tailor your daily emails with the content you want: videos, news, tips, or in-depth articles.",
      image: "/images/image2.jpg",
    },
    {
      title: "Smart Management Platform",
      icon: Layout,
      description:
        "Access your personalized dashboard to track progress, save favorite content, and manage your learning journey.",
      image: "/images/image3.jpg",
    },
    {
      title: "Daily Learning, Lasting Growth",
      icon: Mail,
      description:
        "Receive bite-sized, engaging content every day. Build your knowledge consistently and see your skills improve over time.",
      image: "/images/image4.jpg",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sectionHeight = window.innerHeight * 0.8
      const newIndex = Math.min(
        cards.length - 1,
        Math.max(0, Math.floor((window.scrollY + sectionHeight / 2) / sectionHeight))
      )
      setActiveIndex(newIndex)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl md:text-2xl font-bold flex items-center gap-2">
            <div className="relative">
              <span className="text-[#FFD700] animate-pulse-gold">Skills</span>
              <span className="text-white">letter</span>
              <div className="absolute inset-0 bg-gradient-radial from-yellow-400 to-transparent opacity-75 blur-sm animate-pulse"></div>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#how-it-works" className="text-white/80 hover:text-white transition-colors">
              How It Works
            </Link>
            <button className="golden-button">Join Waitlist</button>
          </div>
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src={isMobile ? "/images/baner_mobile.png" : "/images/baner_bw.png"}
            alt="Learning concept"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/90"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 title-shadow"
          >
            Craft Your
            <span className="text-[#FFD700]"> Learning Journey</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 mb-8"
          >
            Personalized daily content. Endless topics. Your pace, your way.
          </motion.p>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-[#FFD700] transition-all w-full sm:w-auto"
              required
            />
            <button type="submit" className="golden-button w-full sm:w-auto">
              Start Learning Now
            </button>
          </motion.form>
        </div>
      </section>
      {/* Platform Explanation Section */}
      <section ref={containerRef} className="py-20 px-4 bg-black relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FFD700]/5 via-transparent to-transparent opacity-20"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Discover Skillsletter</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Your personalized learning journey, tailored to your interests and delivered daily
          </p>
        </motion.div>

        <div className="relative flex flex-col items-center">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className={`relative flex items-center w-full max-w-4xl bg-white/5 backdrop-blur-sm rounded-xl p-6 border transition-all duration-500 ${
                activeIndex === index
                  ? "border-[#FFD700] shadow-lg shadow-[#FFD700]/20 scale-105"
                  : "border-[#FFD700]/20 opacity-50"
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: activeIndex === index ? 1 : 0.3, y: activeIndex === index ? 0 : 30 }}
              transition={{ duration: 0.8 }}
              style={{
                position: "sticky",
                top: "30vh",
              }}
            >
              <motion.div
                className="absolute inset-0 z-[-1] flex justify-center items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: activeIndex === index ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={card.image}
                  alt={`Platform Preview ${index + 1}`}
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                {React.createElement(card.icon, {
                  className: `w-6 h-6 ${activeIndex === index ? "text-[#FFD700]" : "text-[#FFD700]/50"} mr-2`,
                })}
                {card.title}
              </h3>
              <p className="text-white/70">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-black via-gray-900/95 to-black"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FFD700]/10 via-transparent to-transparent opacity-50"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How Skillsletter Works</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Embark on a personalized learning journey in three simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm rounded-2xl p-8 border border-[#FFD700]/10 overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#FFD700]/10 rounded-full blur-3xl group-hover:bg-[#FFD700]/20 transition-colors duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-[#FFD700]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Search className="w-8 h-8 text-[#FFD700]" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">1. Discover Your Interests</h3>
                <p className="text-white/70 mb-4">
                  Explore our vast library of topics or suggest your own. From tech to arts, find what ignites your
                  curiosity.
                </p>
                <ul className="text-white/60 space-y-2">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mr-2"></span>
                    Browse trending topics
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mr-2"></span>
                    Use AI-powered recommendations
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mr-2"></span>
                    Suggest new areas of learning
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm rounded-2xl p-8 border border-[#FFD700]/10 overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#FFD700]/10 rounded-full blur-3xl group-hover:bg-[#FFD700]/20 transition-colors duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-[#FFD700]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Sliders className="w-8 h-8 text-[#FFD700]" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">2. Customize Your Experience</h3>
                <p className="text-white/70 mb-4">
                  Tailor your daily learning feed. Choose the content types and frequency that suit your lifestyle.
                </p>
                <ul className="text-white/60 space-y-2">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mr-2"></span>
                    Select content formats (articles, videos, etc.)
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mr-2"></span>
                    Set your preferred learning schedule
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mr-2"></span>
                    Adjust difficulty levels
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm rounded-2xl p-8 border border-[#FFD700]/10 overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#FFD700]/10 rounded-full blur-3xl group-hover:bg-[#FFD700]/20 transition-colors duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-[#FFD700]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Inbox className="w-8 h-8 text-[#FFD700]" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">3. Learn and Grow Daily</h3>
                <p className="text-white/70 mb-4">
                  Receive personalized content in your inbox. Track your progress and watch your knowledge expand.
                </p>
                <ul className="text-white/60 space-y-2">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mr-2"></span>
                    Get daily curated content
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mr-2"></span>
                    Interact with learning materials
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mr-2"></span>
                    Track your learning journey
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#FFD700]/20 to-transparent transform -translate-y-1/2 hidden md:block"></div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link
              href="#join-waitlist"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-bold rounded-full text-lg hover:shadow-lg hover:shadow-[#FFD700]/50 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Learning Journey
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Topics Section */}
      <section className="py-20 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FFD700]/5 via-transparent to-transparent opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Explore Your Interests</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Choose from a variety of engaging topics or suggest your own. Tailor your daily learning to what truly
              matters to you.
            </p>
          </motion.div>

          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {interestAreas.map((area) => (
                <motion.button
                  key={area.name}
                  onClick={() => setActiveArea(area)}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeArea.name === area.name
                      ? "bg-[#FFD700] text-black"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {React.createElement(area.icon, { className: "inline-block w-5 h-5 mr-2" })}
                  {area.name}
                </motion.button>
              ))}
            </div>

            <motion.div
              key={activeArea.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
            >
              {activeArea.topics.map((topic, index) => (
                <motion.div
                  key={topic}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm rounded-xl p-4 border border-[#FFD700]/20 hover:border-[#FFD700]/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="text-white text-center group-hover:text-[#FFD700] transition-colors">{topic}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button
              onClick={() => setShowAllTopics(!showAllTopics)}
              className="px-8 py-3 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-semibold rounded-full hover:shadow-lg hover:shadow-[#FFD700]/50 transition-all duration-300 transform hover:scale-105"
            >
              {showAllTopics ? "Hide All Areas" : "Show All Areas"}
            </button>
          </motion.div>

          {showAllTopics && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {interestAreas.flatMap((area) =>
                area.topics.map((topic) => (
                  <div
                    key={`${area.name}-${topic}`}
                    className="bg-white/5 rounded-lg p-3 text-white/80 text-sm hover:bg-white/10 transition-colors duration-300"
                  >
                    {topic}
                  </div>
                )),
              )}
              <div className="bg-gradient-to-br from-[#FFD700]/20 to-transparent backdrop-blur-sm rounded-lg p-3 text-[#FFD700] text-sm flex items-center justify-center cursor-pointer hover:from-[#FFD700]/30 transition-colors duration-300">
                <Plus className="w-4 h-4 mr-2" />
                Suggest a New Topic
              </div>
            </motion.div>
          )}
        </div>
      </section>
      {/* Content Blocks Section */}
      <section className="py-20 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at-top,_var(--tw-gradient-stops))] from-[#FFD700]/5 via-transparent to-transparent opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Build Your Perfect Daily Email</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Mix and match content blocks to create your ideal learning experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {contentBlocks.map((block, index) => (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm rounded-2xl p-6 hover:from-white/10 transition-all duration-500 border border-[#FFD700]/10 hover:border-[#FFD700]/30"
              >
                <div className="relative z-10">
                  {block.icon &&
                    React.createElement(block.icon, {
                      className:
                        "w-12 h-12 text-[#FFD700]/80 mb-4 transform group-hover:scale-110 transition-transform duration-500",
                    })}
                  <h3 className="text-xl font-semibold text-white mb-2">{block.title}</h3>
                  <p className="text-white/70 text-sm">{block.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Your Learning Platform</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              More than just emails - a complete system to manage your learning journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  {" "}
                  <div className="w-12 h-12 rounded-xl bg-[#FFD700]/10 flex items-center justify-center flex-shrink-0">
                    {React.createElement(feature.icon, {
                      className: "w-6 h-6 text-[#FFD700]",
                    })}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-white/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#FFD700]/10 to-transparent rounded-2xl blur-md group-hover:blur-lg transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-xl p-6 border border-[#FFD700]/20">
                <div className="aspect-video bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-lg overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pdv2d1gL3wxZf1wURDtLrGj6d5NYGc.png"
                    alt="Skillsletter Dashboard Preview"
                    width={1200}
                    height={675}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start Your Learning Journey</h2>
            <p className="text-white/70 mb-8">
              Join our waitlist to be among the first to experience personalized learning.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-[#FFD700] transition-all"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="w-full px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-[#FFD700] transition-all"
                required
              />
              <button type="submit" className="golden-button w-full">
                Join Waitlist
              </button>
            </form>
          </motion.div>
        </div>
      </section>
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/50 text-sm">© 2025 Skillsletter. All rights reserved.</p>
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
            <Link href="/privacy" className="text-white/50 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/50 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

