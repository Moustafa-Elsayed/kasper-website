import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "../redux/productReducer";

const ProCrad = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {dispatch(fetchData())}, []);
  return (
    <div>
      
    </div>
  )
}

export default ProCrad
