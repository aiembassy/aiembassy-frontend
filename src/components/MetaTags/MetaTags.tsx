import React from 'react';
import Head from 'next/head';
import { IMetaTags } from '@@types/CommonTypes';

type IProps = {
    meta?: IMetaTags;
};

const MetaTags: React.FC<IProps> = ({ meta }) => (
    <Head>
        <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-158334443-1"
        />
        <script
            dangerouslySetInnerHTML={{
                __html: `
                 window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-158334443-1');
                `,
            }}
        />
        {meta?.title && <title>{meta.title}</title>}
        {meta?.description && (
            <meta name="description" content={meta.description} />
        )}
        {meta?.keywords && <meta name="keywords" content={meta.keywords} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"
            rel="stylesheet"
        />
        <link rel="shortcut icon" href="favicon/favicon.ico" />
    </Head>
);

export default MetaTags;
