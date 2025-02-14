"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  BookOpen,
  Zap,
  Layout,
  Video,
  Newspaper,
  Lightbulb,
  Menu,
  TrendingUp,
  Globe,
  User,
  Cpu,
  Users,
  Heart,
  Plus,
  Sparkles,
  Brain,
  BarChart2,
  Layers,
  Target,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import React from "react"

const GeometricDecoration = ({ className = "" }: { className?: string }) => {
  const size = Math.floor(Math.random() * 40) + 20 // Random size between 20 and 60
  const rotation = Math.floor(Math.random() * 360) // Random rotation
  

  return (
    <div
      className={`absolute ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `rotate(${rotation}deg)`,
      }}
    ></div>
  )
}

const topicCategories = {
  Marketing: ["Digital Marketing", "Content Strategy", "Social Media", "Brand Building", "Marketing Analytics"],
  Politics: ["International Relations", "Public Policy", "Political Theory", "Current Affairs", "Government Systems"],
  "Personal Development": ["Self-Improvement", "Productivity", "Mindfulness", "Goal Setting", "Emotional Intelligence"],
  "AI & Technology": ["Machine Learning", "Web Development", "Cybersecurity", "Cloud Computing", "Mobile Development"],
  Parenting: ["Child Development", "Education", "Family Health", "Positive Discipline", "Work-Life Balance"],
  "Health & Wellness": ["Mental Health", "Nutrition", "Fitness", "Meditation", "Stress Management"],
}

const features = [
  {
    title: "Vast Topic Selection",
    description: "Choose from hundreds of topics or suggest your own. From tech to arts, we've got you covered.",
    icon: BookOpen,
    image: "/placeholder.svg?height=400&width=601",
    color: "from-[#FFD700]/20 to-transparent",
  },
  {
    title: "Customizable Content",
    description: "Tailor your daily emails with the content you want: videos, news, tips, or in-depth articles.",
    icon: Zap,
    image: "/placeholder.svg?height=400&width=600",
    color: "from-[#FFD700]/10 to-transparent",
  },
  {
    title: "Smart Platform",
    description: "Access your personalized dashboard to track progress and manage your learning journey.",
    icon: Layout,
    image: "/placeholder.svg?height=400&width=600",
    color: "from-[#FFD700]/15 to-transparent",
  },
]

const contentTypes = [
  { title: "Video Lessons", icon: Video, description: "Short, engaging video tutorials" },
  { title: "News Digest", icon: Newspaper, description: "Stay updated with latest trends" },
  { title: "Quick Tips", icon: Lightbulb, description: "Practical daily insights" },
  { title: "Deep Dives", icon: BookOpen, description: "Comprehensive learning materials" },
]

const mainTopics = [
  { name: "Marketing", icon: TrendingUp },
  { name: "Politics", icon: Globe },
  { name: "Personal Development", icon: User },
  { name: "AI & Technology", icon: Cpu },
  { name: "Parenting", icon: Users },
  { name: "Health & Wellness", icon: Heart },
]

export default function LandingPage() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [selectedTopic, setSelectedTopic] = useState<string>("Marketing")
  const [customTopic, setCustomTopic] = useState("")
  const [showCustomTopicInput, setShowCustomTopicInput] = useState(false)
  const [showAllTopics, setShowAllTopics] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Submitted:", { name, email })
    setName("")
    setEmail("")
    alert("Thank you for joining our waitlist!")
  }

  const handleCustomTopicSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (customTopic.trim()) {
      alert(`Thank you for suggesting "${customTopic}". We'll consider adding it to our topics!`)
      setCustomTopic("")
      setShowCustomTopicInput(false)
    }
  }

  const backgroundControls = useAnimation()

  useEffect(() => {
    backgroundControls.start({
      backgroundPosition: ["0% 0%", "100% 100%"],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      },
    })
  }, [backgroundControls])

  return (
    <div className="bg-black min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 bg-black backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex-1">
            <Link href="/" className="text-xl md:text-2xl font-bold flex items-center gap-2">
              <div className="relative">
                <span className="text-[#FFD700] animate-pulse-gold">Skills</span>
                <span className="text-white">letter</span>
                <div className="absolute inset-0 bg-gradient-radial from-yellow-400 to-transparent opacity-75 blur-sm animate-pulse"></div>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
            <Link href="#features" className="text-white/80 hover:text-white transition-colors">
              Features
            </Link>
          </div>
          <div className="flex-1 flex justify-end">
            <div className="hidden md:block">
              {/* From Uiverse.io by vinodjangid07 */}
              <button className="Btn">Join Waitlist</button>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="md:hidden text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-gray-900 border-gray-800">
                <DropdownMenuItem>
                  <Link href="#features" className="text-white/80 hover:text-white transition-colors">
                    Features
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Button className="w-full px-6 py-2 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-semibold rounded-full">
                    Join Waitlist
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        {/* Geometric decorations */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-[#FFD700]/10 rounded-2xl transform rotate-12"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 border border-[#FFD700]/20 rounded-2xl transform -rotate-12"></div>
        <div className="absolute top-1/4 right-20 w-16 h-16 bg-[#FFD700]/5 rounded-full"></div>
        <div className="absolute bottom-1/4 left-20 w-20 h-20 border border-[#FFD700]/10 rounded-full"></div>
        <GeometricDecoration className="top-1/3 left-1/4" />
        <GeometricDecoration className="bottom-1/3 right-1/4" />
        <GeometricDecoration className="top-2/3 left-1/2" />
        <GeometricDecoration className="bottom-2/3 right-1/2" />
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FFD700]/10 via-transparent to-transparent opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center relative z-20">
          <button className="uiverse mb-8">
            <div className="wrapper">
              <span>Powered By AI</span>
              <div className="circle circle-12"></div>
              <div className="circle circle-11"></div>
              <div className="circle circle-10"></div>
              <div className="circle circle-9"></div>
              <div className="circle circle-8"></div>
              <div className="circle circle-7"></div>
              <div className="circle circle-6"></div>
              <div className="circle circle-5"></div>
              <div className="circle circle-4"></div>
              <div className="circle circle-3"></div>
              <div className="circle circle-2"></div>
              <div className="circle circle-1"></div>
            </div>
          </button>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 mt-2 leading-tight">
              Craft Your
              <span className="text-[#FFD700]"> Learning Journey</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Personalized daily content. Endless topics. Your pace, your way.
            </p>
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="flex flex-col items-center gap-4"
            >
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-[#FFD700] transition-all w-full max-w-md"
                required
              />
              {/* From Uiverse.io by vinodjangid07 */}
              <button className="Btn">Start Learning now</button>
            </motion.form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Learning Illustration"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FFD700]/5 via-transparent to-transparent opacity-20"></div>
        <GeometricDecoration className="top-10 left-10" />
        <GeometricDecoration className="bottom-10 right-10" />
        <GeometricDecoration className="top-1/2 left-1/4" />
        <GeometricDecoration className="bottom-1/2 right-1/4" />
        <div className="max-w-7xl mx-auto px-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid md:grid-cols-2 gap-8 md:gap-20 items-center mb-24 ${index % 2 === 0 ? "md:grid-flow-dense" : ""}`}
            >
              <div className={`relative ${index % 2 === 0 ? "md:order-last md:-mr-8" : "md:-ml-8"}`}>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image src={feature.image || "/placeholder.svg"} alt={feature.title} fill className="object-cover" />
                </div>
                {/* Geometric decorations */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#FFD700]/10 rounded-lg transform rotate-12"></div>
                <div className="absolute -top-4 -left-4 w-24 h-24 border border-[#FFD700]/20 rounded-lg transform -rotate-12"></div>
              </div>

              <div className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                <div className={`space-y-6 ${index % 2 === 0 ? "md:pr-0 lg:pr-8" : "md:pl-0 lg:pl-8"} max-w-lg`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-[#FFD700]/10 flex items-center justify-center">
                      {React.createElement(feature.icon, {
                        className: "w-6 h-6 text-[#FFD700]",
                      })}
                    </div>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: 100 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="h-[2px] bg-gradient-to-r from-[#FFD700]/50 to-transparent"
                    />
                  </div>

                  <h2 className="text-3xl font-bold text-white">{feature.title}</h2>

                  <p className="text-lg text-white/70">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Variety of Topics Section */}
      <section className="relative py-20 bg-black">
        <GeometricDecoration className="top-10 right-10" />
        <GeometricDecoration className="bottom-10 left-10" />
        <GeometricDecoration className="top-1/3 right-1/4" />
        <GeometricDecoration className="bottom-2/3 left-1/4" />
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Explore Your Interests</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Choose from a variety of engaging topics or suggest your own. Tailor your daily learning to what truly
              matters to you.
            </p>
          </motion.div>

          {/* Main Topics */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {mainTopics.map((topic) => (
              <motion.button
                key={topic.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSelectedTopic(topic.name)
                  setShowCustomTopicInput(false)
                }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 border ${
                  topic.name === selectedTopic
                    ? "border-[#FFD700] text-[#FFD700]"
                    : "border-white/30 text-white hover:border-white/60"
                }`}
              >
                {React.createElement(topic.icon, {
                  className: "w-5 h-5",
                })}
                <span className="font-medium">{topic.name}</span>
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowCustomTopicInput(true)}
              className={`flex items-center gap-2 px-8 py-4 rounded-full transition-all duration-300 text-lg font-bold liquid-button
  ${showCustomTopicInput ? "opacity-90" : "hover:opacity-100"}
`}
            >
              <Plus className="w-6 h-6" />
              <span className="font-bold">Custom Topic</span>
            </motion.button>
          </div>

          {/* Topic Categories or Custom Topic Input */}
          {showCustomTopicInput ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-md mx-auto mb-12"
            >
              <form onSubmit={handleCustomTopicSubmit} className="flex flex-col items-center gap-4">
                <Input
                  type="text"
                  value={customTopic}
                  onChange={(e) => setCustomTopic(e.target.value)}
                  placeholder="Enter your custom topic"
                  className="w-full px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-[#FFD700] transition-all"
                  required
                />
                <Button
                  type="submit"
                  className="px-8 py-3 bg-[#FFD700] text-black font-medium rounded-full hover:bg-[#FFD700]/90 transition-all duration-300"
                >
                  Suggest Topic
                </Button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12"
            >
              {(selectedTopic === "" || showAllTopics
                ? Object.entries(topicCategories)
                : [[selectedTopic, topicCategories[selectedTopic as keyof typeof topicCategories]]]
              ).map(([category, topics]) => (
                <React.Fragment key={category.toString()}>

                  {(selectedTopic === "" || showAllTopics) && (
                    <h3 className="col-span-full text-xl font-bold text-white mt-6 mb-2">{category}</h3>
                  )}
                  {(Array.isArray(topics) ? topics : []).map((topic, index) => (

                    <motion.div
                      key={`${category}-${topic}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <motion.button
                        whileHover={{ scale: 1.05, borderColor: "#FFD700" }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full h-16 px-2 py-1 rounded-lg border border-[#FFD700]/30 bg-white/5 text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center text-center"
                      >
                        <span className="text-xs">{topic}</span>
                      </motion.button>
                    </motion.div>
                  ))}
                </React.Fragment>
              ))}
            </motion.div>
          )}

          {/* Show All Button */}
          {!showCustomTopicInput && (
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAllTopics(!showAllTopics)}
                className="px-8 py-3 bg-[#FFD700] text-black font-medium rounded-full hover:bg-[#FFD700]/90 transition-all duration-300"
              >
                {showAllTopics ? "Hide Topics" : "Show All Areas"}
              </motion.button>
            </div>
          )}
        </div>
      </section>

      {/* Content Types Section */}
      <section className="relative py-20 bg-black/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FFD700]/5 via-transparent to-transparent opacity-20"></div>
        <GeometricDecoration className="top-1/4 left-10" />
        <GeometricDecoration className="bottom-1/4 right-10" />
        <GeometricDecoration className="top-3/4 left-1/3" />
        <GeometricDecoration className="bottom-1/2 right-1/3" />
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Learn Your Way</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Choose from multiple content types to match your learning style
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {contentTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#FFD700]/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 group-hover:border-[#FFD700]/30 transition-colors duration-300">
                  <div className="w-12 h-12 rounded-lg bg-[#FFD700]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {React.createElement(type.icon, {
                      className: "w-6 h-6 text-[#FFD700]",
                    })}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{type.title}</h3>
                  <p className="text-white/70">{type.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Discover Our Intelligent Newsletter Section */}
      <section className="relative py-20 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FFD700]/5 via-transparent to-transparent opacity-20"></div>
        <GeometricDecoration className="top-10 left-10" />
        <GeometricDecoration className="bottom-10 right-10" />
        <GeometricDecoration className="top-1/2 left-1/4" />
        <GeometricDecoration className="bottom-1/2 right-1/4" />
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Descubre nuestra newsletter inteligente</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Una experiencia de aprendizaje personalizada que se adapta a tus intereses y objetivos.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Aprendizaje Adaptativo",
                description: "Contenido que evoluciona con tus intereses y progreso",
              },
              {
                icon: Zap,
                title: "Actualización Constante",
                description: "Información fresca y relevante en cada edición",
              },
              {
                icon: Target,
                title: "Objetivos Personalizados",
                description: "Establece y alcanza tus metas de aprendizaje",
              },
              {
                icon: BarChart2,
                title: "Análisis de Progreso",
                description: "Visualiza tu crecimiento y áreas de mejora",
              },
              {
                icon: Layers,
                title: "Contenido Multiformato",
                description: "Aprende a través de texto, video, audio y más",
              },
              {
                icon: Users,
                title: "Comunidad de Aprendizaje",
                description: "Conecta con otros aprendices y expertos",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#FFD700]/30 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-[#FFD700]/10 flex items-center justify-center mb-4">
                  {React.createElement(feature.icon, {
                    className: "w-6 h-6 text-[#FFD700]",
                  })}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a]"
          animate={backgroundControls}
        />
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <GeometricDecoration className="top-10 left-1/4" />
        <GeometricDecoration className="bottom-10 right-1/4" />
        <GeometricDecoration className="top-1/2 left-10" />
        <GeometricDecoration className="bottom-1/2 right-10" />
        <div className="relative z-10">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-10 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <div className="w-16 h-16 mx-auto mb-8">
                  <Sparkles className="w-full h-full text-[#FFD700]" />
                </div>
              </motion.div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to Ignite Your{" "}
                <span className="text-[#FFD700] relative">
                  Learning Journey?
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-1 bg-[#FFD700]"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Join our waitlist today and be among the first to experience personalized learning that adapts to your
                unique interests and goals. Unlock a world of knowledge tailored just for you.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6 mt-12">
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full md:w-auto px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#FFD700] transition-all text-lg"
                    required
                  />
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    className="w-full md:w-auto px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#FFD700] transition-all text-lg"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-semibold rounded-full hover:shadow-lg hover:shadow-[#FFD700]/50 transition-all duration-300 text-xl"
                >
                  Join the Waitlist
                </Button>
              </form>
              <p className="text-white/70 text-lg mt-6">
                By joining, you&apos;ll be first inline for exclusive early access and special offers.
              </p>
            </motion.div>
          </div>{" "}
        </div>
      </section>

      {/* Footer */}
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

