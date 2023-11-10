# Canvas 

## Basic Usage

`
const ctx=canvas.getContext('2d')
`


### Drawing Rectangles
unlike SVG, `<canvas>` only supports two primitive shapes: rectangles and paths.

`fillRect(x,y,w,h) // draws a filled rectangle`

`strokeRect(x,y,w,h) // draws a rectanglular outline`

`clearRect(x,y,w,h) // clears the specified rectangular area, making it fully transparent`



### Drawing Paths
internally paths are stored as a list of sub-paths which together form a shape.
    1- create a path -> beginPath()
    2- drawing and moving commands -> closePath
    3- stroke or fill -> stroke, fill

`beginPath()`

Path methods:
`closePath()`
`stroke() // if fill() is used, any open shapes are closed automatically.`
`fill()`


Moving pen methods:
`lineTo(x,y)`
`moveTo(x,y)`



### Arcs || Circles
`arc(x,y,r,startAngle,endAngle,counterClockwise)`
`arcTo(x1,y1,x2,y2,r) //connected to the previous point by a straight line`

**angles in the arc are measured in radians**
`radians = (Math.PI/180)*degrees`
11


