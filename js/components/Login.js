import React from 'react';
import Piganation from './common/Piganation.js';
import ListItem from './common/ListItem.js';
import OrderList from './OrderList.js';
import DATA from '../data.js';


class Login extends React.Component{
    constructor() {
        super();
        this.state = {
            data:{list:[]}
        }
    }
    typeChange(num){

        console.log("typeChange" , num)
        var currentData;
        switch(num/1){
            case 0:
                currentData = DATA[0];
                break;
            case 1:
                currentData = DATA[1];
                break;
            case 2:
                currentData = DATA[2];
                break;
            case 3:
                currentData = DATA[3];
                break;
            case 4:
                currentData = DATA[4];
                break;
            case 5:
                currentData = DATA[5];
                break;
        }

        this.setState({
            data : currentData
        })
    }
    say(){
        console.log("hello");
    }
    componentDidMount() {

        this.typeChange(2);
        this.setState({
            data : DATA[0]
        });
    }
    render(){
        return(<div>
                <OrderList fn={this.typeChange} statistics={DATA[0].statistics}>
                    <div>
                        <div className="list-content">
                            {this.state.data.list.map((item , index) => {
                                var orderStatu = item.orderStatus 
                                return (<ListItem key={index} data={item} orderStatu={orderStatu}></ListItem>)
                            })}
                        </div>
                        <Piganation/>
                    </div>
                    <div>
                        <div className="list-content">
                            {DATA[1].list.map((item , index) => {
                                var orderStatu = item.orderStatus 
                                return (<ListItem key={index} data={item} orderStatu={orderStatu}></ListItem>)
                            })}
                        </div>
                        <Piganation/>
                    </div>
                    <div>
                        <div className="list-content">
                            {DATA[2].list.map((item , index) => {
                                var orderStatu = item.orderStatus 
                                return (<ListItem key={index} data={item} orderStatu={orderStatu}></ListItem>)
                            })}
                        </div>
                        <Piganation/>
                    </div>
                    <div>
                        <div className="list-content">
                            {DATA[3].list.map((item , index) => {
                                var orderStatu = item.orderStatus 
                                return (<ListItem key={index} data={item} orderStatu={orderStatu}></ListItem>)
                            })}
                        </div>
                        <Piganation/>
                    </div>
                    <div>
                        <div className="list-content">
                            {DATA[4].list.map((item , index) => {
                                var orderStatu = item.orderStatus 
                                return (<ListItem key={index} data={item} orderStatu={orderStatu}></ListItem>)
                            })}
                        </div>
                        <Piganation/>
                    </div>
                    <div>
                        <div className="list-content">
                            {DATA[5].list.map((item , index) => {
                                var orderStatu = item.orderStatus 
                                return (<ListItem key={index} data={item} orderStatu={orderStatu}></ListItem>)
                            })}
                        </div>
                        <Piganation/>
                    </div>
                </OrderList>
            </div>);
    }
}

export default Login;  