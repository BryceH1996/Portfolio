interface cardLayoutProps{
  minHeight: string;
  primary: string;
  secondary: string;
  layer?: string;
  children: JSX.Element;
  margining?: string;
}

export default function CardLayout({ children, minHeight, primary, secondary, layer, margining}: cardLayoutProps) {

  return (
    <section className={`${minHeight} ${secondary} ${margining} ${layer} relative`}>
      <div className={`flex ${secondary} rounded-b-4xl shadow-md`}>
        <div className={`w-full p-20 xl:p-32 xl:pt-4 xl:pb-0 pt-4 pb-0 ${primary} rounded-b-4xl`}>
          {children}
        </div>
      </div>
    </section>
  )
}