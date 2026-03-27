import svgPaths from "./svg-md4t09x5yf";

function Text() {
  return (
    <div className="h-[32px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-start relative">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] not-italic relative shrink-0 text-[#1f1f1f] text-[24px] whitespace-nowrap">Витакод</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[24px] relative shrink-0 w-[65px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[32.5px] not-italic text-[#1f1f1f] text-[16px] text-center top-0 whitespace-nowrap">Главная</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[85px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[42.5px] not-italic text-[#1f1f1f] text-[16px] text-center top-0 whitespace-nowrap">Аналитика</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[71px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[35.5px] not-italic text-[#1f1f1f] text-[16px] text-center top-0 whitespace-nowrap">Профиль</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[146px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[73px] not-italic text-[#1f1f1f] text-[16px] text-center top-0 whitespace-nowrap">История анализов</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[24px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] h-full items-center relative">
        <Button />
        <Button1 />
        <Button2 />
        <Button3 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[32px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[48px] h-full items-center relative">
        <div className="h-[32px] relative shrink-0" data-name="logo">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-full items-center relative">
            <div className="relative shrink-0 size-[28px]" data-name="Icon">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
                <div className="absolute flex inset-[-4.04%_2.76%_-0.74%_9.17%] items-center justify-center">
                  <div className="flex-none h-[27.5px] rotate-[33.03deg] w-[11.532px]">
                    <div className="bg-[#02b1cc] rounded-[25px] size-full" />
                  </div>
                </div>
                <div className="absolute inset-[8.33%]" data-name="Vector">
                  <div className="absolute inset-[-6.25%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.25 26.25">
                      <path d={svgPaths.p159656f} id="Vector" stroke="var(--stroke-0, #FF6647)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.91667" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <Text />
          </div>
        </div>
        <Container2 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p67f12c8} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2c19cb00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#02b1cc] relative rounded-[33554400px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[48px] relative size-full">
          <Container1 />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[97px] items-start left-[0.2px] pb-px px-[47px] top-0 w-[1534px]" data-name="Navigation">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <Container />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[40px] left-[32px] top-[48px] w-[1336px]" data-name="Heading 1">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[40px] left-0 not-italic text-[#1f1f1f] text-[36px] top-[-2px] whitespace-nowrap">Ваш анализ добавок</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1b851600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 9V13" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 17H12.01" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#ff6647] relative rounded-[33554400px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1f1f1f] text-[16px] top-[-2px] whitespace-nowrap">Обнаружены риски</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(31,31,31,0.6)] whitespace-nowrap">
        <span className="leading-[20px]">{`Оценка безопасности: `}</span>
        <span className="leading-[20px] text-[#ff6647]">78/100</span>
      </p>
    </div>
  );
}

function Container6() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container7 />
        <Container8 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[48px] relative shrink-0 w-[254.531px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-white h-[36px] relative rounded-[100px] shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-start px-[16px] py-[8px] relative">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#ff6647] text-[14px] whitespace-nowrap">Требуется внимание</p>
      </div>
    </div>
  );
}

