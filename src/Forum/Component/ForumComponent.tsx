import { Route, Routes, useParams } from 'react-router-dom';
import { loadedForums } from 'App';
import Topics from './Topics';
import * as keys from 'GlobalConst';
import ForumNavList from 'Navigation/components/ForumNavList';

function ForumComponent() {
	const id = parseInt(useParams()["id"] ?? "0");
	const thisForum = id ? loadedForums[id] : null;

	return thisForum ?
		<Routes>
			<Route path='/' element={<>
				 <section>
				<ForumNavList forumId={id} />
				<Topics forum={thisForum} />

				 </section>
			</>} />
			<Route path={`${keys.NKey_NavTopic}${keys.RKey_Wildcard}`} element={<>
				<div>
					<ForumNavList forumId={id} />
					<Topics forum={thisForum} />
				</div>
			</>} />
			<Route path={keys.RKey_SubId} element={<ForumComponent />} />
		</Routes> :
		<h1>Loading forums...not</h1>
}

export default ForumComponent