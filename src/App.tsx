import React, { useState, useEffect, ReactNode, MouseEventHandler } from 'react';
import bridge, { UserInfo } from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import AOS from "aos";
import "aos/dist/aos.css";

import Home from './panels/Home';

const App = () => {
	AOS.init();
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState<UserInfo | undefined>();
	const [popout, setPopout] = useState<ReactNode | null>(<ScreenSpinner size='large' />);

	useEffect(() => {
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go: MouseEventHandler<HTMLElement> = e => {
		setActivePanel(e.currentTarget.dataset.to ?? 'home');
	};

	return (
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout popout={popout}>
						<SplitCol>
							<View activePanel={activePanel}>
								<Home id='home' fetchedUser={fetchedUser} go={go} />
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
