import authRoutes from '@/modules/auth/auth.routes';
import homeRoutes from '@/modules/home/home.routes';
import errorRoutes from '@/modules/error/error.routes';
import gerenciarRoutes from '@/modules/gerenciar/gerenciar.routes';
import tipoImovelRoutes from '@/modules/tipoImovel/tipoImovel.routes';
import admRoutes from '@/modules/Adm/adm.routes';
import imovelRoutes from '@/modules/imovel/imovel.routes';

const routes = [
  {
    path: '*',
    redirect: '/',
  },
];

export default [
  ...routes,
  ...homeRoutes,
  ...authRoutes,
  ...errorRoutes,
  ...gerenciarRoutes,
  ...tipoImovelRoutes,
  ...admRoutes,
  ...imovelRoutes,
];
