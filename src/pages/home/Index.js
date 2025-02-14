import Page from './../Page'
import Landing from './landing/Landing'
import About from './about/About'

const Home = () => {
  return (
    <Page nom='home'>
      <Landing />
      <About />
    </Page>
  )
}

export default Home
