// AboutComponent.jsx or AboutComponent.tsx if you are using TypeScript
const AboutPane: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <p className={` ${className}`}>
      I&apos;m a french<span className="text-techBlue"> independent freelancer</span> in Belgium,
      <br />
      with a passion in many technologies.
    </p>
  )
}

export default AboutPane
