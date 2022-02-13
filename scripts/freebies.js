const freebiesContainer = document.getElementById("freebiesContainer");

// UI Items

const freebiesTitle = convertToElementDictionary("h2", {
  text: "You get a free Tylor Swift CD album on your first month!",
});

const freebieItemParams = [
  {
    mainText: "Fearless",
    subText:
      "Fearless is the second studio album by American singer-songwriter Taylor Swift.",
    backgroundUrl: "../assets/fearless.png",
    buttonId: "freebie1",
  },
  {
    mainText: "Red",
    subText:
      "Red is the fourth studio album by American singer-songwriter Taylor Swift. It was released on October 22, 2012, by Big Machine Records.",
    backgroundUrl: "../assets/red.png",
    buttonId: "freebie2",
  },
  {
    mainText: "1989",
    subText:
      "1989 is the fifth studio album by American singer-songwriter Taylor Swift. It was released on October 27, 2014, by Big Machine Records.",
    backgroundUrl: "../assets/1989.png",
    buttonId: "freebie3",
  },
  {
    mainText: "Reputation",
    subText:
      "Reputation (stylized in all lowercase) is the sixth studio album by American singer-songwriter Taylor Swift.  ",
    backgroundUrl: "../assets/reputation.png",
    buttonId: "freebie4",
  },
  {
    mainText: "Lover",
    subText:
      "Lover is the seventh studio album by American singer-songwriter Taylor Swift, released on August 23, 2019, via Republic Records. ",
    backgroundUrl: "../assets/lover.png",
    buttonId: "freebie5",
  },
];

const freebieItemTemplates = freebieItemParams.map((item) => {
  return createFreebieItemFromTemplate(item);
});

const freebieItemsContainer = convertToElementDictionary(
  "div",
  { classList: ["freebies-items"] },
  freebieItemTemplates
);

const freebiesSubtitle = convertToElementDictionary("h2", {
  text: "Sent to your registered address!",
});

// End UI Items

function renderFreebies() {
  createNestedElements(freebiesContainer, [
    freebiesTitle,
    freebieItemsContainer,
    freebiesSubtitle,
  ]);
}

function createFreebieItemFromTemplate(params) {
  const freebieContentTitle = convertToElementDictionary("h3", {
    text: params.mainText,
  });
  const freebieContentSubtitle = convertToElementDictionary("h5", {
    text: params.subText,
  });
  const freebieContentContainer = convertToElementDictionary(
    "div",
    { classList: ["freebie-content"] },
    [freebieContentTitle, freebieContentSubtitle]
  );
  const freebieButton = convertToElementDictionary("button", {
    text: "Claim now",
    id: params.buttonId,
  });
  const freebieDownArrow = convertToElementDictionary("img", {});
  const freebieButtonContainer = convertToElementDictionary(
    "div",
    { classList: ["freebie-button-container"] },
    [freebieButton, freebieDownArrow]
  );
  const freebieItemContainer = convertToElementDictionary(
    "div",
    { classList: ["freebies-item"], backgroundUrl: params.backgroundUrl },
    [freebieContentContainer, freebieButtonContainer]
  );

  return freebieItemContainer;
}
