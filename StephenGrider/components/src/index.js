import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
        <CommentDetail author="Priyanshu" timeAgo="Today at 4:45PM" texts="Hi" avatar={faker.image.avatar()}/>
        <CommentDetail author="Pulkit" timeAgo="Yesterdayy at 3:16PM" texts="Hello" avatar={faker.image.avatar()}/>
        <CommentDetail author="Rajneesh" timeAgo="Today at 1:10PM" texts="Wassup" avatar={faker.image.avatar()}/>
        <CommentDetail author="Eshu" timeAgo="Today at 7:00AM" texts="How u doin" avatar={faker.image.avatar()}/>
        <CommentDetail author="Sagar" timeAgo="Yesterday at 2:26PM" texts="Nice" avatar={faker.image.avatar()}/>
        <CommentDetail author="Golu" timeAgo="Today at 7:10PM" texts="Meeting You" avatar={faker.image.avatar()}/>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));