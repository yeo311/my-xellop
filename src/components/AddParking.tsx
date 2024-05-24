'use client'

import saveParkingLot from '@/actions/saveParkingLot'
import IcPlus from '@/icons/IcPlus'
import { Button, Drawer, Select, Stack, TextInput } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useFormState } from 'react-dom'

export default function AddParking() {
  const [opened, { open, close }] = useDisclosure(false)
  const [state, formAction] = useFormState(saveParkingLot, { message: '' })

  return (
    <>
      <Button
        className="rounded-full w-12 h-12 p-0 fixed right-4 z-50"
        style={{ bottom: 'calc(env(safe-area-inset-bottom) + 84px)' }}
        variant="gradient"
        gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
        onClick={open}
      >
        <IcPlus />
      </Button>
      <Drawer opened={opened} onClose={close} title="주차 위치 저장" position="bottom">
        <form action={formAction}>
          <Stack>
            <TextInput name="location" label="주차 위치" defaultValue="우리집" />
            <Select
              label="지상/지하"
              name="ground"
              placeholder="지상/지하 선택"
              data={['지하', '지상']}
              defaultValue="지하"
            />
            <Select
              label="층"
              name="floor"
              placeholder="층 선택"
              data={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
              defaultValue="1"
            />
            <TextInput name="num" label="기둥 번호" placeholder="ex) 20" />
            <Button
              type="submit"
              onClick={close}
              loaderProps={{ type: 'dots' }}
              fullWidth
              variant="gradient"
              size="md"
              gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
            >
              저장하기
            </Button>
          </Stack>
        </form>
      </Drawer>
    </>
  )
}
