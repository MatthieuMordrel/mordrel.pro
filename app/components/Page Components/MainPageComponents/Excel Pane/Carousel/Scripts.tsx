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
      description="Run office scripts directly within your Excel Workbooks."
      items={listContent}
      imageSrc="/Excel Images/Scripts.JPG"
      imageAlt="ExcelScriptsImage"
    />
  )
}

export default ScriptContent
