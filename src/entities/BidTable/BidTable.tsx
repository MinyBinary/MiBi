import type { FC } from 'react';
import { TableBody } from 'entities/BidTable/components/ui/TableBody';
import { TableHead } from 'entities/BidTable/components/ui/TableHead';
import { useBidForm } from 'entities/CreateBidForm';

import { ColumnWidthDesktop } from './constants/table-width';

import * as S from './BidTable.styled';

export const BidTable: FC = () => {
  const { rowsState } = useBidForm();

  if (!rowsState) return null;

  return (
    <S.BidTableWrapper>
      <S.BidTable>
        <TableHead tableData={rowsState} columnWidths={ColumnWidthDesktop} />
        <TableBody tableData={rowsState} columnWidths={ColumnWidthDesktop} />
      </S.BidTable>
    </S.BidTableWrapper>
  );
};
