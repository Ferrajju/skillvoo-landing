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
  BarChart2,
  Layers,
  Target,
  Brain,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import React from "react"
import AnimatedBackground from "@/components/AnimatedBackground"

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
    title: "Amplia Selección de Temas",
    description: "Descubre un mundo de conocimiento adaptado a tus intereses y objetivos de aprendizaje.",
    icon: BookOpen,
    image: "/placeholder.svg?height=400&width=600",
    benefits: [
      "Accede a cientos de temas, desde tecnología hasta artes y humanidades",
      "Sugiere tus propios temas para un aprendizaje verdaderamente personalizado",
      "Explora nuevas áreas de interés y expande tus horizontes",
    ],
    cta: "Nuestros Temas",
  },
  {
    title: "Contenido Personalizado",
    description: "Recibe contenido diario adaptado a tu estilo de aprendizaje y preferencias.",
    icon: Zap,
    image: "/placeholder.svg?height=400&width=600",
    benefits: [
      "Elige entre videos, noticias, consejos rápidos o artículos en profundidad",
      "Ajusta la frecuencia y longitud del contenido según tu disponibilidad",
      "Disfruta de una experiencia de aprendizaje que evoluciona contigo",
    ],
    cta: "Tu Contenido Ideal",
  },
  {
    title: "Plataforma Inteligente",
    description: "Optimiza tu aprendizaje con nuestra avanzada plataforma impulsada por IA.",
    icon: Layout,
    image: "/placeholder.svg?height=400&width=600",
    benefits: [
      "Seguimiento de progreso detallado para mantener tu motivación",
      "Recomendaciones personalizadas basadas en tu historial de aprendizaje",
      "Integración con tu calendario para un aprendizaje sin interrupciones",
    ],
    cta: "Nuestra Tecnología",
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
    <div className="relative min-h-screen text-gray-800 overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 px-4 py-4 bg-white bg-opacity-90 backdrop-blur-md shadow-md">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex-1">
              <Link
                href="/"
                className="text-xl md:text-2xl font-bold flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <span className="relative">
                  <span className="text-4xl font-extrabold">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
                      Skills
                    </span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
                      letter
                    </span>
                  </span>
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500"></span>
                </span>
              </Link>
            </div>
            <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
              <Link href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">
                Features
              </Link>
            </div>
            <div className="flex-1 flex justify-end">
              <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                Join Waitlist
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="md:hidden">
                    <Menu className="h-6 w-6" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuItem>
                    <Link href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">
                      Features
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600">
                      Join Waitlist
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col items-center justify-center relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-2xl mb-12 relative"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-8 mt-2 leading-tight py-2">
                <span className="inline-block overflow-visible">
                  <motion.span
                    className="inline-block"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Turn Dead Time
                  </motion.span>
                </span>
                <br />
                <span className="inline-block overflow-visible">
                  <motion.span
                    className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    Into Learning Time
                  </motion.span>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-in-up">
                Recibe correos personalizados con contenido adaptado a tus intereses. Aprende lo que quieras, cuando
                quieras.
              </p>
              <p className="text-sm md:text-base text-gray-500 mb-8 italic">
                "Haz de momentos muertos, buenos momentos"
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
                  className="px-6 py-3 rounded-full bg-white border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-indigo-600 transition-all w-full max-w-md shadow-lg"
                  required
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 animate-pulse-subtle rounded-full px-8 py-3 text-lg font-semibold shadow-lg"
                >
                  Start Learning Now
                </Button>
              </motion.form>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-6 flex items-center justify-center space-x-2"
              >
                <Cpu className="w-4 h-4 text-indigo-400" />
                <span className="text-xs text-gray-500 font-light tracking-wide">AI-Powered Learning Experience</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Learning Illustration"
                  fill
                  className="object-cover"
                />
                {/* Animated overlay elements */}
                <motion.div
                  className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-md"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3, duration: 0.5 }}
                >
                  <BookOpen className="w-6 h-6 text-indigo-500" />
                </motion.div>
                <motion.div
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                >
                  <Zap className="w-6 h-6 text-purple-500" />
                </motion.div>
                <motion.div
                  className="absolute bottom-4 left-4 bg-white rounded-full p-2 shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.7, duration: 0.5 }}
                >
                  <Target className="w-6 h-6 text-pink-500" />
                </motion.div>
                <motion.div
                  className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.9, duration: 0.5 }}
                >
                  <Layers className="w-6 h-6 text-indigo-400" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="relative py-20 bg-white bg-opacity-80">
          <div className="max-w-7xl mx-auto px-4 relative z-10">
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
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                  <div className={`space-y-6 ${index % 2 === 0 ? "md:pr-0 lg:pr-8" : "md:pl-0 lg:pl-8"} max-w-lg`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
                        {React.createElement(feature.icon, {
                          className: "w-6 h-6 text-white",
                        })}
                      </div>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 relative inline-block group">
                      {feature.title}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                    </h2>

                    <p className="text-lg text-gray-700">{feature.description}</p>

                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      {feature.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4">
                      <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 transition-all duration-300">
                        Explora {feature.cta}
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Variety of Topics Section */}
        <section id="features" className="relative py-20 bg-white bg-opacity-80">
  <div className="max-w-7xl mx-auto px-4 relative z-10">
    {features.map((feature, index) => (
      <motion.div
        key={feature.title}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        className={`grid md:grid-cols-2 gap-8 md:gap-20 items-center mb-24 ${
          index % 2 === 0 ? "md:grid-flow-dense" : ""
        }`}
      >
        <div className={`relative ${index % 2 === 0 ? "md:order-last md:-mr-8" : "md:-ml-8"}`}>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <Image
              src={feature.image || "/placeholder.svg"}
              alt={feature.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
          <div className={`space-y-6 ${index % 2 === 0 ? "md:pr-0 lg:pr-8" : "md:pl-0 lg:pl-8"} max-w-lg`}>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
                {React.createElement(feature.icon, { className: "w-6 h-6 text-white" })}
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 relative inline-block group">
              {feature.title}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </h2>

            <p className="text-lg text-gray-700">{feature.description}</p>

            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {feature.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 transition-all duration-300">
                Explora {feature.cta}
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>

{/* Variety of Topics Section */}
<section className="relative py-20 bg-white bg-opacity-80">
  <div className="max-w-7xl mx-auto px-4">
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Explore Your Interests</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Choose from a variety of engaging topics or suggest your own. Tailor your daily learning to what truly matters to you.
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
            setSelectedTopic(topic.name);
            setShowCustomTopicInput(false);
          }}
          className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 border ${
            topic.name === selectedTopic
              ? "border-indigo-600 text-indigo-600 bg-indigo-50 shadow-md"
              : "border-gray-300 text-gray-600 hover:border-indigo-600 hover:text-indigo-600 hover:bg-indigo-50 hover:shadow-md"
          }`}
        >
          {React.createElement(topic.icon, { className: "w-5 h-5" })}
          <span className="font-medium">{topic.name}</span>
        </motion.button>
      ))}
    </div>

    {/* Topic Categories or Custom Topic Input */}
    {showCustomTopicInput ? (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-md mx-auto mb-12">
        <form onSubmit={handleCustomTopicSubmit} className="flex flex-col items-center gap-4">
          <Input
            type="text"
            value={customTopic}
            onChange={(e) => setCustomTopic(e.target.value)}
            placeholder="Enter your custom topic"
            className="w-full px-6 py-3 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-indigo-600 transition-all shadow-lg"
            required
          />
          <Button type="submit" className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-full hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg">
            Suggest Topic
          </Button>
        </form>
      </motion.div>
    ) : (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
        {Object.entries(topicCategories).map(([category, topics]) => (
          <React.Fragment key={category}>
            <h3 className="col-span-full text-xl font-bold text-gray-900 mt-6 mb-2">{category}</h3>
            {Array.isArray(topics) &&
              topics.map((topic, index) => (
                <motion.div key={`${category}-${topic}`} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full h-16 px-2 py-1 rounded-lg border border-gray-300 bg-white text-gray-800 hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-300 flex items-center justify-center text-center shadow-sm"
                  >
                    <span className="text-sm">{topic}</span>
                  </motion.button>
                </motion.div>
              ))}
          </React.Fragment>
        ))}
      </motion.div>
    )}
  </div>
</section>

        {/* Content Types Section */}
        <section className="relative py-20 bg-white bg-opacity-80">
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Learn Your Way</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose from multiple content types to match your learning style
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contentTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="relative bg-white rounded-xl p-6 border border-gray-200 shadow-lg group-hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        {React.createElement(type.icon, {
                          className: "w-6 h-6 text-white",
                        })}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{type.title}</h3>
                      <p className="text-gray-600">{type.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Discover Our Intelligent Newsletter Section */}
        <section className="relative py-20 bg-white bg-opacity-80">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
                <span className="text-gray-900">Discover our intelligent newsletter</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A personalized learning experience that adapts to your interests and goals.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "Adaptive Learning",
                  description: "Content that evolves with your interests and progress",
                },
                {
                  icon: Zap,
                  title: "Constant Updates",
                  description: "Fresh and relevant information in each edition",
                },
                {
                  icon: Target,
                  title: "Personalized Goals",
                  description: "Set and achieve your learning objectives",
                },
                {
                  icon: BarChart2,
                  title: "Progress Analysis",
                  description: "Visualize your growth and areas for improvement",
                },
                {
                  icon: Layers,
                  title: "Multi-format Content",
                  description: "Learn through text, video, audio, and more",
                },
                {
                  icon: Users,
                  title: "Learning Community",
                  description: "Connect with other learners and experts",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-4">
                    {React.createElement(feature.icon, {
                      className: "w-6 h-6 text-white",
                    })}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 bg-gray-50">
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
            <Sparkles className="w-full h-full text-blue-600" />
          </div>
        </motion.div>

        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Ready to Ignite Your{" "}
          <span className="text-blue-600 relative">
            Learning Journey?
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </span>
        </h2>

        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
              className="w-full md:w-auto px-6 py-4 rounded-full bg-white border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-600 transition-all text-lg"
              required
            />
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="w-full md:w-auto px-6 py-4 rounded-full bg-white border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-600 transition-all text-lg"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full md:w-auto px-10 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 text-xl"
          >
            Join the Waitlist
          </Button>
        </form>

        <p className="text-gray-600 text-lg mt-6">
          By joining, you'll be first in line for exclusive early access and special offers.
        </p>
      </motion.div>
    </div>
  </div>
</section>


        {/* Footer */}
        <footer className="py-8 px-4 border-t border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-600 text-sm">© 2025 Skillsletter. All rights reserved.</p>
            <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
              <Link href="/privacy" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

