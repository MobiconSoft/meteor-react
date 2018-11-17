import { createSelector } from 'reselect';
import { LinksState } from './link.reducer';

export const getLinks = (state: LinksState) => state.links;