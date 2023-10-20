import { useContext } from "react"
import { Empty } from "./Empty"
import { CartContext } from "../pages/ProductPage"
import CartItem from "./CartItem"

export const Favorite = () => {
  const { favoriteItem, setFavoriteItem } = useContext(CartContext);
  function removeCart(id) {
    setFavoriteItem((prevItem) => {
      return prevItem.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
      <div className="mt-5 p-5">
        {favoriteItem.length > 0 ? (
          favoriteItem.map((item, index) => {
            return (
              <CartItem
                key={index}
                id={index}
                img={item.img}
                name={item.name}
                subName={item.subName}
                colorway={item.colorway}
                price={item.price}
                onRemoveCart={removeCart}
              />
            );
          })
        ) : (
          <Empty title={"Favorite"} />
        )}
      </div>
  )
}
