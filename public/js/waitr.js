function subForm(){
    console.log("submitting");
    var fields = $(":input").serializeArray();
    $("#item").empty();
    $.each(fields, function(i, field){
        $("#item").append(field.value + ", ");
    });
    $("#item").append(": $6.95");

    
    console.log(fields);
}

function goBack() {
	window.history.back()
}	