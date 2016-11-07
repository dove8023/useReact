import React from 'react';

class ListItem extends React.Component{
    render(){

        let statusObj = {};
        switch (this.props.orderStatu / 1){
            case 1:
                statusObj = {
                    statusColor : "order-title-statu statu-bgcolor-green",
                    statusText : "无讼顾问确认中",
                    textColor : "order-content-status font-color-green",
                };
                break;
            case 2:
                statusObj = {
                    statusColor : "order-title-statu statu-bgcolor-yellow",
                    statusText : "服务进行中",
                    textColor : "order-content-status font-color-yellow",
                };
                break;
            case 3:
                statusObj = {
                    statusColor : "order-title-statu statu-bgcolor-purple",
                    statusText : "待确认完成",
                    textColor : "order-content-status font-color-purple",
                };
                break;  
            case 4:
                statusObj = {
                    statusColor : "order-title-statu statu-bgcolor-red",
                    statusText : "已取消",
                    textColor : "order-content-status font-color-red",
                };
                break;
            case 5:
                statusObj = {
                    statusColor : "order-title-statu statu-bgcolor-grey",
                    statusText : "已完成",
                    textColor : "order-content-status font-color-grey",
                    completeDate: this.props.data.completeDate
                };
                break;
        }
        return(
            <div className="list-item" key={this.props.data.id}>                        
                <div className="list-item-right">
                    <span>查看订单</span>
                </div>
                <div className="list-item-left">
                    <p className="order-title">
                        <span className={statusObj.statusColor}></span>
                        <span className="order-name">{this.props.data.requirementType}{this.props.data.contactsName}</span>
                    </p>
                    <p className="order-content">
                        <span className="
                        ">{this.props.data.createDate}</span>
                        <span className="order-bull">&bull;</span>
                        <span className={statusObj.textColor}>{statusObj.statusText}&nbsp;&nbsp;{statusObj.completeDate}</span>
                    </p>
                </div>
            </div>
        );
    }
}

export default ListItem;


