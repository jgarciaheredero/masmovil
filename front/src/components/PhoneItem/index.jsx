import React, { Component, PropTypes } from "react";
import {
  Card,
  CardMedia,
  CardTitle
} from "material-ui/Card";
import IconButton from 'material-ui/IconButton';
import PhoneDetailComponent from '../PhoneDetailComponent';
import { KeyboardArrowDown, KeyboardArrowUp } from 'material-ui-icons';

class PhoneItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showDetail: false
    }
  }
  // Show/Hide detail of card
  toggleDetail = () => {
    this.setState({ showDetail: !this.state.showDetail });
  }

  render() {
    const { data: { photo, title, company }, modeView } = this.props;
    return (
      <li className={`${modeView ? '': 'compact'} phoneItem`}>
        <Card
          onClick={this.toggleDetail}
          className="phoneItem__card"
        >
          <CardMedia>
            <img src={photo} alt={title} />
          </CardMedia>
          <div className="phoneItem__card__boxTitle">
            <CardTitle title={title} subtitle={company} />
            { this.state.showDetail ? <KeyboardArrowDown /> : <KeyboardArrowUp /> }
          </div>
            { this.state.showDetail && <PhoneDetailComponent {...this.props.data} /> }
        </Card>
      </li>
    );
  }
}

PhoneItem.PropTypes = {
    data: PropTypes.Array,
    modeView: PropTypes.bool
}

export default PhoneItem;
