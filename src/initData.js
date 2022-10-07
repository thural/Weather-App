const initialWeather = {
  "coord": {
      "lon": -0.1257,
      "lat": 51.5085
  },
  "weather": [
      {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
      }
  ],
  "base": "stations",
  "main": {
      "temp": 16.57,
      "feels_like": 16.08,
      "temp_min": 15.02,
      "temp_max": 17.27,
      "pressure": 1026,
      "humidity": 69
  },
  "visibility": 10000,
  "wind": {
      "speed": 5.14,
      "deg": 230
  },
  "clouds": {
      "all": 20
  },
  "dt": 1665076466,
  "sys": {
      "type": 2,
      "id": 2075535,
      "country": "GB",
      "sunrise": 1665036534,
      "sunset": 1665077291
  },
  "timezone": 3600,
  "id": 2643743,
  "name": "London",
  "cod": 200
};

const initialForecast = {
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [
      {
          "dt": 1665133200,
          "main": {
              "temp": 14.06,
              "feels_like": 13.79,
              "temp_min": 14.06,
              "temp_max": 15.09,
              "pressure": 1020,
              "sea_level": 1020,
              "grnd_level": 1017,
              "humidity": 87,
              "temp_kf": -1.03
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 5.16,
              "deg": 224,
              "gust": 10.77
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-10-07 09:00:00"
      },
      {
          "dt": 1665144000,
          "main": {
              "temp": 15.58,
              "feels_like": 15.15,
              "temp_min": 15.58,
              "temp_max": 18.62,
              "pressure": 1019,
              "sea_level": 1019,
              "grnd_level": 1015,
              "humidity": 75,
              "temp_kf": -3.04
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 95
          },
          "wind": {
              "speed": 6.65,
              "deg": 231,
              "gust": 10.64
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-10-07 12:00:00"
      },
      {
          "dt": 1665154800,
          "main": {
              "temp": 17.34,
              "feels_like": 16.75,
              "temp_min": 17.34,
              "temp_max": 18.98,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 1012,
              "humidity": 62,
              "temp_kf": -1.64
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 59
          },
          "wind": {
              "speed": 6.55,
              "deg": 227,
              "gust": 11.23
          },
          "visibility": 10000,
          "pop": 0.02,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-10-07 15:00:00"
      },
      {
          "dt": 1665165600,
          "main": {
              "temp": 14.82,
              "feels_like": 14.55,
              "temp_min": 14.82,
              "temp_max": 14.82,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 1013,
              "humidity": 84,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 52
          },
          "wind": {
              "speed": 4.79,
              "deg": 247,
              "gust": 10.75
          },
          "visibility": 10000,
          "pop": 0.75,
          "rain": {
              "3h": 1.82
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-10-07 18:00:00"
      },
      {
          "dt": 1665176400,
          "main": {
              "temp": 12.94,
              "feels_like": 12.35,
              "temp_min": 12.94,
              "temp_max": 12.94,
              "pressure": 1018,
              "sea_level": 1018,
              "grnd_level": 1014,
              "humidity": 79,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 32
          },
          "wind": {
              "speed": 4.22,
              "deg": 282,
              "gust": 9.33
          },
          "visibility": 10000,
          "pop": 0.53,
          "rain": {
              "3h": 0.36
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-10-07 21:00:00"
      },
      {
          "dt": 1665187200,
          "main": {
              "temp": 11.21,
              "feels_like": 10.42,
              "temp_min": 11.21,
              "temp_max": 11.21,
              "pressure": 1019,
              "sea_level": 1019,
              "grnd_level": 1016,
              "humidity": 78,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 801,
                  "main": "Clouds",
                  "description": "few clouds",
                  "icon": "02n"
              }
          ],
          "clouds": {
              "all": 16
          },
          "wind": {
              "speed": 4.24,
              "deg": 279,
              "gust": 9.98
          },
          "visibility": 10000,
          "pop": 0.39,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-10-08 00:00:00"
      },
      {
          "dt": 1665198000,
          "main": {
              "temp": 9.85,
              "feels_like": 7.99,
              "temp_min": 9.85,
              "temp_max": 9.85,
              "pressure": 1020,
              "sea_level": 1020,
              "grnd_level": 1017,
              "humidity": 80,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 3.63,
              "deg": 283,
              "gust": 10.02
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-10-08 03:00:00"
      },
      {
          "dt": 1665208800,
          "main": {
              "temp": 9.12,
              "feels_like": 7.46,
              "temp_min": 9.12,
              "temp_max": 9.12,
              "pressure": 1023,
              "sea_level": 1023,
              "grnd_level": 1020,
              "humidity": 80,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 2.99,
              "deg": 280,
              "gust": 9.04
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-10-08 06:00:00"
      },
      {
          "dt": 1665219600,
          "main": {
              "temp": 11.66,
              "feels_like": 10.63,
              "temp_min": 11.66,
              "temp_max": 11.66,
              "pressure": 1025,
              "sea_level": 1025,
              "grnd_level": 1022,
              "humidity": 67,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 3.37,
              "deg": 292,
              "gust": 6.76
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-10-08 09:00:00"
      },
      {
          "dt": 1665230400,
          "main": {
              "temp": 14.96,
              "feels_like": 13.69,
              "temp_min": 14.96,
              "temp_max": 14.96,
              "pressure": 1025,
              "sea_level": 1025,
              "grnd_level": 1022,
              "humidity": 45,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 3.25,
              "deg": 292,
              "gust": 4.59
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-10-08 12:00:00"
      },
      {
          "dt": 1665241200,
          "main": {
              "temp": 15.91,
              "feels_like": 14.57,
              "temp_min": 15.91,
              "temp_max": 15.91,
              "pressure": 1024,
              "sea_level": 1024,
              "grnd_level": 1021,
              "humidity": 39,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 7
          },
          "wind": {
              "speed": 2.89,
              "deg": 278,
              "gust": 3.93
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-10-08 15:00:00"
      },
      {
          "dt": 1665252000,
          "main": {
              "temp": 13.79,
              "feels_like": 12.5,
              "temp_min": 13.79,
              "temp_max": 13.79,
              "pressure": 1025,
              "sea_level": 1025,
              "grnd_level": 1022,
              "humidity": 49,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 9
          },
          "wind": {
              "speed": 1.25,
              "deg": 235,
              "gust": 1.48
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-10-08 18:00:00"
      },
      {
          "dt": 1665262800,
          "main": {
              "temp": 11.93,
              "feels_like": 10.82,
              "temp_min": 11.93,
              "temp_max": 11.93,
              "pressure": 1025,
              "sea_level": 1025,
              "grnd_level": 1022,
              "humidity": 63,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 801,
                  "main": "Clouds",
                  "description": "few clouds",
                  "icon": "02n"
              }
          ],
          "clouds": {
              "all": 19
          },
          "wind": {
              "speed": 1.86,
              "deg": 200,
              "gust": 4.48
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-10-08 21:00:00"
      },
      {
          "dt": 1665273600,
          "main": {
              "temp": 10.91,
              "feels_like": 9.88,
              "temp_min": 10.91,
              "temp_max": 10.91,
              "pressure": 1024,
              "sea_level": 1024,
              "grnd_level": 1021,
              "humidity": 70,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 53
          },
          "wind": {
              "speed": 1.76,
              "deg": 177,
              "gust": 5.17
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-10-09 00:00:00"
      },
      {
          "dt": 1665284400,
          "main": {
              "temp": 9.97,
              "feels_like": 9.12,
              "temp_min": 9.97,
              "temp_max": 9.97,
              "pressure": 1022,
              "sea_level": 1022,
              "grnd_level": 1019,
              "humidity": 72,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 79
          },
          "wind": {
              "speed": 2.04,
              "deg": 163,
              "gust": 7.08
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-10-09 03:00:00"
      },
      {
          "dt": 1665295200,
          "main": {
              "temp": 9.77,
              "feels_like": 8.41,
              "temp_min": 9.77,
              "temp_max": 9.77,
              "pressure": 1021,
              "sea_level": 1021,
              "grnd_level": 1017,
              "humidity": 73,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 47
          },
          "wind": {
              "speed": 2.72,
              "deg": 162,
              "gust": 9.5
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-10-09 06:00:00"
      },
      {
          "dt": 1665306000,
          "main": {
              "temp": 13.45,
              "feels_like": 12.5,
              "temp_min": 13.45,
              "temp_max": 13.45,
              "pressure": 1020,
              "sea_level": 1020,
              "grnd_level": 1017,
              "humidity": 63,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 9
          },
          "wind": {
              "speed": 4.36,
              "deg": 169,
              "gust": 9.27
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-10-09 09:00:00"
      },
      {
          "dt": 1665316800,
          "main": {
              "temp": 16.83,
              "feels_like": 15.69,
              "temp_min": 16.83,
              "temp_max": 16.83,
              "pressure": 1018,
              "sea_level": 1018,
              "grnd_level": 1014,
              "humidity": 43,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 801,
                  "main": "Clouds",
                  "description": "few clouds",
                  "icon": "02d"
              }
          ],
          "clouds": {
              "all": 16
          },
          "wind": {
              "speed": 4.84,
              "deg": 182,
              "gust": 7.41
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-10-09 12:00:00"
      },
      {
          "dt": 1665327600,
          "main": {
              "temp": 16.3,
              "feels_like": 15.08,
              "temp_min": 16.3,
              "temp_max": 16.3,
              "pressure": 1015,
              "sea_level": 1015,
              "grnd_level": 1012,
              "humidity": 42,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 4.53,
              "deg": 180,
              "gust": 6.43
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-10-09 15:00:00"
      },
      {
          "dt": 1665338400,
          "main": {
              "temp": 13.44,
              "feels_like": 12.41,
              "temp_min": 13.44,
              "temp_max": 13.44,
              "pressure": 1014,
              "sea_level": 1014,
              "grnd_level": 1011,
              "humidity": 60,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 86
          },
          "wind": {
              "speed": 2.88,
              "deg": 165,
              "gust": 8.31
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-10-09 18:00:00"
      },
      {
          "dt": 1665349200,
          "main": {
              "temp": 12.74,
              "feels_like": 11.64,
              "temp_min": 12.74,
              "temp_max": 12.74,
              "pressure": 1013,
              "sea_level": 1013,
              "grnd_level": 1010,
              "humidity": 60,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 1.81,
              "deg": 169,
              "gust": 7.76
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-10-09 21:00:00"
      },
      {
          "dt": 1665360000,
          "main": {
              "temp": 12.82,
              "feels_like": 11.78,
              "temp_min": 12.82,
              "temp_max": 12.82,
              "pressure": 1012,
              "sea_level": 1012,
              "grnd_level": 1009,
              "humidity": 62,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 1.34,
              "deg": 198,
              "gust": 2.05
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-10-10 00:00:00"
      },
      {
          "dt": 1665370800,
          "main": {
              "temp": 12.7,
              "feels_like": 11.85,
              "temp_min": 12.7,
              "temp_max": 12.7,
              "pressure": 1012,
              "sea_level": 1012,
              "grnd_level": 1009,
              "humidity": 70,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 1.33,
              "deg": 285,
              "gust": 1.84
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-10-10 03:00:00"
      },
      {
          "dt": 1665381600,
          "main": {
              "temp": 12.46,
              "feels_like": 11.77,
              "temp_min": 12.46,
              "temp_max": 12.46,
              "pressure": 1015,
              "sea_level": 1015,
              "grnd_level": 1011,
              "humidity": 77,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 3.26,
              "deg": 334,
              "gust": 8.05
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-10-10 06:00:00"
      },
      {
          "dt": 1665392400,
          "main": {
              "temp": 12.26,
              "feels_like": 11.32,
              "temp_min": 12.26,
              "temp_max": 12.26,
              "pressure": 1018,
              "sea_level": 1018,
              "grnd_level": 1015,
              "humidity": 68,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 99
          },
          "wind": {
              "speed": 3.87,
              "deg": 350,
              "gust": 8.7
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-10-10 09:00:00"
      },
      {
          "dt": 1665403200,
          "main": {
              "temp": 15.45,
              "feels_like": 14.12,
              "temp_min": 15.45,
              "temp_max": 15.45,
              "pressure": 1020,
              "sea_level": 1020,
              "grnd_level": 1017,
              "humidity": 41,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 53
          },
          "wind": {
              "speed": 4.47,
              "deg": 344,
              "gust": 5.99
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-10-10 12:00:00"
      },
      {
          "dt": 1665414000,
          "main": {
              "temp": 15.63,
              "feels_like": 14.29,
              "temp_min": 15.63,
              "temp_max": 15.63,
              "pressure": 1022,
              "sea_level": 1022,
              "grnd_level": 1019,
              "humidity": 40,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 3.93,
              "deg": 346,
              "gust": 4.97
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-10-10 15:00:00"
      },
      {
          "dt": 1665424800,
          "main": {
              "temp": 13.55,
              "feels_like": 12.21,
              "temp_min": 13.55,
              "temp_max": 13.55,
              "pressure": 1025,
              "sea_level": 1025,
              "grnd_level": 1021,
              "humidity": 48,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 2.47,
              "deg": 345,
              "gust": 5.56
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-10-10 18:00:00"
      },
      {
          "dt": 1665435600,
          "main": {
              "temp": 11.67,
              "feels_like": 10.3,
              "temp_min": 11.67,
              "temp_max": 11.67,
              "pressure": 1026,
              "sea_level": 1026,
              "grnd_level": 1023,
              "humidity": 54,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 2.51,
              "deg": 345,
              "gust": 6.55
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-10-10 21:00:00"
      },
      {
          "dt": 1665446400,
          "main": {
              "temp": 10.32,
              "feels_like": 9,
              "temp_min": 10.32,
              "temp_max": 10.32,
              "pressure": 1027,
              "sea_level": 1027,
              "grnd_level": 1024,
              "humidity": 61,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 3
          },
          "wind": {
              "speed": 1.5,
              "deg": 5,
              "gust": 4.47
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-10-11 00:00:00"
      },
      {
          "dt": 1665457200,
          "main": {
              "temp": 9.77,
              "feels_like": 9.77,
              "temp_min": 9.77,
              "temp_max": 9.77,
              "pressure": 1027,
              "sea_level": 1027,
              "grnd_level": 1024,
              "humidity": 64,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 0.94,
              "deg": 15,
              "gust": 2.09
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-10-11 03:00:00"
      },
      {
          "dt": 1665468000,
          "main": {
              "temp": 9.61,
              "feels_like": 9.61,
              "temp_min": 9.61,
              "temp_max": 9.61,
              "pressure": 1027,
              "sea_level": 1027,
              "grnd_level": 1024,
              "humidity": 65,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 0.76,
              "deg": 21,
              "gust": 0.85
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-10-11 06:00:00"
      },
      {
          "dt": 1665478800,
          "main": {
              "temp": 11.41,
              "feels_like": 10.12,
              "temp_min": 11.41,
              "temp_max": 11.41,
              "pressure": 1028,
              "sea_level": 1028,
              "grnd_level": 1024,
              "humidity": 58,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 0.62,
              "deg": 68,
              "gust": 0.8
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-10-11 09:00:00"
      },
      {
          "dt": 1665489600,
          "main": {
              "temp": 14.81,
              "feels_like": 13.5,
              "temp_min": 14.81,
              "temp_max": 14.81,
              "pressure": 1027,
              "sea_level": 1027,
              "grnd_level": 1023,
              "humidity": 44,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 66
          },
          "wind": {
              "speed": 0.89,
              "deg": 133,
              "gust": 1.18
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-10-11 12:00:00"
      },
      {
          "dt": 1665500400,
          "main": {
              "temp": 15.66,
              "feels_like": 14.33,
              "temp_min": 15.66,
              "temp_max": 15.66,
              "pressure": 1025,
              "sea_level": 1025,
              "grnd_level": 1022,
              "humidity": 40,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 2
          },
          "wind": {
              "speed": 0.89,
              "deg": 182,
              "gust": 1.5
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-10-11 15:00:00"
      },
      {
          "dt": 1665511200,
          "main": {
              "temp": 13.73,
              "feels_like": 12.44,
              "temp_min": 13.73,
              "temp_max": 13.73,
              "pressure": 1025,
              "sea_level": 1025,
              "grnd_level": 1021,
              "humidity": 49,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 7
          },
          "wind": {
              "speed": 1.15,
              "deg": 192,
              "gust": 1.89
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-10-11 18:00:00"
      },
      {
          "dt": 1665522000,
          "main": {
              "temp": 11.94,
              "feels_like": 10.89,
              "temp_min": 11.94,
              "temp_max": 11.94,
              "pressure": 1024,
              "sea_level": 1024,
              "grnd_level": 1021,
              "humidity": 65,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 72
          },
          "wind": {
              "speed": 1.57,
              "deg": 200,
              "gust": 3.66
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-10-11 21:00:00"
      },
      {
          "dt": 1665532800,
          "main": {
              "temp": 11.11,
              "feels_like": 10.1,
              "temp_min": 11.11,
              "temp_max": 11.11,
              "pressure": 1024,
              "sea_level": 1024,
              "grnd_level": 1020,
              "humidity": 70,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 86
          },
          "wind": {
              "speed": 1.56,
              "deg": 196,
              "gust": 4.09
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-10-12 00:00:00"
      },
      {
          "dt": 1665543600,
          "main": {
              "temp": 10.87,
              "feels_like": 9.87,
              "temp_min": 10.87,
              "temp_max": 10.87,
              "pressure": 1022,
              "sea_level": 1022,
              "grnd_level": 1019,
              "humidity": 71,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 1.45,
              "deg": 191,
              "gust": 3.66
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-10-12 03:00:00"
      },
      {
          "dt": 1665554400,
          "main": {
              "temp": 10.3,
              "feels_like": 9.32,
              "temp_min": 10.3,
              "temp_max": 10.3,
              "pressure": 1021,
              "sea_level": 1021,
              "grnd_level": 1018,
              "humidity": 74,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 99
          },
          "wind": {
              "speed": 1.49,
              "deg": 189,
              "gust": 3.96
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-10-12 06:00:00"
      }
  ],
  "city": {
      "id": 2643743,
      "name": "London",
      "coord": {
          "lat": 51.5085,
          "lon": -0.1257
      },
      "country": "GB",
      "population": 1000000,
      "timezone": 3600,
      "sunrise": 1665123033,
      "sunset": 1665163556
  }
}

export {initialWeather, initialForecast}