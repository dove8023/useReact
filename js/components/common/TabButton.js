import React from 'react';

class TabButton extends React.Component{
    render(){
        return(
            <div onClick={this.props.click} className={this.props.content.class} key={this.props.data.requirementStatus}>
                <p className="tab-button-count">{this.props.data.count}</p>
                <p className="tab-button-title">{this.props.content.text}</p>
            </div>
        );
    }
}

export default TabButton;