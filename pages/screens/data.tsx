import React from 'react';
import {Button} from 'react-native'
import firestore from '@react-native-firebase/firestore'
import type {Node} from 'react';

const Data: () => Node = () => {
    function createToDo () {
        firestore()
            .collection ('CreateToDo')
            .add ({
                title: '밥먹기',
                content: '셀러드먹기',
                place: '우리집',
                ranking: '2순위',
            })
            .then((res) => {
                console.log(res)
                console.log('User added!');
              }).catch(error=>console.log(error))
    }
    
    return <Button title = "CreateTodo보내기" onPress={createToDo}/>
      
   
}

export default Data