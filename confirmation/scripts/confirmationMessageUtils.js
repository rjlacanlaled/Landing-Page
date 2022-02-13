const confirmationMessageContainer =
  document.getElementById("container");

function createConfirmationPageHTMLElements(userDetails) {
  if (userDetails == null) return;

  const thankYouMessage = `Thank you ${userDetails.firstName} ${userDetails.lastName} for subscribing!`;
  const planDetails = `Your plan is ${userDetails.plan}.`;
  const freebieDetails = `You chose ${userDetails.freeAlbum} as your freebie. This CD will be sent to your address within 3 business days.`;
  const emailReceipt = `Complete details will be sent to ${userDetails.email} within 5 minutes.`;
  const supportMessage = `If you have any questions, you can contact our support team at support@motownstreaming.com`;

  confirmationMessageContainer.appendChild(createElementWithOptions("h1", {text: thankYouMessage}));
  confirmationMessageContainer.appendChild(createElementWithOptions("h3", {text: planDetails}));
  confirmationMessageContainer.appendChild(createElementWithOptions("h3", {text: freebieDetails}));
  confirmationMessageContainer.appendChild(createElementWithOptions("h3", {text: emailReceipt}));
  confirmationMessageContainer.appendChild(createElementWithOptions("h3", {text: supportMessage}));
}
