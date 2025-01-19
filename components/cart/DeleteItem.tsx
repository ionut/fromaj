import { useAppDispatch } from "@/lib/hooks";
import { deleteItem } from "../../lib/slice/cartSlice";

function DeleteItem({ productId }: { productId: number }) {
  const dispatch = useAppDispatch();
  return (
    <button
      className="button-update underline"
      onClick={() => dispatch(deleteItem(productId))}
    >
      șterge
    </button>
  );
}

export default DeleteItem;
