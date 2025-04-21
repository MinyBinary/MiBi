import type { FC } from 'react';
import CodeIcon from 'shared/assets/icons/others/code.svg?react';
import FoldersIcon from 'shared/assets/icons/others/folders.svg?react';
import ShareIcon from 'shared/assets/icons/others/share.svg?react';
import PinIcon from 'shared/assets/icons/pins/pin.svg?react';

import * as S from './IdRowData.styled';

interface IPropsIdRowData {
  id: string;
}

export const IdRowData: FC<IPropsIdRowData> = ({ id }) => {
  return (
    <S.IdRowData>
      <S.Id>{id}</S.Id>
      <S.SubMenu>
        <S.MenuItem>
          <PinIcon />
        </S.MenuItem>
        <S.MenuItem>
          <ShareIcon />
        </S.MenuItem>
        <S.MenuItem>
          <CodeIcon />
        </S.MenuItem>
        <S.MenuItem>
          <FoldersIcon />
        </S.MenuItem>
      </S.SubMenu>
    </S.IdRowData>
  );
};
