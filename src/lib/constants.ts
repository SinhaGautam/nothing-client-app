export const PRODUCT_CATEGORIES = {
  Essential: {
    color: "bg-black",
    textColor: "text-white",
    gradient: "from-gray-50 to-gray-100",
  },
  Premium: {
    color: "bg-white",
    textColor: "text-black",
    gradient: "from-gray-900 to-black",
  },
  Artisan: {
    color: "bg-amber-500",
    textColor: "text-white",
    gradient: "from-white to-gray-50",
  },
  Luxury: {
    color: "bg-gradient-to-r from-yellow-400 to-yellow-600",
    textColor: "text-white",
    gradient: "from-gray-800 via-gray-900 to-black",
  },
  Limited: {
    color: "bg-gradient-to-r from-purple-500 to-purple-700",
    textColor: "text-white",
    gradient: "from-purple-900 via-black to-gray-900",
  },
} as const;

export const SITE_CONFIG = {
  name: "buyNothing",
  description: "The art of purchasing nothing with minimalist precision",
  url: "https://buynothing.com",
};
