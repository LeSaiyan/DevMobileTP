import React from 'react';
import { Text, View, Button, TextInput, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux'


class AddFavoritesPage extends React.Component {

    static navigationOptions = {
        title: 'Ajouter une ville'
    };
    
    state = {
        cityName: ''
    };

    changeText(value) {
        this.setState({ cityName: value });
    }

    onPressAdd() {
        const action = { type: "ADD_FAVORITE", value: this.state.cityName }
        this.props.dispatch(action)
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <TextInput onChangeText={(text) => this.changeText(text)} />
                <Button title="Ajouter" onPress={() => this.onPressAdd()} />

            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        favoritesCity: state.favoritesCity
    }
  }

export default connect(mapStateToProps)(AddFavoritesPage)
