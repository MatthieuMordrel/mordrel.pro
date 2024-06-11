import { CarouselComponent } from './CarouselComponents'

const listContent = [
  'Automate repetitive tasks with macros',
  'Use VBA to create custom functions',
  'Debug and handle errors effectively',
  'Integrate VBA with other Office applications',
  'Optimize code for better performance'
]

const VBAContent = () => {
  return (
    <CarouselComponent
      title="VBA"
      description="Enhance Excel functionality with Visual Basic for Applications."
      items={listContent}
      imageSrc="/VBA.webp"
      imageAlt="VBAImage"
    />
  )
}

export default VBAContent
