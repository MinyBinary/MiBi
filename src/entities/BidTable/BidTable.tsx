import type { FC } from 'react';

import { TableColumn } from './components/ui/TableColumn';

import * as S from './BidTable.styled';

export const BidTable: FC = () => {
  return (
    <S.BidTable>
      <S.PanelGroupView direction="horizontal">
        <TableColumn tittle="id" defSize={10} minSize={0} borderRight />
        <S.PanelResizeHandleView />
        <TableColumn tittle="inscription1" defSize={20} minSize={0} borderRight />
        <S.PanelResizeHandleView />
        <TableColumn tittle="idea" defSize={10} minSize={0} borderRight />
        <S.PanelResizeHandleView />
        <TableColumn tittle="date" defSize={10} minSize={0} borderRight />
        <S.PanelResizeHandleView />
        <TableColumn tittle="expDate" defSize={10} minSize={0} borderRight />
        <S.PanelResizeHandleView />
        <TableColumn tittle="bid" defSize={10} minSize={0} borderRight />
        <S.PanelResizeHandleView />
        <TableColumn tittle="inscription2" defSize={30} minSize={0} borderRight />
        <S.PanelResizeHandleView />
        <TableColumn tittle="status" defSize={10} minSize={0} />
      </S.PanelGroupView>
    </S.BidTable>
  );
};
