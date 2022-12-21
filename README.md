# the_weather_app
The weather app shows the current climate of a particular region or city.


The `onInput` function makes a request to the weather API, whereas the `debouncer` function guards against the call on the `onInput` function for every key press. The `onInput` function is invoked only after the timer set by the `debouncer` function has expired. 