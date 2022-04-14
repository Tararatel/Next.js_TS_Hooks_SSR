import { Button, Htag, P, Tag } from '../components';

export default function Home(): JSX.Element {
	return (
		<div>
			<Htag tag="h3">Ololo</Htag>
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
		</div>
	);
}
