import { twMerge } from "tailwind-merge";
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

  const buttonStyle = twMerge("button-update");

  return (
    <div className="flex gap-4">
      <button
        className={buttonStyle}
        onClick={() => dispatch(decreaseItemQuantity(productId))}
      >
        -
      </button>
      <span className={buttonStyle}>{currentQuantity}</span>
      <button
        className={buttonStyle}
        onClick={() => dispatch(increaseItemQuantity(productId))}
      >
        +
      </button>
    </div>
  );
}

export default UpdateItemQuantity;
