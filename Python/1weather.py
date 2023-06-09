#weather app
# importing the required libraries
import requests
# Enter the api key of openweathermap here
api_key = "5169e593a2e4ff0915d2c0f4d795563f"
# Base url for the open map api
root_url = "http://api.openweathermap.org/data/2.5/weather?"
# Input the City name for which we need the weather data
city_name = input("Please Enter The City Name : ")
# Building the final url for the API call
url = f"{root_url}appid={api_key}&q={city_name}"
# sending a get request at the url
r = requests.get(url)
# storing the returned json data into a variable
data = r.json()
# Checking If there is no error and the status code is 200
if data['cod'] == 200:
    # getting the temperature from the json data
    temp = data['main']['temp']
    # getting the pressure from the json data
    pressure = data['main']['pressure']
    # getting the humidity from the json data
    humidity = data['main']['humidity']
    # getting the description from the json data
    descr = data['weather'][0]['description']
    # getting the wind speed from the json data
    wind = data['wind']['speed']
    # Displaying all the data
    print(f"City Name : {city_name}")
    print(f"The Weather Condition is {descr}")
    print(f"The temperature is {temp}kelvin")
    print(f"The pressure is {pressure}hPa")
    print(f"The humidity is {humidity}%")
    print(f"The speed of wind is {wind}m/s")
else:
    # If any error occured then print this
    print("Something Went Wrong")