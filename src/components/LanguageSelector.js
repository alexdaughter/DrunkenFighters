import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  }


  const LanguageOption = ({ langCode }) => {
      return (
          <label className="language-selector__label" htmlFor={langCode}>
              <input 
                type='radio'
                id={langCode}
                value={langCode}
                selected={langCode}
                onClick={changeLanguage}
                className="language-selector__input"/>
                    {langCode}
          </label>
      );
  };

  const languages = ['en', 'cat', 'es'];

  return (
      <ul className='language-selector'>
          {languages.map(lang => (
              <li key={lang}>
                  <LanguageOption langCode={lang} />
              </li>
          ))}
      </ul>
  );
};

export default LanguageSelector;

