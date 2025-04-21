import React, { FC, ReactNode } from 'react';
import { TD } from 'entities/BidTable/components/styled/TD';
import { TR } from 'entities/BidTable/components/styled/TR';
import { DateRowData } from 'entities/BidTable/components/ui/DateRowData';
import { EXPDateRowData } from 'entities/BidTable/components/ui/EXPDateRowData';
import { IdeaRowData } from 'entities/BidTable/components/ui/IdeaRowData';
import { IdRowData } from 'entities/BidTable/components/ui/IdRowData';
import { InscriptionRowData } from 'entities/BidTable/components/ui/InscriptionRowData';
import { TableRowHiddenContent } from 'entities/BidTable/components/ui/TableRowHiddenContent';
import { TColumnWidthsDesktop, TRowProps } from 'entities/BidTable/types/types';

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

  const renderBlockData: Record<keyof TRowProps, () => ReactNode> = {
    ['id']: () => <IdRowData id={row.id} />,
    ['inscription1']: () => <InscriptionRowData {...row.inscription1} />,
    ['idea']: () => <IdeaRowData {...row.idea} />,
    ['date']: () => <DateRowData {...row.date} />,
    ['expDate']: () => <EXPDateRowData {...row.expDate} />,
    ['bid']: () => row.bid.activeBidButton,
    ['inscription2']: () => <InscriptionRowData name="" comment="" />,
    ['status']: () => row.status,
  };

  return (
    <>
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
        {Object.entries(row).map(([key, value], index) => (
          <TD key={index} style={{ width: columnWidths[index] }}>
            {renderBlockData[key as keyof TRowProps]
              ? renderBlockData[key as keyof TRowProps]()
              : value}
          </TD>
        ))}
      </TR>
      <TR $isSelected={isSelected} $isHidden={!isSelected}>
        <TD colSpan={8} $isHidden>
          <TableRowHiddenContent isHidden={!isSelected} />
        </TD>
      </TR>
    </>
  );
};
