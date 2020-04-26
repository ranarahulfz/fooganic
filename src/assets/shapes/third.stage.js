// var drawAreaHeight = document.querySelector('.draw-area').offsetHeight;
// var drawAreaWidth = document.querySelector('.draw-area').offsetWidth;
// var points = houseMap[0].markedEdgePoints;
// var screenWidth = window.screen.width;
// var screenHeight = window.screen.height;
// var width = drawAreaWidth;
// var height = drawAreaHeight;
// var center = getCentroid(points);
// var centerX = center["x"];
// var centerY = center["y"];
// var northAngle;

// var svgOne = d3
//   .select(".c-three")
//   .append("svg")
//   .classed("layer-two", true)
//   .attr("width", width)
//   .attr("height", height);

// var gg = svgOne.append("g").attr("class", "draw-shapes");

// // Drawing background grid for color transition starts

// drawbackgroundGrid(8,0);

// // Drawing background grid for color transition end

// // Apply mask on background grid starts

// var svgroot = d3.select(".c-two").append("svg");
// var mask = svgroot
//   .append("defs")
//   .append("mask")
//   .attr("id", "myMask")
//   .style("z-index","0");

// mask.append("rect")
//     .attr("x", 0)
//     .attr("y", 0)
//     .attr("width", width)
//     .attr("height", height)
//     .style("fill", "white")
//     .style("opacity", 1);

// mask.append("polygon").attr("points", points[0]);

// var svgThree = svgroot
//   .attr("class", "series")
//   .attr("width", width)
//   .attr("height", height)
//   .append("g")
//   .attr("transform", "translate(0,0)");

// var rect = svgThree
//   .append("rect")
//   .attr("x", 0)
//   .attr("y", 0)
//   .attr("width", width)
//   .attr("height", height)
//   .attr("mask", "url(#myMask)")
//   .style("fill", "white")
//   .style("fill-opacity", "1");

// // Apply mask on background grid end

// // To draw centeroid of House Map starts

// let centeroid = gg
// .append("circle")
// .classed("centeroid",true)
// .attr("cx", centerX)
// .attr("cy", centerY)
// .attr("r", 15)
// .attr("fill", "#ffff0099")
// .attr("stroke", "#000")
// .attr("is-handle", "true");

// // To draw centeroid of House Map end

// // To draw points on the shape

// var polyline = gg
// .append("polyline")
// .attr("points", points[0])
// .style("fill", "none")
// .attr("stroke", "#000");
// for (var i = 0; i < points[0].length; i++) {
// gg.append("circle")
//   .attr("cx", points[0][i][0])
//   .attr("cy", points[0][i][1])
//   .attr("r", 4)
//   .attr("fill", "yellow")
//   .attr("stroke", "#000")
//   .attr("is-handle", "true")
//   .style({ cursor: "pointer" });
// gg.append("text")
//   .text("P" + i)
//   .attr("x", points[0][i][0] - 10)
//   .attr("y", points[0][i][1] - 7)
//   .attr("fill", "#fb5665")
//   .attr("font-weight", "600");
// }

// // To draw points on the shape

// $(function() {
//   const facingWallPointsWrapper = app.view.createElement(
//     "div",
//     "facing-wall-points-wrapper"
//   );
//   app.view.appendChildElement(facingWallPointsWrapper, drawArea);

//   const facingPointsInputsOne = app.view.createElement(
//     "input",
//     "input-field point-one",
//     '<i class="fa fa-plus"></i>&nbsp; Choose facing'
//   );
//   app.view.appendChildElement(facingPointsInputsOne, facingWallPointsWrapper);
//   facingPointsInputsOne.name = "p1";
//   facingPointsInputsOne.type = "text";
//   facingPointsInputsOne.size = "2";

//   const text = app.view.createElement("div", "facing-text", "to");
//   app.view.appendChildElement(text, facingWallPointsWrapper);

//   const facingPointsInputsTwo = app.view.createElement(
//     "input",
//     "input-field point-two",
//     '<i class="fa fa-plus"></i>&nbsp; Choose facing'
//   );
//   app.view.appendChildElement(facingPointsInputsTwo, facingWallPointsWrapper);
//   facingPointsInputsOne.name = "p1";
//   facingPointsInputsOne.type = "text";
//   facingPointsInputsTwo.size = "2";

//   const enterBtn = app.view.createElement(
//     "button",
//     "btn btn-primary btn-sm enter-btn",
//     "Enter"
//   );
//   app.view.appendChildElement(enterBtn, facingWallPointsWrapper);

