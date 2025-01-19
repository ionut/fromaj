import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../../lib/slice/cartSlice";
import { useAppDispatch } from "@/lib/hooks";

function UpdateItemQuantity({
  productId,
  currentQuantity,
}: {
  productId: number;
  currentQuantity: number;
}) {
  const dispatch = useAppDispatch();

  return (
    <div className="flex gap-4">
      <button
        className="button-update"
        onClick={() => dispatch(decreaseItemQuantity(productId))}
      >
        -
      </button>
      <span className="button-update">{currentQuantity}</span>
      <button
        className="button-update"
        onClick={() => dispatch(increaseItemQuantity(productId))}
      >
        +
      </button>
    </div>
  );
}

export default UpdateItemQuantity;
