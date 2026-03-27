import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router';
import { getQuestionnaireData, saveQuestionnaireData } from '../utils/questionnaireData';

const goals = [
  { id: 'health', label: 'Общее здоровье' },
  { id: 'immunity', label: 'Иммунитет' },
  { id: 'energy', label: 'Энергия' },
  { id: 'sleep', label: 'Сон' },
  { id: 'beauty', label: 'Красота и кожа' },
  { id: 'digestion', label: 'Пищеварение' },
  { id: 'sport', label: 'Спорт' },
  { id: 'stress', label: 'Стресс' },
  { id: 'focus', label: 'Концентрация' },
];

export function QuestionnaireStep2() {
  const navigate = useNavigate();
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  useEffect(() => {
    const loadData = async () => {
      const data = await getQuestionnaireData();
      if (data.age) setAge(data.age);
      if (data.gender) setGender(data.gender);
      if (data.goals.length > 0) setSelectedGoals(data.goals);
    };

    void loadData();
  }, []);

  const toggleGoal = (goalId: string) => {
    setSelectedGoals((current) => current.includes(goalId) ? current.filter((item) => item !== goalId) : [...current, goalId]);
  };

  const handleNext = async () => {
    await saveQuestionnaireData({ age, gender, goals: selectedGoals });
    navigate('/questionnaire/step3');
  };

  const isFormValid = selectedGoals.length > 0 && age && gender;

  return (
    <div className="min-h-screen bg-[#f4f7f8]">
      <div className="mx-auto max-w-[1080px] px-4 pb-12 pt-28 md:px-8 md:pt-32">
        <motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 18 }} transition={{ duration: 0.4 }}>
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.14em] text-[#1f1f1f]/45">Шаг 2 из 3</p>
              <h1 className="mt-2 font-['DM_Sans'] text-[34px] font-bold leading-[1.08] text-[#1f1f1f]">Расскажите немного о себе</h1>
              <p className="mt-3 max-w-[680px] font-['DM_Sans'] text-[15px] leading-[1.7] text-[#1f1f1f]/64">
                Эти данные помогут точнее интерпретировать список добавок и показать рекомендации в нужном контексте.
              </p>
            </div>
            <div className="hidden min-w-[180px] rounded-[22px] bg-white p-5 text-right shadow-[0_16px_40px_rgba(31,31,31,0.05)] md:block">
              <p className="font-['DM_Sans'] text-[13px] text-[#1f1f1f]/45">Прогресс</p>
              <p className="mt-1 font-['DM_Sans'] text-[30px] font-bold text-[#1f1f1f]">67%</p>
            </div>
          </div>

          <div className="mb-6 h-2 overflow-hidden rounded-full bg-white">
            <div className="h-full w-2/3 rounded-full bg-[#02b1cc]" />
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <section className="rounded-[30px] bg-white p-7 shadow-[0_20px_60px_rgba(31,31,31,0.06)]">
              <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.14em] text-[#1f1f1f]/40">Основная информация</p>
              <div className="mt-5 space-y-5">
                <label className="block">
                  <span className="mb-2 block font-['DM_Sans'] text-[14px] font-medium text-[#1f1f1f]">Возраст</span>
                  <input
                    className="w-full rounded-[18px] border border-black/8 bg-[#f7f9fa] px-4 py-3.5 font-['DM_Sans'] text-[15px] outline-none transition focus:border-[#02b1cc]"
                    max="120"
                    min="1"
                    onChange={(event) => setAge(event.target.value)}
                    placeholder="Введите возраст"
                    type="number"
                    value={age}
                  />
                </label>

                <div>
                  <span className="mb-2 block font-['DM_Sans'] text-[14px] font-medium text-[#1f1f1f]">Пол</span>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { id: 'male', label: 'Мужской' },
                      { id: 'female', label: 'Женский' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        className={`rounded-[18px] border px-4 py-3 text-left font-['DM_Sans'] text-[14px] font-medium transition ${
                          gender === item.id
                            ? 'border-[#02b1cc] bg-[#eefafc] text-[#0b5562]'
                            : 'border-black/8 bg-[#f7f9fa] text-[#1f1f1f] hover:bg-[#f0f5f6]'
                        }`}
                        onClick={() => setGender(item.id)}
                        type="button"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-[30px] bg-white p-7 shadow-[0_20px_60px_rgba(31,31,31,0.06)]">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.14em] text-[#1f1f1f]/40">Цели</p>
                  <h2 className="mt-2 font-['DM_Sans'] text-[24px] font-bold text-[#1f1f1f]">Что для вас сейчас в приоритете?</h2>
                </div>
                <span className="rounded-full bg-[#f3f6f7] px-3 py-1.5 font-['DM_Sans'] text-[13px] font-medium text-[#1f1f1f]/62">
                  {selectedGoals.length} выбрано
                </span>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {goals.map((goal) => (
                  <button
                    key={goal.id}
                    className={`rounded-[18px] border px-4 py-3.5 text-left font-['DM_Sans'] text-[14px] font-medium transition ${
                      selectedGoals.includes(goal.id)
                        ? 'border-[#02b1cc] bg-[#eefafc] text-[#0b5562]'
                        : 'border-black/8 bg-[#f7f9fa] text-[#1f1f1f] hover:bg-[#f0f5f6]'
                    }`}
                    onClick={() => toggleGoal(goal.id)}
                    type="button"
                  >
                    {goal.label}
                  </button>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-black/6 pt-6">
            <Link className="rounded-full px-5 py-3 font-['DM_Sans'] text-[15px] font-medium text-[#1f1f1f] transition hover:bg-white" to="/questionnaire/step1">
              Назад
            </Link>
            <button
              className="rounded-full bg-[#02b1cc] px-6 py-3 font-['DM_Sans'] text-[15px] font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-55"
              disabled={!isFormValid}
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