//   const degreeInputWrapper = app.view.createElement(
//     "div",
//     "degree-input-wrapper"
//   );
//   app.view.appendChildElement(degreeInputWrapper, navBar);

//   const degreeInput = app.view.createElement(
//     "input",
//     "input-field degree-input"
//   );
//   app.view.appendChildElement(degreeInput, degreeInputWrapper);
//   degreeInput.name = "degree";
//   degreeInput.type = "text";
//   degreeInput.placeholder = "Enter Degree";

//   const degreeEnterBtn = app.view.createElement(
//     "button",
//     "btn btn-primary btn-sm degree-enter-btn",
//     "Enter"
//   );
//   app.view.appendChildElement(degreeEnterBtn, degreeInputWrapper);

//   $(".enter-btn").click(function() {
//     var val1 = $(".point-one").val();
//     var val2 = $(".point-two").val();

//     var pointOne = points[0][val1];
//     var pointTwo = points[0][val2];

//     var x2 = (pointOne[0] + pointTwo[0]) / 2;
//     var y2 = (pointOne[1] + pointTwo[1]) / 2;

//     if (document.getElementsByClassName("directions")[0]) {
//       $(".directions").remove();
//       $(".directions-text").remove();
//     }

//     drawCenterLines(0, x2, y2);
//   });

//   $(".degree-enter-btn").click(function() {
//     var val1 = $(".point-one").val();
//     var val2 = $(".point-two").val();

//     var pointOne = points[0][val1];
//     var pointTwo = points[0][val2];

//     var x2 = (pointOne[0] + pointTwo[0]) / 2;
//     var y2 = (pointOne[1] + pointTwo[1]) / 2;

//     var degree = -parseInt($(".degree-input").val());

//     if (document.getElementsByClassName("directions")[0]) {
//       $(".directions").remove();
//       $(".directions-text").remove();
//     }

//     drawCenterLines(degree, x2, y2);

//     drawbackgroundGrid(8,degree);
//     drawGrid(8,degree);

//     var line = gg
//       .append("line")
//       .attr("x1", centerX)
//       .attr("y1", centerY)
//       .attr("x2", x2)
//       .attr("y2", y2)
//       .attr("stroke", "red")
//       .attr("stroke-width", 4)
//       .classed("directions", true);

//     var lineText = gg
//       .append("text")
//       .text(-degree + "°")
//       .attr("x", parseInt(line.attr("x2")) + 10)
//       .attr("y", parseInt(line.attr("y2")) + 7)
//       .attr('color','red')
//       .attr("font-size", "18")
//       .attr("font-weight", "bold")
//       .classed("directions-text", true);
//   });
// });

// function drawGrid(length,angle) {

//   if (document.getElementsByClassName("grid")[0])
//     $(".grid").remove();

//   var data = [];
//   var count = 0;

//   for(let i = 0; i<length; i++){
//      var temp = {'name':("arc"+i),'value':1}
//      data.push(temp);
//   }

//   var radius = 600;

//   var arc = d3.svg.arc()
//   .outerRadius(radius - 10)
//   .innerRadius(0);

//   var pie = d3.layout.pie()
//   .startAngle((Math.PI / length))
//   .endAngle((Math.PI * 2 + Math.PI / length));

//   var svg = d3
//     .select(".draw-main-container")
//     .append("svg")
//     .classed("layer-two grid",true)
//     .attr('width',width)
//     .attr('height',height)
//     .style("z-index",10)
//     .append("g")
//     .attr("transform", "translate(" + center["x"] + "," + center["y"] + ")");

//   var g = svg
//     .selectAll(".arc")
//     .data(pie(data.map(function(d){ return d.value})))
//     .enter()
//     .append("g")
//     .attr(
//       "transform",
//       "rotate("+angle+")"
//     );

//   g.append("path")
//     .attr("class", function(d,i){ return data[i].name; })
//     .attr("d", arc)
//     .attr("stroke", "#21252963")
//     .style("fill", "white")
//     .style("fill-opacity", "0.05");

//   g.on("mouseover", function() {

//     let className = d3.select(this).select("path").attr("class");

//     d3.select(".b-"+className)
//       .style("fill", "red")
//       .style("fill-opacity", "0.75");

//     d3.select(this)
//       .select("path")
//       .style("fill", "green")
//       .style("fill-opacity", "0.2");

//   }).on("mouseout", function() {

//     let className = d3.select(this).select("path").attr("class");

//     d3.select(".b-"+className)
//       .style("fill", "#fff")
//       .style("fill-opacity", "0.05");
//     d3.select(this)
//       .select("path")
//       .style("fill", "#fff")
//       .style("fill-opacity", "0.05");
//   });

