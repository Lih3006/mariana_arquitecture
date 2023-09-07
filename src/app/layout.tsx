import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Arquiteta Mariana - Interiores Comercial e Residencial em São Paulo',
  description: `Explore a excelência em design de interiores comercial e residencial em 
    São Paulo com a Arquita Interiores. Nossa equipe de arquitetos experientes 
    e criativos transforma espaços com maestria, combinando estilo, funcionalidade e elegância. Descubra como nossos projetos inovadores e personalizados podem tornar seu ambiente único e envolvente. Desde escritórios e lojas até residências luxuosas, estamos comprometidos em criar espaços inspiradores que encantam e surpreendem. 
    Entre em contato conosco e deixe-nos transformar suas ideias em realidade para reformas, decoração, novo apartament condomínio e casa.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
