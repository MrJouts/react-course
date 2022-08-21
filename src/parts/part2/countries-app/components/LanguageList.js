import React from 'react'

export const LanguageList = ({languages}) => languages.map(lang => <li key={lang}>{lang}</li>)
