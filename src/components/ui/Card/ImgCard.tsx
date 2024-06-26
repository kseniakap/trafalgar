import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { FC, ReactElement } from 'react';
import styled from 'styled-components';

import { Loader } from '../Loader/Loader';
import { ArrowLink } from '../Text/ArrowLink';
import LoaderBg from '~/assets/img/arcticles/loader.png';

interface ImageCardProps {
  image: ReactElement | null;
  title?: string;
  description?: string;
  linkText?: string;
  withIcon?: boolean;
}

export const ImageCard: FC<ImageCardProps> = (props: ImageCardProps) => {
  const { title, description, linkText, withIcon, image } = props;
  return (
    <MediaCard $withIcon={withIcon}>
      <Media $withIcon={withIcon}>
        {image ? (
          <>{image}</>
        ) : (
          <>
            <img src={LoaderBg} alt="loader" />
            <Loader />
          </>
        )}
      </Media>
      <ContentContainer>
        <Content>
          <Title component="span" $withIcon={withIcon}>
            {title}
          </Title>
          <Description component="span" $withIcon={withIcon}>
            {description}
          </Description>
        </Content>
        {linkText && (
          <Link $withIcon={withIcon}>
            <ArrowLink text={linkText} />
          </Link>
        )}
      </ContentContainer>
    </MediaCard>
  );
};

const MediaCard = styled(Card)<{ $withIcon?: boolean }>`
  display: flex;
  flex-direction: column;
  border: ${(props) => (props.$withIcon ? 'none' : '1px solid #dde1e6;')};
  border-radius: 8px !important;
  box-shadow: none !important;
  height: 100%;
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
  position: relative;
  padding-left: ${(props) => (props.$withIcon ? props.theme.spacing(2) : '0')};
  height: ${(props) => (props.$withIcon ? props.theme.spacing(6) : 'unset')};
  img {
    width: ${(props) => (props.$withIcon ? 'unset' : '100%')};
  }
`;
const Title = styled(Box)<{ $withIcon?: boolean }>`
  font-size: 20px;
  font-weight: 700;
  line-height: 22px;
  text-align: left;
  ${({ theme }) => theme.breakpoints.down('tablet')} {
    font-size: ${({ $withIcon }) => ($withIcon ? 'unset' : '16px')};
    line-height: ${({ $withIcon }) => ($withIcon ? 'unset' : '17.6px')};
  }
`;
const Description = styled(Box)<{ $withIcon?: boolean }>`
  font-size: 16px;
  font-weight: 400;
  line-height: 22.4px;
  text-align: left;
  ${({ theme }) => theme.breakpoints.down('tablet')} {
    font-size: ${({ $withIcon }) => ($withIcon ? 'unset' : '14px')};
    line-height: ${({ $withIcon }) => ($withIcon ? 'unset' : '19.6px')};
  }
`;
const ContentContainer = styled(Box)`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: space-between;
`;
