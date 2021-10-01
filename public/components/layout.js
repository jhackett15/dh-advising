
import Nav from './nav'
import Footer from './footer'
import styles from '../../styles/Home.module.css'

export default function Layout({ children }) {
  return (
  <div>
  <Nav />
  <div>{children}</div>
  <Footer />
  </div>
  )
}