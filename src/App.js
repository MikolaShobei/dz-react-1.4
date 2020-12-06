import React, {Component} from 'react';
import {cars} from './dataBase/cars'
import CarsComponents from './components/carsComponents'
class App extends Component {
    render() {
        return (
            <div>
                {
                    cars.map((user, index) =>{
                        let clsK = index % 2 ? 'skyblue' : 'yellow'
                        return (<CarsComponents
                                    item={user}
                                    cls={clsK}
                                    key={index}
                                    />)
                    })
                }
            </div>
        );
    }
}

export default App;