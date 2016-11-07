import React from 'react';
import DetailHeader from './DetailComponent/DetailHeader.js';
import DetailContent from './DetailComponent/DetailContent.js';


let datas = {
    id: "订单id",
    orderNo: "订单序列号",
    contactsName: "需求提交人姓名",
    orderTitle: "订单名称",
    orderStatus: 1,
    createDate: "发起时间",
    promiseDuration: "预计完成时间",
    adviser: {
        id: "顾问id",
        name: "顾问姓名",
        imUrl: "顾问im连接",
        avatarUrl: "顾问头像连接"
    },
    lawyers: [
        {
            id: "律师id",
            mobileNumber: "手机号",
            name: "用户真实姓名"
        }
    ],
    completeDate: "完成时间",
    payment: "计费描述",
    requirementOrderFiles: [
        {
            id: "附件id",
            originalFileName: "文件名称",
            filePath: "文件路径",
            fileCategory: "文件类别",
            fileSize: "文件大小",
            contactsName: "需求提交人姓名",
            createDate: "创建时间"
        },
        {
            id: "附件id",
            originalFileName: "文件名称",
            filePath: "文件路径",
            fileCategory: "文件类别",
            fileSize: "文件大小",
            contactsName: "需求提交人姓名",
            createDate: "创建时间"
        },
        {
            id: "附件id",
            originalFileName: "文件名称",
            filePath: "文件路径",
            fileCategory: "文件类别",
            fileSize: "文件大小",
            contactsName: "需求提交人姓名",
            createDate: "创建时间"
        },
    ],
    lawyerSuggestion: "律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见律师意见",
    cancelReason: " 取消原因",
    requirementType: 101,
    adviserCompleteDate: "律师提交日期"
}




class DetailPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentIndex : 0
        }
    }

    render(){
        return(
            <div className="detail-page">
                <DetailHeader data={datas}/>
                <DetailContent data={datas}/>
            </div>
        )
    }
}



export default DetailPage;  