import Links from '../../api/links';

class LinkService {
  addLink({title, url}) {
    Links.insert({title, url, createAt: new Date()});
  }

  removeLink(_id: string) {
    Links.remove(_id);
  }

  updateLink(_id: string, {title, url}) {
    Links.update(_id, {title, url, updateAt: new Date()});
  }
}

export const linkService = new LinkService();