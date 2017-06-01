import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

/**
 * Кнопка создания нового телефонного номера
 * @param {Function} props.onCreate
 */
const TelCreate = (props) => {

    /**
     * Обработчик создание нового телефонного номера
     */
    const onCreate = () => props.onCreate();

    return (
        <FloatingActionButton
            mini={true}
            onTouchTap={onCreate}
        >
            <ContentAdd/>
        </FloatingActionButton>
    )
};

export default TelCreate;
