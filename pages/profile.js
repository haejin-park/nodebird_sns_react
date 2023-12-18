import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from "next/head";
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
    const followingList = [{nickname:'겸댕이1'}, {nickname:'겸댕이2'}, {nickname:'겸댕이3'}];
    const followerList = [{ nickname : '귀요미1'}, {nickname:'귀요미2'}, {nickname:'귀요미3'}];
    return (
        <>
            <Head>
                <title>내 프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉 목록" data={followingList}/>
                <FollowList header="팔로워 목록" data={followerList}/>
            </AppLayout>    
        </>
    )
};

export default Profile;