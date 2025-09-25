import { FeatureItem, SubscriptionItem } from "@/types/paywall";

export const PAYWALL_FEATURES: FeatureItem[] = [
  { id: 1, title: "Unlimited", subtitle: "Plant Identify", icon: "scanner" },
  { id: 2, title: "Faster", subtitle: "Process", icon: "speedometer" },
  { id: 3, title: "Detailed", subtitle: "Plant care", icon: "leaves" },
];

export const PAYWALL_SUBSCRIPTIONS: SubscriptionItem[] = [
  { id: 1, title: "1 Month", subtitle: "$2.99/month, auto renewable" },
  {
    id: 2,
    title: "1 Year",
    subtitle: "First 3 days free, then $529,99/year",
    badge: "Save 50%",
  },
];
