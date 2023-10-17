import { Outlet } from 'react-router-dom'
import Headers from '../../components/Headers'
const Root = () => {
  return (
    <>
    <Headers />
    <Outlet />
    </>
  )
}

export default Root
