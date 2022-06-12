import Button from '@components/atoms/Button';
import Card from '@components/atoms/Card';
import { Flex, FlexItem } from '@components/atoms/Flex';
import Input from '@components/atoms/Input';
import { Paragraph } from '@components/atoms/Paragraph';
import { Span } from '@components/atoms/Span';
import { AuthLayoutStrip, AuthLayoutStripWrapper } from './AuthForm.style';
import { ColorThemeEnum, FontWeightEnum } from '@styles/Theme';
import { FC } from 'react';
import { Link } from 'react-router-dom';

type AuthFormProps = {
  authType: 'register' | 'login';
};

const AuthForm: FC<AuthFormProps> = ({ authType, children }) => {
  return (
    <>
      <Card style={{ marginBottom: '3.25rem' }}>
        {children}
        <AuthLayoutStripWrapper style={{ marginBottom: '1.5rem' }}>
          <AuthLayoutStrip size='25' />
          <FlexItem size='50' style={{ textAlign: 'center' }}>
            <Span variant={ColorThemeEnum.gray}>
              atau {authType === 'register' ? 'daftar' : 'masuk'} dengan
            </Span>
          </FlexItem>
          <AuthLayoutStrip size='25' />
        </AuthLayoutStripWrapper>
        <Flex style={{ width: '100%', justifyContent: 'space-between' }}>
          <FlexItem size='48'>
            <Button variant={ColorThemeEnum.gray} outline block>
              Google
            </Button>
          </FlexItem>
          <FlexItem size='48'>
            <Button variant={ColorThemeEnum.gray} outline block>
              Facebook
            </Button>
          </FlexItem>
        </Flex>
      </Card>
      <Span weight={FontWeightEnum.bold} variant={ColorThemeEnum.gray}>
        {authType === 'register' ? 'Sudah' : 'Belum'} punya akun?{' '}
        <Link
          to={authType === 'register' ? '/login' : '/register'}
          style={{ textDecoration: 'none' }}
        >
          <Span
            weight={FontWeightEnum.bold}
            variant={ColorThemeEnum.persianGreen}
          >
            {authType === 'register' ? 'Masuk' : 'Daftar'}
          </Span>
        </Link>
      </Span>
    </>
  );
};

export default AuthForm;
