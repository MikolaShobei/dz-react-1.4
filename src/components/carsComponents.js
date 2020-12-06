import React, {Component} from 'react';
import './cars.css'
class CarsComponents extends Component {
    render() {
        let {item, cls} = this.props
        return (
            <div className={cls}>
                {item.model} - {item.year} - {item.power} - {item.color}
            </div>
        );
    }
}

export default CarsComponents;