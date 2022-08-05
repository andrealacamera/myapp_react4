import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const {t, i18n} = useTranslation();
  
  return (
    <div className='h-full w-full'>
      <article className='bg-violet-100 text-zinc-800'>
        <h1 className='text-6xl text-center py-6'>
          {t("welcome")}
        </h1>
         

      </article>

    </div>
  )
}

export default Home