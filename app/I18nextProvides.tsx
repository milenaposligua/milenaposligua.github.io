import { I18nextProvider } from "react-i18next"

interface I18nextProvidesProps {
  i18n?: any
  children: React.ReactNode
}

export const nextI18Provides = ({i18n, children}: I18nextProvidesProps) => {
  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  )
}