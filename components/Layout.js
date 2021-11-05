import Head from 'next/head'

export default function Layout({title, description, keywords, children}) {
    return (
        <div className='px-10 py-20'>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
            </Head>
            <div className="relative mx-auto">
                {children}
            </div>
        </div>
    )
}

Layout.defaultProps = {
    title: 'Darth Malls NTF',
    description: 'Darth Malls: it\'s sith lords (and star wars villans, meances if you will) at the mall',
    keywords: 'mall, shopping, lightsaber, gamestop'
}
