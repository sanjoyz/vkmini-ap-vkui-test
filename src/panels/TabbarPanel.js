import React from 'react'
import { Tabbar, TabbarItem } from '@vkontakte/vkui'
import { Icon28UserCircleOutline } from '@vkontakte/icons';
const TabbarPanel = ({onStoryChange, activeStory}) => {
	return (
		<Tabbar>
			<TabbarItem
				onClick={onStoryChange}
				selected={activeStory === 'first'}
				data-story="first"
				text="1"
			>
				<Icon28UserCircleOutline />
			</TabbarItem>
			<TabbarItem
				onClick={onStoryChange}
				selected={activeStory === 'second'}
				data-story="second"
				text="2"
			>
				<Icon28UserCircleOutline />
			</TabbarItem>
			<TabbarItem
				onClick={onStoryChange}
				selected={activeStory === 'third'}
				data-story="third"
				text="3"
			>
				<Icon28UserCircleOutline />
			</TabbarItem>
		</Tabbar>
	)
}

export default TabbarPanel


