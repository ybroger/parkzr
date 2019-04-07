import React from 'react';
import { StyleSheet } from 'react-native';
import {
	Container,
	Header,
	Title,
	Content,
	Footer,
	FooterTab,
	Button,
	Left,
	Right,
	Body,
	Icon,
	Text
} from 'native-base';

export default class LinksScreen extends React.Component {
	static navigationOptions = {
		header: null
	};

	render() {
		return (
			<Container>
				<Header>
					<Left>
						<Button transparent>
							<Icon name="menu" />
						</Button>
					</Left>
					<Body>
						<Title>Header</Title>
					</Body>
					<Right />
				</Header>
				<Content>
					<Text>This is Content Section</Text>
				</Content>
				<Footer>
					<FooterTab>
						<Button full>
							<Text>Footer</Text>
						</Button>
					</FooterTab>
				</Footer>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 20,
		backgroundColor: '#fff'
	}
});
