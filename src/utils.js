export function getItemCount(cartItems) {
    console.log(cartItems);
    return cartItems.reduce((count, cartItem) => {
        return cartItem.quantity + count
    }, 0);
}