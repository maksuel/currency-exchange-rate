class ExchangeRate {

	constructor(rate) {

		this.Name = rate.Name;
		this.Ask = parseFloat(rate.Ask);
		this.Bid = parseFloat(rate.Bid);
		this.Rate = parseFloat(rate.Rate);
		this.Date = moment(rate.Date + ' ' + rate.Time, 'M/D/YYYY h:mma').valueOf();
	}
}