'use client';
import Link from 'next/link';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';
import { Wrapp, Content, Copy, Social } from './styled';

const Footer = () => {
  return (
    <Wrapp>
      <Content>
        <Copy>© 2023 Rogelio Vargas. All rights reserved.</Copy>
        <Social>
          <Link href='https://www.linkedin.com/in/rogelio-vargas-marquez/' target='_blank'>
            <IoLogoLinkedin />
          </Link>
          <Link href='https://github.com/ShimonureYue' target='_blank'>
            <IoLogoGithub />
          </Link>
        </Social>
      </Content>
    </Wrapp>
  );
};

export default Footer;
