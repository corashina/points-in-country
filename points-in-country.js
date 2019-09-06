module.exports = pointsInCountry

const countries = require('./countries.json');
const classifyPoint = require('robust-point-in-polygon');

function pointsInCountry(country, interval) {
  
    const entry = countries.features.find((polygon) => polygon.properties.ADMIN === country)

    if(!entry || !country) throw new Error('Invalid country')

    if(!interval) interval = 0.1

    const type = entry.geometry.type

    const polygon = type === 'Polygon' ? [entry.geometry.coordinates.shift().map(e => [e[1], e[0]])]
                                       : [].concat.apply([], entry.geometry.coordinates).map(polygon => polygon.map(e => [e[1], e[0]]))

    const points = []

    for(let poly of polygon) {

        const lonMin = Math.min(...poly.map((e) => e[0]))
        const lonMax = Math.max(...poly.map((e) => e[0]))
        const latMin = Math.min(...poly.map((e) => e[1]))
        const latMax = Math.max(...poly.map((e) => e[1]))
       
        for(let i = lonMin ; i < lonMax ; i += interval) {

            for(let j = latMin ; j < latMax ; j += interval) {

                if (classifyPoint(poly, [i, j]) < 1) points.push([j, i]); 

            }

        }

    }

    return points

}

console.log(pointsInCountry('Cyprus', .1).length)