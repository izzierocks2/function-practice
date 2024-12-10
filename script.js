function area(shape, measure1, measure2){
    if(shape === "parallelogram"){
        return measure1 * measure2;
    } else if(shape === "triangle"){
        return 0.5 * measure1 * measure2;
    } else if(shape === "rectangle"){
        return measure1 * measure2;
}



console.log(area("parallelogram", 5, 6));
console.log(area("triangle", 10,5));
console.log(area("rectangle", 7,8));