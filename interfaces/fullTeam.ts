import { IGroup } from '../models/group';
import { IMetaSticker } from '../models/metaSticker';

export interface FullTeam {
  country: IGroup;
  members: IMetaSticker[];
}
