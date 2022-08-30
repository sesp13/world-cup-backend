import { FullTeam } from '../../../interfaces/fullTeam';
import { IGroup } from '../../../models/group';
import { IMetaSticker } from '../../../models/metaSticker';
import { createMemberSet, createSetUpGroup } from '../setUpHelpers';

export const setUpMorocco = async (): Promise<FullTeam> => {
  const countryData: IGroup = { code: 'MAR', name: 'Morocco' };

  const country = await createSetUpGroup(countryData);

  const memberNames = [
    'Morocco Shield', //1
    'Yassine Bounou', //2
    'Munir Mohamedi', //3
    'Nayef Aguerd', //4
    'Achraf Hakimi', //5
    'Adam Masina', //6
    'Samy Mmaee', //7
    'Romain Saïss', //8
    'Selim Amallah', //9
    'Sofyan Amrabat', //10
    'Aymen Barkok', //11
    'Ilias Chair', //12
    'Imrân Louza', //13
    'Sofiane Boufal', //14
    'Ayoub El Kaabi', //15
    'Youssef En-Nesyri', //16
    'Ryan Mmaee', //17
    'Munir', //18
    'Tarik Tissoudali', //19
  ];

  const members: IMetaSticker[] = await createMemberSet({
    names: memberNames,
    group: country,
  });

  return { country, members };
};
