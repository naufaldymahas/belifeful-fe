import Card from '@components/atoms/Card';
import { Flex, FlexItem } from '@components/atoms/Flex';
import { Paragraph } from '@components/atoms/Paragraph';
import { Span } from '@components/atoms/Span';
import { ColorThemeEnum, FontWeightEnum } from '@styles/Theme';
import Input from '@components/atoms/Input';
import Button from '@components/atoms/Button';
import { useMemo } from 'react';
import { RegisterActionType, useRegisterContext } from '@contexts/Register';

export const RegisterYellowStep3 = () => {
  return (
    <>
      <div style={{ paddingRight: '4.125rem' }}>
        <Paragraph
          fs='4'
          weight={FontWeightEnum.bolder}
          variant={ColorThemeEnum.lincolnGreen}
        >
          Hi, Kita kenalan yuk
        </Paragraph>
        <Paragraph
          fs='6'
          weight={FontWeightEnum.bold}
          variant={ColorThemeEnum.lincolnGreen}
        >
          Isi informasi di samping agar kami bisa mengenalmu
        </Paragraph>
      </div>
      <Span weight={FontWeightEnum.semi} variant={ColorThemeEnum.lincolnGreen}>
        Pahami{' '}
        <Span
          weight={FontWeightEnum.semi}
          variant={ColorThemeEnum.persianGreen}
        >
          Kebijakan Privasi
        </Span>{' '}
        kami sebelum mendaftar
      </Span>
    </>
  );
};

export const RegisterWhiteStep3 = () => {
  const { dispatch } = useRegisterContext();

  const handleKeyDown = useMemo(
    () => (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (
        !(e.key.match(/[0-9]/g) || e.key === 'Delete' || e.key === 'Backspace')
      ) {
        e.preventDefault();
        return;
      }
    },
    []
  );

  const submitHandler = useMemo(
    () => (e: any) => {
      e.preventDefault();
      if (e.target[0].value && e.target[1].value && e.target[2].value) {
        dispatch({
          type: RegisterActionType.SET_BIODATA,
          payload: {
            firstName: e.target[0].value,
            lastName: e.target[1].value,
            handphone: e.target[2].value,
          },
        });

        dispatch({
          type: RegisterActionType.SET_STEP,
          payload: {
            step: '4a',
          },
        });
      }
    },
    []
  );

  return (
    <>
      <Card style={{ marginBottom: '3.25rem' }}>
        <Paragraph
          fs='5'
          weight={FontWeightEnum.bold}
          style={{ marginBottom: '1.375rem' }}
        >
          Daftar
        </Paragraph>
        <form onSubmit={submitHandler}>
          <Flex
            justifyContent='space-between'
            style={{ marginBottom: '1.5rem' }}
          >
            <FlexItem size='48'>
              <Input placeholder='Nama Depan' />
            </FlexItem>
            <FlexItem size='48'>
              <Input placeholder='Nama Belakang' />
            </FlexItem>
          </Flex>
          <Input
            placeholder='Nomor Handphone'
            style={{ marginBottom: '1.5rem' }}
            onKeyDown={handleKeyDown}
          />
          <Button
            type='submit'
            variant={ColorThemeEnum.gold}
            weight='800'
            block
          >
            Lanjutkan
          </Button>
        </form>
      </Card>
    </>
  );
};
