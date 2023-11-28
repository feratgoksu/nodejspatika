const circleArea = (radius)=>{

    const area = Math.PI* (radius*radius)
    console.log(area);
}
const circleCircumference = (radius)=>{

    const circumference = 2*Math.PI*radius
    console.log(circumference);
}
module.exports ={
    circleArea,
    circleCircumference
}