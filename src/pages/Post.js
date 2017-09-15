import React from 'react';
import { Link, Route } from 'react-router-dom';

const Post = ({match}) => {
	return (
		<div>
			포스트 {match.params.id}
		</div>
	)
}

export default Post;