import { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router';
import { getQuestionnaireData, saveQuestionnaireData } from '../utils/questionnaireData';

const supplementSuggestions = [
  'Витамин D3',
  'Омега-3',
  'Магний',
  'Витамин B12',
  'Железо',
  'Цинк',
  'Витамин C',
  'Кальций',
  'Мультивитамины',
];

export function QuestionnaireStep1() {
  const navigate = useNavigate();
  const [supplements, setSupplements] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const loadData = async () => {
      const data = await getQuestionnaireData();
      setSupplements(data.supplements.map((item) => item.name));
    };

    void loadData();
  }, []);

  const filteredSuggestions = useMemo(
    () => supplementSuggestions.filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()) && !supplements.includes(item)),
    [searchTerm, supplements],
  );

  const addSupplement = (supplement: string) => {
    if (!supplements.includes(supplement)) {
      setSupplements((current) => [...current, supplement]);
      setSearchTerm('');
    }
  };

  const removeSupplement = (supplement: string) => {
    setSupplements((current) => current.filter((item) => item !== supplement));
  };

  const handleNext = async () => {
    await saveQuestionnaireData({
      supplements: supplements.map((name) => ({ name })),
    });
    navigate('/questionnaire/step2');
  };

  return (
    <div className="min-h-screen bg-[#f4f7f8]">
      <div className="mx-auto max-w-[1080px] px-4 pb-12 pt-28 md:px-8 md:pt-32">
        <motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 18 }} transition={{ duration: 0.4 }}>
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.14em] text-[#1f1f1f]/45">Шаг 1 из 3</p>
              <h1 className="mt-2 font-['DM_Sans'] text-[34px] font-bold leading-[1.08] text-[#1f1f1f]">Какие добавки вы принимаете?</h1>
              <p className="mt-3 max-w-[680px] font-['DM_Sans'] text-[15px] leading-[1.7] text-[#1f1f1f]/64">
                Добавьте все витамины и БАДы, которые вы принимаете регулярно. На следующем шаге мы уточним цели и особенности профиля.
              </p>
            </div>
            <div className="hidden min-w-[180px] rounded-[22px] bg-white p-5 text-right shadow-[0_16px_40px_rgba(31,31,31,0.05)] md:block">
              <p className="font-['DM_Sans'] text-[13px] text-[#1f1f1f]/45">Прогресс</p>
              <p className="mt-1 font-['DM_Sans'] text-[30px] font-bold text-[#1f1f1f]">33%</p>
            </div>
          </div>

          <div className="mb-6 h-2 overflow-hidden rounded-full bg-white">
            <div className="h-full w-1/3 rounded-full bg-[#02b1cc]" />
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <section className="rounded-[30px] bg-white p-7 shadow-[0_20px_60px_rgba(31,31,31,0.06)]">
              <label className="block">
                <span className="mb-2 block font-['DM_Sans'] text-[14px] font-medium text-[#1f1f1f]">Поиск добавки</span>
                <input
                  className="w-full rounded-[18px] border border-black/8 bg-[#f7f9fa] px-4 py-3.5 font-['DM_Sans'] text-[15px] outline-none transition focus:border-[#02b1cc]"
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Например: Магний или Омега-3"
                  type="text"
                  value={searchTerm}
                />
              </label>

              {searchTerm && filteredSuggestions.length > 0 && (
                <div className="mt-4 rounded-[20px] border border-black/6 bg-[#fbfcfc] p-3">
                  <div className="flex flex-wrap gap-2">
                    {filteredSuggestions.slice(0, 6).map((suggestion) => (
                      <button
                        key={suggestion}
                        className="rounded-full border border-[#02b1cc]/18 bg-[#eefafc] px-3.5 py-2 font-['DM_Sans'] text-[14px] font-medium text-[#0b5562] transition hover:border-[#02b1cc]/35 hover:bg-[#e3f7fa]"
                        onClick={() => addSupplement(suggestion)}
                        type="button"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h2 className="font-['DM_Sans'] text-[18px] font-semibold text-[#1f1f1f]">Выбранные добавки</h2>
                  <span className="rounded-full bg-[#f3f6f7] px-3 py-1.5 font-['DM_Sans'] text-[13px] font-medium text-[#1f1f1f]/62">
                    {supplements.length} позиций
                  </span>
                </div>
                <div className="min-h-[180px] rounded-[24px] bg-[#f7f9fa] p-4">
                  {supplements.length === 0 ? (
                    <p className="font-['DM_Sans'] text-[14px] leading-[1.6] text-[#1f1f1f]/45">Добавьте хотя бы одну добавку из поиска или из быстрых вариантов справа.</p>
                  ) : (
                    <div className="flex flex-wrap gap-2.5">
                      {supplements.map((supplement) => (
                        <span key={supplement} className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-[14px] font-medium text-[#1f1f1f] shadow-[0_8px_20px_rgba(31,31,31,0.04)]">
                          {supplement}
                          <button className="text-[#1f1f1f]/45 transition hover:text-[#d14a2d]" onClick={() => removeSupplement(supplement)} type="button">
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </section>

            <section className="rounded-[30px] bg-white p-7 shadow-[0_20px_60px_rgba(31,31,31,0.06)]">
              <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.14em] text-[#1f1f1f]/40">Быстрый выбор</p>
              <h2 className="mt-2 font-['DM_Sans'] text-[24px] font-bold text-[#1f1f1f]">Популярные варианты</h2>
              <p className="mt-3 font-['DM_Sans'] text-[14px] leading-[1.7] text-[#1f1f1f]/62">
                Нажмите на варианты ниже, если хотите быстрее собрать свой набор.
              </p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {supplementSuggestions.map((supplement) => (
                  <button
                    key={supplement}
                    className={`rounded-full px-3.5 py-2 font-['DM_Sans'] text-[14px] font-medium transition ${
                      supplements.includes(supplement)
                        ? 'bg-[#dfeff2] text-[#7a8b8e]'
                        : 'bg-[#f3f6f7] text-[#1f1f1f] hover:bg-[#eaf0f1]'
                    }`}
                    disabled={supplements.includes(supplement)}
                    onClick={() => addSupplement(supplement)}
                    type="button"
                  >
                    {supplement}
                  </button>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-black/6 pt-6">
            <Link className="rounded-full px-5 py-3 font-['DM_Sans'] text-[15px] font-medium text-[#1f1f1f] transition hover:bg-white" to="/">
              Назад
            </Link>
            <button
              className="rounded-full bg-[#02b1cc] px-6 py-3 font-['DM_Sans'] text-[15px] font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-55"
              disabled={supplements.length === 0}
              onClick={() => void handleNext()}
              type="button"
            >
              Далее
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
