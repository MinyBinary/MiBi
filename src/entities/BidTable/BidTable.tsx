import type { FC } from 'react';
import { TableBody } from 'entities/BidTable/components/ui/TableBody';
import { TableHead } from 'entities/BidTable/components/ui/TableHead';

import { ColumnWidthDesktop } from './constants/table-width';
import { tableRows } from './mock/table-rows';

import * as S from './BidTable.styled';

export const BidTable: FC = () => {
  return (
    <S.BidTableWrapper>
      <S.BidTable>
        <TableHead tableData={tableRows} columnWidths={ColumnWidthDesktop} />
        <TableBody tableData={tableRows} columnWidths={ColumnWidthDesktop} />
      </S.BidTable>
    </S.BidTableWrapper>
  );
};
