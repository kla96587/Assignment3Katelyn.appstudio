let products = ["Crocheted Dog Toy $10.00", "Slow Feeder Bowl $14.00", "Pawz Grey Treat Jar $20.00", "Blue Sweet Dreams Thermal Pajamas $30.00", "Checker Chewy Vuiton Bowl $32.00", "Red Heart Sweater Dress $27.00",
"Velvet Hair Bow - Sun Kissed $12.00", "Into the Wild Leash, $27.00"]

btnProducts.onclick=function(){
let display = lblViewProductPrice.value
lblViewProductPrice.value = products
}

let wishlist = []

btnAddWishlist.onclick=function(){
let newAddition = inptEnterItem.value
wishlist.push(inptEnterItem.value)
lblWishlist.value = wishlist
}