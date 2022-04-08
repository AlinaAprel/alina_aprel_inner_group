import { WeatherServer } from './WeatherServer';

export class ClientApp extends WeatherServer {
	async showAverageTemp(dayYear, city) {
		try {
			const data = await this.getWeatherData();

			if (!data.find((item) => item.city === city)) {
				throw new Error('There is no such city in database');
			}

			const latitude = data?.find(
				({ city: currentCity }) => currentCity === city
			)?.latitude;

			return this.getAverageTemp(latitude, dayYear);
		} catch (err) {
			console.log(err);
		}
	}

	async getDataForWeather(dayYear, city) {
		try {
			const data = await this.showAverageTemp(dayYear, city);
			const day = new Date('2022', 0, dayYear).getDate();
			const month = new Date('2022', 0, dayYear).getMonth() + 1;

			return [day, month, data];
		} catch (err) {
			console.log(err);
		}
	}

	async showWeather(dayYear, city) {
		if (dayYear > 365) {
			throw new Error('There is no such day in the year');
		}

		try {
			const data = await this.getDataForWeather(dayYear, city);

			console.log(
				`Город ${city}, ${data[0]}.${data[1]}.2022, средняя температура: ${data[2]}`
			);
		} catch (err) {
			console.log(err);
		}
	}

}