function V() {
  return (
    <div className="absolute bg-[rgba(255,102,71,0.08)] content-stretch flex h-[96px] items-center justify-between left-[32px] px-[24px] rounded-[20px] top-[120px] w-[1336px]" data-name="V">
      <Container4 />
      <Container9 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[27px] left-0 not-italic text-[#1f1f1f] text-[18px] top-[-1px] whitespace-nowrap">Общий статус</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(31,31,31,0.6)] whitespace-nowrap">Анализ ваших пищевых добавок на безопасность и совместимость</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[51px] relative shrink-0 w-[432.969px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading2 />
        <Paragraph />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[12.44%_8.34%_12.5%_8.26%]" data-name="Vector">
          <div className="absolute inset-[-5.55%_-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0159 20.014">
              <path d={svgPaths.p2d23b080} id="Vector" stroke="var(--stroke-0, #FF6647)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[45.83%] left-1/2 right-1/2 top-[37.5%]" data-name="Vector">
          <div className="absolute inset-[-25%_-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
              <path d="M1 1V5" id="Vector" stroke="var(--stroke-0, #FF6647)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[29.17%] left-1/2 right-[49.96%] top-[70.83%]" data-name="Vector">
          <div className="absolute inset-[-1px_-9999.77%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.01 2">
              <path d="M1 1H1.01" id="Vector" stroke="var(--stroke-0, #FF6647)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex h-[51px] items-start justify-between left-[32px] top-[32px] w-[816px]" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[51.75px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[48px] left-0 not-italic text-[#ff6647] text-[48px] top-[-3px] whitespace-nowrap">78</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-start left-[59.75px] top-[18px] w-[48.172px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] not-italic relative shrink-0 text-[24px] text-[rgba(31,31,31,0.4)] whitespace-nowrap">/100</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[50px] left-[32px] top-[107px] w-[816px]" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[87px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(31,31,31,0.6)] whitespace-nowrap">Безопасность</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[26.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1f1f1f] text-[14px] whitespace-nowrap">78%</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text1 />
      <Text2 />
    </div>
  );
}

function Container21() {
  return <div className="bg-[#ff6647] h-[8px] rounded-[33554400px] shrink-0 w-full" data-name="Container" />;
}

function Container20() {
  return (
    <div className="bg-white h-[8px] relative rounded-[33554400px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pr-[179.531px] relative size-full">
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[36px] items-start left-[32px] top-[173px] w-[816px]" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(31,31,31,0.7)]">Обнаружено несколько дублирующихся компонентов и превышение рекомендованной дозы витамина D</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[44px] items-start left-[32px] pt-[12px] px-[16px] rounded-[16px] top-[233px] w-[816px]" data-name="Container">
      <Paragraph1 />
    </div>
  );
}

function I() {
  return (
    <div className="bg-[#f5f5f5] h-[309px] relative rounded-[20px] shrink-0 w-full" data-name="I">
      <Container12 />
      <Container15 />
      <Container18 />
      <Container22 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pb47f400} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p17a13100} id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 9H8" id="Vector_3" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 13H8" id="Vector_4" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 17H8" id="Vector_5" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[32px] relative shrink-0 w-[239.344px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] not-italic relative shrink-0 text-[#1f1f1f] text-[24px] whitespace-nowrap">Мой текущий список</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex gap-[12px] h-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon3 />
      <Heading1 />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[48px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] h-full items-start leading-[20px] relative">
        <p className="font-['DM_Sans:Medium','Noto_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#1f1f1f] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Витамин D3
        </p>
        <p className="flex-[1_0_0] font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal min-h-px min-w-px relative text-[#6b6b6b] text-[14px] w-[90.188px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          5000 МЕ
        </p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[48px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] h-full items-start leading-[20px] relative">
        <p className="font-['DM_Sans:Medium','Noto_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#1f1f1f] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Омега-3
        </p>
        <p className="flex-[1_0_0] font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal min-h-px min-w-px relative text-[#6b6b6b] text-[14px] w-[90.188px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          1000 мг
        </p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[48px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] h-full items-start leading-[20px] relative">
        <p className="font-['DM_Sans:Medium','Noto_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#1f1f1f] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Магний
        </p>
        <p className="flex-[1_0_0] font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal min-h-px min-w-px relative text-[#6b6b6b] text-[14px] w-[90.188px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          400 мг
        </p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[48px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] h-full items-start leading-[20px] relative">
        <p className="font-['DM_Sans:Medium','Noto_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#1f1f1f] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Витамин С
        </p>
        <p className="flex-[1_0_0] font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal min-h-px min-w-px relative text-[#6b6b6b] text-[14px] w-[90.188px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          1000 мг
        </p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[48px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] h-full items-start leading-[20px] relative">
        <p className="font-['DM_Sans:Medium','Noto_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#1f1f1f] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Цинк
        </p>
        <p className="flex-[1_0_0] font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal min-h-px min-w-px relative text-[#6b6b6b] text-[14px] w-[90.188px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          25 мг
        </p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[48px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] h-full items-start leading-[20px] relative">
        <p className="font-['DM_Sans:Medium','Noto_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#1f1f1f] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Железо
        </p>
        <p className="flex-[1_0_0] font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal min-h-px min-w-px relative text-[#6b6b6b] text-[14px] w-[90.188px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          18 мг
        </p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(3,fit-content(100%))] relative shrink-0 w-full" data-name="Container">
      <div className="bg-white col-1 h-[80px] justify-self-stretch relative rounded-[16px] row-1 shrink-0" data-name="suppliment_card">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
            <Container25 />
            <div className="bg-[#e0f7fa] relative rounded-[33554400px] shrink-0" data-name="badge">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#02b1cc] text-[14px] whitespace-nowrap">ОК</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white col-1 h-[80px] justify-self-stretch relative rounded-[16px] row-2 shrink-0" data-name="suppliment_card">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
            <Container26 />
            <div className="bg-[#e0f7fa] relative rounded-[33554400px] shrink-0" data-name="badge">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#02b1cc] text-[14px] whitespace-nowrap">ОК</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white col-1 h-[80px] justify-self-stretch relative rounded-[16px] row-3 shrink-0" data-name="suppliment_card">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
            <Container27 />
            <div className="bg-[#ffe8e3] relative rounded-[33554400px] shrink-0" data-name="badge">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative">
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/16/warning">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <div className="absolute inset-[-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667">
                        <path d={svgPaths.p3d62dd80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-1/2 left-1/2 right-1/2 top-[33.33%]" data-name="Vector">
                    <div className="absolute inset-[-25%_-0.67px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 4">
                        <path d="M0.666667 0.666667V3.33333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-[33.33%] left-1/2 right-[49.96%] top-[66.67%]" data-name="Vector">
                    <div className="absolute inset-[-0.67px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.34 1.33333">
                        <path d="M0.666667 0.666667H0.673334" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#ff6647] text-[14px] whitespace-nowrap">Дубль</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white col-2 h-[80px] justify-self-stretch relative rounded-[16px] row-1 shrink-0" data-name="suppliment_card">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
            <Container28 />
            <div className="bg-[#e8fae0] relative rounded-[33554400px] shrink-0" data-name="badge">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#02b1cc] text-[14px] whitespace-nowrap">Советуем”!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white col-2 h-[80px] justify-self-stretch relative rounded-[16px] row-2 shrink-0" data-name="suppliment_card">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
            <Container29 />
            <div className="bg-[#ffe8e3] relative rounded-[33554400px] shrink-0" data-name="badge">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative">
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/16/warning">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <div className="absolute inset-[-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667">
                        <path d={svgPaths.p3d62dd80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-1/2 left-1/2 right-1/2 top-[33.33%]" data-name="Vector">
                    <div className="absolute inset-[-25%_-0.67px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 4">
                        <path d="M0.666667 0.666667V3.33333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-[33.33%] left-1/2 right-[49.96%] top-[66.67%]" data-name="Vector">
                    <div className="absolute inset-[-0.67px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.34 1.33333">
                        <path d="M0.666667 0.666667H0.673334" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#ff6647] text-[14px] whitespace-nowrap">Дубль</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white col-2 h-[80px] justify-self-stretch relative rounded-[16px] row-3 shrink-0" data-name="suppliment_card">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
            <Container30 />
            <div className="bg-[#e0f7fa] relative rounded-[33554400px] shrink-0" data-name="badge">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#02b1cc] text-[14px] whitespace-nowrap">ОК</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[24px] shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col gap-[24px] items-start pt-[32px] px-[32px] relative w-full">
        <Container23 />
        <Container24 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[27px] left-0 not-italic text-[#1f1f1f] text-[18px] top-[-1px] whitespace-nowrap">Дубликаты компонентов</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(31,31,31,0.6)] whitespace-nowrap">Найдено повторяющихся веществ: 3</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[51px] relative shrink-0 w-[235.688px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading3 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p10569cc0} id="Vector" stroke="var(--stroke-0, #FF6647)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2c93d960} id="Vector_2" stroke="var(--stroke-0, #FF6647)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex h-[51px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <Icon4 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_39_1212)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #FF6647)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 6.66667V10" id="Vector_2" stroke="var(--stroke-0, #FF6647)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 13.3333H10.0083" id="Vector_3" stroke="var(--stroke-0, #FF6647)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_39_1212">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[56.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1f1f1f] text-[16px] top-[-2px] whitespace-nowrap">Магний</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="bg-[#ff6647] h-[20px] relative rounded-[33554400px] shrink-0 w-[30.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[8px] py-[2px] relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">×3</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Text3 />
      <Text4 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(31,31,31,0.6)]">В препаратах: Multi-Complex, Magnesium Plus, Sleep Formula</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[52px] items-start left-[32px] top-0 w-[752px]" data-name="Container">
      <Container37 />
      <Container38 />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Container">
      <Icon5 />
      <Container36 />
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-white h-[84px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[16px] px-[16px] relative size-full">
        <Container35 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_39_1212)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #FF6647)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 6.66667V10" id="Vector_2" stroke="var(--stroke-0, #FF6647)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 13.3333H10.0083" id="Vector_3" stroke="var(--stroke-0, #FF6647)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_39_1212">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[85.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1f1f1f] text-[16px] top-[-2px] whitespace-nowrap">Витамин B6</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="bg-[#ff6647] h-[20px] relative rounded-[33554400px] shrink-0 w-[30.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[8px] py-[2px] relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">×2</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Text5 />
      <Text6 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(31,31,31,0.6)]">В препаратах: Multi-Complex, B-Complex Advanced</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[52px] items-start left-[32px] top-0 w-[752px]" data-name="Container">
      <Container42 />
      <Container43 />
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Container">
      <Icon6 />
      <Container41 />
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-white h-[84px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[16px] px-[16px] relative size-full">
        <Container40 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_39_1212)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #FF6647)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 6.66667V10" id="Vector_2" stroke="var(--stroke-0, #FF6647)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 13.3333H10.0083" id="Vector_3" stroke="var(--stroke-0, #FF6647)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_39_1212">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[38.359px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1f1f1f] text-[16px] top-[-2px] whitespace-nowrap">Цинк</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="bg-[#ff6647] h-[20px] relative rounded-[33554400px] shrink-0 w-[30.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[8px] py-[2px] relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">×2</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Text7 />
      <Text8 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(31,31,31,0.6)]">В препаратах: Immune Support, Multi-Complex</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[52px] items-start left-[32px] top-0 w-[752px]" data-name="Container">
      <Container47 />
      <Container48 />
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Container">
      <Icon7 />
      <Container46 />
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-white h-[84px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[16px] px-[16px] relative size-full">
        <Container45 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[284px] items-start relative shrink-0 w-full" data-name="Container">
      <Container34 />
      <Container39 />
      <Container44 />
    </div>
  );
}

function G() {
  return (
    <div className="bg-[#f5f5f5] h-[423px] relative rounded-[20px] shrink-0 w-full" data-name="G">
      <div className="content-stretch flex flex-col gap-[24px] items-start pt-[32px] px-[32px] relative size-full">
        <Container31 />
        <Container33 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[27px] left-0 not-italic text-[#1f1f1f] text-[18px] top-[-1px] whitespace-nowrap">Проверка дозировок</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(31,31,31,0.6)] whitespace-nowrap">Сравнение с рекомендованными нормами</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[51px] relative shrink-0 w-[278.188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading4 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p28b1aae0} id="Vector" stroke="var(--stroke-0, #02B1CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex h-[51px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container50 />
      <Icon8 />
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[24px] relative shrink-0 w-[78.547px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1f1f1f] text-[16px] top-[-2px] whitespace-nowrap">Витамин D</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[53.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(31,31,31,0.6)] whitespace-nowrap">6000 МЕ</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-between left-0 top-0 w-[816px]" data-name="Container">
      <Text9 />
      <Text10 />
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[16px] relative shrink-0 w-[26.625px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(31,31,31,0.5)] whitespace-nowrap">0 МЕ</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[16px] relative shrink-0 w-[89.063px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(31,31,31,0.5)] whitespace-nowrap">Норма: 4000 МЕ</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-center justify-between left-0 top-[56px] w-[816px]" data-name="Container">
      <Text11 />
      <Text12 />
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[80px] w-[816px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#ff6647] text-[12px]">Превышение рекомендованной дозы на 50%</p>
    </div>
  );
}

function Container58() {
  return <div className="bg-[#ff6647] h-[12px] rounded-[33554400px] shrink-0 w-full" data-name="Container" />;
}

function Container57() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[12px] items-start left-0 overflow-clip rounded-[33554400px] top-0 w-[816px]" data-name="Container">
      <Container58 />
    </div>
  );
}

function Container59() {
  return <div className="absolute bg-[#ff6647] h-[12px] left-[814px] rounded-br-[33554400px] rounded-tr-[33554400px] top-0 w-[4px]" data-name="Container" />;
}

function Container56() {
  return (
    <div className="absolute h-[12px] left-0 top-[36px] w-[816px]" data-name="Container">
      <Container57 />
      <Container59 />
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Container">
      <Container53 />
      <Container54 />
      <Container55 />
      <Container56 />
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[24px] relative shrink-0 w-[77.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1f1f1f] text-[16px] top-[-2px] whitespace-nowrap">Витамин C</p>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[20px] relative shrink-0 w-[41.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(31,31,31,0.6)] whitespace-nowrap">500 мг</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-between left-0 top-0 w-[816px]" data-name="Container">
      <Text13 />
      <Text14 />
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22.797px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(31,31,31,0.5)] whitespace-nowrap">0 мг</p>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[16px] relative shrink-0 w-[85.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(31,31,31,0.5)] whitespace-nowrap">Норма: 1000 мг</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-center justify-between left-0 top-[56px] w-[816px]" data-name="Container">
      <Text15 />
      <Text16 />
    </div>
  );
}

function Container64() {
  return <div className="bg-[#02b1cc] h-[12px] rounded-[33554400px] shrink-0 w-full" data-name="Container" />;
}

function Container63() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[12px] items-start left-0 overflow-clip pr-[408px] rounded-[33554400px] top-[36px] w-[816px]" data-name="Container">
      <Container64 />
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Container">
      <Container61 />
      <Container62 />
      <Container63 />
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[24px] relative shrink-0 w-[60.953px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1f1f1f] text-[16px] top-[-2px] whitespace-nowrap">Омега-3</p>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[20px] relative shrink-0 w-[49.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(31,31,31,0.6)] whitespace-nowrap">1200 мг</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-between left-0 top-0 w-[816px]" data-name="Container">
      <Text17 />
      <Text18 />
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22.797px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(31,31,31,0.5)] whitespace-nowrap">0 мг</p>
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[16px] relative shrink-0 w-[85.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(31,31,31,0.5)] whitespace-nowrap">Норма: 2000 мг</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-center justify-between left-0 top-[56px] w-[816px]" data-name="Container">
      <Text19 />
      <Text20 />
    </div>
  );
}

