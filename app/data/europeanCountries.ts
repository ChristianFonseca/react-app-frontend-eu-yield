export interface Country {
  name: string;
  center: { lat: number; lng: number };
  coordinates: Array<{ lat: number; lng: number }>;
}

export const europeanCountries: Country[] = [
  {
    name: "Italy",
    center: { lat: 41.8719, lng: 12.5674 },
    coordinates: [
      { lat: 47.0, lng: 6.6 },
      { lat: 47.0, lng: 13.8 },
      { lat: 36.6, lng: 18.5 },
      { lat: 36.6, lng: 6.6 },
      { lat: 47.0, lng: 6.6 },
    ]
  },
  {
    name: "Türkiye",
    center: { lat: 38.9637, lng: 35.2433 },
    coordinates: [
      { lat: 42.1, lng: 26.0 },
      { lat: 42.1, lng: 44.8 },
      { lat: 35.8, lng: 44.8 },
      { lat: 35.8, lng: 26.0 },
      { lat: 42.1, lng: 26.0 },
    ]
  },
  {
    name: "Norway",
    center: { lat: 60.472024, lng: 8.468946 },
    coordinates: [
      { lat: 71.1, lng: 4.7 },
      { lat: 71.1, lng: 31.1 },
      { lat: 57.9, lng: 31.1 },
      { lat: 57.9, lng: 4.7 },
      { lat: 71.1, lng: 4.7 },
    ]
  },
  {
    name: "Portugal",
    center: { lat: 39.3999, lng: -8.2245 },
    coordinates: [
      { lat: 42.1, lng: -9.5 },
      { lat: 42.1, lng: -6.2 },
      { lat: 36.9, lng: -6.2 },
      { lat: 36.9, lng: -9.5 },
      { lat: 42.1, lng: -9.5 },
    ]
  },
  {
    name: "France",
    center: { lat: 46.2276, lng: 2.2137 },
    coordinates: [
      { lat: 51.1, lng: -5.1 },
      { lat: 51.1, lng: 8.2 },
      { lat: 42.3, lng: 8.2 },
      { lat: 42.3, lng: -5.1 },
      { lat: 51.1, lng: -5.1 },
    ]
  },
  {
    name: "Greece",
    center: { lat: 39.0742, lng: 21.8243 },
    coordinates: [
      { lat: 41.7, lng: 19.3 },
      { lat: 41.7, lng: 28.2 },
      { lat: 34.8, lng: 28.2 },
      { lat: 34.8, lng: 19.3 },
      { lat: 41.7, lng: 19.3 },
    ]
  },
  {
    name: "Spain",
    center: { lat: 40.4637, lng: -3.7492 },
    coordinates: [
      { lat: 43.8, lng: -9.3 },
      { lat: 43.8, lng: 3.3 },
      { lat: 36.0, lng: 3.3 },
      { lat: 36.0, lng: -9.3 },
      { lat: 43.8, lng: -9.3 },
    ]
  },
  {
    name: "Germany",
    center: { lat: 51.1657, lng: 10.4515 },
    coordinates: [
      { lat: 55.1, lng: 5.9 },
      { lat: 55.1, lng: 15.0 },
      { lat: 47.3, lng: 15.0 },
      { lat: 47.3, lng: 5.9 },
      { lat: 55.1, lng: 5.9 },
    ]
  },
  {
    name: "United Kingdom",
    center: { lat: 55.3781, lng: -3.4360 },
    coordinates: [
      { lat: 60.8, lng: -8.6 },
      { lat: 60.8, lng: 1.7 },
      { lat: 49.9, lng: 1.7 },
      { lat: 49.9, lng: -8.6 },
      { lat: 60.8, lng: -8.6 },
    ]
  },
  {
    name: "Serbia",
    center: { lat: 44.0165, lng: 21.0059 },
    coordinates: [
      { lat: 46.2, lng: 18.8 },
      { lat: 46.2, lng: 23.0 },
      { lat: 41.8, lng: 23.0 },
      { lat: 41.8, lng: 18.8 },
      { lat: 46.2, lng: 18.8 },
    ]
  },
  {
    name: "Ireland",
    center: { lat: 53.1424, lng: -7.6921 },
    coordinates: [
      { lat: 55.4, lng: -10.5 },
      { lat: 55.4, lng: -5.4 },
      { lat: 51.4, lng: -5.4 },
      { lat: 51.4, lng: -10.5 },
      { lat: 55.4, lng: -10.5 },
    ]
  },
  {
    name: "Slovakia",
    center: { lat: 48.6690, lng: 19.6990 },
    coordinates: [
      { lat: 49.6, lng: 16.8 },
      { lat: 49.6, lng: 22.5 },
      { lat: 47.7, lng: 22.5 },
      { lat: 47.7, lng: 16.8 },
      { lat: 49.6, lng: 16.8 },
    ]
  },
  {
    name: "Romania",
    center: { lat: 45.9432, lng: 24.9668 },
    coordinates: [
      { lat: 48.2, lng: 20.2 },
      { lat: 48.2, lng: 29.7 },
      { lat: 43.6, lng: 29.7 },
      { lat: 43.6, lng: 20.2 },
      { lat: 48.2, lng: 20.2 },
    ]
  },
  {
    name: "Hungary",
    center: { lat: 47.1625, lng: 19.5033 },
    coordinates: [
      { lat: 48.6, lng: 16.1 },
      { lat: 48.6, lng: 22.9 },
      { lat: 45.7, lng: 22.9 },
      { lat: 45.7, lng: 16.1 },
      { lat: 48.6, lng: 16.1 },
    ]
  },
  {
    name: "Austria",
    center: { lat: 47.5162, lng: 14.5501 },
    coordinates: [
      { lat: 49.0, lng: 9.5 },
      { lat: 49.0, lng: 17.2 },
      { lat: 46.4, lng: 17.2 },
      { lat: 46.4, lng: 9.5 },
      { lat: 49.0, lng: 9.5 },
    ]
  },
  {
    name: "Montenegro",
    center: { lat: 42.7087, lng: 19.3744 },
    coordinates: [
      { lat: 43.5, lng: 18.4 },
      { lat: 43.5, lng: 20.3 },
      { lat: 41.8, lng: 20.3 },
      { lat: 41.8, lng: 18.4 },
      { lat: 43.5, lng: 18.4 },
    ]
  },
  {
    name: "Poland",
    center: { lat: 51.9194, lng: 19.1451 },
    coordinates: [
      { lat: 54.8, lng: 14.1 },
      { lat: 54.8, lng: 24.1 },
      { lat: 49.0, lng: 24.1 },
      { lat: 49.0, lng: 14.1 },
      { lat: 54.8, lng: 14.1 },
    ]
  },
  {
    name: "Netherlands",
    center: { lat: 52.1326, lng: 5.2913 },
    coordinates: [
      { lat: 53.5, lng: 3.3 },
      { lat: 53.5, lng: 7.2 },
      { lat: 50.7, lng: 7.2 },
      { lat: 50.7, lng: 3.3 },
      { lat: 53.5, lng: 3.3 },
    ]
  },
  {
    name: "Estonia",
    center: { lat: 58.5953, lng: 25.0136 },
    coordinates: [
      { lat: 59.7, lng: 21.8 },
      { lat: 59.7, lng: 28.2 },
      { lat: 57.5, lng: 28.2 },
      { lat: 57.5, lng: 21.8 },
      { lat: 59.7, lng: 21.8 },
    ]
  },
  {
    name: "Switzerland",
    center: { lat: 46.8182, lng: 8.2275 },
    coordinates: [
      { lat: 47.8, lng: 5.9 },
      { lat: 47.8, lng: 10.5 },
      { lat: 45.8, lng: 10.5 },
      { lat: 45.8, lng: 5.9 },
      { lat: 47.8, lng: 5.9 },
    ]
  },
  {
    name: "Finland",
    center: { lat: 61.9241, lng: 25.7482 },
    coordinates: [
      { lat: 70.1, lng: 20.6 },
      { lat: 70.1, lng: 31.5 },
      { lat: 59.8, lng: 31.5 },
      { lat: 59.8, lng: 20.6 },
      { lat: 70.1, lng: 20.6 },
    ]
  },
  {
    name: "Croatia",
    center: { lat: 45.1000, lng: 15.2000 },
    coordinates: [
      { lat: 46.5, lng: 13.5 },
      { lat: 46.5, lng: 19.4 },
      { lat: 42.4, lng: 19.4 },
      { lat: 42.4, lng: 13.5 },
      { lat: 46.5, lng: 13.5 },
    ]
  },
  {
    name: "Denmark",
    center: { lat: 56.2639, lng: 9.5018 },
    coordinates: [
      { lat: 57.7, lng: 8.1 },
      { lat: 57.7, lng: 12.7 },
      { lat: 54.6, lng: 12.7 },
      { lat: 54.6, lng: 8.1 },
      { lat: 57.7, lng: 8.1 },
    ]
  },
  {
    name: "Czechia",
    center: { lat: 49.8175, lng: 15.4730 },
    coordinates: [
      { lat: 51.1, lng: 12.1 },
      { lat: 51.1, lng: 18.9 },
      { lat: 48.5, lng: 18.9 },
      { lat: 48.5, lng: 12.1 },
      { lat: 51.1, lng: 12.1 },
    ]
  },
  {
    name: "Albania",
    center: { lat: 41.1533, lng: 20.1683 },
    coordinates: [
      { lat: 42.7, lng: 19.3 },
      { lat: 42.7, lng: 21.1 },
      { lat: 39.6, lng: 21.1 },
      { lat: 39.6, lng: 19.3 },
      { lat: 42.7, lng: 19.3 },
    ]
  },
  {
    name: "Cyprus",
    center: { lat: 35.1264, lng: 33.4299 },
    coordinates: [
      { lat: 35.7, lng: 32.2 },
      { lat: 35.7, lng: 34.6 },
      { lat: 34.6, lng: 34.6 },
      { lat: 34.6, lng: 32.2 },
      { lat: 35.7, lng: 32.2 },
    ]
  },
  {
    name: "Latvia",
    center: { lat: 56.8796, lng: 24.6032 },
    coordinates: [
      { lat: 58.1, lng: 20.9 },
      { lat: 58.1, lng: 28.2 },
      { lat: 55.7, lng: 28.2 },
      { lat: 55.7, lng: 20.9 },
      { lat: 58.1, lng: 20.9 },
    ]
  },
  {
    name: "Luxembourg",
    center: { lat: 49.8153, lng: 6.1296 },
    coordinates: [
      { lat: 50.2, lng: 5.7 },
      { lat: 50.2, lng: 6.5 },
      { lat: 49.4, lng: 6.5 },
      { lat: 49.4, lng: 5.7 },
      { lat: 50.2, lng: 5.7 },
    ]
  },
  {
    name: "Malta",
    center: { lat: 35.9375, lng: 14.3754 },
    coordinates: [
      { lat: 36.1, lng: 14.1 },
      { lat: 36.1, lng: 14.6 },
      { lat: 35.8, lng: 14.6 },
      { lat: 35.8, lng: 14.1 },
      { lat: 36.1, lng: 14.1 },
    ]
  },
  {
    name: "Sweden",
    center: { lat: 60.1282, lng: 18.6435 },
    coordinates: [
      { lat: 69.0, lng: 11.0 },
      { lat: 69.0, lng: 24.2 },
      { lat: 55.3, lng: 24.2 },
      { lat: 55.3, lng: 11.0 },
      { lat: 69.0, lng: 11.0 },
    ]
  },
  {
    name: "Belgium",
    center: { lat: 50.5039, lng: 4.4699 },
    coordinates: [
      { lat: 51.5, lng: 2.5 },
      { lat: 51.5, lng: 6.4 },
      { lat: 49.5, lng: 6.4 },
      { lat: 49.5, lng: 2.5 },
      { lat: 51.5, lng: 2.5 },
    ]
  },
  {
    name: "Bulgaria",
    center: { lat: 42.7339, lng: 25.4858 },
    coordinates: [
      { lat: 44.2, lng: 22.4 },
      { lat: 44.2, lng: 28.6 },
      { lat: 41.2, lng: 28.6 },
      { lat: 41.2, lng: 22.4 },
      { lat: 44.2, lng: 22.4 },
    ]
  },
  {
    name: "North Macedonia",
    center: { lat: 41.6086, lng: 21.7453 },
    coordinates: [
      { lat: 42.4, lng: 20.4 },
      { lat: 42.4, lng: 23.0 },
      { lat: 40.8, lng: 23.0 },
      { lat: 40.8, lng: 20.4 },
      { lat: 42.4, lng: 20.4 },
    ]
  },
  {
    name: "Lithuania",
    center: { lat: 55.1694, lng: 23.8813 },
    coordinates: [
      { lat: 56.5, lng: 20.9 },
      { lat: 56.5, lng: 26.8 },
      { lat: 53.9, lng: 26.8 },
      { lat: 53.9, lng: 20.9 },
      { lat: 56.5, lng: 20.9 },
    ]
  },
  {
    name: "Slovenia",
    center: { lat: 46.1512, lng: 14.9955 },
    coordinates: [
      { lat: 46.9, lng: 13.4 },
      { lat: 46.9, lng: 16.6 },
      { lat: 45.4, lng: 16.6 },
      { lat: 45.4, lng: 13.4 },
      { lat: 46.9, lng: 13.4 },
    ]
  },
  {
    name: "Iceland",
    center: { lat: 64.9631, lng: -19.0208 },
    coordinates: [
      { lat: 66.5, lng: -24.5 },
      { lat: 66.5, lng: -13.5 },
      { lat: 63.4, lng: -13.5 },
      { lat: 63.4, lng: -24.5 },
      { lat: 66.5, lng: -24.5 },
    ]
  }
];

export default europeanCountries;

