import * as React from 'react';
import {SafeAreaView, View, Text, TextInput, ScrollView, Alert, Image, TouchableOpacity } from 'react-native';
import styled from '@emotion/native';
import PropTypes from 'prop-types'
import Task from '../../../src/component/Task';
import IconButton from '../../../src/component/IconButton/IconButton';
import { Images } from '../../../src/images';




export default function MainList({navigation}){
  const [newTask, setNewTask] = React.useState('')
  const [tasks, setTasks] = React.useState({})

  Input.propTypes={
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    onSubmitEditing:PropTypes.func.isRequired
  };
  
  function AddTask(){
    const ID = Date.now().toString();
    const newTaskObject ={
      [ID]: {id: ID, text: newTask, completed:false}
    };
    setNewTask('');
    setTasks({...tasks, ...newTaskObject})
  }

  function HandleTextChange (text){
    setNewTask(text)
  }
  
  const ToggleTask = id => {
    const cureentTasks = Object.assign({},tasks);
    currentTasks[id]['completed'] = !currentTasks[id]['completed']
    setTasks(currentTasks)
  }
  
    return(
    <>
      <SafeArea>
        <Title_Wrapper>
        <AppTitle >Details Screen</AppTitle>
        <TouchableOpacity onPress={() => navigation.navigate('Calendar')}>
        <IconButton type={Images.Calendar} onPressOut={()=>navigation.navigate('Calendar')}/>
        </TouchableOpacity>
        </Title_Wrapper>
        <CardWrapper>
        <Input_Wrapper>
        <Input 
            placeholder='일정을 추가 해주세요...(30자 내외)' 
            placeholderTextColor={'#999'} 
            maxLength={30}
            autoCapitalize='none'
            autoCorrect={false}
            returnKeyType="done"
            value={newTask}
            onChangeText={HandleTextChange}
            onSubmitEditing={AddTask}
        />
      </Input_Wrapper>

      <ScrollView style={{flex:1}}>
        {Object.values(tasks)
        .reverse()
        .map(item => (
          <Task key={item.id} text = {item.text} />
        ))}
        </ScrollView>
        </CardWrapper>
      </SafeArea>
    </>
    )
}




const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: #394a8f;
  padding-left: 10px;
  padding-right: 10px;
`

const Title_Wrapper = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  border: 1px solid black;
`

const AppTitle = styled(Text)`
  color: white;
  font-size: 25px;
  margin-top: 30px;
  margin-bottom: 30px;
  font-weight: 300;
  text-align: center;
  justify-content: center;
  /* margin-right: 50px; */
`

const CardWrapper = styled(View)`
  background-color:#fff;
  flex: 1;
  border-radius: 10px 10px 0 0;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
`

const Input_Wrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  border-bottom-color: gray;
  border-bottom-width: 1px;
  margin-bottom: 10px;
  width: auto;
  /* border: 1px solid black; */
`

const Input = styled(TextInput)`
  width: auto;
  font-size: 15px;
  margin-right: 10px;
  /* border: 1px solid black; */
`
const Imagess = styled(Image)`
  width: 20px;
  height: 20px;
  
`
