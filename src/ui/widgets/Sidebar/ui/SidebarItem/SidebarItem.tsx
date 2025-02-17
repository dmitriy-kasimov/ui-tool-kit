import React from 'react'
import { memo } from 'react'
import { HStack } from 'ui/components/shared/Stack'
import { SidebarItemType } from '../../types/SidebarProps'
import { Link } from 'ui/components/controls/links/Link'

interface SidebarItemProps {
    className?: string
    item: SidebarItemType
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const { className, item } = props

    return (
        <Link onClick={item.onClick} disabled={item.disabled}>
            <HStack className={className} max gap='s'>
                {item.Icon}
                {item.desciption}
            </HStack>
        </Link>
    )
})
