import { type FC, useState } from 'react';
import { TableRow } from 'entities/BidTable/components/ui/TableRow';
import { TColumnWidthsDesktop, TRowProps } from 'entities/BidTable/types/types';

import * as S from './TableBody.styled';

interface ITableBodyProps {
  tableData: TRowProps[];
  columnWidths: TColumnWidthsDesktop;
}

export const TableBody: FC<ITableBodyProps> = ({ tableData, columnWidths }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectRow = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <S.TBody>
      {tableData.map((item) => (
        <TableRow
          row={item}
          key={item.id}
          columnWidths={columnWidths}
          selectedValue={selectedValue}
          handleSelectRow={handleSelectRow}
        />
      ))}
    </S.TBody>
  );
};
