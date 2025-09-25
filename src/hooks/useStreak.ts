import { useLocalStorage } from './useLocalStorage';

interface StreakData {
  count: number;
  lastLoginDate: string | null;
}

export function useStreak() {
  const [streakData, setStreakData] = useLocalStorage<StreakData>('streakData', {
    count: 0,
    lastLoginDate: null,
  });

  const updateStreak = () => {
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toDateString();

    if (streakData.lastLoginDate === today) {
      // Already logged in today, no change
      return streakData.count;
    } else if (streakData.lastLoginDate === yesterday) {
      // Logged in yesterday, increment streak
      const newCount = streakData.count + 1;
      setStreakData({
        count: newCount,
        lastLoginDate: today,
      });
      return newCount;
    } else {
      // Streak broken or first time, reset to 1
      setStreakData({
        count: 1,
        lastLoginDate: today,
      });
      return 1;
    }
  };

  return {
    streakCount: streakData.count,
    updateStreak,
  };
}