import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router';
import { getQuestionnaireData, saveQuestionnaireData } from '../utils/questionnaireData';

const healthConditions = [
  'Аллергии',
  'Диабет',
  'Гипертония',
  'Анемия',
  'Заболевания щитовидной железы',
  'Заболевания ЖКТ',
  'Нет хронических заболеваний',
];

export function QuestionnaireStep3() {
  const navigate = useNavigate();
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      const data = await getQuestionnaireData();
      if (data.email) setEmail(data.email);
      if (data.name) setName(data.name);
      if (data.healthConditions.length > 0) setSelectedConditions(data.healthConditions);
    };

    void loadData();
  }, []);

  const toggleCondition = (condition: string) => {
    if (condition === 'Нет хронических заболеваний') {
      setSelectedConditions(['Нет хронических заболеваний']);
      return;
    }

    setSelectedConditions((current) => {
      const filtered = current.filter((item) => item !== 'Нет хронических заболеваний');
      return filtered.includes(condition) ? filtered.filter((item) => item !== condition) : [...filtered, condition];
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await saveQuestionnaireData({
      email,
      name,
      healthConditions: selectedConditions,
    });
    navigate('/analysis?run=1');
  };

  const isFormValid = email && name && selectedConditions.length > 0;

  return (
    <div className="min-h-screen bg-[#f4f7f8]">
      <div className="mx-auto max-w-[1080px] px-4 pb-12 pt-28 md:px-8 md:pt-32">
        <motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 18 }} transition={{ duration: 0.4 }}>
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.14em] text-[#1f1f1f]/45">Шаг 3 из 3</p>
              <h1 className="mt-2 font-['DM_Sans'] text-[34px] font-bold leading-[1.08] text-[#1f1f1f]">Финальные данные для анализа</h1>
              <p className="mt-3 max-w-[680px] font-['DM_Sans'] text-[15px] leading-[1.7] text-[#1f1f1f]/64">
                Уточните контактные данные и особенности здоровья. Эти поля нужны только для персонализации результата и сохранения анкеты.
              </p>
            </div>
            <div className="hidden min-w-[180px] rounded-[22px] bg-white p-5 text-right shadow-[0_16px_40px_rgba(31,31,31,0.05)] md:block">
              <p className="font-['DM_Sans'] text-[13px] text-[#1f1f1f]/45">Прогресс</p>
              <p className="mt-1 font-['DM_Sans'] text-[30px] font-bold text-[#1f1f1f]">100%</p>
            </div>
          </div>

          <div className="mb-6 h-2 overflow-hidden rounded-full bg-white">
            <div className="h-full w-full rounded-full bg-[#02b1cc]" />
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <section className="rounded-[30px] bg-white p-7 shadow-[0_20px_60px_rgba(31,31,31,0.06)]">
              <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.14em] text-[#1f1f1f]/40">Контактные данные</p>
              <div className="mt-5 space-y-5">
                <label className="block">
                  <span className="mb-2 block font-['DM_Sans'] text-[14px] font-medium text-[#1f1f1f]">Имя</span>
                  <input
                    className="w-full rounded-[18px] border border-black/8 bg-[#f7f9fa] px-4 py-3.5 font-['DM_Sans'] text-[15px] outline-none transition focus:border-[#02b1cc]"
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Как к вам обращаться"
                    type="text"
                    value={name}
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block font-['DM_Sans'] text-[14px] font-medium text-[#1f1f1f]">Email</span>
                  <input
                    className="w-full rounded-[18px] border border-black/8 bg-[#f7f9fa] px-4 py-3.5 font-['DM_Sans'] text-[15px] outline-none transition focus:border-[#02b1cc]"
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    type="email"
                    value={email}
                  />
                </label>
              </div>

              <div className="mt-6 rounded-[22px] bg-[#f7f9fa] p-4">
                <p className="font-['DM_Sans'] text-[13px] leading-[1.7] text-[#1f1f1f]/62">
                  Ваши данные используются только внутри сервиса для персонализации анализа и личного кабинета.
                </p>
              </div>
            </section>

            <section className="rounded-[30px] bg-white p-7 shadow-[0_20px_60px_rgba(31,31,31,0.06)]">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.14em] text-[#1f1f1f]/40">Здоровье</p>
                  <h2 className="mt-2 font-['DM_Sans'] text-[24px] font-bold text-[#1f1f1f]">Есть ли важные особенности?</h2>
                </div>
                <span className="rounded-full bg-[#f3f6f7] px-3 py-1.5 font-['DM_Sans'] text-[13px] font-medium text-[#1f1f1f]/62">
                  {selectedConditions.length} выбрано
                </span>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {healthConditions.map((condition) => (
                  <button
                    key={condition}
                    className={`rounded-[18px] border px-4 py-3.5 text-left font-['DM_Sans'] text-[14px] font-medium transition ${
                      selectedConditions.includes(condition)
                        ? 'border-[#02b1cc] bg-[#eefafc] text-[#0b5562]'
                        : 'border-black/8 bg-[#f7f9fa] text-[#1f1f1f] hover:bg-[#f0f5f6]'
                    }`}
                    onClick={() => toggleCondition(condition)}
                    type="button"
                  >
                    {condition}
                  </button>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-black/6 pt-6">
            <Link className="rounded-full px-5 py-3 font-['DM_Sans'] text-[15px] font-medium text-[#1f1f1f] transition hover:bg-white" to="/questionnaire/step2">
              Назад
            </Link>
            <button
              className="rounded-full bg-[#ff6647] px-6 py-3 font-['DM_Sans'] text-[15px] font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-55"
              disabled={!isFormValid || isSubmitting}
              onClick={() => void handleSubmit()}
              type="button"
            >
              {isSubmitting ? 'Формируем анализ...' : 'Получить анализ'}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