function Container69() {
  return <div className="bg-[#02b1cc] h-[12px] rounded-[33554400px] shrink-0 w-full" data-name="Container" />;
}

function Container68() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[12px] items-start left-0 overflow-clip pr-[326.406px] rounded-[33554400px] top-[36px] w-[816px]" data-name="Container">
      <Container69 />
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Container">
      <Container66 />
      <Container67 />
      <Container68 />
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[24px] relative shrink-0 w-[56.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1f1f1f] text-[16px] top-[-2px] whitespace-nowrap">Магний</p>
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[20px] relative shrink-0 w-[41.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(31,31,31,0.6)] whitespace-nowrap">450 мг</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-between left-0 top-0 w-[816px]" data-name="Container">
      <Text21 />
      <Text22 />
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22.797px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(31,31,31,0.5)] whitespace-nowrap">0 мг</p>
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[16px] relative shrink-0 w-[78.766px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(31,31,31,0.5)] whitespace-nowrap">Норма: 400 мг</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-center justify-between left-0 top-[56px] w-[816px]" data-name="Container">
      <Text23 />
      <Text24 />
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[80px] w-[816px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#ff6647] text-[12px]">Превышение рекомендованной дозы на 13%</p>
    </div>
  );
}

function Container76() {
  return <div className="bg-[#ff6647] h-[12px] rounded-[33554400px] shrink-0 w-full" data-name="Container" />;
}

