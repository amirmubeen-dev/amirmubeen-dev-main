import { ReactNode } from 'react';
interface PageLayoutProps {
  children: ReactNode;
}
const PageLayout = ({
  children
}: PageLayoutProps) => {
  return <div className="min-h-screen relative">
      <div className="min-h-screen relative z-10 color-gray-600">
        {children}
      </div>
    </div>;
};
export default PageLayout;