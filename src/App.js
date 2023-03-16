import React, { useEffect, useState } from 'react';
import {
	Epic,
	AdaptivityProvider,
	AppRoot,
	ConfigProvider,
	SplitLayout,
	SplitCol,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import FirstView from './panels/FirstView';
import SecondView from './panels/SecondView';
import ThirdView from './panels/ThirdView';
import TabbarPanel from './panels/TabbarPanel';
import bridge from '@vkontakte/vk-bridge';

const App = () => {
	const [activeStory, setActiveStory] = useState('first');
	const [friends, setFriends] = useState([]);
	const onStoryChange = (e) => setActiveStory(e.currentTarget.dataset.story);

	useEffect(() => {
		const fetchFriends = async () => {
			const { access_token } = await bridge.send('VKWebAppGetAuthToken', {
				app_id: 51581483,
				scope: 'friends'
			});
			const {response} = await bridge.send('VKWebAppCallAPIMethod', {
				method: 'friends.get',
				params: {
					access_token,
					order: 'random',
					count: 3,
					v: '5.131',
					name_case: 'gen',
					fields: 'photo_100'
				}
			})
			setFriends(response.items)			
		}
		fetchFriends();
	}, [])

	return (
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout>
						<SplitCol autoSpaced>
							<Epic
								activeStory={activeStory}
								tabbar={<TabbarPanel onStoryChange={onStoryChange} activeStory={activeStory} />}
							>
								<FirstView id="first" friend={friends[0]} />
								<SecondView id="second" friend={friends[1]} />
								<ThirdView id="third" friend={friends[2]} />
							</Epic>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider >
	);
}

export default App;
