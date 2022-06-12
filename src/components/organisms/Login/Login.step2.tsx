import Button from '@components/atoms/Button';
import { Flex, FlexItem } from '@components/atoms/Flex';
import Input from '@components/atoms/Input';
import { Paragraph } from '@components/atoms/Paragraph';
import { Span } from '@components/atoms/Span';
import { ColorThemeEnum, FontWeightEnum } from '@styles/Theme';
import AuthForm from '../Auth/AuthForm';

export const LoginWhiteStep2 = () => {
  return (
    <AuthForm authType='login'>
      <Paragraph
        fs='4'
        weight={FontWeightEnum.bolder}
        style={{ marginBottom: '1.375rem' }}
      >
        Masuk
      </Paragraph>
      <form style={{width: '100%'}} onSubmit={() => null}>
        <Input
          placeholder='Password'
          type='password'
          style={{ marginBottom: '0.5rem' }}
        />
        <Flex justifyContent='space-between' style={{ alignItems: 'center' }}>
          <Flex style={{ alignItems: 'center' }}>
            <input type='checkbox' />
            <Span fs='7' weight={FontWeightEnum.bold}>
              Ingat Saya
            </Span>
          </Flex>
          <Span
            fs='7'
            weight={FontWeightEnum.bold}
            variant={ColorThemeEnum.sunsetOrange}
          >
            Lupa Kata Sandi?
          </Span>
        </Flex>
        <Button
          variant={ColorThemeEnum.gold}
          weight='800'
          block
          style={{ marginTop: '0.875rem' }}
        >
          Lanjutkan
        </Button>
      </form>
    </AuthForm>
  );
};
