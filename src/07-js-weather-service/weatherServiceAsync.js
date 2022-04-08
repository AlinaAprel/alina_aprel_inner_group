import { dataBase } from './dataBase.js';

class WeatherServer {
	getWeatherData() {
		const delay = Math.random() * (2 - 0.5) + 0.5;

		return new Promise((resolve) => {
			if (delay > 1.5) {
				throw new Error('Connection time out');
			}

			if (!dataBase) {
				throw new Error('Web Server Is Down');
			}

			setTimeout(() => {
				resolve(dataBase);
			}, delay);
		}).catch(console.error);
	}

	async getListOfCities() {
		try {
			const data = await this.getWeatherData();

			return data.map(({ city }) => city);
		} catch (err) {
			console.log(err);
		}
	}

	getAverageTemp(latitude, dayYear) {
		const t =
			30 + latitude * (Math.abs(182 - Math.abs(202 - dayYear)) / 210 - 1);

		return t;
	}
}

class ClientApp extends WeatherServer {
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
