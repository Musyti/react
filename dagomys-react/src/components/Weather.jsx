import { useState } from "react";

function Weather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function getWeatherData(e) {
    e.preventDefault();
    if (!city.trim()) return;

    setLoading(true);
    setError("");
    setWeatherData(null);

    try {
      // 1. Поиск координат введенного города
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          city.trim()
        )}&count=1&language=ru&format=json`
      );
      const geoData = await geoResponse.json();

      if (!geoData.results?.length) {
        throw new Error("Город не найден");
      }

      const place = geoData.results[0];

      // 2. Запрос текущей погоды (current) с нужными полями
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`
      );

      if (!weatherResponse.ok) {
        throw new Error("Ошибка загрузки погоды");
      }

      const result = await weatherResponse.json();

      // 3. Сохранение данных в стейт
      setWeatherData({
        city: place.name,
        country: place.country,
        temperature: result.current.temperature_2m,
        tempUnit: result.current_units.temperature_2m,
        humidity: result.current.relative_humidity_2m,
        humidityUnit: result.current_units.relative_humidity_2m,
        wind: result.current.wind_speed_10m,
        windUnit: result.current_units.wind_speed_10m,
      });
    } catch (err) {
      setError(err.message || "Не удалось загрузить погоду");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="weather">
      <h2>Погода</h2>
      <form onSubmit={getWeatherData}>
        <input
          type="text"
          placeholder="Введите город"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Загрузка..." : "Поиск"}
        </button>
      </form>

      {error && <p className="weather__error" style={{ color: "red" }}>{error}</p>}

      {weatherData && (
        <div className="weather__info">
          <h3>
            {weatherData.city}
            {weatherData.country ? `, ${weatherData.country}` : ""}
          </h3>
          <p>
            Температура: <strong>{weatherData.temperature} {weatherData.tempUnit}</strong>
          </p>
          <p>
            Влажность: <strong>{weatherData.humidity} {weatherData.humidityUnit}</strong>
          </p>
          <p>
            Ветер: <strong>{weatherData.wind} {weatherData.windUnit}</strong>
          </p>
        </div>
      )}
    </section>
  );
}

export default Weather;