import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableHighlight, TextInput, Linking, Image} from 'react-native';
import DatePicker from 'react-native-datepicker';

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      flights: [],
      budget: "",
      returnDate: ""
    };
  }

  handleSubmit() {
    this.props.fetchFlights(this.state.returnDate);

    this.props.navigator.push({
      name: 'FlightIndex'
    });

  }


  render() {
    let bool = this.state.returnDate !== "" ? false : true;
    let _buttonName = bool ? styles.buttontrue : styles.buttonfalse;
    let _buttonText = bool ? require('../../assets/images/getFlyingGrey.png') :
                              require('../../assets/images/getFlyingPurp.png');
  return (
      <Image style={styles.container}
        source={require('../../assets/images/background.png')}
        >
        <View style={styles.inputs}>
          <Image style={styles.title}
            source={require('../../assets/images/leavePurp.png')}
            />
        <View style={styles.BudgetView}>
          <TextInput
            placeholder="Budget"
            keyboardType = 'numeric'
            onChangeText={(budget) => this.setState({budget})}
            value={this.state.budget}
            style={styles.budget}
          />
      </View>
        <DatePicker
          style={styles.date}
          date={this.state.returnDate}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate= "new Date().toJSON().slice(0,10);"
          maxDate="2017-12-31"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36,
              borderWidth: 0
            }
          }}
          onDateChange={(date) => {this.setState({returnDate: date});}}
        />

        </View>
        <TouchableHighlight style={_buttonName} disabled={bool} onPress={ () => this.handleSubmit() }>

          <Image style={styles.title}
            source={_buttonText}
            />
        </TouchableHighlight>
      </Image>
    );
  }
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      justifyContent: 'space-around'
    },
      inputs: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    buttontrue: {
      flex: .2,
      margin: 5,
      width: 375,
      padding: 0,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 5,
      borderRadius: 10,
      borderColor: '#935AA4',
      backgroundColor: '#70747a'
    },
    buttonfalse: {
      flex: .2,
      margin: 5,
      width: 375,
      padding: 0,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 5,
      borderRadius: 10,
      borderColor: '#935AA4',
      backgroundColor: '#EAE7F2'
    },

    BudgetView: {

      marginTop: 80,
      height: 40
    },
    budget: {
      padding: 0,
      textAlign: 'right',
      paddingRight: 10,
      backgroundColor: '#EAE7F2',
      flex: 1,
      justifyContent: 'center',
      borderColor: '#935AA4',
      borderWidth: 3,
      borderRadius: 10,
      width: 200
    },

    date: {
      backgroundColor: '#EAE7F2',
      borderColor: '#935AA4',
      borderWidth: 3,
      borderRadius: 10,
      marginTop: 40,
      width: 200
    }
  });

export default Home;
