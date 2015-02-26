function subForm(){
    console.log("submitting");
    var fields = $(":input").serializeArray();
    var jFields = JSON.stringify(fields);
    console.log(jFields);

    var currentCart = sessionStorage.getItem("cart");
    var newCart = $.extend(currentCart, fields);
    console.log(newCart);

    sessionStorage.setItem("cart", JSON.stringify(newCart));
    console.log(sessionStorage.getItem("cart"))
    window.location.href="addedtocart";
}

function populateCart(){
	//Access the cart object from session storage
	var cart = JSON.parse(sessionStorage.getItem("cart"));
	console.log(cart);
	var addonCtr = 0;
	//Only overwrite cart if the cart object is not empty
	if(! $.isEmptyObject(cart) ){
		$("#cart").empty();
		$.each(cart, function(i, cart){
			if(cart.name == "Entree"){
				$("#cart").append("\n" + cart.value);
			} else{
				if(addonCtr++ > 0){
					$("#cart").append(", ");
				}else{
					$("#cart").append(" with ");
				}
				$("#cart").append(cart.value);
			}
	    });
	    $("#cart").append(": $6.00");
	}

	console.log(cart);
}

function clearCart(){
	sessionStorage.removeItem("cart");
	console.log("cart cleared");
}

function goBack() {
	window.history.back()
}	