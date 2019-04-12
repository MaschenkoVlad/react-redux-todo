//точка входа в приложение 
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducers from './reducers/indexReducers';

const store = createStore(reducers)
// создание хранилища
// принимает один обязательный аргумент (функцию reducer)
// Создаем хранилище Redux которое хранит состояние вашего приложения.
// Его API - { subscribe, dispatch, getState }.
// Вы можете использовать subscribe() для обновления UI в ответ на изменения состояния.

render (
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root')
)

// Provider - Благодаря этому компоненту, мы сможем получать необходимые данные из store 


// 1 - Получать текущее состояние хранилища
// 2 - Передавать действие в качестве аргумента к редьюсеру, чтобы обновить состояние в хранилище
// 3 - Подписаться на события изменения хранилища