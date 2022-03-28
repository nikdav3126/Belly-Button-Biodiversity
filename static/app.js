// Initialize dashboard
function initialize(){
    var select = d3.select("#selDataset");

    //Use d3 to read data
    d3.json("samples.json").then((data)=>{
        let sampleNames = data.names;
        console.log(sampleNames);
    });
}

initialize();