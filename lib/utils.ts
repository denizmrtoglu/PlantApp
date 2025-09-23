type GreetingResult = {
  text: string;
  emoji: string;
};

export const getTimeBasedGreeting = (): GreetingResult => {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return {
      text: "Good Morning!",
      emoji: "☀️",
    };
  } else if (hour >= 12 && hour < 17) {
    return {
      text: "Good Afternoon!",
      emoji: "⛅",
    };
  } else if (hour >= 17 && hour < 21) {
    return {
      text: "Good Evening!",
      emoji: "🌆",
    };
  } else {
    return {
      text: "Good Night!",
      emoji: "🌙",
    };
  }
};
