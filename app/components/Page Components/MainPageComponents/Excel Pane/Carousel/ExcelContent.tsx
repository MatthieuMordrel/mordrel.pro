import { CarouselComponent } from './CarouselComponents'

const listContent = [
  'Master complex nested formulas',
  'Utilize array formulas for dynamic ranges',
  'Use the relevant lookup functions',
  'Leverage new Excel 365 functions',
  'Optimize performance in your workbooks'
]

const AdvancedFormulasContent = () => {
  return (
    <CarouselComponent
      title="Advanced Excel Formulas"
      description="Unlock the full potential of Excel with advanced formula techniques."
      items={listContent}
      imageSrc="/Excel Images/Formulas.jpg"
      imageAlt="AdvancedFormulasImage"
    />
  )
}

export default AdvancedFormulasContent
