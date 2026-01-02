export const ICONS = {
  HOME: 'home',
  SEARCH: 'search',
  BOX: 'archive', 
  USER: 'person',
} as const;

export type IconName = typeof ICONS[keyof typeof ICONS];