function Container75() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[12px] items-start left-0 overflow-clip rounded-[33554400px] top-0 w-[816px]" data-name="Container">
      <Container76 />
    </div>
  );
}

function Container77() {
  return <div className="absolute bg-[#ff6647] h-[12px] left-[814px] rounded-br-[33554400px] rounded-tr-[33554400px] top-0 w-[4px]" data-name="Container" />;
}

function Container74() {
  return (
    <div className="absolute h-[12px] left-0 top-[36px] w-[816px]" data-name="Container">
      <Container75 />
      <Container77 />
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Container">
      <Container71 />
      <Container72 />
      <Container73 />
      <Container74 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[408px] items-start relative shrink-0 w-full" data-name="Container">
      <Container52 />
      <Container60 />
      <Container65 />
      <Container70 />
    </div>
  );
}

function Q() {
  return (
    <div className="bg-[#f5f5f5] h-[547px] relative rounded-[20px] shrink-0 w-full" data-name="q">
      <div className="content-stretch flex flex-col gap-[24px] items-start pt-[32px] px-[32px] relative size-full">
        <Container49 />
        <Container51 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[1343px] items-start left-0 top-0 w-[880px]" data-name="Container">
      <I />
      <Section />
      <G />
      <Q />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[27px] left-0 not-italic text-[#1f1f1f] text-[18px] top-[-1px] whitespace-nowrap">Рекомендации</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(31,31,31,0.6)] whitespace-nowrap">Предложения для оптимизации приёма</p>
    </div>
  );
}

function Container80() {
  return (
    <div className="h-[51px] relative shrink-0 w-[258.25px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading5 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1ea91d80} id="Vector" stroke="var(--stroke-0, #02B1CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 18H15" id="Vector_2" stroke="var(--stroke-0, #02B1CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 22H14" id="Vector_3" stroke="var(--stroke-0, #02B1CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex h-[51px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container80 />
      <Icon9 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p32ddfd00} id="Vector" stroke="var(--stroke-0, #02B1CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container82() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[12px] items-start px-[16px] py-[15px] relative w-full">
        <Icon10 />
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[14px] text-[rgba(31,31,31,0.8)] text-ellipsis">Рассмотрите возможность исключения одного из препаратов с магнием для избежания избыточной дозировки</p>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p32ddfd00} id="Vector" stroke="var(--stroke-0, #02B1CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container83() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[12px] items-start px-[16px] py-[9px] relative w-full">
        <Icon11 />
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[14px] text-[rgba(31,31,31,0.8)] text-ellipsis whitespace-pre-wrap">
          {`Снизьте суточную дозу витамина D `}
          <br aria-hidden="true" />
          {`до 4000 МЕ или проконсультируйтесь `}
          <br aria-hidden="true" />с врачом
        </p>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p32ddfd00} id="Vector" stroke="var(--stroke-0, #02B1CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container84() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[12px] items-start px-[16px] py-[15px] relative w-full">
        <Icon12 />
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[14px] text-[rgba(31,31,31,0.8)] text-ellipsis">Увеличьте дозу витамина C до рекомендованной нормы для максимального эффекта</p>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p32ddfd00} id="Vector" stroke="var(--stroke-0, #02B1CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container85() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[12px] items-start px-[16px] py-[9px] relative w-full">
        <Icon13 />
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[14px] text-[rgba(31,31,31,0.8)] text-ellipsis">Принимайте жирорастворимые витамины (D, A, E) во время еды для лучшего усвоения</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[391.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container82 />
      <Container83 />
      <Container84 />
      <Container85 />
    </div>
  );
}

function H() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[20px] shrink-0 w-full" data-name="H">
      <div className="content-stretch flex flex-col gap-[24px] items-start pt-[32px] px-[32px] relative w-full">
        <Container79 />
        <Container81 />
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-[126px] size-[20px] top-[18px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3053b100} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p37dcb700} id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 12.5V2.5" id="Vector_3" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#f5f5f5] h-[56px] relative rounded-[100px] shrink-0 w-full" data-name="Button">
      <Icon14 />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[226.39px] not-italic text-[#1f1f1f] text-[16px] text-center top-[14px] whitespace-nowrap">Скачать отчёт pdf</p>
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[128px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#ff6647] relative rounded-[54px] shrink-0 w-full" data-name="button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[10px] items-center justify-center px-[32px] py-[16px] relative w-full">
            <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
              Сохранить в профиле
            </p>
          </div>
        </div>
      </div>
      <Button4 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1f1f1f] text-[16px] top-[-2px] whitespace-nowrap">О сервисе</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[91px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[14px] text-[rgba(31,31,31,0.6)] top-[-1px] w-[375px]">Vitacode анализирует ваши пищевые добавки на предмет дублирования компонентов, превышения рекомендованных дозировок и потенциальных рисков для здоровья.</p>
    </div>
  );
}

function Container87() {
  return (
    <div className="bg-[#f5f5f5] h-[175px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[12px] items-start pt-[24px] px-[24px] relative size-full">
        <Heading6 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[1343px] items-start left-[912px] top-0 w-[424px]" data-name="Container">
      <H />
      <Container86 />
      <Container87 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[1343px] left-[32px] top-[264px] w-[1336px]" data-name="Container">
      <Container11 />
      <Container78 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute h-[1655px] left-[67.2px] top-[89px] w-[1400px]" data-name="Main Content">
      <Heading />
      <V />
      <Container10 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="Анализ(платно)">
      <Navigation />
      <MainContent />
    </div>
  );
}