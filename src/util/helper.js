const printDate = function() {
    let currentDate = new Date()
    console.log(currentDate)    
}

const printMonth = function() {
    let currentdate = new Date()
    let currentMonth = currentdate.getMonth() + 1
    console.log('The current month is '+currentMonth)
}

const getBatchInfo = function() {
  let batchInformation = 'Radon, W3D4, the topic for today is Nodejs module system assignment discussion'
  console.log(batchInformation)
}

module.exports.printDate = printDate
module.exports.getCurrentMonth = printMonth
module.exports.getCohortData = getBatchInfo
