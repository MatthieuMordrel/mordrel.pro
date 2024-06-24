import { CarouselComponent } from './CarouselComponents'

const listContent = [
  'Use clear, consistent script names',
  'Break tasks into smaller scripts',
  'Handle errors gracefully',
  'Ensure proper Typescript usage',
  'Schedule scripting usage correctly '
]

const ScriptContent = () => {
  return (
    <CarouselComponent
      title="Automated Scripts"
      description="Run office scripts to automate various Excel tasks."
      items={listContent}
      imageSrc="/Excel Images/Scripts.jpg"
      imageAlt="PowerQueryImage"
    />
  )
}

export default ScriptContent
