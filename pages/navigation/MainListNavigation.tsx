import * as React from 'react';
import {SafeAreaView, View, Text, TextInput, ScrollView } from 'react-native';
import styled from '@emotion/native';

export default function MainList(){
    return(
    <>
      <SafeArea>
        <AppTitle>Details Screen</AppTitle>
        <CardWrapper>
        <Input placeholder='일정을 추가 해주세요...(30자 내외)' maxLength={30}></Input>
        <ScrollView>
          <Text style={{fontSize:25}}>Todo List</Text>
        </ScrollView>
        </CardWrapper>
      </SafeArea>
    </>
    )
}


const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: #394a8f;
`

const AppTitle = styled(Text)`
  color: white;
  font-size: 36px;
  margin-top: 30px;
  margin-bottom: 30px;
  font-weight: 300;
  text-align: center;
`

const CardWrapper = styled(View)`
  background-color:#fff;
  flex: 1;
  border-radius: 10px 10px 0 0;
  margin-left: 10px;
  margin-right: 10px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
`

const Input = styled(TextInput)`
  width: 90%;
  font-size: 20px;
  border-bottom-color: gray;
  border-bottom-width: 1px;
  margin-bottom: 10px;
`