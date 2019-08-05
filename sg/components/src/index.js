import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
        <ApprovalCard>
        <CommentDetail author="Priyanshu" timeAgo="Today at 4:45PM" texts="Hi" avatar={faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard>
        <CommentDetail author="Pulkit" timeAgo="Yesterdayy at 3:16PM" texts="Hello" avatar={faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard>
        <CommentDetail author="Rajneesh" timeAgo="Today at 1:10PM" texts="Wassup" avatar={faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard>
        <CommentDetail author="Eshu" timeAgo="Today at 7:00AM" texts="How u doin" avatar={faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard>
        <CommentDetail author="Sagar" timeAgo="Yesterday at 2:26PM" texts="Nice" avatar={faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard>
        <CommentDetail author="Golu" timeAgo="Today at 7:10PM" texts="Meeting You" avatar={faker.image.avatar()}/>
        </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));