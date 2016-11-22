function sum() {
    var sum = 0;
    if(arguments && arguments.length > 0) {
        for(var i=0; i< arguments.length; i++) {
            sum += arguments[i];
        }
    }
    return sum;
}
