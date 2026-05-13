import { WeatherData } from '../api/weather';

type WeatherProps = {
  data: WeatherData;
};

const WeatherCard = ({ data }: WeatherProps) => {
  return (
    <div className="text-center mt-4">
      <h2 className="text-2xl font-bold text-gray-800">{data.city}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
        alt={data.description}
        className="mx-auto w-24 h-24"
      />
      <p className="text-6xl font-bold text-indigo-600">{data.temperature}℃</p>
      <p className="text-gray-500 mt-2 capitalize">{data.description}</p>
    </div>
  );
};

export default WeatherCard;