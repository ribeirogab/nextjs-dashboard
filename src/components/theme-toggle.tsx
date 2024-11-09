'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState, type ReactNode } from 'react';

import { Button } from '@/components/ui/button';

const ThemeButton = ({
  toggleTheme,
  children,
}: {
  toggleTheme: () => void;
  children: ReactNode;
}) => {
  return (
    <Button
      className="p-2 text-muted-foreground"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      variant="ghost"
      type="button"
      size="icon"
    >
      {children}
    </Button>
  );
};

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (!mounted) {
    return (
      <ThemeButton toggleTheme={() => ({})}>
        <SunIcon className="size-5" />
      </ThemeButton>
    );
  }

  return (
    <ThemeButton toggleTheme={toggleTheme}>
      {theme === 'light' ? (
        <MoonIcon className="size-5" />
      ) : (
        <SunIcon className="size-5" />
      )}
    </ThemeButton>
  );
};
