import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { BsPeople } from "react-icons/bs";

const Page = () => {
  const {t} = useTranslation();
  return (
    <div>
      <Trans t={t} i18nKey="message">
        <p>text <Link to="https://teiga.it" target="_blank" >link</Link> and <BsPeople className='inline'></BsPeople> text.</p>
      </Trans>
    </div>
  )
}

export default Page