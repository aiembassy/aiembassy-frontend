import React from 'react';
import {
    ListItem,
    ListItemIcon,
    ListItemText,
    ListTitle,
    ListWrapper,
} from './List.styled';

interface IProps {
    title: string;
    list: string[];
}

const List: React.FC<IProps> = ({ title, list }) => {
    return (
        <ListWrapper>
            <ListTitle>{title}</ListTitle>
            {list?.map((item, index) => (
                <ListItem key={index}>
                    <ListItemIcon name="IconListItem" size={34} />
                    <ListItemText>{item}</ListItemText>
                </ListItem>
            ))}
        </ListWrapper>
    );
};

export default List;
