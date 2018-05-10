import React from "react";
import { StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";
import { 
  Container,
  Content,
  View,
  Text,
  Button,
  Icon,
  Separator,
  ListItem,
  Left,
  Body,
  Right,
  Switch,
  Input,
} from "native-base";

export default class ServerEditor extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: "Add Server",
      headerRight: <Button transparent><Icon name="share" /></Button>,
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      secureTextEntry: true,
      password: ''
    }

    this.onPressToggleSecureTextEntry = this.onPressToggleSecureTextEntry.bind(this);
  }

  onPressToggleSecureTextEntry() {
    this.setState((preState) => ({secureTextEntry: !preState.secureTextEntry}));
  }

  render() {
    const FormShadowsocks = () => {
      return [
          <ListItem key="1">
            <Left>
              <Text>Method</Text>
            </Left>
            <Right style={styles.right}>
              <Text style={styles.subtitle}>rc4-md5</Text>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>,
          <ListItem key="2" style={{paddingVertical: 0, height: 50, paddingRight: 0}}>
            <Left>
              <Text style={styles.label}>Password</Text>
              <Input 
                style={styles.input} 
                placeholder="required" 
                placeholderTextColor="#8F8E95" 
                secureTextEntry={this.state.secureTextEntry} 
                value={this.state.password}
                onChangeText={(password) => this.setState({password})}
              />
            </Left>
            <Right style={{paddingRight: 0, paddingLeft: 0, flex: null}}>
              <Button transparent onPress={this.onPressToggleSecureTextEntry}>
                <Icon active={!this.state.secureTextEntry} name="eye" />
              </Button>
            </Right>
          </ListItem>,
          <ListItem key="3" last>
            <Left>
              <Text>TCP Fast Open</Text>
            </Left>
            <Right>
              <Switch />
            </Right>
          </ListItem>,
      ];
    }

    const FormSocks = () => {
      return [
          <ListItem>
            <Text style={styles.label}>Account</Text>
            <Input style={styles.input} placeholder="Optional" />
          </ListItem>,
          <ListItem last>
            <Text style={styles.label}>Password</Text>
            <Input style={styles.input} placeholder="Optional" placeholderTextColor="#8F8E95" secureTextEntry />
          </ListItem>,
      ];
    }
    const FormHTTP = FormSocks;
    // const Form = () => FormShadowsocks().map((value, index) => React.cloneElement(value, {key: index}));
    const Form = FormShadowsocks;

    return (
      <Container>
        <Content>
          <Separator bordered noTopBorder />
          <View style={styles.section}>
            <ListItem last onPress={() => {Actions.picker()}}>
              <Left>
                <Text>Type</Text>
              </Left>
              <Right style={styles.right}>
                <Text style={styles.subtitle}>haha</Text>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </View>
          <Separator bordered noTopBorder />
          <View style={styles.section}>
            <ListItem>
              <Text style={styles.label}>Server</Text>
              <Input 
                style={styles.input} 
                placeholder="Domain or IP Address" 
                placeholderTextColor="#8F8E95" 
                value={this.state.password}
                onChangeText={(password) => this.setState({password})} 
              />
            </ListItem>
            <ListItem>
              <Text style={styles.label}>Port</Text>
              <Input style={styles.input} keyboardType="numeric" placeholder="1~65535" placeholderTextColor="#8F8E95" />
            </ListItem>
            <Form />
          </View>
          <Separator />
          <Button block primary style={styles.button}>
            <Text>Save</Text>
          </Button>
          <Button block danger style={styles.button}>
            <Text>Delete</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: 'white',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  subtitle: {
    marginRight: 10,
    color: '#8F8E95',
  },
  button: {
    marginHorizontal: 15,
    marginBottom: 20,
  },
  label: {
    width: 100,
  },
  input: {
    height: null,
    textAlign: 'right',
  },
});