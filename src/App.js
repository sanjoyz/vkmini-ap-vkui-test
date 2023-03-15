import React, { useState } from 'react';
import {
	View,
	Panel,
	Group,
	Placeholder,
	Epic, Tabbar,
	TabbarItem,
	AdaptivityProvider,
	AppRoot,
	ConfigProvider,
	SplitLayout,
	SplitCol,
	Title
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { Icon28UserCircleOutline } from '@vkontakte/icons';

const App = () => {
	const [activeStory, setActiveStory] = useState('first');
	const onStoryChange = (e) => setActiveStory(e.currentTarget.dataset.story);

	return (
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout>
						<SplitCol width="100%" autoSpaced>
							<Epic
								activeStory={activeStory}
								tabbar={
									(
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
							>
								<View id="first" activePanel="first">
									<Panel id="first">
										<Group>
											<Placeholder icon={<Icon28UserCircleOutline width={56} height={56} />} />
											<Title level="1" style={{ textAlign: 'center' }}>
												Title 1
											</Title>
										</Group>
									</Panel>
								</View>
								<View id="second" activePanel="second">
									<Panel id="second">
										<Group>
											<Placeholder icon={<Icon28UserCircleOutline width={56} height={56} />}></Placeholder>
											<Title level="1" style={{ textAlign: 'center' }}>
												Title 2
											</Title>
										</Group>
									</Panel>
								</View>
								<View id="third" activePanel="third">
									<Panel id="third">
										<Group>
											<Placeholder icon={<Icon28UserCircleOutline width={56} height={56} />}></Placeholder>
											<Title level="1" style={{ textAlign: 'center' }}>
												Title 3
											</Title>
										</Group>
									</Panel>
								</View>
							</Epic>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider >
	);
}

export default App;
