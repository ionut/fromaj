import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({
  productId,
  currentQuantity,
}: {
  productId: number;
  currentQuantity: number;
}) {
  const dispatch = useDispatch();

  return (
    <div className="row gap-10">
      <button
        className="btn-update"
        onClick={() => dispatch(decreaseItemQuantity(productId))}
      >
        -
      </button>
      <span className="btn-update">{currentQuantity}</span>
      <button
        className="btn-update"
        onClick={() => dispatch(increaseItemQuantity(productId))}
      >
        +
      </button>
    </div>
  );
}

export default UpdateItemQuantity;
