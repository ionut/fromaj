import { useAppDispatch } from "@/lib/hooks";
import { deleteItem } from "./cartSlice";

function DeleteItem({ productId }: { productId: number }) {
  const dispatch = useAppDispatch();
  return (
    <button
      className="btn-delete"
      onClick={() => dispatch(deleteItem(productId))}
    >
      Sterge
    </button>
  );
}

export default DeleteItem;
