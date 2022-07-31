import { Layout } from '@/styled-components';
import { CreateHomeButton, ModifyHomeButton, ResetHomeButton } from './components';
import { HomeTitle } from './styled-components';

export default function Home() {
  return (
    <Layout>
      <HomeTitle>Abemus Home</HomeTitle>
      <CreateHomeButton />
      <ModifyHomeButton />
      <ResetHomeButton />
    </Layout>
  );
}
