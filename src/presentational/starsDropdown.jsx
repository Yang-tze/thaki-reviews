import React from 'react';
import Portal from 'react-redux';
import StarRatingComponent from 'react-star-rating-component';
import { Drop } from 'tether-drop';

class StarsDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drop: false,
    };
    this.myRef = React.createRef();
    console.log('starsConstructed');
  }

  componentDidMount() {
    console.log('starsMounted');
    // this.drop = new Drop({
    //   target: this.target,
    //   content: this.content,
    //   position: 'bottom center',
    //   classes: 'drop-theme-hubspot-popovers',
    //   openOn: undefined,
    // });

    // if (this.state.open) {
    //   this.drop.open();
    // }
  }

  // componentWillUnmount() {
  //   this.drop.destroy();
  // }

  // _refTarget = (ref) => {
  //   this.target = ref;
  // };

  // _refContent = (ref) => {
  //   this.content = ref;
  // };

  componentWillMount() {
    console.log('starsMounting')
  }

  onMouseOver() {
    console.log('mouseOver');
    // // this.drop.open();
    // const MyDropContext = Drop.createContext({
    //   classPrefix: 'my-drop'
    // });
    
    // const drop = new MyDropContext({
    //   target: document.querySelector('#widget'),
    //   content: 'Welcome to my new Drop context!'
    // });
  }

  // onMouseLeave() {
  //   this.drop.close();
  // }


  render() {
    return (
      <div class="my-drop-target" ref={this._refTarget}>
        <StarRatingComponent
          name="aggregate"
          starCount={5}
          value={this.props.rating}
          // onMouseOver={this.onMouseOver.bind(this)}
          onStarHover={() => {}}
        />
        <Portal isOpened={true}>
          <div ref={this._refContent}>
            {'I\'m the drop content!'}
          </div>
        </Portal>
      </div>
    );
  }
};

export default StarsDropdown;
