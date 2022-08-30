import { FullTeam } from '../../../interfaces/fullTeam';
import { IGroup } from '../../../models/group';
import { IMetaSticker } from '../../../models/metaSticker';
import { createMemberSet, createSetUpGroup } from '../setUpHelpers';

export const setUpSaudiArabia = async (): Promise<FullTeam> => {
  const countryData: IGroup = { code: 'KSA', name: 'Saudi Arabia' };

  const country = await createSetUpGroup(countryData);

  const memberNames = [
    'Saudi Arabia Shield', //1
    'Mohammed Al-Owais', //2
    'Mohammed Al-Rubaie', //3
    'Abdulelah Al-Amri', //4
    'Ali Al-Boleahi', //5
    'Mohammed Al-Burayk', //6
    'Sultan Al-Ghannam', //7
    'Yasser Al-Shahrani', //8
    'Hassan Al-Tambakti', //9
    'Abdullah Madu', //10
    'Salman Al-Faraj', //11
    'Abdulelah Al-Malki', //12
    'Sami Al-Najei', //13
    'Hattan Bahebri', //14
    'Mohamed Kanno', //15
    'Abdullah Otayf', //16
    'Firas Al-Buraikan', //17
    'Salem Al-Dawsari', //18
    'Khalid Al-Ghannam', //19
  ];

  const members: IMetaSticker[] = await createMemberSet({
    names: memberNames,
    group: country,
  });

  return { country, members };
};
