import { CarouselComponent } from './CarouselComponents'

const listContent = [
  'Integrate data from multiple sources',
  'Enhance and streamline ETL processes',
  'Optimize your M code',
  'Improve query efficiency with Query Folding',
  'Minimize errors by incorporating dataflows'
]

const PowerQueryContent = () => {
  return (
    <CarouselComponent
      title="Power Query"
      description="Automate and optimize your ETL processes in Excel and PowerBI."
      items={listContent}
      imageSrc="/PowerQuery.png"
      imageAlt="PowerQueryImage"
    />
  )
}

export default PowerQueryContent
