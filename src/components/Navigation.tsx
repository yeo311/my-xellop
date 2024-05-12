import { Group } from '@mantine/core'
import NavButton, { NavButtonProps } from './NavButton'
import IcCar from '@/icons/IcCar'
import IcList from '@/icons/IcList'
import IcHistory from '@/icons/IcHistory'
import IcPark from '@/icons/IcPark'

export default function Navigation() {
  const navItems: NavButtonProps[] = [
    {
      link: '/',
      icon: <IcPark />,
      text: '주차위치',
    },
    {
      link: '/reservation',
      icon: <IcCar />,
      text: '방문등록',
    },
    {
      link: '/list',
      icon: <IcList />,
      text: '예약목록',
    },
    {
      link: '/history',
      icon: <IcHistory />,
      text: '사용이력',
    },
  ]

  return (
    <Group className="pt-2" style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 8px)' }}>
      {navItems.map((item) => (
        <NavButton key={item.link} {...item} />
      ))}
    </Group>
  )
}
