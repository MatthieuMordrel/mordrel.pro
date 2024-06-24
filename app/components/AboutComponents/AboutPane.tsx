// AboutComponent.jsx or AboutComponent.tsx if you are using TypeScript
const AboutPane = () => {
  return (
    <div className="bg-techGrey p-8 text-white">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-sm uppercase tracking-widest text-techBlue">SO...WHO AM I?</h2>
        <h1 className="my-2 text-5xl font-bold">About Matthieu Mordrel</h1>
        <p className="mt-8 text-lg">
          I&apos;m a freelance consultant that has deep interests in all technologies, and like to
          try around all about the new software, system and tools available.
          <br />
          <br />I also worked in finance which helped me understand the business problematics.
        </p>
      </div>
    </div>
  )
}

export default AboutPane
