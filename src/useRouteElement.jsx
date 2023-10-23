import { createBrowserRouter } from 'react-router-dom'
import HomeLayout from './layouts/Home'
import { Home } from './page/Home'
import Services from './page/Services'
import Event from './page/events'
import Careers from './page/careers'
import About from './page/about'
import Contact from './page/contact'
import Laser from './page/pages/LASER'

import PhotoFacial from './page/pages/PHOTOFACIAL'
import Hydra from './page/pages/HYDRAGLOW'
import Facegym from './page/pages/FACEGYM'
// import Contact from './pages/Contact'
// import DichVuKeToan from './pages/DichVuKeToan'  
// import BaoCaoTaiChinh from './pages/BaoCaoTaiChinh'
// import DichVuThayDoiTen from './pages/DichVuThayDoiTen'
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <HomeLayout>
        <Home />
      </HomeLayout>
    )
  }, {
    path: '/services',
    element: (
      <HomeLayout>
        <Services />
      </HomeLayout>
    )
  },
  {
    path: '/about',
    element: (
      <HomeLayout>
        <About />
      </HomeLayout>
    )
  },
  {
    path: '/services/p-plus-laser-promo/',
    element: (
      <HomeLayout>
        <Laser />
      </HomeLayout>
    )
  },
  {
    path: '/services/photo-facial/',
    element: (
      <HomeLayout>
        <PhotoFacial />
      </HomeLayout>
    )
  },
  {
    path: '/services/hydrafacial-promo/',
    element: (
      <HomeLayout>
        <Hydra />
      </HomeLayout>
    )
  },
  {
    path: '/services/face-gym-promo/',
    element: (
      <HomeLayout>
        <Facegym />
      </HomeLayout>
    )
  },
  {
    path: '/events',
    element: (
      <HomeLayout>
        <Event />
      </HomeLayout>
    )
  }, {
    path: '/contact',
    element: (

      <HomeLayout>
        <Contact />
      </HomeLayout>
    )
  },
  {
    path: '/careers',
    element: (

      <HomeLayout>
        <Careers />
      </HomeLayout>

    )
  }

])
export default router
