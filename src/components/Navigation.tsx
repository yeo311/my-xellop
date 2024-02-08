import { Group } from '@mantine/core'
import NavButton, { NavButtonProps } from './NavButton'
import IcCar from '@/icons/IcCar'
import IcList from '@/icons/IcList'
import IcHistory from '@/icons/IcHistory'

export default function Navagation() {
  const navItems: NavButtonProps[] = [
    {
      link: '/',
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
    <Group h="100%" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      {navItems.map((item) => (
        <NavButton key={item.link} {...item} />
      ))}
    </Group>
  )
}
