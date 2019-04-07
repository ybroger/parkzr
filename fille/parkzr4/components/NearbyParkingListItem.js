import React from 'react';
import { Text, ListItem, Left, Body, Right } from 'native-base';
import { Row, Grid, Col } from 'react-native-easy-grid';
import { StyleSheet, Platform } from 'react-native';

export default class NearbyParkingListItem extends React.Component {
	static navigationOptions = {
		header: null
	};
	constructor(props) {
		super(props);
		navigation = this.props.navigate;
		
	} 
	render() {
		return (
			<ListItem onPress={this.props.navigate}>
				<Grid >
					<Col style={{ flex: 6 }}>
						<Row style={{ marginBottom: 6 }}>
							<Text>{this.props.name}</Text>
						</Row>
						<Row style={{ justifyContent: 'space-between' }}>
							<Text>{this.props.distance} Km</Text>
							<Text>{this.props.slots} Available</Text>
						</Row>
					</Col>
					<Col style={{ flex: 2 }}>
						<Row style={{ justifyContent: 'flex-end' }}>
							<Text note>${this.props.price}</Text>
						</Row>
						<Row style={{ justifyContent: 'flex-end' }}>
							<Text note>
								{this.props.hourly === 'hour'
									? 'Per Hour'
									: 'Per Day'}
							</Text>
						</Row>
					</Col>
				</Grid>
			</ListItem>
		);
	}
}
