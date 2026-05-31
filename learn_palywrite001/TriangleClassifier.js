let a = 10
let b=20
let c=30
if(a==b && b==c)
{
    console.log("Equilateral")
}
else if(a==b || b==c || a==c)
{
    console.log("Isosceles")
}
else
{
    console.log("Scalene")
}