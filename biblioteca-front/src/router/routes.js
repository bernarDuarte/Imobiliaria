import authRoutes from '@/modules/auth/auth.routes';
import homeRoutes from '@/modules/home/home.routes';
import errorRoutes from '@/modules/error/error.routes';
import usuarioRoutes from '@/modules/usuario/usuario.routes';
import livroRoutes from '@/modules/livro/livro.routes';
import emprestimoRoutes from '@/modules/emprestimo/emprestimo.routes';
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
  ...usuarioRoutes,
  ...livroRoutes,
  ...emprestimoRoutes,
  ...tipoImovelRoutes,
  ...admRoutes,
  ...imovelRoutes,
];
