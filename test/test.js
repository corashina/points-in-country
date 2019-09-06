'use strict'

const tape = require('tape')
const pointsInCountry = require('../points-in-country.js')

tape('interval 0.1', function(t) {

  t.equals(
    pointsInCountry('Bahrain', .1).length, 
    4
  )

  t.equals(
    pointsInCountry('Cyprus', .1).length, 
    51
  )

  t.end()
})

tape('interval 1', function(t) {

  t.equals(
    pointsInCountry('Latvia', 1).length, 
    9
  )

  t.equals(
    pointsInCountry('Poland', 1).length, 
    41
  )

  t.end()
})


tape('interval 10', function(t) {

  t.equals(
    pointsInCountry('Vatican', 10).length, 
    0
  )

  t.equals(
    pointsInCountry('Russia', 10).length, 
    30
  )


  t.end()
})