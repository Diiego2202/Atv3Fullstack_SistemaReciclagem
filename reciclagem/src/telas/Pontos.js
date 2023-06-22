import { useState, useEffect } from "react";
import {  Typography} from 'antd';
import Cookies from "js-cookie";

export default function PontosUsuario (){
    const userId = Cookies.get('userId')
    const [ user , setUser ] = useState();
    const { Title } = Typography;

const getUserPoints = async (userId) => { 
    const URL = 'http://localhost:4000/usuario/' + userId;
    const param = { method: 'GET', headers: {'Content-Type': 'application/json'} }
    const result = await (await fetch(URL, param)).json();
    setUser(result)
}

useEffect(() => {
    getUserPoints(userId) 
},[userId])

    return <h1>
                {user?.status === 200
                ? <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start'}}>
                    <Title level={1} style={{ textAlign: 'left', marginTop: 20}}>
                        { "Total de pontos: " + user.usuario.pontos }
                    </Title>
                </div>
                : <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start'}}>
                    <Title level={1} style={{ textAlign: 'left', marginTop: 20 }}>
                        { "Você não possui pontos :(" }
                    </Title>
                </div>
                }     
            </h1>
}