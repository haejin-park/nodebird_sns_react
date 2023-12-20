import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {Card, Avatar, Button} from 'antd';
import styled from 'styled-components';
import {logoutAction} from '../reducers/user';
const ButtonWrapper = styled(Button)`
    display: block;
    margin-left: auto;
    margin-right: auto;
`
const UserProfile = () => {
    const dispatch = useDispatch();
    const onLogout = useCallback(()=>{
        dispatch(logoutAction());
    }, []);
    return (
        <Card
            actions={[
                <div key="twit">짹쨱<br />0</div>,
                <div key="followings">팔로잉<br />0</div>,
                <div key="followers">팔로워<br />0</div>
            ]}
        >
            <Card.Meta 
                avatar={<Avatar>LH</Avatar>}
                title="luckyhaejin"
            />
            <ButtonWrapper onClick={onLogout}>로그아웃</ButtonWrapper>
        </Card>
    );
}
export default UserProfile;