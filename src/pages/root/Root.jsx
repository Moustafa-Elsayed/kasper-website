import { Outlet } from 'react-router-dom'
import Headers from '../../components/Headers'
// import Footer from '../../components/Footer'
const Root = () => {
  return (
    <>
    <Headers />
    <Outlet />
    {/* <Footer /> */}
    </>
  )
}

export default Root
