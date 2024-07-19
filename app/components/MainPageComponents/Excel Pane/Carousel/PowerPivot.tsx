import { CarouselComponent } from './CarouselComponents'

const listContent = [
  'Utilize the Power Pivot Vertipaq engine',
  'Simplify your relationships for performance',
  'Develop sophisticated PivotTables',
  'Employ DAX for intricate measures',
  'Visualize data using PivotCharts'
]

const PowerPivotContent = () => {
  return (
    <CarouselComponent
      title="Power Pivot"
      description="Efficiently manage large datasets and establish connections through relationships."
      items={listContent}
      imageSrc="/Excel Images/PowerPivot.jpg"
      imageAlt="PowerPivotImage"
    />
  )
}

export default PowerPivotContent
