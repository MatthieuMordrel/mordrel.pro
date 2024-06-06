interface FontTextPanesProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export const FontTextPanes: React.FC<FontTextPanesProps> = ({ className = '', children, ...props }) => {
  return (
    <span className={`className text-pretty font-normal leading-relaxed tracking-tight text-gray-400 md:text-sm lg:text-base`} {...props}>
      {children}
    </span>
  )
}
