import { dataBase } from './dataBase.js';

export class WeatherServer {
	getWeatherData() {
		// const delay = Math.random() * (2 - 0.5) + 0.5;
		const delay = 0;

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
		}).catch(err => console.log(err));
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
