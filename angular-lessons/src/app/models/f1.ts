export interface F1APIResponse {
  MRData: MRData
}

export interface MRData {
  xmlns: string
  series: string
  url: string
  limit: string
  offset: string
  total: string
  RaceTable: RaceTable
}

export interface RaceTable {
  season: string
  round?: string
  Races: Race[]
}

export interface Race {
  season: string
  round: string
  url: string
  raceName: string
  Circuit: Circuit
  date: string
  time: string
  FirstPractice?: FirstPractice
  SecondPractice?: SecondPractice
  ThirdPractice?: ThirdPractice
  Qualifying?: Qualifying
  Sprint?: Sprint
  Results?: Result[]
}

export interface Circuit {
  circuitId: string
  url: string
  circuitName: string
  Location: Location
}

export interface Location {
  lat: string
  long: string
  locality: string
  country: string
}

export interface FirstPractice {
  date: string
  time: string
}

export interface SecondPractice {
  date: string
  time: string
}

export interface ThirdPractice {
  date: string
  time: string
}

export interface Qualifying {
  date: string
  time: string
}

export interface Sprint {
  date: string
  time: string
}

export interface Result {
  number: string
  position: string
  positionText: string
  points: string
  Driver: Driver
  Constructor: Constructor
  grid: string
  laps: string
  status: string
  Time?: Time
  FastestLap?: FastestLap
}

export interface Driver {
  driverId: string
  permanentNumber?: string
  code: string
  url: string
  givenName: string
  familyName: string
  dateOfBirth: string
  nationality: string
}

export interface Constructor {
  constructorId: string
  url: string
  name: string
  nationality: string
}

export interface Time {
  millis: string
  time: string
}

export interface FastestLap {
  rank: string
  lap: string
  Time: {time: string}
  AverageSpeed: AverageSpeed
}

export interface AverageSpeed {
  units: string
  speed: string
}
