import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router';
import svgPaths from '../../imports/svg-lljcrhjd9g';

// Mock data for supplements autocomplete
const SUPPLEMENTS = [
  'Витамин D3',
  'Витамин C',
  'Витамин B12',
  'Витамин B6',
  'Омега-3',
  'Магний',
  'Цинк',
  'Железо',
  'Кальций',
  'Йод',
  'Селен',
  'Коэнзим Q10',
  'Пробиотики',
  'Мелатонин',
  'Л-карнитин'
];

const GOALS = [
  'Общее здоровье',
  'Иммунитет',
  'Энергия',
  'Сон',
  'Кожа и волосы',
  'Кости и суставы',
  'Пищеварение',
  'Спорт'
];

export function InteractiveForm() {
  const navigate = useNavigate();
  const [supplementInput, setSupplementInput] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedSupplements, setSelectedSupplements] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Filter supplements based on input
  const filteredSupplements = SUPPLEMENTS.filter(supp =>
    supp.toLowerCase().includes(supplementInput.toLowerCase())
  ).filter(supp => !selectedSupplements.includes(supp));

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleAddSupplement = (supplement: string) => {
    if (!selectedSupplements.includes(supplement)) {
      setSelectedSupplements([...selectedSupplements, supplement]);
    }
    setSupplementInput('');
    setShowDropdown(false);
    inputRef.current?.focus();
  };

  const handleRemoveSupplement = (supplement: string) => {
    setSelectedSupplements(selectedSupplements.filter(s => s !== supplement));
  };

  const toggleGoal = (goal: string) => {
    if (selectedGoals.includes(goal)) {
      setSelectedGoals(selectedGoals.filter(g => g !== goal));
    } else {
      setSelectedGoals([...selectedGoals, goal]);
    }
  };

  const handleSubmit = () => {
    navigate('/questionnaire/step1');
  };

  return (
    <div className="bg-[#f5f5f5] relative rounded-[31.234px] shrink-0 w-full" data-name="Анкета">
      <div className="content-stretch flex flex-col gap-[31.234px] items-start px-[37.481px] py-[43.728px] relative w-full">
        {/* Добавьте препараты */}
        <div className="content-stretch flex flex-col gap-[9.37px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex h-[21.864px] items-start relative shrink-0 w-full">
            <p className="flex-[1_0_0] font-['DM_Sans'] font-semibold leading-[21.864px] min-h-px min-w-px relative text-[#1f1f1f] text-[15.617px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              Добавьте препараты
            </p>
          </div>

          <div className="relative w-full" ref={dropdownRef}>
            <div className="bg-white h-[59.344px] relative rounded-[46.851px] shrink-0 w-full">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[9.37px] items-center px-[15.617px] relative size-full">
                  {/* Search Icon */}
                  <div className="relative shrink-0 size-[15.617px]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6169 15.6169">
                      <g opacity="0.4">
                        <path d={svgPaths.p14235300} stroke="#1F1F1F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30141" />
                        <path d={svgPaths.p2146ea00} stroke="#1F1F1F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30141" />
                      </g>
                    </svg>
                  </div>

                  {/* Input Field */}
                  <input
                    ref={inputRef}
                    type="text"
                    value={supplementInput}
                    onChange={(e) => {
                      setSupplementInput(e.target.value);
                      setShowDropdown(true);
                    }}
                    onFocus={() => setShowDropdown(true)}
                    placeholder="Начните вводить название БАДа..."
                    className="flex-1 h-[18.74px] font-['DM_Sans'] font-normal text-[12.493px] text-[#1f1f1f] placeholder:text-[rgba(31,31,31,0.5)] bg-transparent border-none outline-none"
                    style={{ fontVariationSettings: "'opsz' 14" }}
                  />

                  {/* Add Button */}
                  <motion.button
                    onClick={() => {
                      if (supplementInput.trim() && !selectedSupplements.includes(supplementInput.trim())) {
                        handleAddSupplement(supplementInput.trim());
                      }
                    }}
                    className="bg-[#ff6647] h-[34.357px] relative rounded-[53.878px] shrink-0 w-[94.384px]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <p className="font-['DM_Sans'] font-medium leading-[18.74px] text-[12.493px] text-center text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
                      Добавить
                    </p>
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Dropdown */}
            <AnimatePresence>
              {showDropdown && filteredSupplements.length > 0 && supplementInput.trim() && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute z-50 w-full mt-2 bg-white rounded-[20px] shadow-xl max-h-[250px] overflow-y-auto border border-[#e8e8e8]"
                >
                  {filteredSupplements.map((supplement, index) => (
                    <motion.div
                      key={supplement}
                      onClick={() => handleAddSupplement(supplement)}
                      className="px-4 py-3 cursor-pointer hover:bg-[#f5f5f5] transition-colors border-b border-[#f5f5f5] last:border-b-0 first:rounded-t-[20px] last:rounded-b-[20px]"
                      whileHover={{ backgroundColor: '#f5f5f5' }}
                    >
                      <p className="font-['DM_Sans'] font-normal text-[12.493px] text-[#1f1f1f]" style={{ fontVariationSettings: "'opsz' 14" }}>
                        {supplement}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Selected Supplements */}
          {selectedSupplements.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedSupplements.map((supplement) => (
                <motion.div
                  key={supplement}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="bg-[#e0f7fa] px-3 py-1.5 rounded-full flex items-center gap-2"
                >
                  <p className="font-['DM_Sans'] font-medium text-[11px] text-[#02b1cc]" style={{ fontVariationSettings: "'opsz' 14" }}>
                    {supplement}
                  </p>
                  <button
                    onClick={() => handleRemoveSupplement(supplement)}
                    className="text-[#02b1cc] hover:text-[#ff6647] transition-colors"
                  >
                    <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Дополнительная информация */}
        <div className="content-stretch flex flex-col gap-[6.247px] items-start relative shrink-0 w-full">
          <p className="font-['DM_Sans'] font-semibold leading-[21.864px] text-[#1f1f1f] text-[15.617px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Дополнительная информация
          </p>
          <p className="font-['DM_Sans'] font-normal leading-[15.617px] text-[#1f1f1f] text-[10.932px] opacity-60" style={{ fontVariationSettings: "'opsz' 14" }}>
            Опционально — поможет сделать анализ более точным
          </p>
        </div>

        {/* Имя и Почта */}
        <div className="gap-x-[24.987px] gap-y-[24.987px] grid grid-cols-[repeat(2,minmax(0,1fr))] relative shrink-0 w-full">
          {/* Имя */}
          <div className="content-stretch flex flex-col gap-[12.493px] items-start">
            <p className="font-['DM_Sans'] font-medium leading-[15.617px] text-[#1f1f1f] text-[10.932px] opacity-60" style={{ fontVariationSettings: "'opsz' 14" }}>
              Имя
            </p>
            <div className="bg-white h-[39.042px] relative rounded-[43.727px] shrink-0 w-full border border-transparent">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Введите ваше имя"
                className="w-full h-full px-[15.617px] py-[9.37px] font-['DM_Sans'] font-normal text-[12.493px] text-[#1f1f1f] placeholder:text-[rgba(31,31,31,0.5)] bg-transparent border-none outline-none rounded-[43.727px]"
                style={{ fontVariationSettings: "'opsz' 14" }}
              />
            </div>
          </div>

          {/* Почта */}
          <div className="content-stretch flex flex-col gap-[12.493px] items-start">
            <p className="font-['DM_Sans'] font-medium leading-[15.617px] text-[#1f1f1f] text-[10.932px] opacity-60" style={{ fontVariationSettings: "'opsz' 14" }}>
              Почта
            </p>
            <div className="bg-white h-[39.042px] relative rounded-[43.727px] shrink-0 w-full border border-transparent">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Введите ваш email"
                className="w-full h-full px-[15.617px] py-[9.37px] font-['DM_Sans'] font-normal text-[12.493px] text-[#1f1f1f] placeholder:text-[rgba(31,31,31,0.5)] bg-transparent border-none outline-none rounded-[43.727px]"
                style={{ fontVariationSettings: "'opsz' 14" }}
              />
            </div>
          </div>
        </div>

        {/* Цели приема */}
        <div className="content-stretch flex flex-col gap-[12.493px] items-start relative shrink-0 w-full">
          <p className="font-['DM_Sans'] font-medium leading-[15.617px] text-[#1f1f1f] text-[10.932px] opacity-60" style={{ fontVariationSettings: "'opsz' 14" }}>
            Цели приема
          </p>
          <div className="flex flex-wrap gap-[9.37px]">
            {GOALS.map((goal) => {
              const isSelected = selectedGoals.includes(goal);
              return (
                <motion.button
                  key={goal}
                  onClick={() => toggleGoal(goal)}
                  className={`h-[32.795px] px-[16.398px] py-[8.589px] rounded-[26200730px] transition-all ${
                    isSelected
                      ? 'bg-white border-2 border-[#02b1cc]'
                      : 'bg-white border border-transparent'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <p
                    className={`font-['DM_Sans'] font-medium leading-[15.617px] text-[10.932px] text-center whitespace-nowrap ${
                      isSelected ? 'text-[#02b1cc]' : 'text-[#1f1f1f]'
                    }`}
                    style={{ fontVariationSettings: "'opsz' 14" }}
                  >
                    {goal}
                  </p>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Рассчитать Button */}
        <div className="flex items-center justify-center w-full">
          <motion.button
            onClick={handleSubmit}
            className="bg-[#02b1cc] h-[51.535px] relative rounded-[46.851px] w-[155.475px]"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(2, 177, 204, 0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            <p className="font-['DM_Sans'] font-medium leading-[18.74px] text-[14.054px] text-center text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
              Рассчитать
            </p>
          </motion.button>
        </div>
      </div>
    </div>
  );
}