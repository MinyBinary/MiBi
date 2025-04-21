import type { FC } from 'react';
import { TH } from 'entities/BidTable/components/styled/TH';
import { TR } from 'entities/BidTable/components/styled/TR';
import { TColumnWidthsDesktop, TRowProps } from 'entities/BidTable/types/types';

import * as S from './TableHead.styled';

interface ITableHeadProps {
  tableData: TRowProps[];
  columnWidths: TColumnWidthsDesktop;
}

export const TableHead: FC<ITableHeadProps> = ({ tableData, columnWidths }) => {
  return (
    <S.THead>
      <TR>
        {Object.keys(tableData[0]).map((key, index) => (
          <TH key={index} style={{ width: columnWidths[index] }}>
            {key.includes('inscription') ? 'inscription' : key}
          </TH>
        ))}
      </TR>
    </S.THead>
  );
};
