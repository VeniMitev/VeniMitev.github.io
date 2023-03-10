import NavBar from '../components/NavBar'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className='min-h-screen'>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
