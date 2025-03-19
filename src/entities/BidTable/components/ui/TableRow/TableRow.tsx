import React, { FC } from 'react';
import { TD } from 'entities/BidTable/components/styled/TD';
import { TR } from 'entities/BidTable/components/styled/TR';
import { TColumnWidthsDesktop, TRowProps } from 'entities/BidTable/types/types';

import { TableRowHiddenContent } from '../TableRowHiddenContent';

interface IPropsTableRow {
  row: TRowProps;
  columnWidths: TColumnWidthsDesktop;
  selectedValue: string;
  handleSelectRow: (value: string) => void;
}

export const TableRow: FC<IPropsTableRow> = ({
  row,
  columnWidths,
  selectedValue,
  handleSelectRow,
}) => {
  const isSelected = selectedValue === row.id;

  return (
    <React.Fragment>
      <TR
        onClick={() => {
          if (isSelected) {
            handleSelectRow('');
          } else {
            handleSelectRow(row.id);
          }
        }}
        $isSelected={isSelected}
      >
        {Object.values(row).map((value, index) => (
          <TD key={index} style={{ width: columnWidths[index] }}>
            {value}
          </TD>
        ))}
      </TR>
      <TR $isSelected={isSelected} $isHidden={!isSelected}>
        <TD colSpan={8} $isHidden>
          <TableRowHiddenContent isHidden={!isSelected} />
        </TD>
      </TR>
    </React.Fragment>
  );
};
