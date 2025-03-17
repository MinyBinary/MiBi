import type { FC } from 'react';
import { tableRows } from 'entities/BidTable/mock/table-rows';

import * as S from './TableColumn.styled';

type TTableRows = keyof (typeof tableRows)[0];

interface ITableRowProps {
  tittle: TTableRows;
  defSize: number;
  minSize: number;
  borderRight?: boolean;
  onResize?: () => void;
}

export const TableColumn: FC<ITableRowProps> = ({
  tittle,
  defSize,
  minSize,

  onResize,
}) => {
  return (
    <S.PanelView defaultSize={defSize} minSize={minSize} onResize={() => onResize?.()}>
      <S.TableHeader>{tittle}</S.TableHeader>
      {/**MOCK */}
      {tableRows.map((row) => (
        <S.TableItem key={row[tittle]}>{row[tittle]}</S.TableItem>
      ))}
    </S.PanelView>
  );
};
