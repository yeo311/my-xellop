import { Stack, Text } from '@mantine/core'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export type NavButtonProps = {
  link: string
  icon: React.ReactNode
  text: string
}

export default function NavButton({ link, icon, text }: NavButtonProps) {
  const pathname = usePathname()
  const isActive = pathname === link
  return (
    <Link
      href={link}
      style={{ flex: '1', ...(isActive && { color: 'var(--mantine-color-blue-filled)' }) }}
    >
      <Stack h="50px" align="center" justify="center" style={{ gap: '2px' }}>
        {icon}
        <Text size="sm">{text}</Text>
      </Stack>
    </Link>
  )
}