// }

// function drawbackgroundGrid(length,angle) {

//   if (document.getElementsByClassName("background-grid")[0])
//     $(".background-grid").remove();

//   var data = [];
//   var count = 0;

//   for(let i = 0; i<length; i++){
//      var temp = {'name':("b-arc"+i),'value':1}
//      data.push(temp);
//   }

//   var radius = 600;

//   var arc = d3.svg.arc()
//   .outerRadius(radius - 10)
//   .innerRadius(0);

//   var pie = d3.layout.pie()
//   .startAngle((Math.PI / length))
//   .endAngle((Math.PI * 2 + Math.PI / length));

//   var svg = d3
//     .select(".c-one")
//     .append("svg")
//     .classed("layer-two background-grid", true)
//     .attr("width",width)
//     .attr("height",height)
//     .append("g")
//     .attr("transform", "translate(" + center["x"] + "," + center["y"] + ")");

//   var g = svg
//     .selectAll(".arc")
//     .data(pie(data.map(function(d){ return d.value})))
//     .enter()
//     .append("g")
//     .attr(
//       "transform",
//       "rotate("+angle+")"
//     );

//   g.append("path")
//     .attr("class", function(d,i){ return data[i].name; })
//     .attr("d", arc)
//     .attr("stroke", "#21252963")
//     .style("fill", "white")
//     .style("fill-opacity", "0.05");

// }

// // Function to find centroid of House Map

// function getCentroid(pts) {
//   var first = pts[0][0],
//     last = pts[0][pts[0].length - 1];
//   if (first[0] != last[1] || first[1] != last[0]) pts.push(first[0]);
//   var twicearea = 0,
//     x = 0,
//     y = 0,
//     nPts = pts[0].length,
//     p1,
//     p2,
//     f;
//   for (var i = 0, j = nPts - 1; i < nPts; j = i++) {
//     p1 = pts[0][i];
//     p2 = pts[0][j];
//     f =
//       (p1[1] - first[1]) * (p2[0] - first[0]) -
//       (p2[1] - first[1]) * (p1[0] - first[0]);
//     twicearea += f;
//     x += (p1[0] + p2[0] - 2 * first[0]) * f;
//     y += (p1[1] + p2[1] - 2 * first[1]) * f;
//   }
//   f = twicearea * 3;
//   return { x: x / f + first[0], y: y / f + first[1] };
// }

// // Function to draw all directions lines

// function drawCenterLines(angle, x2, y2) {

//   var initialAngle = getAngle(centerX,centerY,x2,y2);
//   var dAngle = 0;
//   var dNames = ["N","NE","E","SE","S","SW","W","NW"];
//   northAngle = dAngle + initialAngle + angle;

//   for(let i = 0; i < 8; i++){
//     let direction = gg
//     .append("line")
//     .attr("stroke-dasharray", "5,5")
//     .attr("x1", centerX)
//     .attr("y1", centerY)
//     .attr("x2", width)
//     .attr("y2", centerY)
//     .attr(
//       "transform",
//       "rotate(" + (dAngle + initialAngle + angle) + " " + centerX + " " + centerY + ")"
//     )
//     .attr("stroke", "#3944BC")
//     .attr("stroke-width", 1)
//     .classed("directions", true);

//     let dName = gg
//     .append("text")
//     .text(dNames[i])
//     .attr("x", parseInt(direction.attr("x2")) - 200)
//     .attr("y", parseInt(direction.attr("y2")) + 14)
//     .attr("font-size", "18")
//     .attr(
//       "transform",
//       "rotate(" + (dAngle + initialAngle + angle) + " " + centerX + " " + centerY + ")"
//     )
//     .attr("font-weight", "bold")
//     .classed("directions-text", true);

//     dAngle += 45;

//   }

// }

// // Function to find facing angle ( facing wall angle )

// function getAngle(cx, cy, ex, ey) {
//   var dy = ey - cy;
//   var dx = ex - cx;
//   var theta = Math.atan2(dy, dx); // range (-PI, PI]
//   theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
//   //if (theta < 0) theta = 360 + theta; // range [0, 360)
//   return Math.round(theta);
// }

// $(function(){
//   //! Function for responsive layer starts
//   $(window).resize(function() {
//     var screenWidth = $(window).width();
//     var screenHeight = $(window).height();
//     width = screenWidth * (75 / 100);
//     height = screenHeight;
//   });
//   //! Function for responsive layer end
// });

