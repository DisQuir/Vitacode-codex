import { useEffect } from 'react';

const TILDA_LANDING_URL = 'https://vitacode.tilda.ws/';

export function Home() {
  useEffect(() => {
    window.location.replace(TILDA_LANDING_URL);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f4f7f8] px-4 text-center">
      <div>
        <p className="font-['DM_Sans'] text-[16px] text-[#1f1f1f]/70">Перенаправляем на лендинг...</p>
        <a
          className="mt-4 inline-flex rounded-full bg-[#02b1cc] px-5 py-3 font-['DM_Sans'] text-[15px] font-semibold text-white"
          href={TILDA_LANDING_URL}
        >
          Открыть страницу
        </a>
      </div>
    </div>
  );
}

