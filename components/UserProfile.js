import React, {useCallback} from 'react';
import {Card, Avatar, Button} from 'antd';
import styled from 'styled-components';
const ButtonWrapper = styled(Button)`
    display: block;
    margin-left: auto;
    margin-right: auto;
`
const UserProfile = ({setIsLoggedIn}) => {
    const onLogout = useCallback(()=>{
        setIsLoggedIn(false);
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