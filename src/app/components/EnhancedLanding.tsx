import { useEffect } from 'react';

const BUTTON_SELECTOR = '[data-name="Кнопка"], [data-name="button"], [data-name="Button"]';
const QUESTIONNAIRE_SELECTOR = '[data-name="Анкета"]';
const HEADER_OFFSET = 96;

function scrollToQuestionnaire() {
  const questionnaireSection = document.querySelector<HTMLElement>(QUESTIONNAIRE_SELECTOR);
  if (!questionnaireSection) {
    window.location.assign('/questionnaire/step1');
    return;
  }

  const top = questionnaireSection.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top, behavior: 'smooth' });
}

export function EnhancedLanding() {
  useEffect(() => {
    const buttons = Array.from(document.querySelectorAll<HTMLElement>(BUTTON_SELECTOR));

    const hoverIn = (event: Event) => {
      const element = event.currentTarget as HTMLElement;
      element.style.transform = 'translateY(-3px) scale(1.03)';
      element.style.boxShadow = '0 18px 36px rgba(31, 31, 31, 0.14)';
      element.style.filter = 'saturate(1.02)';
    };

    const hoverOut = (event: Event) => {
      const element = event.currentTarget as HTMLElement;
      element.style.transform = 'translateY(0) scale(1)';
      element.style.boxShadow = 'none';
      element.style.filter = 'none';
    };

    const click = (event: Event) => {
      event.preventDefault();
      event.stopPropagation();
      scrollToQuestionnaire();
    };

    buttons.forEach((button) => {
      button.style.cursor = 'pointer';
      button.style.transition = 'transform 180ms ease, box-shadow 180ms ease, filter 180ms ease';
      button.addEventListener('mouseenter', hoverIn);
      button.addEventListener('mouseleave', hoverOut);
      button.addEventListener('click', click);
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener('mouseenter', hoverIn);
        button.removeEventListener('mouseleave', hoverOut);
        button.removeEventListener('click', click);
      });
    };
  }, []);

  return null;
}
