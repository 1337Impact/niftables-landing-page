import React from 'react';
import Link from 'next/link';
import Logo from '@/components/icons/Logo';

const HeaderLogo = () => {
    return (
        <Link href={"#"}>
            <Logo className="w-[120px] h-[33px] xl:w-[140px] xl:h-[39px]" />
        </Link>
    );
};

export default HeaderLogo;
