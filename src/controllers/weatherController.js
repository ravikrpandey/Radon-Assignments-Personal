let axios = require("axios")

const getaWeather = async function (req, res) {

    try {
        let q = req.query.q
        let appid = req.query.date

        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })

    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getSortedCities = async function (req, res) {

    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityObjArray = []

        for (i = 0; i < cities.length; i++) {
            let obj = { city: cities[i] }

            let resp = axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=1c4333daddae49db37cd4f5ffd89aa57`)
            console.log(resp.data.main.temp)

            obj.temp = resp.data.main.temp

            cityObjArray.push(obj)
        }

        let sorted = cityObjArray.sort(function (a, b) { return a.temp - b.temp })

        console.log(sorted)
        res.status(200).send({ status: true, data: sorted })
    } catch (error) {
        console.log(error)
        res.status(500).send({ status: false, msg: "server error" })
    }
}

module.exports.getaWeather = getaWeather
module.exports.getSortedCities = getSortedCities