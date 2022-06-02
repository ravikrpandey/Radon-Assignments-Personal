const PrintDate = function(){
    console.log(Date())
    }
    module.exports.PrintDate = PrintDate
    const PrintMonth= function(){
        let today = new Date()
        let mm=today.getMonth() +1
        console.log("current month is " + mm)
    }
    module.exports.PrintMonth=PrintMonth
    const getBatchInfo=function(){
        console.log("Radon W3D3 the topic being taught today is NodeJs module system")
    }
    module.exports.getBatchInfo=getBatchInfo