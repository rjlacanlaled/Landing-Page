const SUBSCRIPTION_FORM_ID = "subscriptionForm";
const targetUrl = "https://landing-page-confirmation.vercel.app/";

document.forms[SUBSCRIPTION_FORM_ID].onsubmit = onFormSubmit;

function onFormSubmit(e) {
    e.preventDefault();
    const currentUrl = window.location.search;
    const currentUrlParams = decodeURIComponent(getSearchParams(currentUrl));
    window.location.replace(`${targetUrl}?${currentUrlParams}`);
}