'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { BarChart2, CheckCircle, ChevronLeftIcon, ChevronRightIcon, Database, Linkedin, Mail, Phone, PieChart, TrendingUp } from 'lucide-react'
import React, { useEffect, useState } from 'react'

// Utility function for smooth scrolling
const smoothScroll = (element: HTMLElement, target: number, duration: number) => {
  const start = element.scrollTop
  const change = target - start
  const startTime = performance.now()

  const animateScroll = (currentTime: number) => {
    const elapsedTime = currentTime - startTime
    const progress = Math.min(elapsedTime / duration, 1)
    element.scrollTop = start + change * easeInOutCubic(progress)

    if (progress < 1) {
      requestAnimationFrame(animateScroll)
    }
  }

  const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1)

  requestAnimationFrame(animateScroll)
}

// Custom hook for intersection observer
const useIntersectionObserver = (ref: React.RefObject<HTMLElement>, options: IntersectionObserverInit) => {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [ref, options])

  return isIntersecting
}

// Reusable animated text component
const AnimatedText: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => (
  <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} className={className}>
    {text}
  </motion.span>
)

// Slide components
const TitleSlide: React.FC = () => (
  <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 p-8 text-white">
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="mb-4 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-6xl font-bold text-transparent"
    >
      Elevate Your Data
    </motion.h1>
    <AnimatedText text="Transforming Insights into Action" className="mb-8 text-2xl" />
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }} className="text-center text-lg">
      <p className="font-semibold">John Doe, Data Visualization Expert</p>
      <p className="text-blue-200">john.doe@example.com | (123) 456-7890</p>
    </motion.div>
  </div>
)

const IntroductionSlide: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null)
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 })

  return (
    <div className="flex h-full flex-col bg-gradient-to-br from-gray-900 to-blue-900 p-8 text-white md:flex-row">
      <div className="mb-8 w-full pr-0 md:mb-0 md:w-1/2 md:pr-8">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-4 text-4xl font-bold"
        >
          Revolutionizing Data Insights
        </motion.h2>
        <AnimatedText
          text="We specialize in transforming complex data into clear, actionable insights that drive business growth and innovation."
          className="mb-4 text-lg"
        />
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="list-inside list-disc text-blue-200"
        >
          <li>Cutting-edge visualization techniques</li>
          <li>AI-powered data analysis</li>
          <li>Real-time dashboards and reporting</li>
          <li>Custom solutions tailored to your needs</li>
        </motion.ul>
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
        transition={{ duration: 0.8 }}
        className="w-full overflow-hidden rounded-lg bg-white/10 p-4 md:w-1/2"
      >
        <img
          src="/placeholder.svg?height=400&width=600"
          alt="Interactive Dashboard Example"
          className="h-auto w-full transform rounded shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </motion.div>
    </div>
  )
}

