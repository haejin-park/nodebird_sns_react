import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import styled from 'styled-components';

import UserProfile from "../components/UserProfile";
import LoginForm from "../components/LoginForm"
import {useSelector} from 'react-redux';
const SearchInput = styled(Input.Search)`
    vertical-align:middle;
`;

const AppLayout = ({ children }) => {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    return(
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>    
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn? <UserProfile/> : <LoginForm/>}
                </Col>
                   {children}
                <Col xs={24} md={6}>
                    <a href="https://www.notion.so/3657aede348a4aa49de998ab73392cc2?pvs=4" target="_blank" rel="noreferer noopener">Made by Haejin</a>
                </Col>
            </Row>
        </div>
    );
};

AppLayout.propTypes = {
    children:PropTypes.node.isRequired,
};

export default AppLayout;