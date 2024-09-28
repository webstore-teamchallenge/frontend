import { RootState } from '../store';

export const selectCategoriesFilters = (state: RootState) => state.filters.categories;
