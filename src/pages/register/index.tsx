import { FC } from 'react';

import { PageContainer } from '~/components/page';
import { Auth } from '~/components/ui/auth/Auth';

const RegisterPage: FC = () => {
  return (
    <PageContainer>
      <Auth isLogin={false} />
    </PageContainer>
  );
};

export default RegisterPage;
