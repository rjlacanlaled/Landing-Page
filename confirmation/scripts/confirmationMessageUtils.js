const confirmationMessageContainer =
  document.getElementById("container");

function createConfirmationPageHTMLElements(userDetails) {
  if (userDetails == null) return;

  const userDetailsParams = new URLSearchParams(userDetails);

  const thankYouMessage = `Thank you ${userDetailsParams.get('firstName')} ${userDetailsParams.get('lastName')} for subscribing!`;
  const planDetails = `Your plan is ${userDetailsParams.get('subscriptionPlans')}.`;
  const freebieDetails = `You chose ${userDetailsParams.get('freeAlbums')} as your freebie. This CD will be sent to your address within 3 business days.`;
  const emailReceipt = `Complete details will be sent to ${userDetailsParams.get('email')} within 5 minutes.`;
  const supportMessage = `If you have any questions, you can contact our support team at support@motownstreaming.com`;

  confirmationMessageContainer.appendChild(createElementWithOptions("h1", {text: thankYouMessage}));
  confirmationMessageContainer.appendChild(createElementWithOptions("h3", {text: planDetails}));
  confirmationMessageContainer.appendChild(createElementWithOptions("h3", {text: freebieDetails}));
  confirmationMessageContainer.appendChild(createElementWithOptions("h3", {text: emailReceipt}));
  confirmationMessageContainer.appendChild(createElementWithOptions("h3", {text: supportMessage}));
}
