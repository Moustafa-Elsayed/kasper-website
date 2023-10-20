import { useSelector } from "react-redux";

const Card = () => {
  const ReduxData = useSelector((state) => state.product.data);
  console.log(ReduxData,"from card");
  return (
    <>
      {ReduxData.map((product) => {
        return (
          <div key={product.id}>
            <h1>{product.title}</h1>
          </div>
        );
      })}
    </>
  );
};

export default Card;
