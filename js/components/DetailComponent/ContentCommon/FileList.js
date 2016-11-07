import React from 'react';

class FileList extends React.Component{
    render(){
        return(
            <div className="file-list">
                <span className="file-url"></span>
                <div className="file-info">
                    <p className="file-info-name">{this.props.data.originalFileName}{this.props.data.fileCategory}</p>
                    <p className="file-info-detail">
                        <span>{this.props.data.fileSize}</span>
                        <span className="padding20">{this.props.data.fileCategory}</span>
                        <span>上传人：{this.props.data.contactsName}</span>
                    </p>
                </div>
                <span className="file-download">
                    <a href={this.props.data.filePath}  download={this.props.data.originalFileName}>下载</a>
                </span>
            </div>
        )
    }
}

export default FileList;
