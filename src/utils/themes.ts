
// Advanced theme management with smooth transitions
export interface Theme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    gradient: string;
  };
  effects: {
    blur: string;
    shadow: string;
    glow: string;
  };
}

export const themes: Record<string, Theme> = {
  dark: {
    name: "Dark Cyber",
    colors: {
      primary: "from-cyan-400 to-blue-500",
      secondary: "from-purple-400 to-pink-500",
      accent: "from-green-400 to-teal-500",
      background: "from-slate-950 via-slate-900 to-slate-950",
      surface: "bg-slate-800/30 backdrop-blur-md",
      text: "text-white",
      textSecondary: "text-gray-400",
      border: "border-slate-700/50",
      gradient: "bg-gradient-to-r from-cyan-500 to-blue-500"
    },
    effects: {
      blur: "backdrop-blur-md",
      shadow: "shadow-lg shadow-cyan-500/25",
      glow: "shadow-2xl shadow-cyan-500/20"
    }
  },
  neon: {
    name: "Neon Future",
    colors: {
      primary: "from-pink-400 to-purple-600",
      secondary: "from-cyan-400 to-teal-500",
      accent: "from-yellow-400 to-orange-500",
      background: "from-black via-purple-950 to-black",
      surface: "bg-purple-900/20 backdrop-blur-lg",
      text: "text-pink-100",
      textSecondary: "text-purple-300",
      border: "border-pink-500/30",
      gradient: "bg-gradient-to-r from-pink-500 to-purple-600"
    },
    effects: {
      blur: "backdrop-blur-lg",
      shadow: "shadow-lg shadow-pink-500/30",
      glow: "shadow-2xl shadow-pink-500/25"
    }
  },
  matrix: {
    name: "Matrix Green",
    colors: {
      primary: "from-green-400 to-emerald-500",
      secondary: "from-lime-400 to-green-500",
      accent: "from-teal-400 to-cyan-500",
      background: "from-black via-green-950 to-black",
      surface: "bg-green-900/15 backdrop-blur-md",
      text: "text-green-100",
      textSecondary: "text-green-400",
      border: "border-green-500/30",
      gradient: "bg-gradient-to-r from-green-400 to-emerald-500"
    },
    effects: {
      blur: "backdrop-blur-md",
      shadow: "shadow-lg shadow-green-500/25",
      glow: "shadow-2xl shadow-green-500/20"
    }
  },
  ocean: {
    name: "Deep Ocean",
    colors: {
      primary: "from-blue-400 to-indigo-600",
      secondary: "from-teal-400 to-blue-500",
      accent: "from-cyan-400 to-blue-400",
      background: "from-slate-900 via-blue-950 to-slate-900",
      surface: "bg-blue-900/20 backdrop-blur-md",
      text: "text-blue-50",
      textSecondary: "text-blue-300",
      border: "border-blue-500/30",
      gradient: "bg-gradient-to-r from-blue-500 to-indigo-600"
    },
    effects: {
      blur: "backdrop-blur-md",
      shadow: "shadow-lg shadow-blue-500/25",
      glow: "shadow-2xl shadow-blue-500/20"
    }
  }
};

export const useTheme = () => {
  const getCurrentTheme = (): string => {
    return localStorage.getItem('ai-theme') || 'dark';
  };

  const setTheme = (themeName: string) => {
    const theme = themes[themeName];
    if (!theme) return;

    // Store theme preference
    localStorage.setItem('ai-theme', themeName);
    
    // Apply theme with smooth transition
    document.documentElement.style.transition = 'all 0.3s ease-in-out';
    
    // Apply CSS custom properties
    const root = document.documentElement;
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--theme-${key}`, value);
    });

    // Dispatch theme change event
    window.dispatchEvent(new CustomEvent('theme-changed', { 
      detail: { theme: themeName } 
    }));
  };

  const toggleTheme = () => {
    const current = getCurrentTheme();
    const themeNames = Object.keys(themes);
    const currentIndex = themeNames.indexOf(current);
    const nextIndex = (currentIndex + 1) % themeNames.length;
    setTheme(themeNames[nextIndex]);
  };

  return {
    getCurrentTheme,
    setTheme,
    toggleTheme,
    themes
  };
};

// Theme transition animations
export const themeTransitions = {
  smooth: "transition-all duration-300 ease-in-out",
  fast: "transition-all duration-150 ease-out",
  slow: "transition-all duration-500 ease-in-out",
  bounce: "transition-all duration-400 cubic-bezier(0.68, -0.55, 0.265, 1.55)"
};

// Gradient animations
export const gradientAnimations = {
  flow: "bg-gradient-to-r animate-[gradient-flow_3s_ease-in-out_infinite]",
  pulse: "bg-gradient-to-r animate-[gradient-pulse_2s_ease-in-out_infinite]",
  wave: "bg-gradient-to-r animate-[gradient-wave_4s_ease-in-out_infinite]"
};

// Theme-aware component styling
export const getThemeStyles = (themeName: string) => {
  const theme = themes[themeName] || themes.dark;
  
  return {
    background: `bg-gradient-to-b ${theme.colors.background}`,
    surface: theme.colors.surface,
    text: theme.colors.text,
    textSecondary: theme.colors.textSecondary,
    primary: `bg-gradient-to-r ${theme.colors.primary}`,
    secondary: `bg-gradient-to-r ${theme.colors.secondary}`,
    accent: `bg-gradient-to-r ${theme.colors.accent}`,
    border: theme.colors.border,
    blur: theme.effects.blur,
    shadow: theme.effects.shadow,
    glow: theme.effects.glow
  };
};
