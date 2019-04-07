import React from 'react';
import { Text, ListItem, Left, Body,Button, Right } from 'native-base';
import { Row, Grid, Col } from 'react-native-easy-grid';
import { StyleSheet, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class NearbyParkingListItem extends React.Component {
	static navigationOptions = {
		header: null
	};
	constructor(props) {
		super(props);		
	} 
	render() {
		return (
			<Body style={{flexDirection: 'column'}}>
                    <Text style={{paddingBottom:8}}>Select Time</Text>
                <Row>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <Button light style={{borderRadius: 0,justifyContent: 'center',marginEnd:10}}>
                            <Text>10:00</Text>
                        </Button>
                        <Button light style={{borderRadius: 0,justifyContent: 'center',marginEnd:10}}>
                            <Text>10:00</Text>
                        </Button>
                        <Button light style={{borderRadius: 0,justifyContent: 'center',marginEnd:10}}>
                            <Text>10:00</Text>
                        </Button>
                        <Button light style={{borderRadius: 0,justifyContent: 'center',marginEnd:10}}>
                            <Text>10:00</Text>
                        </Button>
                        <Button light style={{borderRadius: 0,justifyContent: 'center',marginEnd:10}}>
                            <Text>10:00</Text>
                        </Button>
                        <Button light style={{borderRadius: 0,justifyContent: 'center',marginEnd:10}}>
                            <Text>10:00</Text>
                        </Button>
                    </ScrollView>
                </Row>
            </Body>
		);
	}
}
