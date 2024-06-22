import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { FC, ReactElement } from 'react';
import styled from 'styled-components';

import { ArrowLink } from '../Text/ArrowLink';

interface ImageCardProps {
  image: ReactElement;
  title?: string;
  description?: string;
  linkText?: string;
  withIcon?: boolean;
}

export const ImageCard: FC<ImageCardProps> = (props: ImageCardProps) => {
  const { title, description, image, linkText, withIcon } = props;
  return (
    <MediaCard $withIcon={withIcon}>
      <Media $withIcon={withIcon}>{image}</Media>
      <Content>
        <span className="heading-5">{title}</span>
        <span className="body-m">{description}</span>
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
  border-radius: 8px !important;
  box-shadow: none !important;
`;

const Content = styled(CardContent)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px 16px 16px 16px !important;
`;

const Link = styled(CardActions)<{ $withIcon?: boolean }>`
  padding: ${(props) => (props.$withIcon ? '12px 16px !important' : '28px 16px !important')};
`;

const Media = styled(CardMedia)<{ $withIcon?: boolean }>`
  padding-left: ${(props) => (props.$withIcon ? '16px' : '0')};
`;
