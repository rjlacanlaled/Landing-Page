const SUBSCRIPTION_FORM_ID = "subscriptionForm";
const targetUrl = "https://landing-page-confirmation.vercel.app/";

const subscriptionPlanSelection = document.getElementById('subscriptionPlans');
const freeAlbumSelection = document.getElementById('freeAlbums');

document.forms[SUBSCRIPTION_FORM_ID].onsubmit = onFormSubmit;

(() => {
    addSubscriptionPlanOptions();
    addFreeAlbumOptions();
})();

// Form Data Helpers

function addSubscriptionPlanOptions() {
    const planOptions = planItemParams.map(item => {
        return new Option(item.planTitleText, item.planTitleText);
    });

    planOptions.forEach(option => {
        subscriptionPlanSelection.add(option, undefined);
    });

}

function addFreeAlbumOptions() {
    const freeAlbumOptions = freebieItemParams.map(item => {
        return new Option(item.mainText, item.mainText);
    });

    freeAlbumOptions.forEach(option => {
        freeAlbumSelection.add(option, undefined);
    });
}

function getInputDataUrl() {
    const inputElements = Array.apply(null, document.querySelectorAll('[data-input]'));
    let inputArr = '';
    inputElements.forEach((element, index) => {
        if (element.value === null) return
        inputArr += `${element.id}=${element.value}`;
        if (index === inputElements.length - 1) return;
        inputArr += '&';
    });
    return inputArr;
}

// End Form Data Helpers


// Event handlers

function onFormSubmit(e) {
    e.preventDefault();
    window.location = `${targetUrl}?${getInputDataUrl()}`;
}

// Event handlers