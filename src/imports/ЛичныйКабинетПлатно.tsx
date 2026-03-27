import svgPaths from "./svg-xertlzletf";

function Text() {
  return (
    <div className="h-[32px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-start relative">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] not-italic relative shrink-0 text-[#1f1f1f] text-[24px] whitespace-nowrap">Витакод</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[32px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
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

function Container2() {
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
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[97px] items-start left-0 pb-px px-[47px] top-0 w-[1534px]" data-name="Navigation">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <Container />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 whitespace-nowrap">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[#1f1f1f] text-[36px]">Личный кабинет</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#6b6b6b] text-[18px]">Управляйте анализами и отслеживайте изменения</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[40px] not-italic relative shrink-0 text-[#1f1f1f] text-[36px] whitespace-nowrap">1/5 анализов осталось</p>
      <div className="bg-[#ff6647] content-stretch flex gap-[10px] items-center justify-center px-[32px] py-[16px] relative rounded-[54px] shrink-0" data-name="button">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/16/add">
          <div className="absolute inset-[8.33%]" data-name="Vector">
            <div className="absolute inset-[-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667">
                <path d={svgPaths.p7206a80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-1/2 left-[33.33%] right-[33.33%] top-1/2" data-name="Vector">
            <div className="absolute inset-[-0.67px_-12.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 1.33333">
                <path d="M0.666667 0.666667H6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[33.33%] left-1/2 right-1/2 top-[33.33%]" data-name="Vector">
            <div className="absolute inset-[-12.5%_-0.67px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 6.66667">
                <path d="M0.666667 0.666667V6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
        </div>
        <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Проверить новые БАДы
        </p>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Section">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Icon1() {
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

function Heading() {
  return (
    <div className="h-[32px] relative shrink-0 w-[239.344px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] not-italic relative shrink-0 text-[#1f1f1f] text-[24px] whitespace-nowrap">Мой текущий список</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[12px] h-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon1 />
      <Heading />
    </div>
  );
}

function Container6() {
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

function Container7() {
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

function Container8() {
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

function Container9() {
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

function Container10() {
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

function Container11() {
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

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[540px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="bg-white content-stretch flex h-[80px] items-center justify-between px-[16px] relative rounded-[16px] shrink-0 w-[592px]" data-name="suppliment_card">
        <Container6 />
        <div className="bg-[#e0f7fa] relative rounded-[33554400px] shrink-0" data-name="badge">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#02b1cc] text-[14px] whitespace-nowrap">ОК</p>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex h-[80px] items-center justify-between px-[16px] relative rounded-[16px] shrink-0 w-[592px]" data-name="suppliment_card">
        <Container7 />
        <div className="bg-[#e0f7fa] relative rounded-[33554400px] shrink-0" data-name="badge">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#02b1cc] text-[14px] whitespace-nowrap">ОК</p>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex h-[80px] items-center justify-between px-[16px] relative rounded-[16px] shrink-0 w-[592px]" data-name="suppliment_card">
        <Container8 />
        <div className="bg-[#ffe8e3] relative rounded-[33554400px] shrink-0" data-name="badge">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/16/warning">
              <div className="absolute inset-[8.33%]" data-name="Vector">
                <div className="absolute inset-[-5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667">
                    <path d={svgPaths.p3d62dd80} id="Vector" stroke="var(--stroke-0, #FF6647)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-1/2 left-1/2 right-1/2 top-[33.33%]" data-name="Vector">
                <div className="absolute inset-[-25%_-0.67px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 4">
                    <path d="M0.666667 0.666667V3.33333" id="Vector" stroke="var(--stroke-0, #FF6647)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-[33.33%] left-1/2 right-[49.96%] top-[66.67%]" data-name="Vector">
                <div className="absolute inset-[-0.67px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.34 1.33333">
                    <path d="M0.666667 0.666667H0.673334" id="Vector" stroke="var(--stroke-0, #FF6647)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#ff6647] text-[14px] whitespace-nowrap">Дубль</p>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex h-[80px] items-center justify-between px-[16px] relative rounded-[16px] shrink-0 w-[592px]" data-name="suppliment_card">
        <Container9 />
        <div className="bg-[#e0f7fa] relative rounded-[33554400px] shrink-0" data-name="badge">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#02b1cc] text-[14px] whitespace-nowrap">ОК</p>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex h-[80px] items-center justify-between px-[16px] relative rounded-[16px] shrink-0 w-[592px]" data-name="suppliment_card">
        <Container10 />
        <div className="bg-[#ffe8e3] relative rounded-[33554400px] shrink-0" data-name="badge">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/16/warning">
              <div className="absolute inset-[8.33%]" data-name="Vector">
                <div className="absolute inset-[-5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667">
                    <path d={svgPaths.p3d62dd80} id="Vector" stroke="var(--stroke-0, #FF6647)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-1/2 left-1/2 right-1/2 top-[33.33%]" data-name="Vector">
                <div className="absolute inset-[-25%_-0.67px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 4">
                    <path d="M0.666667 0.666667V3.33333" id="Vector" stroke="var(--stroke-0, #FF6647)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-[33.33%] left-1/2 right-[49.96%] top-[66.67%]" data-name="Vector">
                <div className="absolute inset-[-0.67px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.34 1.33333">
                    <path d="M0.666667 0.666667H0.673334" id="Vector" stroke="var(--stroke-0, #FF6647)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#ff6647] text-[14px] whitespace-nowrap">Дубль</p>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex h-[80px] items-center justify-between px-[16px] relative rounded-[16px] shrink-0 w-[592px]" data-name="suppliment_card">
        <Container11 />
        <div className="bg-[#e0f7fa] relative rounded-[33554400px] shrink-0" data-name="badge">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#02b1cc] text-[14px] whitespace-nowrap">ОК</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-[#f5f5f5] col-2 justify-self-stretch relative rounded-[24px] row-1 self-stretch shrink-0" data-name="Section">
      <div className="content-stretch flex flex-col gap-[24px] items-start pt-[32px] px-[32px] relative size-full">
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p67f12c8} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2c19cb00} id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[32px] relative shrink-0 w-[104.594px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] not-italic relative shrink-0 text-[#1f1f1f] text-[24px] whitespace-nowrap">Елена</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[12px] h-[32px] items-center relative shrink-0" data-name="Container">
      <Icon2 />
      <Heading1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Container12 />
      <div className="content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[16px] relative rounded-[87px] shrink-0" data-name="button">
        <div aria-hidden="true" className="absolute border-2 border-[#1f1f1f] border-solid inset-0 pointer-events-none rounded-[87px]" />
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/16/edit">
          <div className="absolute inset-[12.5%]" data-name="Vector">
            <div className="absolute inset-[-5.56%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                <path d={svgPaths.p73e95c0} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[8.35%_8.35%_33.32%_33.32%]" data-name="Vector">
            <div className="absolute inset-[-7.14%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6669 10.6669">
                <path d={svgPaths.p3a217000} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
        </div>
        <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#1f1f1f] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Редактировать
        </p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[41.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#6b6b6b] text-[16px] top-[-2px] whitespace-nowrap">Email:</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[142.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1f1f1f] text-[16px] top-[-2px] whitespace-nowrap">user@example.com</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[12px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Text1 />
      <Text2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[60.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#6b6b6b] text-[16px] top-[-2px] whitespace-nowrap">Возраст:</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[55.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1f1f1f] text-[16px] top-[-2px] whitespace-nowrap">32 года</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[12px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Text3 />
      <Text4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[40.203px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#6b6b6b] text-[16px] top-[-2px] whitespace-nowrap">Цель:</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1f1f1f] text-[16px] top-[-2px] whitespace-nowrap">Поддержка иммунитета</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[12px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Text5 />
      <Text6 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[96px] relative shrink-0 w-[234.375px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Container15 />
        <Container16 />
        <Container17 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-white h-[144px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p13253c0} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 7H22V13" id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[32px] relative shrink-0 w-[211.406px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] not-italic relative shrink-0 text-[#1f1f1f] text-[24px] whitespace-nowrap">Последний анализ</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[12px] h-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon3 />
      <Heading2 />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[53.297px]" data-name="Text">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[48px] left-0 not-italic text-[#1f1f1f] text-[48px] top-[-3px] whitespace-nowrap">82</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-start left-[61.3px] top-[18px] w-[48.172px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] not-italic relative shrink-0 text-[#6b6b6b] text-[24px] whitespace-nowrap">/100</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Container">
      <Text7 />
      <Text8 />
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[#ffe8e3] h-[40px] relative rounded-[33554400px] shrink-0 w-[102.922px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[16px] not-italic text-[#ff6647] text-[14px] top-[8px] whitespace-nowrap">Есть дубли</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Container">
      <Container24 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[98px] items-start left-0 top-[15px] w-[109.469px]" data-name="Container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute bottom-[96.09%] contents left-1/2 right-1/2 top-[-2.34%]" data-name="Group">
      <div className="absolute bottom-[96.09%] left-1/2 right-1/2 top-[-2.34%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[7.65%_19.23%_87.29%_77.09%]" data-name="Group">
      <div className="absolute inset-[7.65%_19.23%_87.29%_77.09%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[33.82%_0.22%_64.24%_93.84%]" data-name="Group">
      <div className="absolute inset-[33.82%_0.22%_64.24%_93.84%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[64.24%_0.22%_33.82%_93.84%]" data-name="Group">
      <div className="absolute inset-[64.24%_0.22%_33.82%_93.84%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[87.29%_19.23%_7.65%_77.09%]" data-name="Group">
      <div className="absolute inset-[87.29%_19.23%_7.65%_77.09%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute bottom-[-2.34%] contents left-1/2 right-1/2 top-[96.09%]" data-name="Group">
      <div className="absolute bottom-[-2.34%] left-1/2 right-1/2 top-[96.09%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[87.29%_77.09%_7.65%_19.23%]" data-name="Group">
      <div className="absolute inset-[87.29%_77.09%_7.65%_19.23%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[64.24%_93.84%_33.82%_0.22%]" data-name="Group">
      <div className="absolute inset-[64.24%_93.84%_33.82%_0.22%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[33.82%_93.84%_64.24%_0.22%]" data-name="Group">
      <div className="absolute inset-[33.82%_93.84%_64.24%_0.22%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[7.65%_77.09%_87.29%_19.23%]" data-name="Group">
      <div className="absolute inset-[7.65%_77.09%_87.29%_19.23%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute bottom-[96.09%] contents left-1/2 right-1/2 top-[-2.34%]" data-name="Group">
      <div className="absolute bottom-[96.09%] left-1/2 right-1/2 top-[-2.34%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[-2.34%_0.22%]" data-name="Group">
      <Group2 />
      <Group3 />
      <Group4 />
      <Group5 />
      <Group6 />
      <Group7 />
      <Group8 />
      <Group9 />
      <Group10 />
      <Group11 />
      <Group12 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[-2.34%_0.22%]" data-name="Group">
      <div className="absolute inset-[3.91%_6.16%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
      <Group1 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[13.71%]" data-name="Group">
      <div className="absolute inset-[13.71%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92.9 92.9">
          <path d={svgPaths.p28881b00} fill="var(--fill-0, #F5F5F5)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-[14.06%_13.71%_13.71%_13.71%]" data-name="Group">
      <div className="absolute inset-[14.06%_13.71%_13.71%_13.71%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92.9 92.4525">
          <path d={svgPaths.p1626d540} fill="var(--fill-0, #FF6647)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-[14.06%_13.71%_13.71%_13.71%]" data-name="Group">
      <Group16 />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[13.71%]" data-name="Group">
      <Group14 />
      <Group15 />
    </div>
  );
}

function Wc() {
  return (
    <div className="h-[128px] overflow-clip relative shrink-0 w-full" data-name="Wc">
      <Group />
      <Group13 />
    </div>
  );
}

function RadialBarChart() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[416px] size-[128px] top-0" data-name="RadialBarChart">
      <Wc />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[128px] relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <RadialBarChart />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[130px] not-italic text-[#6b6b6b] text-[16px] top-[39px] whitespace-nowrap">12.02.2026</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-white h-[252px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[24px] items-start pt-[24px] px-[24px] relative size-full">
        <Container20 />
        <div className="bg-[#ff6647] relative rounded-[54px] shrink-0 w-full" data-name="button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[10px] items-center justify-center px-[32px] py-[16px] relative w-full">
              <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                Посмотреть подробнее
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-[#f5f5f5] col-1 justify-self-stretch relative rounded-[24px] row-1 self-stretch shrink-0" data-name="Section">
      <div className="content-stretch flex flex-col gap-[24px] items-start pt-[32px] px-[32px] relative size-full">
        <Frame />
        <Container13 />
        <Container18 />
        <Container19 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[660px] relative shrink-0 w-[1344px]" data-name="Container">
      <Section1 />
      <Section2 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 6V12L16 14" id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[32px] relative shrink-0 w-[208.125px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] not-italic relative shrink-0 text-[#1f1f1f] text-[24px] whitespace-nowrap">История анализов</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[12px] h-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon4 />
      <Heading3 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M6.66667 1.66667V5" id="Vector" stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 1.66667V5" id="Vector_2" stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1da67b80} id="Vector_3" stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 8.33333H17.5" id="Vector_4" stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#1f1f1f] text-[16px] top-[-2px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          15 февраля 2026
        </p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[24px] relative shrink-0 w-[155.281px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Icon5 />
        <Text9 />
      </div>
    </div>
  );
}

function Container29() {
  return <div className="bg-[#e8e8e8] h-[24px] shrink-0 w-px" data-name="Container" />;
}

function Text10() {
  return (
    <div className="h-[24px] relative shrink-0 w-[61.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#6b6b6b] text-[16px] top-[-2px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          6 БАДов
        </p>
      </div>
    </div>
  );
}

function Container30() {
  return <div className="bg-[#e8e8e8] h-[24px] shrink-0 w-px" data-name="Container" />;
}

function Text11() {
  return (
    <div className="h-[24px] relative shrink-0 w-[113.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1f1f1f] text-[16px] top-[-2px] whitespace-nowrap">Оценка: 82/100</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[40px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] h-full items-center relative">
        <Container28 />
        <Container29 />
        <Text10 />
        <Container30 />
        <Text11 />
        <div className="bg-[#ffe8e3] relative rounded-[33554400px] shrink-0" data-name="badge">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#ff6647] text-[14px] whitespace-nowrap">Есть дубли</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M6.66667 1.66667V5" id="Vector" stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 1.66667V5" id="Vector_2" stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1da67b80} id="Vector_3" stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 8.33333H17.5" id="Vector_4" stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#1f1f1f] text-[16px] top-[-2px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          28 января 2026
        </p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[24px] relative shrink-0 w-[155.281px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Icon6 />
        <Text12 />
      </div>
    </div>
  );
}

function Container33() {
  return <div className="bg-[#e8e8e8] h-[24px] shrink-0 w-px" data-name="Container" />;
}

function Text13() {
  return (
    <div className="h-[24px] relative shrink-0 w-[61.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#6b6b6b] text-[16px] top-[-2px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          5 БАДов
        </p>
      </div>
    </div>
  );
}

function Container34() {
  return <div className="bg-[#e8e8e8] h-[24px] shrink-0 w-px" data-name="Container" />;
}

function Text14() {
  return (
    <div className="h-[24px] relative shrink-0 w-[113.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1f1f1f] text-[16px] top-[-2px] whitespace-nowrap">Оценка: 95/100</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[40px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] h-full items-center relative">
        <Container32 />
        <Container33 />
        <Text13 />
        <Container34 />
        <Text14 />
        <div className="bg-[#e0f7fa] relative rounded-[33554400px] shrink-0" data-name="badge">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#02b1cc] text-[14px] whitespace-nowrap">Норма</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M6.66667 1.66667V5" id="Vector" stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 1.66667V5" id="Vector_2" stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1da67b80} id="Vector_3" stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 8.33333H17.5" id="Vector_4" stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text15() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#1f1f1f] text-[16px] top-[-2px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          10 января 2026
        </p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[24px] relative shrink-0 w-[155.281px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Icon7 />
        <Text15 />
      </div>
    </div>
  );
}

function Container37() {
  return <div className="bg-[#e8e8e8] h-[24px] shrink-0 w-px" data-name="Container" />;
}

function Text16() {
  return (
    <div className="h-[24px] relative shrink-0 w-[61.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#6b6b6b] text-[16px] top-[-2px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          4 БАДов
        </p>
      </div>
    </div>
  );
}

function Container38() {
  return <div className="bg-[#e8e8e8] h-[24px] shrink-0 w-px" data-name="Container" />;
}

function Text17() {
  return (
    <div className="h-[24px] relative shrink-0 w-[113.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1f1f1f] text-[16px] top-[-2px] whitespace-nowrap">Оценка: 90/100</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[40px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] h-full items-center relative">
        <Container36 />
        <Container37 />
        <Text16 />
        <Container38 />
        <Text17 />
        <div className="bg-[#e0f7fa] relative rounded-[33554400px] shrink-0" data-name="badge">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#02b1cc] text-[14px] whitespace-nowrap">Норма</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[296px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="bg-white content-stretch flex h-[88px] items-center justify-between px-[24px] relative rounded-[16px] shrink-0 w-[1280px]" data-name="Container">
        <Container27 />
        <div className="bg-white h-[40px] relative rounded-[36px] shrink-0" data-name="button">
          <div aria-hidden="true" className="absolute border-2 border-[#02b1cc] border-solid inset-0 pointer-events-none rounded-[36px]" />
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-full items-center px-[26px] py-[2px] relative">
            <div className="relative shrink-0 size-[16px]" data-name="Icon/16/retry">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
                <div className="absolute inset-[8.33%_12.5%_58.33%_70.83%]" data-name="Vector">
                  <div className="absolute inset-[-12.5%_-25%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 6.66667">
                      <path d={svgPaths.pd9bdf00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-[54.17%] left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
                  <div className="absolute inset-[-20%_-5.56%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 4.66667">
                      <path d={svgPaths.p25643e00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[58.33%_70.83%_8.33%_12.5%]" data-name="Vector">
                  <div className="absolute inset-[-12.5%_-25%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 6.66667">
                      <path d={svgPaths.p6eccb00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-[54.17%]" data-name="Vector">
                  <div className="absolute inset-[-20%_-5.56%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 4.66667">
                      <path d={svgPaths.p351a6f40} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#02b1cc] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
              Посмотреть подробнее
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex h-[88px] items-center justify-between px-[24px] relative rounded-[16px] shrink-0 w-[1280px]" data-name="Container">
        <Container31 />
        <div className="bg-white h-[40px] relative rounded-[36px] shrink-0" data-name="button">
          <div aria-hidden="true" className="absolute border-2 border-[#02b1cc] border-solid inset-0 pointer-events-none rounded-[36px]" />
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-full items-center px-[26px] py-[2px] relative">
            <div className="relative shrink-0 size-[16px]" data-name="Icon/16/retry">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
                <div className="absolute inset-[8.33%_12.5%_58.33%_70.83%]" data-name="Vector">
                  <div className="absolute inset-[-12.5%_-25%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 6.66667">
                      <path d={svgPaths.pd9bdf00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-[54.17%] left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
                  <div className="absolute inset-[-20%_-5.56%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 4.66667">
                      <path d={svgPaths.p25643e00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[58.33%_70.83%_8.33%_12.5%]" data-name="Vector">
                  <div className="absolute inset-[-12.5%_-25%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 6.66667">
                      <path d={svgPaths.p6eccb00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-[54.17%]" data-name="Vector">
                  <div className="absolute inset-[-20%_-5.56%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 4.66667">
                      <path d={svgPaths.p351a6f40} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#02b1cc] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
              Посмотреть подробнее
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex h-[88px] items-center justify-between px-[24px] relative rounded-[16px] shrink-0 w-[1280px]" data-name="Container">
        <Container35 />
        <div className="bg-white h-[40px] relative rounded-[36px] shrink-0" data-name="button">
          <div aria-hidden="true" className="absolute border-2 border-[#02b1cc] border-solid inset-0 pointer-events-none rounded-[36px]" />
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-full items-center px-[26px] py-[2px] relative">
            <div className="relative shrink-0 size-[16px]" data-name="Icon/16/retry">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
                <div className="absolute inset-[8.33%_12.5%_58.33%_70.83%]" data-name="Vector">
                  <div className="absolute inset-[-12.5%_-25%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 6.66667">
                      <path d={svgPaths.pd9bdf00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-[54.17%] left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
                  <div className="absolute inset-[-20%_-5.56%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 4.66667">
                      <path d={svgPaths.p25643e00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[58.33%_70.83%_8.33%_12.5%]" data-name="Vector">
                  <div className="absolute inset-[-12.5%_-25%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 6.66667">
                      <path d={svgPaths.p6eccb00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-[54.17%]" data-name="Vector">
                  <div className="absolute inset-[-20%_-5.56%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 4.66667">
                      <path d={svgPaths.p351a6f40} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#02b1cc] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
              Посмотреть подробнее
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[24px] h-[416px] items-start pt-[32px] px-[32px] relative rounded-[24px] shrink-0 w-[1344px]" data-name="Section">
      <Container25 />
      <Container26 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[44px] items-start left-[47px] p-[48px] top-[97px] w-[1440px]" data-name="Main Content">
      <Section />
      <Container3 />
      <Section3 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="Личный кабинет(платно)">
      <Navigation />
      <MainContent />
    </div>
  );
}