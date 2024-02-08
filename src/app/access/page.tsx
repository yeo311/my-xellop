import { Button, Stack, TextInput } from '@mantine/core'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export default function AccessPage() {
  const action = async (formData: FormData) => {
    'use server'
    const accessKey = formData.get('accessKey')

    if (accessKey === process.env.USER_PWD) {
      console.log('로그인 성공')
      cookies().set('accessKey', accessKey, { maxAge: 60 * 60 * 24 * 7 })
      redirect('/')
    }
  }
  return (
    <form action={action}>
      <Stack>
        <TextInput label="엑세스 키 입력" name="accessKey" placeholder="엑세스 키를 입력하세요" />
        <Button type="submit">확인</Button>
      </Stack>
    </form>
  )
}
