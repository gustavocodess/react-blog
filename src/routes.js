import Home from './pages/Home'
import Tutorials from './pages/Tutorials'
import Contact from './pages/Contact'
import Tutorial from './pages/Tutorial'

const routes = [
  {
    path: '/home',
    component: Home,
    exact: true,
  },
  {
    path: '/tutorials',
    component: Tutorials,
    exact: true,
  },
  {
    path: '/contact',
    component: Contact,
    exact: true,
  },
  {
    path: '/tutorial/:postSlug',
    component: Tutorial,
    exact: true,
  },
]

export default routes
