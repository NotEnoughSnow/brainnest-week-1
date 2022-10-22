
let diag = (side) => side*Math.sqrt(2);
console.log(diag(9));
function tri_area(a,b,c){
    let s = (a+b+c)/2;
    let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    return area;
}
console.log(tri_area(3,6,7));

