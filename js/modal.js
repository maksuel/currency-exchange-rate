class ModalService {

	constructor(modal) {
		this.percentRatio = 0.96;
		this.modal = modal;
	}

	prepare() {
		let template = $('#currencies-template').removeAttr('id').remove();
		this.templateItem = $(template.html());
		let listGroup = template.empty();
		this.favSection = $('#fav-currencies').html(listGroup.clone()).find('div');
		this.allSection = $('#all-currencies').html(listGroup.clone()).find('div');
	}

	createAllCurrencies() {
		let base = 'BRL';
		if (typeof (currencies) === 'object' && currencies != 'undefined') {
			Object.keys(currencies).map(acronym => {
				let template = this.templateItem.clone();
				template.attr('id', acronym);
				template.find('.icon-flag').attr({
					src: `img/${acronym}.png`,
					alt: `${acronym} flag`
				});
				template.find('.acronym').text(acronym);
				template.find('.favorite').remove();
				template.find('.description').text(currencies[acronym].description);
				template.find('.symbol').text(currencies[acronym].symbol);
				template.find('.rate').text(balance[base+acronym]);
				this.allSection.append(template);
			});
		}
	}

	updateFavCurrencies(ref) {
		this.favSection.empty();
		let acronym = 'EUR';
		let template = this.templateItem.clone();
		template.attr('id', `fav-${acronym}`);
		template.find('.icon-flag').attr({
			src: `img/${acronym}.png`,
			alt: `${acronym} flag`
		});
		template.find('.acronym').text(acronym);
		template.find('.description').text(currencies[acronym].description);
		template.find('.symbol').text('€');
		template.find('.rate').text('1,50');
		this.favSection.append(template.clone());
		this.favSection.append(template.clone());
		this.favSection.append(template.clone());
		this.favSection.append(template.clone());
		this.favSection.append(template.clone());
		this.favSection.append(template);
	}

	resize() {
		if (this.modal.hasClass('show')) {
			let windowWidth = $(window).width();
			let windowHeight = $(window).height();

			let widthRef = Math.floor(windowWidth * this.percentRatio);
			let heightRef = Math.floor(windowHeight * this.percentRatio);

			let newMargin = (windowWidth - widthRef) > (windowHeight - heightRef) ?
				Math.floor((windowWidth - widthRef) / 2) :
				Math.floor((windowHeight - heightRef) / 2);
			let newWidth = windowWidth - (2 * newMargin);
			let newHeight = windowHeight - (2 * newMargin);

			if (newWidth > 500) {
				this.modal.find('.modal-dialog').css('margin', `${newMargin}px auto`);
			} else {
				this.modal.find('.modal-dialog').css('margin', `${newMargin}px`);
			}

			let contentBorderWidth = this.contentBorderWidth;
			let headerOuterHeight = this.modal.find('.modal-header').outerHeight();
			let bodyPadding = this.bodyPadding;
			let footerOuterHeight = this.modal.find('.modal-footer').outerHeight();
			let heightDiscount =
				contentBorderWidth.top +
				headerOuterHeight +
				bodyPadding.top +
				bodyPadding.bottom +
				footerOuterHeight +
				contentBorderWidth.bottom;

			this.modal.find('.modal-body').height(newHeight - heightDiscount);
		}
	}

	get contentBorderWidth() {
		let border = this.modal.find('.modal-content').css([
			'border-top-width',
			'border-right-width',
			'border-bottom-width',
			'border-left-width'
		]);

		return {
			top: parseInt(border['border-top-width']),
			right: parseInt(border['border-right-width']),
			bottom: parseInt(border['border-bottom-width']),
			left: parseInt(border['border-left-width'])
		};
	}

	get bodyPadding() {
		let padding = this.modal.find('.modal-body').css([
			'padding-top',
			'padding-right',
			'padding-bottom',
			'padding-left'
		]);

		return {
			top: parseInt(padding['padding-top']),
			right: parseInt(padding['padding-right']),
			bottom: parseInt(padding['padding-bottom']),
			left: parseInt(padding['padding-left'])
		};
	}
}



let modal = $('#modal');
let modalServ = new ModalService(modal);

$(document).ready(function () {
	modalServ.prepare();
	modalServ.createAllCurrencies();
});

modal.on('show.bs.modal', function (e) {
	var button = $(e.relatedTarget);
	var ref = button.data('ref');
	modalServ.updateFavCurrencies(ref);
});

// Call adjust modal height
modal.on('shown.bs.modal', () => modalServ.resize());
$(window).resize(() => modalServ.resize());