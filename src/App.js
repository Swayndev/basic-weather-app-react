import './style.css';
import {WeeklyForecast} from "./components/WeeklyForecast";
import {DayForecast} from "./components/DayForecast";

function App() {
  return (
      <div className="container">
          <h1>Weekly Weather Forecast</h1>
         <WeeklyForecast/>

          <h2>Daily weather forecast</h2>
          <DayForecast header="monday" tempDay="14" tempNight="8" image="weather-stormy" />
      </div>
  );
}

export default App;
