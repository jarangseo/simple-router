// 리덕스 적용시 여기서 Provider통해 프로젝트를 리덕스에 연결
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'shared/App';

const Root = () => (
	<BrowserRouter>
		<App/>
	</BrowserRouter>
);

export default Root;