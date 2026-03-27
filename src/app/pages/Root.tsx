import { Outlet, useLocation } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ScrollToTopOnMount } from '../components/ScrollToTopOnMount';

export function Root() {
  const location = useLocation();
  const hideFooter =
    location.pathname.startsWith('/questionnaire') ||
    location.pathname.startsWith('/auth') ||
    location.pathname === '/premium';

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTopOnMount />
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}
