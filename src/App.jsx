import Counter from './components/Counter'
import Footer from './components/Footer'
import LogOnMount from './components/LogOnMount'
import NameForm from './components/NameForm'
import Navbar from './components/Navbar'
import './components/Navbar.css'
import PostList from './components/PostList'
import ThemeToggle from './components/Theme'

function App() {

  return (
    <>
    <Navbar />
    <Counter />
    <LogOnMount />
    <NameForm />
    <ThemeToggle />
    <PostList />
    <Footer />
    
    </>
  )
}

export default App


