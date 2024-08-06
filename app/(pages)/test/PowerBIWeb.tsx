import React from 'react'

interface PowerBIReportWebProps {
  title: string
  width: number
  height: number
  src: string
  className?: string
}

const PowerBIReportweb = ({ title, width, height, src, className }: PowerBIReportWebProps) => {
  return <iframe title={title} width={width} height={height} src={src} frameBorder="0" allowFullScreen={true} className={`${className}`} />
}

export default PowerBIReportweb
