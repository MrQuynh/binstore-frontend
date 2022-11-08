import React from 'react';
import ReactLoading from 'react-loading';
import { list } from './generic';
import './styles.css';

const Loading = () => (
    <div>
        {list.map((l) => (
            <div key={l.prop}>
                <ReactLoading type={l.prop} color="#fff" />
            </div>
        ))}
    </div>
);

export default Loading;
