import { useState, useEffect } from "react";
import { Typography } from 'antd';
import Cookies from "js-cookie";

export default function Inicio (){
    const userId = Cookies.get('userId')
    const [ user , setUser ] = useState();
    const { Title } = Typography;

const getUser = async (userId) => { 
    const URL = 'http://localhost:4000/usuario/' + userId;
    const param = { method: 'GET', headers: {'Content-Type': 'application/json' }}
    const result = await (await fetch(URL, param)).json();
    setUser(result)
}

useEffect(() => {
    getUser(userId) 
}, [userId])
    return <h1>
                {user?.status === 200
                ? <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start'}}>
                    <Title level={1} style={{ textAlign: 'left', marginTop: 20 }}>
                    {"Olá " + user.usuario.nome + " :)" }
                    </Title>
                </div>
                : null
                }     
            </h1>
}