$(function () {
  var centeroid = [centerX, centerY];
  var mypoints = points[0]; //reducing 2D Array to 1D array

  var p1 = mypoints[0];
  var p2 = mypoints[1];
  var theta = Math.PI / 2 - Math.PI / 4; // This 90degrees minus angle of north as entered

  // console.log(centeroid);
  // console.log("p1: "+p1+" | p2: "+p2);
  //console.log(points);

  var circlePt1 = getIntersectionPoint(centeroid, p1, p2, theta);
  console.log(circlePt1);
  var circlePts = {
    x: circlePt1[0],
    y: circlePt1[1],
  };

  // console.log("x: "+circlePts.x+" | y: "+circlePts.y);

  gg.append("circle")
    .classed("intersection", true)
    .attr("cx", circlePts.x)
    .attr("cy", circlePts.y)
    .attr("r", 5)
    .attr("fill", "yellow")
    .attr("stroke", "#000")
    .attr("is-handle", "true")
    .style({ cursor: "pointer" });

  function getSlopeTwoPoints(p1, p2) {
    //This function calculates slope between two given points
    return p2[0] - p1[0] !== 0 ? (p2[1] - p1[1]) / (p2[0] - p1[0]) : Infinity;
  }

  function getSlopeTheta(theta) {
    //This function clculates slope of a line where angle is given with respect to X-axis
    return Math.tan(theta);
  }

  function getIntersectionPointOfAngle(angle, centeroid, mypoints) {
    let numPoints = mypoints.length;
    let m2 = getSlopeTheta(angle);
    let arrPoints = [];
    // console.log(angle);

    for (let i = 0; i < numPoints; i++) {
      let count = 0;

      j = i + 1;
      if (j == numPoints) {
        j = 0;
      } // when last point reached compare with first point
      // console.log(`i=${i} j=${j}`);
      // console.log("p1: "+mypoints[i]+" p2: "+mypoints[j]);

      let m1 = getSlopeTwoPoints(mypoints[i], mypoints[j]);

      if (m1 != m2) {
        let x =
          (centeroid[1] -
            m2 * centeroid[0] -
            mypoints[i][1] +
            m1 * mypoints[i][0]) /
          (m1 - m2);
        let y = m1 * (x - mypoints[i][0]) + mypoints[i][1];

        //get lowest and highest x coordinate to check if intersection is on line segment
        let minX =
          mypoints[i][0] < mypoints[j][0] ? mypoints[i][0] : mypoints[j][0];
        let maxX =
          mypoints[i][0] > mypoints[j][0] ? mypoints[i][0] : mypoints[j][0];

        //get lowest and highest x coordinate to check if intersection is on line segment
        let minY =
          mypoints[i][1] < mypoints[j][1] ? mypoints[i][1] : mypoints[j][1];
        let maxY =
          mypoints[i][1] > mypoints[j][1] ? mypoints[i][1] : mypoints[j][1];

        //if intersection point is out of line segment then return (-1,-1) i.e. no intersection
        if (x >= minX && x <= maxX && y >= minY && y <= maxY) {
          let obj = {
            p1: mypoints[i],
            p2: mypoints[j],
            ip: [x, y],
            angle: angle,
          };

          return obj;
        } else {
          //  console.log("out of bound intersection");
        }
      } else {
        console.log("no intersection");
      }
      // console.log(arrPoints);
    }
    return obj;
  }

  function getIntersectionPoint(centeroid, p1, p2, theta) {
    //This function calculates point of intersection between a line drawn at a given angle theta from
    //centroid and a line segment joining two points.

    // console.log(`Get Intersection parameters pased: centeroid=${centeroid}, p1=${p1}, p2=${p2}, theta=${theta}`);
    let m1 = getSlopeTwoPoints(p1, p2);
    let m2 = getSlopeTheta(theta);

    // console.log(`Slopes of both lines :  m1 = ${m1}, m2 = ${m2}`);

    if (m1 == m2) {
      //it means lines are parallel or same line
      // console.log(`PArallel lines :  m1 = ${m1}, m2 = ${m2}`);
      return [-1, -1];
    } else {
      //Determine x and y intersection point
      let x =
        (centeroid[1] - m2 * centeroid[0] - p1[1] + m1 * p1[0]) / (m1 - m2);
      let y = m1 * (x - p1[0]) + p1[1];

      //get lowest and highest x coordinate to check if intersection is on line segment
      let minX = p1[0] < p2[0] ? p1[0] : p2[0];
      let maxX = p1[0] > p2[0] ? p1[0] : p2[0];

      //if intersection point is out of line segment then return (-1,-1) i.e. no intersection
      if (x < minX || x > maxX) {
        // console.log(`Not intersecting Line Segment x=${x}, y=${y} returning [-1,-1]`);

        return [-1, -1];
      }

      //otherwise return intersection point
      // console.log(`Intersection Point x=${x}, y=${y}`);
      return [x, y];
    }
  }

  var theta1 = Math.PI / 2 - Math.PI / 4; // This 90degrees minus angle of north as entered
  var theta2 = Math.PI / 8; // This is fixed as 22.5 degree for 8 divisions
  var areaArr = [];
  var centroid = [centerX, centerY];
  var polygon = [];
  var mypoints = points[0];
  let j = 0;

  // console.log(`Initial Polygon centroid=${centroid}}`);

  // console.log(`Initial parameters centroid = ${centroid}, theta1 = ${theta1}, theta2 = ${theta2}, mypoints = ${mypoints}`);

  function polygonArea(polygon) {
    console.log(polygon);
    //This function calculates area of a polygon, given set of points
    polyLength = polygon.length;
    // console.log(`In polygonarea ${polygon}`);
    area = 0; // Accumulates area
    j = polyLength - 1;

    if (polyLength > 2) {
      //i.e. if it is a polygon

      for (index = 0; index < polyLength; index++) {
        area +=
          (polygon[j][0] + polygon[index][0]) *
          (polygon[j][1] - polygon[index][1]);
        j = index; //j is previous vertex to index
      }
      return Math.abs(area / 2).toFixed(2);
    } else {
      return 0; //There is no polygon with less than 3 sides.
    }
  }

  var ang = [
    90,
    112.5,
    135,
    157.5,
    180,
    202.5,
    225,
    247.5,
    270,
    292.5,
    315,
    337.5,
    360,
    382.5,
    405,
    427.5,
  ];
  angles = ang.map(function (angle) {
    return angle * 0.0174533;
  });

  //Build an angles array
  // var angles = [];
  // for (let i = 0;i<8;i++){
  //     angles[i]= Math.PI/2+i*Math.PI/8; //u can divide by number of divisions
  // }
  // console.log(`Angles ${angles}`);

  var newArr = angles.map(function (angle) {
    return getIntersectionPointOfAngle(angle, centeroid, mypoints);
  });

  console.log("New Array", newArr);
  let finalArray = [];
  finalArray.push(...newArr);

  let len = mypoints.length;

  //for each set of points get the point of intersections with angle array and store in an array of objects
  // for (let i =0;i<len;i++) {

  //  let j = (i==(len-1))? 0: (i+1);

  //   p1=mypoints[i];
  //   p2=mypoints[j];
  //   var intersectionPoints = angles.map(function(angle){
  //       if (getIntersectionPoint(centeroid,p1,p2,angle)[0]!=-1) {

  //          return {point1:p1,point2:p2, angle : angle, intersectionPoint: getIntersectionPoint(centeroid,p1,p2,angle)}
  //         //  return [p1,p2,angle,getIntersectionPoint(centeroid,p1,p2,angle)];
  //       }
  //    });
  //    //Clean values not required
  //    intersectionPoints = intersectionPoints.filter(function(reecord){
  //        return reecord!=undefined;
  //      });

  //    //Cleam the array to combine as one single arrya
  //    finalArray.push(...intersectionPoints);

  // };
  console.log("final", finalArray);
  calculateArea();

  //Calculate area  from the array produced above for each section and store in an array.
  function calculateArea() {
    let lenArray = finalArray.length;
    console.log(finalArray);
    let areaArray = [];
    let polygon = [centroid];
    polygon.push(finalArray[0].ip);
    for (let i = 0; i < lenArray; i++) {
      let j = i == lenArray - 1 ? 0 : i + 1;
      let cfp1 = finalArray[i].p1;
      let cfp2 = finalArray[i].p2;

      let nfp1 = finalArray[j].p1;
      let nfp2 = finalArray[j].p2;
      let nfip = finalArray[j].ip;

      if (cfp1 == nfp1 && cfp2 == nfp2) {
        //next intersection on the same face so forming a triangle
        //add intersection point of next point to polygon
        polygon.push(finalArray[j].ip);
        areaArray.push(polygonArea(polygon));
        polygon = [centroid];
        polygon.push(finalArray[j].ip);
      } else {
        //next intersection on the differnt face so forming a polygon
        //add start point to polygon and check if next interface point is on the same line
        polygon.push(cfp2);
        polygon.push(nfip);
        areaArray.push(polygonArea(polygon));
        polygon = [centroid];
        polygon.push(nfip);
      }
    }
    if (polygon.count > 2) {
      //
      areaArray.push(polygonArea(polygon));
    }
    console.log(areaArray);
  }
});
