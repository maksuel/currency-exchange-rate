/**
 * Created by mak on 13/03/17.
 */

function addReference(ref) {
    modal_body.attr('data-button-active', ref);
}

function updateTopSection(ref) {
    top_currencies_section.empty();
    if(ref === 'base') {
        for(let i = 0; i < top_currencies_base.length; i++) {
            appendToTopSection(top_currencies_base[i].acronym);
        }
    }
    if(ref === 'compare') {
        for(let i = 0; i < top_currencies_compare.length; i++) {
            appendToTopSection(top_currencies_compare[i].acronym);
        }
    }
}

function appendToTopSection(acronym) {
    let description = currencies[acronym].description;
    if(currencies[acronym].hasOwnProperty('append')){
        description = `${description} ${currencies[acronym].append}`;
    }

    let template = currency_template.clone();

    template.find('button').attr({
        'id': acronym + '-top',
        'onclick': `select('${acronym}')`
    });
    template.find('img').attr('src', getUrlFlag(acronym) );
    template.find('.acronym').text(acronym);
    template.find('.description').text(description);

    top_currencies_section.append(template);
}

function disableSelectedCurrency(acronym) {
    temporary_disabled = acronym;
    top_currencies_section.find('#'+ acronym + '-top')
        .attr('disabled', 'disabled').removeAttr('onclick');
    all_currencies_section.find('#' + acronym)
        .attr('disabled', 'disabled').removeAttr('onclick');
}

function changeCurrency(ref, acronym) {
    addReference(ref);
    updateTopSection(ref);
    disableSelectedCurrency(acronym);
}