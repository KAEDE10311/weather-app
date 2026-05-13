import { useState } from 'react';
import { getWeather, WeatherData } from './api/weather';
import WeatherCard from './components/WeatherCard';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<string[]>([]);

  const handleSearch = async () => {
    // 空文字・空白のみの入力を弾く
    if (city.trim() === '') {
      setError('都市名を入力してください');
      return;
    }

    try {
      setLoading(true);
      const data = await getWeather(city);
      setWeather(data);
      setError('');
      setCity(''); // 検索後にinputをクリア
      // 履歴に追加（重複は除く・最大5件）
      setHistory((prev) => [city, ...prev.filter((h) => h !== city)].slice(0, 5));
    } catch (e) {
      setError('都市名が見つかりませんでした');
      setWeather(null);
    } finally{
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">
          天気アプリ
        </h1>
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="都市名を入力（例：Tokyo）"
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            onClick={handleSearch}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            検索
          </button>
        </div>
        {loading && (
          <p className="text-center text-indigo-600 font-bold">検索中...</p>
        )}
        {error && (
          <p className="text-red-500 text-center">{error}</p>
        )}
        {weather && <WeatherCard data={weather} />}
        {history.length > 0 && (
          <div className="mt-6">
            <h3 className="text-gray-500 text-sm mb-2">検索履歴</h3>
            <div className="flex flex-wrap gap-2">
              {history.map((h) => (
                <button
                  key={h}
                  onClick={() => {
                    setCity(h);
                    handleSearch();
                  }}
                  className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm hover:bg-indigo-200 transition"
                >
                  {h}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;