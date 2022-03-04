import { memo } from 'react';
import SidebarMenuItem, { SidebarMenuStatuses } from '../ui/SidebarMenuItem';

export type NavigationList = Array<{
  id: string;
  name: string;
  status: SidebarMenuStatuses;
  href: string;
}>;

export interface SideBarMenuProps {
  navigationList: any;
}

function SidebarMenu({ navigationList, ...rest }: SideBarMenuProps) {
  console.log("navigationList",navigationList)
  return (
    <>
    <h1>Sidebar menu</h1>
      {navigationList.map((item) => (
        <SidebarMenuItem
          status={item.status}
          href={item.href}
          key={item.id}
          name={item.name}
        />
      ))}
    </>
  );
}

export default memo(SidebarMenu);
