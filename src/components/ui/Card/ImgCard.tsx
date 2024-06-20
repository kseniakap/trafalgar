import Box from '@mui/material/Box/Box';
import Card from '@mui/material/Card/Card';
import CardActions from '@mui/material/CardActions/CardActions';
import CardContent from '@mui/material/CardContent/CardContent';
import CardMedia from '@mui/material/CardMedia/CardMedia';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { ArrowLink } from '../Text/ArrowLink';

interface ImageCardProps {
  image: ReactElement;
  title?: string;
  description?: string;
  linkText?: string;
  withIcon?: boolean;
}

export const ImageCard = (props: ImageCardProps) => {
  const { title, description, image, linkText, withIcon } = props;
  return (
    <MediaCard $withIcon={withIcon}>
      <Media $withIcon={withIcon}>{image}</Media>
      <Content>
        <Title className="heading-5">{title}</Title>
        <Description className="body-M">{description}</Description>
      </Content>
      {linkText && (
        <Link $withIcon={withIcon}>
          <ArrowLink text={linkText} />
        </Link>
      )}
    </MediaCard>
  );
};

const MediaCard = styled(Card)<{ $withIcon?: boolean }>`
  border: ${(props) => (props.$withIcon ? 'none' : '1px solid #dde1e6;')};
  box-shadow: none !important;
  border-radius: 8px !important;
`;

const Content = styled(CardContent)`
  padding: 24px 16px 16px 16px !important;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Link = styled(CardActions)<{ $withIcon?: boolean }>`
  padding: ${(props) => (props.$withIcon ? '12px 16px !important' : '28px 16px !important')};
`;

const Media = styled(CardMedia)<{ $withIcon?: boolean }>`
  padding-left: ${(props) => (props.$withIcon ? '16px' : '0')};
`;

const Title = styled(Box)``;
const Description = styled(Box)``;
