const confirmationMessageContainer = document.getElementById("container");

function renderConfirmation(userDetails) {
  if (userDetails == null) return;

  const userDetailsParams = new URLSearchParams(userDetails);

  const thankYouMessage = `Thank you ${userDetailsParams.get("firstName")} ${userDetailsParams.get("lastName")} for subscribing!`;

  const planDetails = `Your ${userDetailsParams.get("subscriptionPlans")} plan free trial will expire after 30 days.`;
  const freebieDetails = `${userDetailsParams.get("freeAlbums")} CD album will be delivered to your registered address within 3 business days.`;
  const emailMessage = `Complete details will be sent to ${userDetailsParams.get("email")} within 5 minutes.`;
  const supportMessage = `If you have any questions, you can contact our support team at support@motownstreaming.com`;

  const completeMessage = planDetails + freebieDetails + emailMessage;

  confirmationMessageContainer.appendChild(
    createElementWithOptions("h1", { text: thankYouMessage })
  );
  confirmationMessageContainer.appendChild(
    createElementWithOptions("h2", { text: completeMessage })
  );
  confirmationMessageContainer.appendChild(
    createElementWithOptions("h3", { text: supportMessage })
  );
}
