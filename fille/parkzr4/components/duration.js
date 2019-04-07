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
                <Text style={{paddingBottom:8}}>Duration</Text>
                <Row>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <Button light style={{borderRadius: 0,justifyContent: 'center',marginEnd:10}}>
                            <Text>30 Mins</Text>
                        </Button>
                        <Button light style={{borderRadius: 0,justifyContent: 'center',marginEnd:10}}>
                            <Text>1 Hr</Text>
                        </Button>
                        <Button light style={{borderRadius: 0,justifyContent: 'center',marginEnd:10}}>
                            <Text>2 Hr</Text>
                        </Button>
                        <Button light style={{borderRadius: 0,justifyContent: 'center',marginEnd:10}}>
                            <Text>3 Hr</Text>
                        </Button>
                        <Button light style={{borderRadius: 0,justifyContent: 'center',marginEnd:10}}>
                            <Text>4 Hr</Text>
                        </Button>
                        <Button light style={{borderRadius: 0,justifyContent: 'center',marginEnd:10}}>
                            <Text>5 Hr</Text>
                        </Button>
                    </ScrollView>
                </Row>
            </Body>
		);
	}
}