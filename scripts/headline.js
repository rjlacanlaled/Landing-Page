const headlineContainer = document.getElementById("headlineContainer");

// UI Items

const headlineTitle = convertToElementDictionary("h1", {text: "Your first month is on us!"});
const headlineSubtitle = convertToElementDictionary("h3", {text: "Just ₱99/month after. Cancel anytime."});
const headlineLeftButton = convertToElementDictionary("button", {text: "subscribe", classList: ['headline-left-button']});
const headlineRightButton = convertToElementDictionary("button", {text: "View Plans", classList: ['headline-right-button']});
const headlineButtons = convertToElementDictionary("div", {classList: ['headline-buttons']}, [headlineLeftButton, headlineRightButton]);
const headlineAdditionalText = convertToElementDictionary("p", {text: "Terms and conditions apply. 1 month free not available for users who have already tried Premium."});

const headlineContainerContents = [
    headlineTitle,
    headlineSubtitle,
    headlineButtons,
    headlineAdditionalText,
  ];

// END UI Items

function renderHeadline() {
  createNestedElements(headlineContainer, headlineContainerContents);
}
