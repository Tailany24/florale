export const metadata = {
  title: 'Florale',
  description: 'Florale sempre por você',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}

