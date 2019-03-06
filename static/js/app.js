// from data.js

var filterdata=[];

body1=d3.select("tbody");
var tableData = data;
data.map((data1)=>{ console.log(data1);
    row=body1.append("tr")
    row.append("td").text(data1.datetime)
    row.append("td").text(data1.city)
    row.append("td").text(data1.state)
    row.append("td").text(data1.country)
    row.append("td").text(data1.shape)
    row.append("td").text(data1.durationMinutes)
    row.append("td").text(data1.comments)
    


} )

click1=d3.select("#filter-btn");

click1.on("click",function()
{
    
d3.event.preventDefault();
 
var input1=d3.select("#datetime").property("value");
 filterdata=data.filter(data1=>data1.datetime==input1)
 
 body1.html("")
 body1=d3.select("tbody");
 filterdata.map((data1)=>{ 
     row=body1.append("tr")
     row.append("td").text(data1.datetime)
     row.append("td").text(data1.city)
     row.append("td").text(data1.state)
     row.append("td").text(data1.country)
     row.append("td").text(data1.shape)
     row.append("td").text(data1.durationMinutes)
     row.append("td").text(data1.comments)
 })
 
});
var fld = document.getElementById('d3-dropdown');
    var values = [];
 
   d3.select("select")
  .on("change",function(d){
    var thead1=d3.select("thead")
    thead1.html("")
    body1.html("")
    var values = [];
   for (var i = 0; i < fld.options.length; i++) {
  if (fld.options[i].selected) {
    values.push(fld.options[i].value);
    console.log(fld.options[i].value)
  }
}
values.map(seloption=>{
    thead1.append("th").attr("class","table-head").text(seloption)
})
data.map((dataset)=>{
    row1=body1.append("tr")
    values.map((seloption)=>{
    row1.append("td").text(dataset[seloption])
})

})


   console.log(values)
})


