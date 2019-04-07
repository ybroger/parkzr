import React from 'react';
import {Container,Row,Text,Button,Body,Content,Header,Title,List,ListItem,Left,Right,Icon,Toast,Thumbnail,Form,Item,Input,Label,Col, Footer} from 'native-base';
import { app } from '../src/config';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet, Platform } from 'react-native';
import Selecttime from '../components/selecttime';
import Duration from '../components/duration';
export default class AccountDetails extends React.Component {
    
    static navigationOptions = {
		header: null
    };
    constructor(props) {
    super(props);
    
    }
  
	render() {
		return (
			<Container>
				<Header style={styles.header}>
                <Left>
                    <Button transparent onPress={() => this.toggleModalHandler(this.state.modalVisible)}>
                        <Icon name='ios-arrow-round-back' style={{color:'#fff'}} />
                    </Button>
                </Left>
                <Body>
                <Title style={styles.title}>Details Booking</Title>
                </Body>
				        <Right><Button transparent></Button></Right>
				</Header>
				<Content>
          <ScrollView>
                  <List>
                    <ListItem style={{paddingBottom:20,paddingTop:20}}>
                      <Text style={{fontFamily:'Hkgroteskbold',fontSize:20}}>Indiana Ave Parking</Text>
                    </ListItem>
                      <ListItem>
                      <Row style={{flex: 1,}}>
                        <Left style={{flexDirection: 'column', textAlign:'left'}}>
                          <Text style={{flex: 1,alignSelf:'flex-start'}}>Distance</Text>
                          <Text note style={{flex: 1,alignSelf:'flex-start'}}>0.6 Km</Text>
                        </Left>
                        <Body style={{flexDirection: 'column'}}>
                              <Text style={{flex: 1,alignSelf:'flex-start'}}>Vehicle</Text>
                              <Text note style={{flex: 1,alignSelf:'flex-start'}}>City Car</Text>
                        </Body>
                        <Right style={{flexDirection: 'column'}}>
                              <Text style={{flex: 1,alignSelf:'flex-start'}}>Price</Text>
                              <Text note style={{flex: 1,alignSelf:'flex-start',}}>$4d</Text>
                        </Right>
                      </Row>
                      </ListItem>
                      <ListItem style={{paddingBottom:20,paddingTop:20}}>
                        <Text style={{fontFamily:'Hkgroteskbold',fontSize:20}}>Vehicle Information</Text>
                      </ListItem>
                      <ListItem>
                        <Row style={{flex: 1,}}>
                          <Left style={{flexDirection: 'column', textAlign:'left'}}>
                            <Text style={{flex: 1,alignSelf:'flex-start'}}>AB 23343</Text>
                            <Text note style={{flex: 1,alignSelf:'flex-start'}}>Toyota Avanza</Text>
                          </Left>
                          <Right>
                                <Text style={{textAlignVertical: 'center',}}>Change</Text>
                          </Right>
                        </Row>
                      </ListItem>
                      <ListItem style={{paddingBottom:20,paddingTop:20}}>
                        <Text style={{fontFamily:'Hkgroteskbold',fontSize:20}}>Booking</Text>
                      </ListItem>
                      <ListItem style={{flexDirection: 'column'}}>
                          <Selecttime/>
                          <Duration/>
                      </ListItem>
                      <ListItem style={{paddingBottom:20,paddingTop:20}}>
                        <Text style={{fontFamily:'Hkgroteskbold',fontSize:20}}>Payment</Text>
                      </ListItem>
                      <ListItem>
                      <Body style={{flexDirection: 'column'}}>
                        <Row>
                          <Button light style={{borderRadius: 0,justifyContent: 'center',marginEnd:10}}>
                            <Text>$ Cash</Text>
                          </Button>
                          <Button light style={{borderRadius: 0,justifyContent: 'center',marginEnd:10}}>
                            <Text >Debit / Credit</Text>
                          </Button>
                        </Row>
                        </Body>
                      </ListItem> 
               </List>
            </ScrollView>     
				</Content>
        <Button primary full style={{borderRadius: 0,justifyContent: 'center',marginBottom: 36}}>
          <Text style={{fontFamily:'Hkgroteskbold',fontSize:20}}> Book now  $4</Text>
        </Button>
			</Container>
		);
	}
}
const styles = StyleSheet.create({
	header: {
		backgroundColor: '#00AEEF',
		color: '#fff',
		marginTop: Platform.OS === 'ios' ? 0 : 0,
		paddingTop: Platform.OS === 'ios' ? 15 : 35,
		height: Platform.OS === 'ios' ? 60 : 80
	},
	title: {
        color: '#fff',
        textAlign: 'center',
        justifyContent: 'center',
  },

});
