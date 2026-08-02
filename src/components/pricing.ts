export type Goal = "launch" | "leads" | "sell" | "automation";
export type Budget = "starter" | "growth" | "premium";
export type Feature = "pages" | "forms" | "booking" | "cms" | "commerce" | "seo";

export interface SmartFormAnswers {
  goal: Goal | "";
  budget: Budget | "";
  features: Feature[];
}

export const goalLabels: Record<Goal, string> = {
  launch: "Launch a professional presence",
  leads: "Generate more enquiries",
  sell: "Sell products or services online",
  automation: "Automate a business process",
};

export const featureOptions: Array<{ id: Feature; label: string; description: string; cost: number }> = [
  { id: "pages", label: "Extra pages", description: "Up to five structured content pages", cost: 600 },
  { id: "forms", label: "Lead forms", description: "Custom enquiry and lead-capture forms", cost: 400 },
  { id: "booking", label: "Online booking", description: "Appointments, calendar and confirmations", cost: 1200 },
  { id: "cms", label: "Easy updates", description: "Manage selected content without a developer", cost: 900 },
  { id: "commerce", label: "Online store", description: "Products, cart and secure checkout", cost: 2800 },
  { id: "seo", label: "SEO launch pack", description: "Search metadata, sitemap and local setup", cost: 700 },
];

const goalCost: Record<Goal, number> = { launch: 0, leads: 400, sell: 1000, automation: 1600 };
const budgetAdjustment: Record<Budget, number> = { starter: 0, growth: 500, premium: 1200 };

export function calculateRecommendation(answers: SmartFormAnswers) {
  const base = 800;
  const selectedGoal = answers.goal || "launch";
  const selectedBudget = answers.budget || "starter";
  const featureCost = answers.features.reduce((sum, id) => sum + (featureOptions.find((item) => item.id === id)?.cost ?? 0), 0);
  const commerceRequired = selectedGoal === "sell" && !answers.features.includes("commerce");
  const total = base + goalCost[selectedGoal] + budgetAdjustment[selectedBudget] + featureCost + (commerceRequired ? 2800 : 0);
  const effectiveFeatures: Feature[] = commerceRequired ? [...answers.features, "commerce"] : answers.features;
  const packageName = total < 2000 ? "Launch" : total < 4500 ? "Growth" : "Commerce+";
  return { base, total, packageName, effectiveFeatures };
}

export function formatRand(amount: number) {
  return `R${amount.toLocaleString("en-ZA")}`;
}
