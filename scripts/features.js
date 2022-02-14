const featureContainer = document.getElementById("featureContainer");

// UI Items

const featureTitle = convertToElementDictionary("h2", {
  text: "Why subscribe?",
});

const featureItemParams = [
  {
    imgSrc: "../assets/download-music.png",
    mainText: "Download Music.",
    subText: "Listen Everywhere.",
  },
  {
    imgSrc: "../assets/adfree-png.png",
    mainText: "Ad-free music listening.",
    subText: "Enjoy nonstop music.",
  },
  {
    imgSrc: "../assets/play-any-song.png",
    mainText: "Play any song.",
    subText: "Even on mobile.",
  },
  {
    imgSrc: "../assets/unlimited-skips.png",
    mainText: "Unlimited skips.",
    subText: "Just hit next.",
  },
];

const featureItemTemplates = featureItemParams.map((item) => {
  return createFeatureItemFromTemplate(item);
});

const featureItemsContainer = convertToElementDictionary(
  "div",
  { classList: ["feature-items"] },
  featureItemTemplates
);

// End UI Items

function renderFeatures() {
  createNestedElements(featureContainer, [featureTitle, featureItemsContainer]);
}

function createFeatureItemFromTemplate(params) {
  if (params == null) return;
  const featureItemImg = convertToElementDictionary("img", {
    src: params.imgSrc,
  });
  const featureItemTitle = convertToElementDictionary("h3", {
    text: params.mainText,
  });
  const featureItemSubtitle = convertToElementDictionary("p", {
    text: params.subText,
  });
  const featureItem = convertToElementDictionary(
    "div",
    { classList: ["feature"] },
    [featureItemImg, featureItemTitle, featureItemSubtitle]
  );
  return featureItem;
}
