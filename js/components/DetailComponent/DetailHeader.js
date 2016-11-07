import React from 'react';

class DetailHeader extends React.Component{
    render(){
        return (
            <div className="detail-header">
                <span>{this.props.data.requirementType}</span>
                <span>{this.props.data.orderTitle}</span>
                <span></span>
            </div>
        )

        
    }
}

export default DetailHeader;