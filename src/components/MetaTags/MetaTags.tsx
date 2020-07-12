import React from "react";
import Head from "next/head";

type IProps = {
  meta?: {
    title?: string;
    description?: string;
    keywords?: string;
  };
};

const MetaTags: React.FC<IProps> = ({ meta }) => (
  <Head>
    {meta?.title && <title>{meta.title}</title>}
    {meta?.description && (
      <meta name="description" content={meta.description} />
    )}
    {meta?.keywords && <meta name="keywords" content={meta.keywords} />}
  </Head>
);

export default MetaTags;
