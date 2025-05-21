export const getPostColorFromCategory = (category: string) => {
  switch (category) {
    case "Technology":
      return "fuchsia";
    case "Innovation":
      return "cyan";
    case "Security":
      return "violet";
    case "Sustainability":
      return "lime";
    default:
      return "fuchsia";
  }
};

export const getColorFromPositionType = (type: string) => {
  switch (type) {
    case "Part Time":
      return "cyan";
    case "Contract":
      return "violet";
    case "Full Time":
      return "lime";
    default:
      return "fuchsia";
  }
};

export const getColorFromPositionCategory = (category: string) => {
  switch (category) {
    case "Product":
      return "cyan";
    case "Marketing":
      return "violet";
    case "Engineering":
      return "lime";
    default:
      return "fuchsia";
  }
};
