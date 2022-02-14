const plansContainer = document.getElementById("plansContainer");

// UI Items

const plansContainerTitle = convertToElementDictionary("h2", {
  text: "Pick your plan",
});

const planItemParams = [
  {
    planTitleText: "Individual",
    planPriceText: "₱99/month after offer period",
    planPriceAccount: "1 account",
    planFeatureList: [
      "Ad-free music listening",
      "Play anywhere - even offline",
      "One-time or subscription plans",
    ],
    planButtonid: "plan1",
  },
  {
    planTitleText: "Duo",
    planPriceText: "₱169/month after offer period",
    planPriceAccount: "2 account",
    planFeatureList: [
      "2 Premium accounts for a couple under one roof",
      "Ad-free music listening, play offline, on-demand playback",
    ],
    planButtonid: "plan2",
  },
  {
    planTitleText: "Family",
    planPriceText: "₱194/month after offer period",
    planPriceAccount: "Up to 6 accounts",
    planFeatureList: [
      "6 Premium accounts for family members living under one roof",
      "Block explicit music",
      "Ad-free music listening, play offline, on-demand playback",
    ],
    planButtonid: "plan3",
  },
];

const planItemTemplates = planItemParams.map((item) => {
  return createPlanItemFromTemplate(item);
});
const planItemsContainer = convertToElementDictionary(
  "div",
  { classList: ["plan-items"] },
  planItemTemplates
);

// End UI Items

function renderPlans() {
  createNestedElements(plansContainer, [
    plansContainerTitle,
    planItemsContainer,
  ]);
}

function createPlanItemFromTemplate(params) {
  if (params == null) return;
  const planTitlePlanName = convertToElementDictionary("h3", {
    text: params.planTitleText,
  });
  const planTitlePrice = convertToElementDictionary("h6", {
    text: params.planPriceText,
  });
  const planTitleAccount = convertToElementDictionary("p", {
    text: params.planPriceAccount,
  });
  const planTitleContainer = convertToElementDictionary(
    "div",
    { classList: ["plan-title"] },
    [planTitlePlanName, planTitlePrice, planTitleAccount]
  );

  const planFeatureListItems = [];
  params.planFeatureList.forEach((feature) => {
    planFeatureListItems.push(
      convertToElementDictionary("li", { text: feature })
    );
  });

  const planFeatureList = convertToElementDictionary(
    "ul",
    {},
    planFeatureListItems
  );

  const planFeaturesContainer = convertToElementDictionary(
    "div",
    { classList: ["plan-features"] },
    [planFeatureList]
  );

  const planItemButton = convertToElementDictionary("button", {
    text: "Subscribe",
    id: params.planButtonId,
  });

  const planItemContainer = convertToElementDictionary(
    "div",
    { classList: ["plan-item"] },
    [planTitleContainer, planFeaturesContainer, planItemButton]
  );

  return planItemContainer;
}
