import { FC } from 'react';

import { PageContainer } from '~/components/page';
import { Auth } from '~/components/ui/auth/Auth';

const LoginPage: FC = () => {
  return (
    <PageContainer>
      <Auth isLogin={true} />
    </PageContainer>
  );
};

export default LoginPage;
