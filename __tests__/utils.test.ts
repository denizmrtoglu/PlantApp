import { getTimeBasedGreeting } from "@/lib/utils";

describe("Utils", () => {
  describe("getTimeBasedGreeting", () => {
    const mockDate = (hours: number) => {
      jest.spyOn(global, "Date").mockImplementation(
        () =>
          ({
            getHours: () => hours,
          } as unknown as Date)
      );
    };

    afterEach(() => {
      jest.restoreAllMocks();
    });

    test('returns "Good Morning!" between 5:00 and 11:59', () => {
      mockDate(8);
      const result = getTimeBasedGreeting();
      expect(result).toEqual({
        text: "Good Morning!",
        emoji: "☀️",
      });
    });

    test('returns "Good Afternoon!" between 12:00 and 16:59', () => {
      mockDate(14);
      const result = getTimeBasedGreeting();
      expect(result).toEqual({
        text: "Good Afternoon!",
        emoji: "⛅",
      });
    });

    test('returns "Good Evening!" between 17:00 and 20:59', () => {
      mockDate(19);
      const result = getTimeBasedGreeting();
      expect(result).toEqual({
        text: "Good Evening!",
        emoji: "🌆",
      });
    });

    test('returns "Good Night!" between 21:00 and 4:59', () => {
      mockDate(23);
      const result = getTimeBasedGreeting();
      expect(result).toEqual({
        text: "Good Night!",
        emoji: "🌙",
      });
    });
  });
});
