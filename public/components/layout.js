
import Nav from './nav'
import Footer from './footer'

export default function Layout({ children }) {
  return (
  <div>
  <Nav />
  <div>{children}</div>
  <Footer />
  </div>
  )
}
