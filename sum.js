function sum() {
    var sum = 0;
    if(argument && argument.length > 0) {
        for(var i=0; i< argument.length; i++) {
            sum += argument[i];
        }
    }
    return sum;
}
