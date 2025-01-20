// src/types/interactive.ts

/**
 * Sort direction for experience entries
 */
export type SortDirection = "asc" | "desc";

/**
 * Sort field options for experience entries
 */
export type SortField = "startDate" | "endDate" | "company";

/**
 * Configuration for sort controls
 */
export interface SortConfig {
  field: SortField;
  direction: SortDirection;
}

/**
 * Filter state for experience entries
 */
export interface FilterState {
  searchTerm: string;
  sort: SortConfig;
}

/**
 * Event payload for sort changes
 */
export interface SortChangeEvent {
  field: SortField;
  direction: SortDirection;
}

/**
 * Props for the SearchBar component
 */
export interface SearchBarProps {
  onSearch: (term: string) => void;
  placeholder?: string;
}

/**
 * Props for the SortControls component
 */
export interface SortControlsProps {
  onSort: (config: SortConfig) => void;
  currentSort: SortConfig;
}