const ChallengesSlide: React.FC = () => {
  const challenges = [
    { icon: BarChart2, text: 'Data Overload', description: 'Struggling to make sense of vast amounts of data' },
    { icon: PieChart, text: 'Inefficient Reporting', description: 'Time-consuming manual report generation' },
    { icon: TrendingUp, text: 'Missed Opportunities', description: 'Failing to capitalize on data-driven insights' },
    { icon: Database, text: 'Data Silos', description: 'Disconnected systems leading to incomplete views' }
  ]

  return (
    <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-purple-900 p-8 text-white">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mb-8 text-4xl font-bold"
      >
        Common Business Challenges
      </motion.h2>
      <div className="grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
        {challenges.map((challenge, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.2, duration: 0.8 }}
            className="flex items-center rounded-lg bg-white/10 p-6 transition-colors hover:bg-white/20"
          >
            <challenge.icon className="mr-4 h-12 w-12 text-purple-400" />
            <div>
              <h3 className="mb-2 text-xl font-semibold">{challenge.text}</h3>
              <p className="text-sm text-gray-300">{challenge.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const DataVisualizationSlide: React.FC = () => {
  const [showQuestion, setShowQuestion] = useState(false)
  const [animationComplete, setAnimationComplete] = useState(false)

  return (
    <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900 p-8 text-white">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mb-8 text-4xl font-bold"
      >
        Data Visualization Services
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="relative mb-8 h-96 w-96"
      >
        <svg className="h-full w-full" viewBox="0 0 100 100">
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#60A5FA"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            onAnimationComplete={() => setAnimationComplete(true)}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
          <motion.path
            d="M50 5 L50 95 M5 50 L95 50"
            stroke="#60A5FA"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: 'easeInOut', delay: 0.5 }}
          />
          {[0, 1, 2, 3].map((i) => (
            <motion.circle
              key={i}
              cx={50 + Math.cos((Math.PI / 2) * i) * 30}
              cy={50 + Math.sin((Math.PI / 2) * i) * 30}
              r="5"
              fill="#60A5FA"
              initial={{ scale: 0 }}
              animate={{ scale: animationComplete ? 1 : 0 }}
              transition={{ delay: 1 + i * 0.2, duration: 0.5 }}
            />
          ))}
        </svg>
      </motion.div>
      <motion.button
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        onClick={() => setShowQuestion(true)}
        className="transform rounded-full bg-blue-500 px-6 py-3 font-bold text-white transition-colors hover:scale-105 hover:bg-blue-600"
      >
        How can we help you?
      </motion.button>
      <AnimatePresence>
        {showQuestion && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={() => setShowQuestion(false)}
          >
            <motion.div
              className="max-w-md rounded-lg bg-white p-8 text-gray-800"
              onClick={(e) => e.stopPropagation()}
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              exit={{ y: 50 }}
            >
              <h3 className="mb-4 text-2xl font-bold">How can we help you?</h3>
              <p className="mb-4">
                We offer tailored data visualization solutions to address your specific business needs. Let's discuss how we can transform your data
                into actionable insights.
              </p>
              <button
                onClick={() => setShowQuestion(false)}
                className="rounded bg-blue-500 px-4 py-2 font-bold text-white transition-colors hover:bg-blue-600"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const PowerBISlide: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null)
  const features = [
    { name: 'Interactive Dashboards', description: 'Create dynamic, real-time visualizations' },
    { name: 'Real-time Data Analysis', description: 'Process and analyze data as it comes in' },
    { name: 'Custom Visualizations', description: 'Develop unique charts and graphs' },
    { name: 'Data Modeling', description: 'Build complex data models and relationships' },
    { name: 'Advanced Analytics', description: 'Utilize AI and machine learning capabilities' },
    { name: 'Seamless Integration', description: 'Connect with various data sources and tools' }
  ]

  return (
    <div className="flex h-full flex-col bg-gradient-to-br from-blue-900 to-purple-900 p-8 text-white">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mb-8 text-4xl font-bold"
      >
        Power BI Expertise
      </motion.h2>
      <div className="flex flex-1 flex-col md:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-8 grid w-full grid-cols-1 gap-4 md:mb-0 md:w-1/2 md:grid-cols-2 md:pr-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              className={`transform cursor-pointer rounded-lg bg-white/10 p-4 transition-all hover:scale-105 ${
                selectedFeature === index ? 'bg-blue-500 shadow-lg' : 'hover:bg-white/20'
              }`}
              onClick={() => setSelectedFeature(index)}
            >
              <h3 className="mb-2 font-semibold">{feature.name}</h3>
              <p className="text-sm text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex w-full items-center justify-center rounded-lg bg-white/10 p-6 md:w-1/2"
        >
          <div className="text-center">
            <h3 className="mb-4 text-2xl font-bold">Query Efficiency</h3>
            <div className="mb-2 flex items-center justify-between">
              <span>Before</span>
              <span>After</span>
            </div>
            <div className="mb-4 h-4 w-full overflow-hidden rounded-full bg-gray-700">
              <motion.div
                className="h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ width: '30%' }}
                animate={{ width: '90%' }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
              ></motion.div>
            </div>
            <p className="text-lg">
              Up to <span className="text-2xl font-bold text-purple-300">200%</span> improvement in query performance
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

const CustomVisualizationsSlide: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0)
  const tabs = ['3D Visualizations', 'Interactive Maps', 'Network Graphs']
  const visualizations = ['/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400']

  return (
    <div className="flex h-full flex-col bg-gradient-to-br from-purple-900 to-indigo-900 p-8 text-white">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mb-8 text-4xl font-bold"
      >
        Custom Data Visualizations
      </motion.h2>
      <div className="flex flex-1 flex-col">
        <div className="mb-4 flex">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`rounded-t-lg px-4 py-2 ${activeTab === index ? 'bg-white/20 text-white' : 'bg-white/10 text-gray-300'}`}
            >
              {tab}
            </button>
          ))}
        </div>
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex-1 rounded-lg bg-white/10 p-6"
        >
          <div className="flex h-full flex-col md:flex-row">
            <div className="mb-4 w-full md:mb-0 md:w-1/2 md:pr-4">
              <img src={visualizations[activeTab]} alt={`${tabs[activeTab]} example`} className="h-auto w-full rounded-lg shadow-lg" />
            </div>
            <div className="flex w-full flex-col justify-center md:w-1/2">
              <h3 className="mb-4 text-2xl font-bold">{tabs[activeTab]}</h3>
              <p className="mb-4 text-gray-300">
                Our custom {tabs[activeTab].toLowerCase()} bring your data to life, allowing for deeper insights and more engaging presentations.
              </p>
              <ul className="list-inside list-disc text-gray-300">
                <li>Tailored to your specific data and needs</li>
                <li>Highly interactive and responsive design</li>
                <li>Seamless integration with existing systems</li>
                <li>Optimized for performance and scalability</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

const ProcessSlide: React.FC = () => {
  const steps = [
    { title: 'Discovery', description: 'Understanding your data and goals' },
    { title: 'Analysis', description: 'In-depth examination of your datasets' },
    { title: 'Design', description: 'Creating custom visualization concepts' },
    { title: 'Development', description: 'Building and refining the solution' },
    { title: 'Deployment', description: 'Integrating the solution into your workflow' },
    { title: 'Support', description: 'Ongoing assistance and optimization' }
  ]

  return (
    <div className="flex h-full flex-col bg-gradient-to-br from-gray-900 to-blue-900 p-8 text-white">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mb-8 text-4xl font-bold"
      >
        Our Process
      </motion.h2>
      <div className="flex-1 overflow-y-auto">
        <div className="relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              className="mb-8 flex"
            >
              <div className="mr-4 flex flex-col items-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 font-bold text-white">{index + 1}</div>
                {index < steps.length - 1 && <div className="my-2 h-full border-l-2 border-blue-500"></div>}
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

const PricingSlide: React.FC = () => {
  const plans = [
    { name: 'Basic', price: '$999', features: ['5 custom visualizations', 'Basic data integration', 'Email support'] },
    {
      name: 'Pro',
      price: '$2,499',
      features: ['15 custom visualizations', 'Advanced data integration', 'Priority support', 'Quarterly strategy sessions']
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'Unlimited visualizations',
        'Full-scale data integration',
        '24/7 dedicated support',
        'Monthly strategy sessions',
        'Custom feature development'
      ]
    }
  ]

  return (
    <div className="flex h-full flex-col bg-gradient-to-br from-gray-900 to-purple-900 p-8 text-white">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mb-8 text-4xl font-bold"
      >
        Pricing & Engagement Models
      </motion.h2>
      <div className="flex flex-1 flex-col items-center justify-center gap-8 md:flex-row">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
            className={`flex w-full flex-col rounded-lg bg-white/10 p-6 md:w-1/3 ${index === 1 ? 'md:-mt-4 md:shadow-lg' : ''}`}
          >
            <h3 className="mb-4 text-2xl font-bold">{plan.name}</h3>
            <p className="mb-6 text-4xl font-bold">{plan.price}</p>
            <ul className="mb-6 flex-1">
              {plan.features.map((feature, i) => (
                <li key={i} className="mb-2 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white transition-colors hover:bg-blue-600">Get Started</button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const CallToActionSlide: React.FC = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 p-8 text-white">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mb-8 text-center text-4xl font-bold"
      >
        Ready to Transform Your Data?
      </motion.h2>
      <AnimatedText text="Let's create powerful visualizations that drive your business forward." className="mb-8 max-w-2xl text-center text-xl" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex flex-col gap-4 sm:flex-row"
      >
        <button className="transform rounded-full bg-white px-6 py-3 font-bold text-blue-600 transition-colors hover:scale-105 hover:bg-blue-100">
          Schedule a Demo
        </button>
        <button className="transform rounded-full border-2 border-white bg-transparent px-6 py-3 font-bold text-white transition-colors hover:scale-105 hover:bg-white/10">
          Contact Sales
        </button>
      </motion.div>
    </div>
  )
}

const ThankYouSlide: React.FC = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-blue-700 p-8 text-white">
      <motion.h2
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mb-8 text-center text-5xl font-bold"
      >
        Thank You!
      </motion.h2>
      <AnimatedText text="We appreciate your time and interest in our data visualization services." className="mb-8 max-w-2xl text-center text-xl" />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }} className="flex flex-col items-center">
        <p className="mb-4 text-2xl font-semibold">Let's stay connected</p>
        <div className="flex gap-6">
          <a href="#" className="text-white transition-colors hover:text-blue-300">
            <Mail className="h-8 w-8" />
          </a>
          <a href="#" className="text-white transition-colors hover:text-blue-300">
            <Phone className="h-8 w-8" />
          </a>
          <a href="#" className="text-white transition-colors hover:text-blue-300">
            <Linkedin className="h-8 w-8" />
          </a>
        </div>
      </motion.div>
    </div>
  )
}

const slides = [
  TitleSlide,
  IntroductionSlide,
  ChallengesSlide,
  DataVisualizationSlide,
  PowerBISlide,
  CustomVisualizationsSlide,
  ProcessSlide,
  PricingSlide,
  CallToActionSlide,
  ThankYouSlide
]

export default function EnhancedPitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextSlide = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      nextSlide()
    } else if (event.key === 'ArrowLeft') {
      prevSlide()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute h-full w-full"
        >
          {React.createElement(slides[currentSlide])}
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-white/50'} transition-colors`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="h-6 w-6 text-white" />
      </button>
    </div>
  )
}
