function removeDuplicatesFromCart(cart) {
  const uniqueCart = cart.filter((item, index, self) => self.indexOf(item) === index);
  return uniqueCart;
}
const customerCart = [ 'item1', 'item2','item1', 'item3', 'item2'] 
const uniqueCart = removeDuplicatesFromCart(customerCart);
console.log(uniqueCart)