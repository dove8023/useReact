import React from 'react';
import FileList from './ContentCommon/FileList.js'


class DetailContent extends React.Component{
    render(){
        return (
        <div className="detail-content">
            <div className="detail-content-header">
                <div className="order-number">订单号：{this.props.data.orderNo}</div>
                <div className="order-date">
                    <p className="first-color">律师提交日期：{this.props.data.adviserCompleteDate}</p>
                    <p className="red-tips-color">订单将在7个自然日后自动确认完成</p>
                </div>
                <div className="confirm-button">
                    <button className="common-button">确认完成本次服务</button>
                </div>
            </div>
            <ul className="detail-content-list">
                <li>
                    <span className="list-title">服务状态</span>
                    <span>{this.props.data.orderStatus}</span>
                </li>
                <li>
                    <span className="list-title">需求发起人</span>
                    <span>{this.props.data.contactsName}</span>
                </li>
                <li>
                    <span className="list-title">发起时间</span>
                    <span>{this.props.data.createDate}</span>
                </li>
                <li>
                    <span className="list-title">无讼顾问</span>
                    <span>{this.props.data.adviser.name}</span>
                </li>
                <li>
                    <span className="list-title">预计完成时间</span>
                    <span>{this.props.data.promiseDuration}</span>
                </li>
                <li>
                    <span className="list-title">服务律师</span>
                    <span>{this.props.data.lawyers[0].name}</span>
                    <span>{this.props.data.lawyers[0].mobileNumber}</span>
                </li>
                <li>
                    <span className="list-title">确认完成时间</span>
                    <span>{this.props.data.completeDate}</span>
                </li>
                <li>
                    <span className="list-title">计费</span>
                    <span>{this.props.data.payment}</span>
                </li>
            </ul>    
            <div className="detail-content-files">
                <p className="file-title second-color">上传附件</p>
                {this.props.data.requirementOrderFiles.map((item, index) => {
                    return (
                        <FileList key={index} data={item}></FileList>
                    )
                })}
            </div>
            <div className="detail-content-advice">
                <p className="advice-title second-color">律师意见</p>
                <p className="advice-text first-color">{this.props.data.lawyerSuggestion}</p>
            </div>
        </div>
        )
    }
}


export default DetailContent;

