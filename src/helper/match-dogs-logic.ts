// [all human personality] ==================

//  Independent, ambitious, courageous [1]
//  Emotional, shy, sensitive   [2]
//  Outgoing, fun, social   [3]
//  stubborn, grumpy, brave, Reliable   [4]
//  energetic, dynamic   [5]
//  Caring(배려), mischievous(말썽꾸러기), sympathetic(연민어린)   [6]
//  Calm, cool   [7]
//  stability   [8]
//  confident, friendly   [9]
//  humor, wholeness(완벽주의)   [10]

// [ all dogs personality] ==================

//  friendly(우호적인, 긍정적인)     /   offensive(공격적인) / wary(경계심많은)
//  stubborn(고집스러운)            /   positive(긍정적인)
//  active(활동적)                  /   patient(침착한)
//  playful(장난스러운)             /   gentle(온화한)

//  trustworthy(믿음직한)   confident(자신감있는)
//  loyal(헌신적인),        clever(총명한), brave(용감한)

//  affectionate(애정있는)          / independent(독립적인)

export const matchPersonality = (user: string) => {
  let fit;
  let balance;

  if (user.includes("independent") || user.includes("ambitious")) {
    fit = "independent,loyal";
    balance = "affectionate,friendly";
  } else if (
    user.includes("emotional") ||
    user.includes("sensitive") ||
    user.includes("stability")
  ) {
    fit = "gentle,affectionate";
    balance = "playful,active";
  } else if (
    user.includes("Outgoing") ||
    user.includes("energetic") ||
    user.includes("social") ||
    user.includes("dynamic") ||
    user.includes("friendly")
  ) {
    fit = "active,playful";
    balance = "independent,gentle";
  } else if (
    user.includes("caring") ||
    user.includes("sympathetic") ||
    user.includes("calm")
  ) {
    fit = "gentle,clever";
    balance = "affectionate,active";
  } else if (
    user.includes("wholeness") ||
    user.includes("stubborn") ||
    user.includes("brave")
  ) {
    fit = "wary,clever";
    balance = "friendly,playful";
  }

  const match = { fit, balance };
  return match;
};
