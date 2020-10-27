
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { isAuthenticated, signOut } from '../Auth/Helper';
import { getMeToken } from './Helper/PaymentHelper';

const PaymentB = ({
    products, 
    reload = undefined,
    setReload = (f) => f
}) => {
    const [info, setInfo] = useState({
        loading: false,
        success: false,
        clientToken: null,
        error: "",
        instance: {}
    })

    const userId = isAuthenticated && isAuthenticated().user.id;
    const token = isAuthenticated && isAuthenticated().token;

    const getToken = (userId, token) => {
        getMeToken(userId, token)
        .then((info) => {
            if (info.error) {
                setInfo({
                    ...info,
                    error: info.error
                });
                signOut(()=> {
                    return <Redirect to="/" />
                });

            }else {
                const clientToken = info.clientToken;
                setInfo({ clientToken })
            }
        })
    }

    return (
        <div>
            <h1>Payment B </h1>
        </div>
    )
}

export default PaymentB
