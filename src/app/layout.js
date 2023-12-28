

import LayoutClient from './LayoutClient';

export const metadata = {
  title: 'Rogelio Vargas',
  description: 'Rogelio Vargas - Profile',
}
 
const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  )
};

export default RootLayout;
