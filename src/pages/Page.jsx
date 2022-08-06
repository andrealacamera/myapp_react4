import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { BsPeople } from "react-icons/bs";

const Page = () => {
  const {t, i18n} = useTranslation();
  const lang = i18n.language;
  return (
    <div>
      <Trans i18nKey="message">
        <p className='text-violet-800 p-8 italic'>text <a className="hover:font-bold hover:underline" href="https://teiga.it" target="_blank" >link</a> and <BsPeople className='inline w-8 h-8'></BsPeople> text.</p>
      </Trans>
      <p className='p-8'>L = {lang}</p>
    </div>
  )
}

export default Page