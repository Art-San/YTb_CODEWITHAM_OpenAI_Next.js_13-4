import './globals.css'
import { Poppins } from 'next/font/google'
// 3:09
const font = Poppins({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Quick Chat',
  description: 'A chatbot for business owners'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
