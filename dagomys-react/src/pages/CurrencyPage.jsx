import { useState, useEffect } from "react";

function CurrencyPage() {
    const [currencyData, setCurrencyData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [date, setDate] = useState(new Date().toLocaleDateString("ru-RU"));

    useEffect(() => {
        async function fetchCurrencyData() {
            try {
                const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
                if (!response.ok) {
                    throw new Error("Ошибка загрузки данных о валюте");
                }
                const data = await response.json();
                const codes = ["USD", "EUR", "GBP", "JPY", "CNY"];
                const result = codes.map((code) => {
                    const currency = data.Valute[code];
                    return {
                        code: currency.CharCode,
                        name: currency.Name,
                        value: currency.Value / currency.Nominal,
                        previous: currency.Previous / currency.Nominal
                    };
                });
                setCurrencyData(result);
                setDate(new Date(data.Date).toLocaleDateString("ru-RU"));
            } catch (err) {
                setError(err.message || "Не удалось загрузить данные о валюте");
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        fetchCurrencyData();
    }, []);

    return (
        <section className="currency-page">
            <h2>Курс валют</h2>
            {loading && <p>Загрузка...</p>}
            {error && <p className="error">{error}</p>}
            {!loading && !error && (
                <div>
                    <p>Дата: {date}</p>
                    <table>
                        <thead>
                            <tr>
                                <th>Валюта</th>
                                <th>Курс</th>
                                <th>Предыдущий курс</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currencyData.map((currency) => (
                                <tr key={currency.code}>
                                    <td>{currency.name} ({currency.code})</td>
                                    <td>{currency.value.toFixed(2)} Руб</td>
                                    <td>{currency.previous.toFixed(2)} Руб</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </section>
    );
}

export default CurrencyPage;