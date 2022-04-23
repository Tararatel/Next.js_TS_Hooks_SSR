import axios from 'axios';
import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import { Button, Htag, P, Rating, Tag, Input, Textarea, Search } from '../components';
import { MenuItem } from '../interfaces/menu.interface';
import { withLayout } from '../layout/Layout';

function Home({ menu }: HomeProps): JSX.Element {
	const [rating, setRating] = useState<number>(4);

	return (
		<>
			<Htag tag="h3">ololo</Htag>
			<Button appearance="primary" arrow="right">
				Button
			</Button>
			<Button appearance="ghost" arrow="down">
				Button
			</Button>
			<P size="small">ololololo</P>
			<P size="medium">ololololo</P>
			<P size="large">ololololo</P>
			<Tag size="small">ololololo</Tag>
			<Tag size="small" color="red">
				ololololo
			</Tag>
			<Tag size="medium" color="green">
				ololololo
			</Tag>
			<Tag size="medium" color="primary">
				ololololo
			</Tag>
			<Rating rating={rating} isEditable setRating={setRating} />
			<Input placeholder="тест" />
			<Textarea placeholder="тест" />
			<Search />
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
		firstCategory,
	});
	return {
		props: {
			menu,
			firstCategory,
		},
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}
