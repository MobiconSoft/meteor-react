import { action } from 'typesafe-actions';
import { LinkModel } from './link.model';

export const ADD_LINK = '[link] ADD_LINK';
export const DELETE_LINK = '[link] DELETE_LINK';

export const AddLink = ({title, url}: LinkModel) => 
  action(ADD_LINK, {
    title,
    url
  });


export const DeleteLink = (_id: string) => action(DELETE_LINK, _id)
