import { useSignoutMutation } from '@/hooks/mutations/useSignoutMutation';
import { MdOutlineExitToApp } from 'react-icons/md';
import { Nav } from './Nav';
import { NavItem } from './NavItem';

type UserDropDownMenuPropsType = {
  isClosed: boolean;
};

export function UserDropDownMenu({ isClosed }: UserDropDownMenuPropsType) {
  const { mutate } = useSignoutMutation();

  return (
    <Nav isClosed={isClosed}>
      <NavItem
        label="Sair"
        Icon={MdOutlineExitToApp}
        role="button"
        onClick={() => mutate()}
      />
    </Nav>
  );
}
