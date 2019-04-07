import React from 'react';
import { View, StyleSheet, Platform, Modal } from 'react-native';
import { Container,Header,List,Item,Icon,Text,Input, Button } from 'native-base';
import MapView from 'react-native-maps';
import { app } from '../src/config';
import { Row, Grid } from 'react-native-easy-grid';
import { ScrollView } from 'react-native-gesture-handler';
import NearbyParkingListItem from '../components/NearbyParkingListItem';
import DetailBooking from '../screens/DetailBooking';

export default class HomeScreen extends React.Component {
	static navigationOptions = {
		header: null
	};
	constructor(props) {
		super(props);

		this.state = {
			region: {
				latitude: 37.78825,
				longitude: -122.4324,
				latitudeDelta: 0.0922,
      			longitudeDelta: 0.0421,
			},
			title:'fd',
			description:'dddss',
			price:'',
			slots:'',
			distance:'',
			hourly:'',
			modalVisible: false
		};
	} 
	componentDidMount(){
		app.database().ref('parkings/').on('value',(snapshot)=>{
				var usrData = snapshot.val();
				var keys = Object.keys(usrData);
				for(var i = 0; i < keys.length;i++)
				{
					var k = keys[i];
					title = usrData[k].title;
					description = usrData[k].description;
					price = usrData[k].price;
					slots = usrData[k].slots;
					distance = usrData[k].distance;
					hourly = usrData[k].hourly;
				}
				this.setState({title,description,price,slots,distance,hourly});
			})
		//app.database().ref('parkings/').child('/data').push({ title: this.state.title, description : this.state.description,latitude:this.state.region.latitude,longitude:this.state.region.longitude })
	}

	toggleModalHandler(modalVisible) {
		modalVisible = !modalVisible;
		this.setState({ modalVisible });
	}

	render() {
		return (
			<Container>
				<Header searchBar style={styles.header} >
					<Item style={styles.searchbar}>
						<Input
							style={styles.inputsearch}
							placeholder="Where do you want to park?"
							placeholderTextColor="#000"
						/>
						<Icon name="ios-search"/>
					</Item>
				</Header>
				<Grid>
					<Row size={50}>
						<MapView
							style={{ flex: 1 }}
							initialRegion={this.state.region}
						>
							<MapView.Marker
								coordinate={this.state.region}
								title={this.state.title}
								description={this.state.description}
							/>
						</MapView>
					</Row>
					<Row size={50}>
						<List style={{ flex: 1 }}>
							<View style={styles.headerView}>
								<Text style={{ height: 20, color: '#00AEEF' }}>
									Nearby Parkings
								</Text>
							</View>

							<ScrollView>
								<NearbyParkingListItem
									name={this.state.title}
									price={this.state.price}
									distance={this.state.distance}
									slots={this.state.slots}
									hourly={this.state.hourly}
									navigate={() => this.toggleModalHandler(this.state.modalVisible)}
								/>
							</ScrollView>
						</List>
					</Row>
				</Grid>
				<Modal
				animationType="slide"
				transparent={false}
				visible={this.state.modalVisible}
				onRequestClose={() => {
					Alert.alert('Modal has been closed.');
				}}>
				<DetailBooking/>
				{/* <View style={{marginTop: 22}}>
					<View>
						<Text>Hello World!</Text>
						<Button onPress={() => this.toggleModalHandler(this.state.modalVisible)}>
							<Text>Close</Text>
						</Button>
					</View>
				</View> */}
				</Modal>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: '#00AEEF',
		marginTop: Platform.OS === 'ios' ? 0 : 0,
		paddingTop: Platform.OS === 'ios' ? 15 : 15,
		height: Platform.OS === 'ios' ? 75 : 90
	},
	searchbar: {
		paddingTop: Platform.OS === 'ios' ? 0 : 0,
		paddingRight: Platform.OS === 'ios' ? 0 : 0,
		paddingBottom: Platform.OS === 'ios' ? 0 : 0,
		paddingLeft: Platform.OS === 'ios' ? 5 : 5,
		backgroundColor: '#fff'
	},
	grid: {
		height: 600
	},
	list: {
		flex: 1
	},
	headerView: {
		backgroundColor: '#F4F4F4',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		padding: 21,
		maxHeight: 30
	}
});
