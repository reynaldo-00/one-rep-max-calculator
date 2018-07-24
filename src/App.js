import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import {
  Header,
  Inputs,
  Percentages,
  Settings,
} from './components';
import { calculations } from './Calculations';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      load: 0,
      displayLoad: 0,
      reps: 1,
      orm: 0,
      isKgOn: false,
      settingsOn: false,
      calcSelected: 1,
    };
  }

  onGoBack() {
    this.setState({ settingsOn: false });
  }

  settingPressed() {
    this.setState({ settingsOn: true });
  }

  calculationSelected(item) {
    this.setState({ calcSelected: item.key });
    this.calculateORM(this.state.load, this.state.reps);
    this.onGoBack();
  }

  calculateORM(load, reps) {
    if (reps > 1) {
      const orm = Math.ceil(calculations[this.state.calcSelected].function(load, reps));
      this.setState({ orm });
    } else {
      const orm = load;
      this.setState({ orm });
    }
  }

  loadChanged(stringLoad) {
    const load = Number(stringLoad);
    this.setState({ load: Number(load) });
    this.calculateORM(load, this.state.reps);
  }

  repsChanged(reps) {
    this.setState({ reps: Number(reps) });
    this.calculateORM(this.state.load, reps);
  }

  kgChanged(isKgOn) {
    if (isKgOn === true) {
      const kgLoad = this.lb2kg(this.state.load);
      this.setState({ load: kgLoad, isKgOn });
      this.calculateORM(kgLoad, this.state.reps);
    } else {
      const lbLoad = this.kg2lb(this.state.load);
      this.setState({ load: lbLoad, isKgOn });
      this.calculateORM(lbLoad, this.state.reps);
    }
  }

  lb2kg(load) {
    return Math.ceil(load / 2.2046226218);
  }

  kg2lb(load) {
    return Math.ceil(load * 2.2046226218);
  }

  renderPage() {
    if (this.state.settingsOn === true) {
      return (
        <Settings 
          onGoBack={this.onGoBack.bind(this)} 
          onPress={this.calculationSelected.bind(this)}
          calculations={calculations}
          selected={this.state.calcSelected}
        />
      );
    }
    return (
      <View style={styles.container} >
        <StatusBar barStyle="light-content" />
        <Header onPress={this.settingPressed.bind(this)} />
        <Text 
          style={{ color: 'white', fontSize: 80 }}
        >{this.state.orm}</Text>
        <Inputs
            load={this.state.load}
            reps={this.state.reps}
            isKgOn={this.state.isKgOn}
            loadChanged={this.loadChanged.bind(this)}
            repsChanged={this.repsChanged.bind(this)}
            kgChanged={this.kgChanged.bind(this)}
        />
        <View style={{ width: '100%', height: '100%' }}>
          <Percentages orm={this.state.orm} />
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.renderPage()}
      </View>
    );
  }
}

const styles = {
  container: {
    paddingTop: 240,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'black',
    flex: 1,
  },
};

export default App;
