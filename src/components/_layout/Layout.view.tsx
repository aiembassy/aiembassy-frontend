import React from 'react';
import MetaTags from '@components/MetaTags/MetaTags';
import { IMetaTags } from '@@types/CommonTypes';
import { LayoutWrapper } from './Layout.styled';

type IProps = {
    meta: IMetaTags;
};

const Layout: React.FC<IProps> = ({ children, meta }) => {
    return (
        <LayoutWrapper>
            <MetaTags meta={meta} />
            {children}
        </LayoutWrapper>
    );
};

export default Layout;
