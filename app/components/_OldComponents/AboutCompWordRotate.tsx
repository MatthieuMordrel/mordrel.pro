import WordRotate from '@ui/Effects/word-rotate'

export const AboutComponentWordRotate = () => (
  <WordRotate
    words={['Thank you for stopping by my website !', 'Please continue scrolling if you want to know more about me']}
    framerProps={{
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.3 },
      exit: { opacity: 0, y: -50 },
      transition: { duration: 0.25, ease: 'easeOut' }
    }}
    duration={1000}
    keep={true}
    className="mb-64 mt-16 text-center font-bitter text-[clamp(2rem,1.143rem+4.286vw,3rem)]"
  ></WordRotate>
)
