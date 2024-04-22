
export const Section = ({className, id, padding, crosses, crossesOffset, customPaddings, children} : {className?: string, id: string, padding?: boolean, crosses?: boolean, crossesOffset?: string, customPaddings?: string, children: React.ReactNode}) => {

  return (
    <div
      id={id}
      className={`
      relative
      ${
        customPaddings ||
        `${padding ? 'py-10 lg:py-16 xl:py-20' : ''} ${crosses ? "lg:py-32 xl:py-40" : ""}`
      }
      ${className || ""}`}
    >
      {children}

    </div>
  );

}