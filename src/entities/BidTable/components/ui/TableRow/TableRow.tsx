import React, { FC, useState } from 'react';
import { TD } from 'entities/BidTable/components/styled/TD';
import { TR } from 'entities/BidTable/components/styled/TR';
import { TColumnWidthsDesktop, TRowProps } from 'entities/BidTable/types/types';

import * as S from './TableRow.styled';

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
  const [isHiddenContentOpen, setIsgHiddenContentOpen] = useState(false);

  const isSelected = selectedValue === row.id;

  return (
    <React.Fragment>
      <TR
        onClick={() => {
          if (isSelected) {
            handleSelectRow('');
            setIsgHiddenContentOpen(false);
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
        <TD colSpan={8} $isSelected={isSelected} $isHidden={!isSelected}>
          <S.RowHiddenContentWrapper $isSelected={isSelected}>
            <S.BidBlockHiddenWrapper>
              <S.BidBlockHidden
                $isHidden={!isHiddenContentOpen}
                onClick={() => setIsgHiddenContentOpen(!isHiddenContentOpen)}
              >
                As the sun dipped below the horizon, the sky transformed into a canvas of vibrant
                colors—shades of orange, pink, and purple blending together seamlessly. The cool
                evening breeze stirred the leaves of the trees, causing them to rustle gently. In
                the distance, the sound of waves crashing against the shore could be heard, adding a
                calming backdrop to the peaceful scene. People walked along the beach, some lost in
                their thoughts, others chatting softly with friends, their footsteps leaving
                temporary impressions in the soft sand. The fading light painted everything in a
                warm glow, and for a brief moment, time seemed to stand still. It was the kind of
                evening where everything felt perfectly in place, as if the world was taking a deep
                breath, ready to settle into the quiet embrace of night. As the stars began to
                appear one by one, the night grew darker, but there was a sense of serenity that
                made the moment unforgettable.
              </S.BidBlockHidden>
            </S.BidBlockHiddenWrapper>
            <S.BidBlockHiddenWrapper>
              <S.BidBlockHidden $isHidden={!isHiddenContentOpen}>
                As the sun dipped below the horizon, the sky transformed into a canvas of vibrant
                colors—shades of orange, pink, and purple blending together seamlessly. The cool
                evening breeze stirred the leaves of the trees, causing them to rustle gently. In
                the distance, the sound of waves crashing against the shore could be heard, adding a
                calming backdrop to the peaceful scene. People walked along the beach, some lost in
                their thoughts, others chatting softly with friends, their footsteps leaving
                temporary impressions in the soft sand. The fading light painted everything in a
                warm glow, and for a brief moment, time seemed to stand still. It was the kind of
                evening where everything felt perfectly in place, as if the world was taking a deep
                breath, ready to settle into the quiet embrace of night. As the stars began to
                appear one by one, the night grew darker, but there was a sense of serenity that
                made the moment unforgettable.
              </S.BidBlockHidden>
              <S.BidBlockHidden $isHidden={!isHiddenContentOpen}>
                As the sun dipped below the horizon, the sky transformed into a canvas of vibrant
                colors—shades of orange, pink, and purple blending together seamlessly. The cool
                evening breeze stirred the leaves of the trees, causing them to rustle gently. In
                the distance, the sound of waves crashing against the shore could be heard, adding a
                calming backdrop to the peaceful scene. People walked along the beach, some lost in
                their thoughts, others chatting softly with friends, their footsteps leaving
                temporary impressions in the soft sand. The fading light painted everything in a
                warm glow, and for a brief moment, time seemed to stand still. It was the kind of
                evening where everything felt perfectly in place, as if the world was taking a deep
                breath, ready to settle into the quiet embrace of night. As the stars began to
                appear one by one, the night grew darker, but there was a sense of serenity that
                made the moment unforgettable.
              </S.BidBlockHidden>
              <S.BidBlockHidden $isHidden={!isHiddenContentOpen}>
                As the sun dipped below the horizon, the sky transformed into a canvas of vibrant
                colors—shades of orange, pink, and purple blending together seamlessly. The cool
                evening breeze stirred the leaves of the trees, causing them to rustle gently. In
                the distance, the sound of waves crashing against the shore could be heard, adding a
                calming backdrop to the peaceful scene. People walked along the beach, some lost in
                their thoughts, others chatting softly with friends, their footsteps leaving
                temporary impressions in the soft sand. The fading light painted everything in a
                warm glow, and for a brief moment, time seemed to stand still. It was the kind of
                evening where everything felt perfectly in place, as if the world was taking a deep
                breath, ready to settle into the quiet embrace of night. As the stars began to
                appear one by one, the night grew darker, but there was a sense of serenity that
                made the moment unforgettable.
              </S.BidBlockHidden>
            </S.BidBlockHiddenWrapper>
          </S.RowHiddenContentWrapper>
        </TD>
      </TR>
    </React.Fragment>
  );
};
